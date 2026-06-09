// Vercel Serverless Function — お問い合わせフォームの送信を受け取り、
// Resend 経由で contact@classless.jp にメール送信する。
//
// 必要な環境変数（Vercel → Project Settings → Environment Variables）:
//   RESEND_API_KEY  … Resend の API キー
// 送信元ドメイン classless.jp を Resend で検証しておくこと（未検証だと送信不可）。
// 依存パッケージは追加せず、Resend の REST API を fetch で直接叩く。

const TO = 'contact@classless.jp'
const FROM = process.env.MAIL_FROM || 'Classless お問い合わせ <contact@classless.jp>'

function esc(s) {
  return String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' })
    return
  }
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const message = (body.message || '').trim()
    const company = (body.company || '').trim()
    const tel = (body.tel || '').trim()
    const topic = (body.topic || '').trim()

    if (!name || !email || !message) {
      res.status(400).json({ ok: false, error: 'missing_required' })
      return
    }
    // ざっくりメール形式チェック
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ ok: false, error: 'invalid_email' })
      return
    }

    const key = process.env.RESEND_API_KEY
    if (!key) {
      res.status(500).json({ ok: false, error: 'mail_not_configured' })
      return
    }

    const rows = [
      ['お名前', name],
      ['会社名・団体名', company || '（未記入）'],
      ['メールアドレス', email],
      ['電話番号', tel || '（未記入）'],
      ['ご相談領域', topic || '（未選択）'],
    ]
    const html = `
      <div style="font-family:'Hiragino Kaku Gothic ProN',sans-serif;color:#1a1a1a;line-height:1.7;max-width:560px">
        <h2 style="font-size:18px;margin:0 0 16px">Webサイトからお問い合わせがありました</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          ${rows.map(([k, v]) => `
            <tr>
              <td style="padding:8px 12px;background:#f4f5f7;border:1px solid #e5e7eb;white-space:nowrap;font-weight:700;width:140px">${esc(k)}</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb">${esc(v)}</td>
            </tr>`).join('')}
        </table>
        <h3 style="font-size:14px;margin:20px 0 8px">お問い合わせ内容</h3>
        <div style="padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;white-space:pre-wrap;font-size:14px">${esc(message)}</div>
      </div>`

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `【お問い合わせ】${topic || 'ご相談'} / ${company || name}`,
        html,
      }),
    })

    if (!r.ok) {
      const detail = await r.text().catch(() => '')
      res.status(502).json({ ok: false, error: `resend_${r.status}`, detail: detail.slice(0, 300) })
      return
    }
    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(500).json({ ok: false, error: String((e && e.message) || e) })
  }
}
