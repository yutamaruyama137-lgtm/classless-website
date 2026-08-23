import React from 'react'
import { createRoot } from 'react-dom/client'
import { applySeo } from './seo.js'

// 1) Global React must exist before the DS bundle / components load.
import './globals.js'

// 2) Design-system + site styles (styles.css @imports the token files).
import './ds/styles.css'
import './styles/site.css'
import './styles/responsive.css'

// 3) Design-system component bundle (registers window.ClasslessDesignSystem_225e16).
import './ds/_ds_bundle.js'

// 3.5) Blog registry — eager-globs src/blog/articles/*.js onto window.BLOG_ARTICLES.
import './blog/registry.js'

// 4) Site components — each registers itself on window via Object.assign.
//    Order matters: these load AFTER the DS bundle so the site's own
//    Header/Hero/Services win over the DS marketing-kit namesakes.
import './components/Bits.jsx'
import './components/Header.jsx'
import './components/Hero.jsx'
import './components/Mission.jsx'
import './components/ColorMerge.jsx'
import './components/Services.jsx'
import './components/Background.jsx'
import './components/RoleSplit.jsx'
import './components/WhatWeDo.jsx'
import './components/Pricing.jsx'
import './components/Flow.jsx'
import './components/Faq.jsx'
import './components/Voices.jsx'
import './components/ServicesDetail.jsx'
import './components/Philosophy.jsx'
import './components/CtaFooter.jsx'
import './components/ContactPage.jsx'
import './components/LegalPages.jsx'
import './components/Blog.jsx'
// 2026.07 二事業体制リデザイン: トップ(LayerX型) + アクセル + リートス
import './components/TopPage.jsx'
import './components/AxelPage.jsx'
import './components/LeadtossPage.jsx'

function getRoute() {
  const p = window.location.pathname.replace(/\/+$/, '') || '/'
  if (p === '/axel') return 'axel'
  if (p === '/leadtoss') return 'leadtoss'
  if (p === '/business') return 'business'
  if (p === '/philosophy') return 'philosophy'
  if (p === '/contact') return 'contact'
  if (p === '/privacy') return 'privacy'
  if (p === '/terms') return 'terms'
  if (p === '/tokushoho') return 'tokushoho'
  if (p === '/blog') return 'blog'
  if (p.startsWith('/blog/')) return 'article'
  if (p === '/') return 'home'
  return 'notFound'
}

// Slug for /blog/<slug> routes.
function getSlug() {
  const p = window.location.pathname.replace(/\/+$/, '')
  const m = p.match(/^\/blog\/(.+)$/)
  return m ? decodeURIComponent(m[1]) : null
}

// Smooth-scroll to an in-page anchor (offset for the sticky header).
function scrollToId(id) {
  // The contact CTA lives on its own page.
  if (id === 'contact') {
    if (window.location.pathname.replace(/\/+$/, '') !== '/contact') window.location.href = '/contact'
    return
  }
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

function App() {
  const {
    Header, Company, ServicesDetail, Philosophy, ContactBand, ContactPage, Footer, Voices,
    Background, RoleSplit, WhatWeDo, Pricing, Flow, Faq,
    TopHero, LogoTicker, TopStatement, TopBusiness, TopNews, TopJoin,
    AxelHero, LeadtossPage,
  } = window

  const route = getRoute()
  const article = route === 'article'
    ? (window.BLOG_ARTICLES || []).find((item) => item.slug === getSlug())
    : null
  applySeo(route, article)
  const cta = { label: '無料相談', href: '/contact' }

  // ── Single source of truth for the header nav ──────────────────────────
  // LayerX-style: 私たちについて / 事業内容(ドロップダウン) / ニュース / お問い合わせ
  const navLinks = [
    { label: '私たちについて', href: '/philosophy', active: route === 'philosophy' },
    {
      label: '事業内容',
      active: route === 'axel' || route === 'leadtoss' || route === 'business',
      children: [
        { label: 'アクセル事業', desc: 'AI×BPO — 時間単価制の業務伴走', href: '/axel', icon: '/assets/icon-axel.png' },
        { label: 'リートス事業', desc: 'AI×LinkedIn — 成果報酬型の商談供給', href: '/leadtoss', icon: '/assets/icon-leadtoss.png' },
      ],
    },
    { label: 'ニュース', href: '/blog', active: route === 'blog' || route === 'article' },
    { label: 'お問い合わせ', href: '/contact', active: route === 'contact' },
  ]
  const homeHref = route === 'home' ? '#top' : '/'

  const shell = (label, children) => (
    <div data-screen-label={label}>
      <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
      <main>{children}</main>
      <Footer />
    </div>
  )

  // ── アクセル事業(AI×BPO): 既存のBPO×DXセクション群を再利用 ──
  if (route === 'axel') {
    return shell('アクセル事業', (
      <React.Fragment>
        <AxelHero onNav={scrollToId} />
        <Background />
        <RoleSplit />
        <WhatWeDo />
        <Voices />
        <Pricing onNav={scrollToId} />
        <Flow onNav={scrollToId} />
        <Faq />
        <ContactBand />
      </React.Fragment>
    ))
  }

  // ── リートス事業(営業代行 / 商談供給インフラ) ──
  if (route === 'leadtoss') {
    return shell('リートス事業', (
      <React.Fragment>
        <LeadtossPage />
        <ContactBand />
      </React.Fragment>
    ))
  }

  if (route === 'business') {
    return shell('事業内容', (
      <React.Fragment>
        <ServicesDetail />
        <ContactBand />
      </React.Fragment>
    ))
  }

  if (route === 'philosophy') {
    return shell('私たちについて', (
      <React.Fragment>
        <Philosophy />
        <Company />
        <ContactBand />
      </React.Fragment>
    ))
  }

  if (route === 'contact') {
    return shell('お問い合わせ', <ContactPage />)
  }

  if (route === 'blog') {
    const { BlogIndex } = window
    return shell('ニュース', (
      <React.Fragment>
        <BlogIndex />
        <ContactBand />
      </React.Fragment>
    ))
  }

  if (route === 'article') {
    const { BlogArticle } = window
    return shell('記事', <BlogArticle slug={getSlug()} onAnchor={scrollToId} />)
  }

  if (route === 'privacy' || route === 'terms' || route === 'tokushoho') {
    const { PrivacyPolicy, Terms, Tokushoho } = window
    const Legal = route === 'privacy' ? PrivacyPolicy : route === 'terms' ? Terms : Tokushoho
    const label = route === 'privacy' ? 'プライバシーポリシー' : route === 'terms' ? '利用規約' : '特定商取引法に基づく表記'
    return shell(label, <Legal />)
  }

  if (route === 'notFound') {
    return shell('ページが見つかりません', (
      <section style={{ padding: 'clamp(120px,16vw,190px) 0 var(--section-y)', background: '#fff' }}>
        <div className="cl-container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-blue)', fontWeight: 800, letterSpacing: '.12em' }}>404 / NOT FOUND</p>
          <h1 style={{ marginTop: 14, fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900 }}>ページが見つかりません</h1>
          <p style={{ margin: '18px auto 28px', color: 'var(--text-secondary)', lineHeight: 1.9 }}>URLが変更されたか、ページが削除された可能性があります。<br />トップページまたは業務改善ナレッジからお探しください。</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a href="/" style={{ padding: '12px 22px', borderRadius: 999, background: 'var(--brand-blue)', color: '#fff', fontWeight: 800 }}>トップページへ</a>
            <a href="/blog" style={{ padding: '12px 22px', borderRadius: 999, border: '1px solid var(--color-border)', color: 'var(--text-primary)', fontWeight: 800 }}>業務改善ナレッジへ</a>
          </div>
        </div>
      </section>
    ))
  }

  // ── home: LayerX型コーポレートトップ ──
  return shell('Classless コーポレートサイト', (
    <React.Fragment>
      <TopHero />
      <LogoTicker />
      <TopStatement />
      <TopBusiness />
      <TopNews />
      <TopJoin />
      <ContactBand />
    </React.Fragment>
  ))
}

// 文字入りアニメーションはWebフォント読込完了後に開始する（html.fonts-in）。
// 読込途中に開始するとアニメーション中にフォントが差し替わってちらつくため。
// 回線が遅い場合でも最大900msで開始する（フォールバック）。
{
  let started = false
  const startTextAnimations = () => {
    if (started) return
    started = true
    document.documentElement.classList.add('fonts-in')
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(startTextAnimations)
  setTimeout(startTextAnimations, 900)
}

createRoot(document.getElementById('root')).render(<App />)

// Parallax drift on [data-parallax] wrappers.
if (window.initParallax) window.initParallax()

// 素の日本語テキストの折り返しを文節単位に（Bits.jsxのapplyPhraseWrap）。
// createRootのcommit直後と、遅延描画分の保険で2回呼ぶ（処理は冪等）。
setTimeout(() => window.applyPhraseWrap && window.applyPhraseWrap(), 0)
setTimeout(() => window.applyPhraseWrap && window.applyPhraseWrap(), 600)

// If we arrived with a hash (e.g. navigated from another page to /#business),
// scroll to it once the DOM is painted.
if (window.location.hash) {
  const id = window.location.hash.slice(1)
  setTimeout(() => scrollToId(id), 300)
}
