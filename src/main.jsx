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
import './components/TopPage.jsx'
import './components/SimpleHome.jsx'
import './components/CtaFooter.jsx'
import './components/ContactPage.jsx'
import './components/LegalPages.jsx'
import './components/Blog.jsx'
import './styles/simple-home.css'

const legacyRoutes = { '/axel': '/#ai', '/leadtoss': '/', '/business': '/#business', '/philosophy': '/#philosophy' }
const legacyPath = window.location.pathname.replace(/\/+$/, '')
if (legacyRoutes[legacyPath]) window.location.replace(legacyRoutes[legacyPath])

function getRoute() {
  const p = window.location.pathname.replace(/\/+$/, '') || '/'
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
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  // The contact CTA lives on its own page.
  if (id === 'contact') {
    if (window.location.pathname.replace(/\/+$/, '') !== '/contact') window.location.href = '/contact'
    return
  }
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior })
    return
  }
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - (document.querySelector('header')?.getBoundingClientRect().height || 80) - 20
    window.scrollTo({ top: y, behavior })
  }
}

function App() {
  const route = getRoute()

  // Fade the matching first-paint shell once React and the site font are ready.
  React.useLayoutEffect(() => {
    const html = document.documentElement
    document.getElementById('root')?.removeAttribute('data-prerender')
    const bootShell = document.querySelector('.boot-shell--handoff')
    if (!bootShell) {
      html.classList.remove('classless-booting')
      html.removeAttribute('data-boot-route')
      return undefined
    }

    let deadlineTimer
    let handoffTimer
    let removeTimer
    let cancelled = false
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fontsReady = document.fonts?.ready || Promise.resolve()
    const fontDeadline = new Promise((resolve) => { deadlineTimer = window.setTimeout(resolve, 900) })

    Promise.race([fontsReady, fontDeadline]).then(() => {
      if (cancelled) return
      window.clearTimeout(deadlineTimer)
      // Let the original hero characters begin beneath the matching first-paint shell.
      handoffTimer = window.setTimeout(() => {
        if (cancelled) return
        bootShell.classList.add('boot-shell--exit')
        removeTimer = window.setTimeout(() => {
          bootShell.remove()
          html.classList.remove('classless-booting')
          html.removeAttribute('data-boot-route')
        }, reducedMotion ? 0 : 220)
      }, route === 'home' && !reducedMotion ? 480 : 0)
    })

    return () => {
      cancelled = true
      window.clearTimeout(deadlineTimer)
      window.clearTimeout(handoffTimer)
      window.clearTimeout(removeTimer)
      bootShell.remove()
      html.classList.remove('classless-booting')
      html.removeAttribute('data-boot-route')
    }
  }, [route])

  const { Header, ContactBand, ContactPage, Footer, TopHero, FriendlyIntro, FriendlyPartners, SimpleBusiness, SimpleProjects, SimpleCompany } = window

  const article = route === 'article'
    ? (window.BLOG_ARTICLES || []).find((item) => item.slug === getSlug())
    : null
  applySeo(route, article)
  const cta = { label: '無料相談', href: '/contact' }

  const sectionHref = (id) => route === 'home' ? `#${id}` : `/#${id}`
  const navLinks = [
    { label: '私たちの考え', href: sectionHref('philosophy') },
    { label: '事業紹介', href: sectionHref('business') },
    { label: 'プロジェクト', href: sectionHref('projects') },
    { label: '会社情報', href: sectionHref('company') },
  ]
  const homeHref = route === 'home' ? '#top' : '/'

  const shell = (label, children) => (
    <div data-screen-label={label}>
      <Header links={navLinks} cta={cta} homeHref={homeHref} onAnchor={scrollToId} />
      <main>{children}</main>
      <Footer />
    </div>
  )

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
      <FriendlyIntro />
      <FriendlyPartners />
      <SimpleBusiness />
      <SimpleProjects />
      <SimpleCompany />
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

const appRoot = document.getElementById('root')
const firstPaintShell = appRoot.querySelector('.boot-shell')
if (firstPaintShell) {
  // Preserve the shell outside React's managed root for a short cross-fade.
  firstPaintShell.classList.add('boot-shell--handoff')
  appRoot.before(firstPaintShell)
}
createRoot(appRoot).render(<App />)

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
