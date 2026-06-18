import React from 'react'
import { createRoot } from 'react-dom/client'

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

function getRoute() {
  const p = window.location.pathname.replace(/\/+$/, '') || '/'
  if (p === '/business') return 'business'
  if (p === '/philosophy') return 'philosophy'
  if (p === '/contact') return 'contact'
  if (p === '/privacy') return 'privacy'
  if (p === '/terms') return 'terms'
  if (p === '/tokushoho') return 'tokushoho'
  if (p === '/blog') return 'blog'
  if (p.startsWith('/blog/')) return 'article'
  return 'home'
}

// Slug for /blog/<slug> routes.
function getSlug() {
  const p = window.location.pathname.replace(/\/+$/, '')
  const m = p.match(/^\/blog\/(.+)$/)
  return m ? decodeURIComponent(m[1]) : null
}

// Smooth-scroll to an in-page anchor (offset for the sticky header).
function scrollToId(id) {
  // The contact CTA now lives on its own page.
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
    Header, Hero, Mission, Company, JoinCta,
    ServicesDetail, Philosophy, ContactBand, ContactPage, Footer, Voices,
    Background, RoleSplit, WhatWeDo, Pricing, Flow, Faq,
  } = window

  const route = getRoute()
  const cta = { label: '無料AX診断', href: '/contact' }

  // ── Single source of truth for the header nav ──────────────────────────
  // Same labels + order on EVERY page; only the href prefix differs so that
  // in-page anchors work on home and navigate-then-scroll from sub-pages.
  // `id` marks the route a link is "active" on.
  const NAV = [
    { label: 'サービス内容', anchor: 'whatwedo' },
    { label: '料金', anchor: 'pricing' },
    { label: 'ブログ', path: '/blog', id: 'blog' },
    { label: '導入の流れ', anchor: 'flow' },
    { label: '会社概要', anchor: 'company' },
  ]
  const onHome = route === 'home'
  const navLinks = NAV.map((n) => {
    if (n.path) return { label: n.label, href: n.path, active: route === n.id || (n.id === 'blog' && route === 'article') }
    return { label: n.label, href: onHome ? `#${n.anchor}` : `/#${n.anchor}` }
  })
  const homeHref = onHome ? '#top' : '/'

  if (route === 'business') {
    return (
      <div data-screen-label="事業内容">
        <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
        <main>
          <ServicesDetail />
          <ContactBand />
        </main>
        <Footer />
      </div>
    )
  }

  if (route === 'philosophy') {
    return (
      <div data-screen-label="経営理念">
        <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
        <main>
          <Philosophy />
          <ContactBand />
        </main>
        <Footer />
      </div>
    )
  }

  if (route === 'contact') {
    return (
      <div data-screen-label="お問い合わせ">
        <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
        <main>
          <ContactPage />
        </main>
        <Footer />
      </div>
    )
  }

  if (route === 'blog') {
    const { BlogIndex } = window
    return (
      <div data-screen-label="ブログ">
        <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
        <main>
          <BlogIndex />
          <ContactBand />
        </main>
        <Footer />
      </div>
    )
  }

  if (route === 'article') {
    const { BlogArticle } = window
    return (
      <div data-screen-label="記事">
        <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
        <main>
          <BlogArticle slug={getSlug()} onAnchor={scrollToId} />
        </main>
        <Footer />
      </div>
    )
  }

  if (route === 'privacy' || route === 'terms' || route === 'tokushoho') {
    const { PrivacyPolicy, Terms, Tokushoho } = window
    const Legal = route === 'privacy' ? PrivacyPolicy : route === 'terms' ? Terms : Tokushoho
    const label = route === 'privacy' ? 'プライバシーポリシー' : route === 'terms' ? '利用規約' : '特定商取引法に基づく表記'
    return (
      <div data-screen-label={label}>
        <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
        <main>
          <Legal />
        </main>
        <Footer />
      </div>
    )
  }

  // home — long-form, BPO-first landing (cloudbuddy-style flow)
  return (
    <div data-screen-label="Classless コーポレートサイト">
      <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
      <main>
        <Hero onNav={scrollToId} />
        <Mission />
        <Background />
        <RoleSplit />
        <WhatWeDo />
        <Voices />
        <Pricing onNav={scrollToId} />
        <Flow onNav={scrollToId} />
        <Faq />
        <Company />
        <JoinCta onNav={scrollToId} />
      </main>
      <Footer onNav={scrollToId} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

// Parallax drift on [data-parallax] wrappers.
if (window.initParallax) window.initParallax()

// Sitewide ambient flow — mounted once on its own fixed host behind the app.
if (window.AmbientFlow) {
  const AF = window.AmbientFlow
  const host = document.createElement('div')
  document.body.appendChild(host)
  createRoot(host).render(<AF />)
}

// If we arrived with a hash (e.g. navigated from another page to /#company),
// scroll to it once the DOM is painted.
if (window.location.hash) {
  const id = window.location.hash.slice(1)
  setTimeout(() => scrollToId(id), 300)
}
