import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const RECIPIENT = 'yuta.maruyama@classless.jp'
const MAX_BODY_BYTES = 8192
const PURPOSE = '資料提供およびお問い合わせへの対応'
const PDF_PATH = join(process.cwd(), 'private', 'materials', 'axel-service-guide.pdf')

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function allowedOrigin(req, env) {
  const origin = req.headers?.origin
  if (!origin) return true
  const host = req.headers?.host
  if (origin === 'https://www.classless.jp' || origin === 'https://classless.jp') return true
  if (host && origin === `https://${host}`) return true
  return env.NODE_ENV !== 'production' && /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host || '') && origin === `http://${host}`
}

// Dependencies are injectable so validation and email outcomes can be tested without sending mail.
export function createMaterialsHandler({ readPdf = () => readFile(PDF_PATH), send = (...args) => fetch(...args), env = process.env, now = () => new Date() } = {}) {
  return async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store, max-age=0')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    const reject = (status, error) => res.status(status).json({ ok: false, error })
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      return reject(405, 'method_not_allowed')
    }
    if (!allowedOrigin(req, env)) return reject(403, 'invalid_origin')
    if (!/^application\/json(?:\s*;|$)/i.test(req.headers?.['content-type'] || '')) return reject(415, 'invalid_content_type')
    const declaredLength = req.headers?.['content-length']
    if (declaredLength && Number(declaredLength) > MAX_BODY_BYTES) return reject(413, 'request_too_large')

    let body
    try {
      const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
      if (!raw) return reject(400, 'invalid_request')
      if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) return reject(413, 'request_too_large')
      body = JSON.parse(raw)
    } catch {
      return reject(400, 'invalid_request')
    }
    if (!body || Array.isArray(body) || typeof body !== 'object') return reject(400, 'invalid_request')
    if (body.consent !== true) return reject(400, 'consent_required')
    if (body.website !== undefined && (typeof body.website !== 'string' || body.website.trim())) return reject(400, 'invalid_request')
    const fields = {}
    for (const [key, max] of [['name', 100], ['company', 200], ['email', 254]]) {
      if (typeof body[key] !== 'string') return reject(400, 'invalid_fields')
      const value = body[key].trim()
      if (!value || value.length > max || /[\u0000-\u001f\u007f]/.test(value)) return reject(400, 'invalid_fields')
      fields[key] = value
    }
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email)) return reject(400, 'invalid_email')
    if (!env.RESEND_API_KEY) return reject(503, 'service_unavailable')

    // Verify the private asset before recording the request; never use a public file URL.
    let pdf
    try {
      pdf = await readPdf()
      if (!Buffer.isBuffer(pdf) || pdf.subarray(0, 5).toString() !== '%PDF-') throw new Error('invalid_pdf')
    } catch {
      return reject(503, 'materials_unavailable')
    }

    const rows = [
      ['お名前', fields.name], ['会社名・団体名', fields.company], ['メールアドレス', fields.email],
      ['資料', 'アクセル事業資料'], ['同意', 'プライバシーポリシーに同意済み'],
      ['利用目的', PURPOSE], ['受付日時（UTC）', now().toISOString()],
    ]
    const html = `<div style="font-family:sans-serif;line-height:1.8"><h2>アクセルの資料請求がありました</h2><table>${rows.map(([label, value]) => `<tr><th style="text-align:left;padding:8px">${escapeHtml(label)}</th><td style="padding:8px">${escapeHtml(value)}</td></tr>`).join('')}</table></div>`
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000)
    try {
      const response = await send('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.MAIL_FROM || 'Classless 資料請求 <contact@classless.jp>',
          to: [RECIPIENT], reply_to: fields.email,
          subject: `【アクセル資料請求】${fields.company} / ${fields.name}`,
          html, text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
        }),
        signal: controller.signal,
      })
      if (!response.ok) return reject(502, 'request_failed')
      const receipt = await response.json().catch(() => null)
      if (!receipt || typeof receipt.id !== 'string' || !receipt.id) return reject(502, 'request_failed')
    } catch {
      return reject(502, 'request_failed')
    } finally {
      clearTimeout(timeout)
    }

    // Only an acknowledged lead notification can unlock the file response.
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="axel-service-guide.pdf"')
    res.setHeader('Content-Length', String(pdf.length))
    return res.status(200).send(pdf)
  }
}

export default createMaterialsHandler()
