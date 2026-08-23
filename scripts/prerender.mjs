import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const dist = join(root, 'dist')
const siteUrl = 'https://www.classless.jp'
const siteName = '合同会社Classless'
const defaultImage = `${siteUrl}/ogp-workflow.png`
const organizationLogo = `${siteUrl}/assets/logo-classless-stacked-dark.png`
const template = await readFile(join(dist, 'index.html'), 'utf8')

const routeMeta = [
  ['/', '合同会社Classless｜AIで、業務の進め方を変える', '合同会社Classlessは、業務の棚卸し・手順設計・実務代行・自動化までを一続きで支援します。AI×BPO「アクセル」と成果報酬型営業支援「リートス」を提供しています。', '2026-08-22', '1.0'],
  ['/axel', 'アクセル｜業務設計から実務・自動化まで伴走するAI×BPO', 'アクセルは、経理・人事・営業事務などの業務を棚卸しし、手順化したうえで実務代行と自動化を進めるAI×BPOサービスです。', '2026-08-22', '0.9'],
  ['/leadtoss', 'リートス｜決裁者との商談機会をつくる営業支援', 'リートスは、LinkedInを活用して対象企業の決裁者との接点をつくる、完全成果報酬型の営業支援サービスです。', '2026-08-22', '0.9'],
  ['/business', '事業内容｜合同会社Classless', '合同会社Classlessが提供する、AI×BPO「アクセル」と成果報酬型営業支援「リートス」の支援内容をご紹介します。', '2026-08-22', '0.7'],
  ['/philosophy', '私たちについて｜合同会社Classless', '合同会社Classlessのミッション、会社概要、事業に対する考え方をご紹介します。', '2026-08-22', '0.7'],
  ['/contact', 'お問い合わせ｜合同会社Classless', '業務の棚卸し、BPO、自動化、営業支援に関するご相談はこちらから。現在の業務や課題が整理できていない段階でもご相談いただけます。', '2026-08-22', '0.6'],
  ['/blog', '業務改善ナレッジ｜給与計算・業務フロー・n8n自動化｜Classless', '給与計算の業務設計、業務フローの作り方、n8nを使った自動化など、現場でそのまま使える業務改善の手順とチェックポイントを紹介します。', '2026-08-22', '0.9'],
  ['/privacy', 'プライバシーポリシー｜合同会社Classless', '合同会社Classlessのプライバシーポリシーです。', '2026-07-02', '0.3'],
  ['/terms', '利用規約｜合同会社Classless', '合同会社Classlessのサービス利用規約です。', '2026-07-02', '0.3'],
  ['/tokushoho', '特定商取引法に基づく表記｜合同会社Classless', '合同会社Classlessの特定商取引法に基づく表記です。', '2026-07-02', '0.3'],
]

const articleDir = join(root, 'src', 'blog', 'articles')
const files = (await readdir(articleDir)).filter((name) => name.endsWith('.js')).sort()
const articles = []
for (const file of files) {
  const { article } = await import(`${pathToFileURL(join(articleDir, file)).href}?v=${Date.now()}`)
  if (article) articles.push({ updatedAt: article.date, ...article })
}
articles.sort((a, b) => String(b.date).localeCompare(String(a.date)))

const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
const inline = (value) => esc(value).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
const iso = (date) => String(date || '').replaceAll('.', '-')

function renderBlock(block, index) {
  if (block.t === 'lead') return `<p class="lead">${inline(block.text)}</p>`
  if (block.t === 'h2') return `<h2 id="section-${index}">${esc(block.text)}</h2>`
  if (block.t === 'h3') return `<h3>${esc(block.text)}</h3>`
  if (block.t === 'p') return `<p>${inline(block.text)}</p>`
  if (block.t === 'ul' || block.t === 'ol') return `<${block.t}>${block.items.map((item) => `<li>${inline(item)}</li>`).join('')}</${block.t}>`
  if (block.t === 'table') return `<table><thead><tr>${block.head.map((cell) => `<th>${esc(cell)}</th>`).join('')}</tr></thead><tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`
  if (block.t === 'callout') return `<aside><strong>${esc(block.title)}</strong><p>${inline(block.text)}</p></aside>`
  if (block.t === 'refs') return `<section><h2>${esc(block.title || '参考リンク')}</h2><ul>${block.items.map((item) => `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`).join('')}</ul></section>`
  return ''
}

function articleHtml(article) {
  const credits = [article.author ? `著者：${esc(article.author)}` : '', article.reviewer ? `監修：${esc(article.reviewer)}` : ''].filter(Boolean)
  return `<main><article><nav><a href="/">ホーム</a> / <a href="/blog">業務改善ナレッジ</a></nav><p>${esc(article.category)}</p><h1>${esc(article.title)}</h1><p>公開日：<time datetime="${iso(article.date)}">${esc(article.date)}</time>　更新日：<time datetime="${iso(article.updatedAt)}">${esc(article.updatedAt)}</time></p>${credits.length ? `<p>${credits.join('　')}</p>` : ''}${article.blocks.map(renderBlock).join('')}</article></main>`
}

function breadcrumb(path, title, isArticle = false) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: `${siteUrl}/` }]
  if (isArticle) items.push({ '@type': 'ListItem', position: 2, name: '業務改善ナレッジ', item: `${siteUrl}/blog` }, { '@type': 'ListItem', position: 3, name: title })
  else items.push({ '@type': 'ListItem', position: 2, name: title.split('｜')[0] })
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }
}

function inject({ path, title, description, body, jsonLd = [], noindex = false, type = 'website' }) {
  const canonical = `${siteUrl}${path === '/' ? '/' : path}`
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/, `<meta name="description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta name="robots" content="[^"]*"\s*\/>/, `<meta name="robots" content="${noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}" />`)
    .replace(/<meta name="googlebot" content="[^"]*"\s*\/>/, `<meta name="googlebot" content="${noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}" />`)
    .replace(/<meta property="og:type" content="[^"]*"\s*\/>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${esc(title)}" />`)
    .replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace('<meta name="twitter:card" content="summary_large_image" />', `<meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${esc(title)}" /><meta name="twitter:description" content="${esc(description)}" />`)
    .replace('</head>', `${jsonLd.map((data) => `<script type="application/ld+json" data-classless-jsonld="true">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`).join('')}</head>`)
    // Keep the first-paint shell and place crawlable/no-JS content beside it.
    // JavaScript hides this copy before first paint; React replaces the entire
    // root once the application bundle is ready.
    .replace('<div class="seo-prerender"></div>', `<div class="seo-prerender">${body}</div>`)
  return html
}

async function emit(path, html) {
  if (path === '/') return writeFile(join(dist, 'index.html'), html)
  const relative = path.replace(/^\//, '')
  const htmlFile = join(dist, `${relative}.html`)
  await mkdir(dirname(htmlFile), { recursive: true })
  await writeFile(htmlFile, html)
}

const organization = { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName, alternateName: 'Classless', url: `${siteUrl}/`, logo: organizationLogo, founder: { '@type': 'Person', name: '丸山 侑太' }, foundingDate: '2025-10-01' }
for (const [path, title, description] of routeMeta) {
  let body = `<main><h1>${esc(title.split('｜')[0])}</h1><p>${esc(description)}</p></main>`
  if (path === '/blog') body = `<main><h1>現場で使える、業務改善の設計ノート</h1><p>${esc(description)}</p><section><h2>記事一覧</h2>${articles.map((a) => `<article><h3><a href="/blog/${esc(a.slug)}">${esc(a.title)}</a></h3><p>${esc(a.excerpt)}</p></article>`).join('')}</section></main>`
  const jsonLd = path === '/' ? [organization, { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: siteName, publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'ja-JP' }] : [breadcrumb(path, title)]
  await emit(path, inject({ path, title, description, body, jsonLd }))
}

for (const article of articles) {
  const path = `/blog/${article.slug}`
  const title = `${article.title}｜Classless`
  const articleLd = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${siteUrl}${path}#article`, headline: article.title, description: article.excerpt, mainEntityOfPage: `${siteUrl}${path}`, datePublished: iso(article.date), dateModified: iso(article.updatedAt), ...(article.author ? { author: { '@type': article.authorType || 'Person', name: article.author } } : {}), publisher: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName, logo: { '@type': 'ImageObject', url: organizationLogo } }, image: [defaultImage], inLanguage: 'ja-JP', keywords: article.keywords }
  await emit(path, inject({ path, title, description: article.excerpt, body: articleHtml(article), jsonLd: [breadcrumb(path, title, true), articleLd], type: 'article' }))
}

const notFound = inject({ path: '/404', title: 'ページが見つかりません｜合同会社Classless', description: 'お探しのページは移動または削除された可能性があります。', body: '<main><h1>ページが見つかりません</h1><p><a href="/">トップページへ戻る</a></p></main>', noindex: true })
await writeFile(join(dist, '404.html'), notFound)

const sitemapItems = [
  ...routeMeta.map(([path, , , lastmod, priority]) => ({ path, lastmod, priority })),
  ...articles.map((article) => ({ path: `/blog/${article.slug}`, lastmod: iso(article.updatedAt), priority: '0.7' })),
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapItems.map(({ path, lastmod, priority }) => `  <url>\n    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${path === '/blog' || path.startsWith('/blog/') ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join('\n')}\n</urlset>\n`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
await writeFile(join(root, 'public', 'sitemap.xml'), sitemap)

console.log(`Prerendered ${routeMeta.length + articles.length} indexable routes and a 404 page.`)
