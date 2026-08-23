const SITE_URL = 'https://www.classless.jp'
const SITE_NAME = '合同会社Classless'
const DEFAULT_IMAGE = `${SITE_URL}/ogp-workflow.png`
const ORGANIZATION_LOGO = `${SITE_URL}/assets/logo-classless-stacked-dark.png`

const ROUTE_META = {
  home: {
    path: '/',
    title: '合同会社Classless｜AIで、業務の進め方を変える',
    description: '合同会社Classlessは、業務の棚卸し・手順設計・実務代行・自動化までを一続きで支援します。AI×BPO「アクセル」と成果報酬型営業支援「リートス」を提供しています。',
  },
  axel: {
    path: '/axel',
    title: 'アクセル｜業務設計から実務・自動化まで伴走するAI×BPO',
    description: 'アクセルは、経理・人事・営業事務などの業務を棚卸しし、手順化したうえで実務代行と自動化を進めるAI×BPOサービスです。',
  },
  leadtoss: {
    path: '/leadtoss',
    title: 'リートス｜決裁者との商談機会をつくる営業支援',
    description: 'リートスは、LinkedInを活用して対象企業の決裁者との接点をつくる、完全成果報酬型の営業支援サービスです。',
  },
  business: {
    path: '/business',
    title: '事業内容｜合同会社Classless',
    description: '合同会社Classlessが提供する、AI×BPO「アクセル」と成果報酬型営業支援「リートス」の支援内容をご紹介します。',
  },
  philosophy: {
    path: '/philosophy',
    title: '私たちについて｜合同会社Classless',
    description: '合同会社Classlessのミッション、会社概要、事業に対する考え方をご紹介します。',
  },
  contact: {
    path: '/contact',
    title: 'お問い合わせ｜合同会社Classless',
    description: '業務の棚卸し、BPO、自動化、営業支援に関するご相談はこちらから。現在の業務や課題が整理できていない段階でもご相談いただけます。',
  },
  blog: {
    path: '/blog',
    title: '業務改善ナレッジ｜給与計算・業務フロー・n8n自動化｜Classless',
    description: '給与計算の業務設計、業務フローの作り方、n8nを使った自動化など、現場でそのまま使える業務改善の手順とチェックポイントを紹介します。',
  },
  privacy: {
    path: '/privacy', title: 'プライバシーポリシー｜合同会社Classless',
    description: '合同会社Classlessのプライバシーポリシーです。', noindex: false,
  },
  terms: {
    path: '/terms', title: '利用規約｜合同会社Classless',
    description: '合同会社Classlessのサービス利用規約です。', noindex: false,
  },
  tokushoho: {
    path: '/tokushoho', title: '特定商取引法に基づく表記｜合同会社Classless',
    description: '合同会社Classlessの特定商取引法に基づく表記です。', noindex: false,
  },
  notFound: {
    path: '/404', title: 'ページが見つかりません｜合同会社Classless',
    description: 'お探しのページは移動または削除された可能性があります。', noindex: true,
  },
}

function setMeta(selector, attrs, content) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value))
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = url
}

function replaceJsonLd(items) {
  document.head.querySelectorAll('script[data-classless-jsonld]').forEach((node) => node.remove())
  items.filter(Boolean).forEach((item) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.classlessJsonld = 'true'
    script.textContent = JSON.stringify(item).replace(/</g, '\\u003c')
    document.head.appendChild(script)
  })
}

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
    })),
  }
}

export function dateToIso(value) {
  return String(value || '').replaceAll('.', '-')
}

export function getSeoData(route, article, pathname = window.location.pathname) {
  if (route === 'article' && article) {
    const path = `/blog/${article.slug}`
    return {
      path,
      title: `${article.title}｜Classless`,
      description: article.excerpt,
      type: 'article',
      image: article.image || DEFAULT_IMAGE,
      article,
    }
  }
  if (route === 'article' || route === 'notFound') return { ...ROUTE_META.notFound, path: pathname }
  return ROUTE_META[route] || { ...ROUTE_META.notFound, path: pathname }
}

export function applySeo(route, article) {
  const data = getSeoData(route, article)
  const canonical = `${SITE_URL}${data.path === '/' ? '/' : data.path.replace(/\/+$/, '')}`
  const robots = data.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'

  document.title = data.title
  setCanonical(canonical)
  setMeta('meta[name="description"]', { name: 'description' }, data.description)
  setMeta('meta[name="robots"]', { name: 'robots' }, robots)
  setMeta('meta[name="googlebot"]', { name: 'googlebot' }, robots)
  setMeta('meta[property="og:type"]', { property: 'og:type' }, data.type || 'website')
  setMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'ja_JP')
  setMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME)
  setMeta('meta[property="og:title"]', { property: 'og:title' }, data.title)
  setMeta('meta[property="og:description"]', { property: 'og:description' }, data.description)
  setMeta('meta[property="og:url"]', { property: 'og:url' }, canonical)
  setMeta('meta[property="og:image"]', { property: 'og:image' }, data.image || DEFAULT_IMAGE)
  setMeta('meta[property="og:image:width"]', { property: 'og:image:width' }, '1200')
  setMeta('meta[property="og:image:height"]', { property: 'og:image:height' }, '630')
  setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, data.title)
  setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
  setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, data.title)
  setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, data.description)
  setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, data.image || DEFAULT_IMAGE)

  const structured = []
  if (route === 'home') {
    structured.push({
      '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME, alternateName: 'Classless', url: `${SITE_URL}/`,
      logo: ORGANIZATION_LOGO,
      founder: { '@type': 'Person', name: '丸山 侑太' },
      foundingDate: '2025-10-01',
      address: {
        '@type': 'PostalAddress', streetAddress: '円山町5-3 MIEUX渋谷ビル 5階',
        addressLocality: '渋谷区', addressRegion: '東京都', addressCountry: 'JP',
      },
    })
    structured.push({
      '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`, name: SITE_NAME, publisher: { '@id': `${SITE_URL}/#organization` }, inLanguage: 'ja-JP',
    })
  } else if (!data.noindex) {
    const crumbs = [{ name: 'ホーム', path: '/' }]
    if (route === 'article' && article) crumbs.push({ name: '業務改善ナレッジ', path: '/blog' }, { name: article.title })
    else crumbs.push({ name: data.title.split('｜')[0] })
    structured.push(breadcrumb(crumbs))
  }

  if (route === 'article' && article) {
    structured.push({
      '@context': 'https://schema.org', '@type': 'Article', '@id': `${canonical}#article`,
      headline: article.title, description: article.excerpt, mainEntityOfPage: canonical,
      datePublished: dateToIso(article.date), dateModified: dateToIso(article.updatedAt || article.date),
      ...(article.author ? { author: { '@type': article.authorType || 'Person', name: article.author } } : {}),
      publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME,
        logo: { '@type': 'ImageObject', url: ORGANIZATION_LOGO } },
      image: [data.image || DEFAULT_IMAGE], inLanguage: 'ja-JP',
      keywords: article.keywords,
    })
  }
  replaceJsonLd(structured)
}

export { ROUTE_META, SITE_URL, SITE_NAME, DEFAULT_IMAGE }
