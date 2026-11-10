import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { createMaterialsHandler } from '../api/axel-materials.js'

const valid = { name: '検証 太郎', company: '検証会社', email: 'test@example.com', consent: true, website: '' }
const pdf = await readFile(new URL('../private/materials/axel-service-guide.pdf', import.meta.url))
const expectedHash = '415f6b3cee1c4968766eb19f0e2ab1beb2639704b0b9e7e8ec74d7b5f38ba3b3'

function response() {
  return {
    headers: {}, statusCode: null, body: null,
    setHeader(key, value) { this.headers[key.toLowerCase()] = value },
    status(code) { this.statusCode = code; return this },
    json(body) { this.headers['content-type'] = 'application/json'; this.body = body; return this },
    send(body) { this.body = body; return this },
  }
}
async function call({ body = valid, method = 'POST', headers = {}, env = { RESEND_API_KEY: 'test-key', NODE_ENV: 'production' }, send, readPdf } = {}) {
  const messages = []
  const handler = createMaterialsHandler({
    env,
    readPdf: readPdf || (async () => pdf),
    send: send || (async (url, options) => { messages.push({ url, options }); return { ok: true, json: async () => ({ id: 'mock-receipt' }) } }),
    now: () => new Date('2026-11-10T01:00:00Z'),
  })
  const res = response()
  await handler({ method, body, headers: { 'content-type': 'application/json', host: 'www.classless.jp', origin: 'https://www.classless.jp', ...headers } }, res)
  return { res, messages }
}

test('only a recorded, consented request receives the unchanged private PDF', async () => {
  const { res, messages } = await call({ body: { ...valid, name: ' <test & user> ' } })
  assert.equal(res.statusCode, 200)
  assert.equal(res.headers['content-type'], 'application/pdf')
  assert.match(res.headers['cache-control'], /no-store/)
  assert.match(res.headers['content-disposition'], /attachment/)
  assert.equal(res.headers['x-content-type-options'], 'nosniff')
  assert.equal(createHash('sha256').update(res.body).digest('hex'), expectedHash)
  assert.equal(messages.length, 1)
  assert.equal(messages[0].url, 'https://api.resend.com/emails')
  const mail = JSON.parse(messages[0].options.body)
  assert.deepEqual(mail.to, ['yuta.maruyama@classless.jp'])
  assert.equal(mail.reply_to, valid.email)
  assert.match(mail.html, /&lt;test &amp; user&gt;/)
  assert.match(mail.text, /同意済み/)
  assert.match(mail.text, /2026-11-10T01:00:00.000Z/)
  assert.match(mail.text, /資料提供およびお問い合わせへの対応/)
})

test('GET and other methods never unlock the PDF', async () => {
  for (const method of ['GET', 'HEAD', 'PUT', 'OPTIONS']) {
    const { res, messages } = await call({ method })
    assert.equal(res.statusCode, 405)
    assert.equal(res.headers.allow, 'POST')
    assert.equal(messages.length, 0)
    assert.equal(Buffer.isBuffer(res.body), false)
  }
})

test('required fields, types, consent, size and bot field are validated before mail', async () => {
  const invalid = [
    {}, null, [], 'not-json', { ...valid, consent: false }, { ...valid, consent: 'true' },
    { ...valid, name: '' }, { ...valid, company: '  ' }, { ...valid, email: 'no-email' },
    { ...valid, name: {} }, { ...valid, company: 12 }, { ...valid, email: ['a@b.com'] },
    { ...valid, name: 'x'.repeat(101) }, { ...valid, company: 'x'.repeat(201) },
    { ...valid, email: 'a'.repeat(250) + '@b.com' }, { ...valid, name: 'a\nb' },
    { ...valid, website: 'spam.example' }, { ...valid, website: [] },
  ]
  for (const body of invalid) {
    const { res, messages } = await call({ body })
    assert.equal(res.statusCode, 400, JSON.stringify(body))
    assert.equal(messages.length, 0)
    assert.equal(Buffer.isBuffer(res.body), false)
  }
  for (const args of [{ body: { ...valid, padding: 'x'.repeat(9000) } }, { headers: { 'content-length': '9000' } }]) {
    const { res, messages } = await call(args)
    assert.equal(res.statusCode, 413)
    assert.equal(messages.length, 0)
  }
})

test('rejects cross-origin/form posts and accepts same deployment origin', async () => {
  assert.equal((await call({ headers: { origin: 'https://evil.example' } })).res.statusCode, 403)
  assert.equal((await call({ headers: { 'content-type': 'application/x-www-form-urlencoded' } })).res.statusCode, 415)
  assert.equal((await call({ headers: { origin: 'https://preview-example.vercel.app', host: 'preview-example.vercel.app' } })).res.statusCode, 200)
})

test('configuration and file failures do not send mail or disclose a PDF', async () => {
  for (const args of [
    { env: {} },
    { readPdf: async () => { throw new Error('local secret file path') } },
    { readPdf: async () => Buffer.from('not a PDF') },
  ]) {
    const { res, messages } = await call(args)
    assert.equal(res.statusCode, 503)
    assert.equal(messages.length, 0)
    assert.equal(Buffer.isBuffer(res.body), false)
    assert.doesNotMatch(JSON.stringify(res.body), /secret|test@example/)
  }
})

test('provider rejection, malformed acknowledgement and network failure never unlock', async () => {
  for (const send of [
    async () => ({ ok: false, text: async () => 'provider private data' }),
    async () => ({ ok: true, json: async () => ({}) }),
    async () => ({ ok: true, json: async () => { throw new Error('invalid JSON') } }),
    async () => { throw new Error('provider private data') },
  ]) {
    const { res } = await call({ send })
    assert.equal(res.statusCode, 502)
    assert.deepEqual(res.body, { ok: false, error: 'request_failed' })
    assert.equal(Buffer.isBuffer(res.body), false)
  }
})

test('private asset is not public and deployment config includes it only in the function', async () => {
  await assert.rejects(readFile(new URL('../public/materials/axel-service-guide.pdf', import.meta.url)), { code: 'ENOENT' })
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url)))
  assert.equal(config.functions['api/axel-materials.js'].includeFiles, 'private/materials/axel-service-guide.pdf')
  assert.equal(config.redirects.find(item => item.source === '/axel'), undefined)
  assert.equal(config.redirects.find(item => item.source === '/materials/axel-service-guide.pdf').destination, '/axel#materials')
})

test('the production file reader resolves the private PDF from the project root', async () => {
  const handler = createMaterialsHandler({
    env: { RESEND_API_KEY: 'test-key' },
    send: async () => ({ ok: true, json: async () => ({ id: 'mock-receipt' }) }),
  })
  const res = response()
  await handler({ method: 'POST', body: valid, headers: { 'content-type': 'application/json' } }, res)
  assert.equal(res.statusCode, 200)
  assert.equal(createHash('sha256').update(res.body).digest('hex'), expectedHash)
})
