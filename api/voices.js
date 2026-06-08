// Vercel Serverless Function — Classless の note 記事一覧を返す。
// note は CORS を許可しないためサーバー側で RSS を取得し、JSON で返す。
// 記事が0件なら items:[] を返す（フロント側でセクションを非表示にする）。
//
// 取得元: https://note.com/classlessllc_731/rss
// キャッシュ: Vercel CDN に1時間キャッシュ（note更新は稀なので負荷とレイテンシを抑制）。

const NOTE_USER = 'classlessllc_731'
const RSS_URL = `https://note.com/${NOTE_USER}/rss`
const MAX_ITEMS = 9

function pick(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))
  if (!m) return ''
  return m[1].replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim()
}

function stripHtml(html) {
  return html
    .replace(/<a[^>]*>続きをみる<\/a>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// 記事ページから og:image（見出し画像）をベストエフォートで取得。
async function fetchOgImage(url) {
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), 4000)
    const res = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'Mozilla/5.0' } })
    clearTimeout(t)
    if (!res.ok) return null
    const html = await res.text()
    const m =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)
    return m ? m[1] : null
  } catch {
    return null
  }
}

export default async function handler(req, res) {
  try {
    const rssRes = await fetch(RSS_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!rssRes.ok) {
      res.status(200).json({ items: [], source: RSS_URL, error: `rss ${rssRes.status}` })
      return
    }
    const xml = await rssRes.text()
    const blocks = xml.match(/<item>[\s\S]*?<\/item>/gi) || []

    let items = blocks.slice(0, MAX_ITEMS).map((b) => {
      const desc = pick(b, 'description')
      return {
        title: pick(b, 'title'),
        link: pick(b, 'link'),
        pubDate: pick(b, 'pubDate'),
        excerpt: stripHtml(desc).slice(0, 90),
      }
    })

    // 見出し画像を並列取得（取れなければ image:null → フロントでグラデ表示）
    const images = await Promise.all(items.map((it) => fetchOgImage(it.link)))
    items = items.map((it, i) => ({ ...it, image: images[i] }))

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    res.status(200).json({ items, source: RSS_URL })
  } catch (e) {
    res.status(200).json({ items: [], error: String((e && e.message) || e) })
  }
}
