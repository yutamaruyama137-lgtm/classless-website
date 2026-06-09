import React from 'react'
import { createRoot } from 'react-dom/client'

// 1) Global React must exist before the DS bundle / components load.
import './globals.js'

// 2) Design-system + site styles (styles.css @imports the token files).
import './ds/styles.css'
import './styles/site.css'

// 3) Design-system component bundle (registers window.ClasslessDesignSystem_225e16).
import './ds/_ds_bundle.js'

// 4) Site components — each registers itself on window via Object.assign.
//    Order matters: these load AFTER the DS bundle so the site's own
//    Header/Hero/Services win over the DS marketing-kit namesakes.
import './components/Bits.jsx'
import './components/Header.jsx'
import './components/Hero.jsx'
import './components/Mission.jsx'
import './components/ColorMerge.jsx'
import './components/Services.jsx'
import './components/Voices.jsx'
import './components/ServicesDetail.jsx'
import './components/Philosophy.jsx'
import './components/CtaFooter.jsx'
import './components/ContactPage.jsx'

function getRoute() {
  const p = window.location.pathname.replace(/\/+$/, '') || '/'
  if (p === '/business') return 'business'
  if (p === '/philosophy') return 'philosophy'
  if (p === '/contact') return 'contact'
  return 'home'
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
    Header, Hero, Mission, Services, Company, JoinCta,
    ServicesDetail, Philosophy, ContactBand, ContactPage, Footer, Voices, ColorMerge,
  } = window

  const route = getRoute()
  const cta = { label: 'お問い合わせ', href: '/contact' }

  if (route === 'business') {
    const links = [
      { label: '事業内容', href: '/business', active: true },
      { label: '経営理念', href: '/philosophy' },
      { label: '会社情報', href: '/#company' },
    ]
    return (
      <div data-screen-label="事業内容">
        <Header links={links} cta={cta} homeHref="/" onAnchor={scrollToId} />
        <main>
          <ServicesDetail />
          <ContactBand />
        </main>
        <Footer />
      </div>
    )
  }

  if (route === 'philosophy') {
    const links = [
      { label: '事業内容', href: '/business' },
      { label: '経営理念', href: '/philosophy', active: true },
      { label: '会社情報', href: '/#company' },
    ]
    return (
      <div data-screen-label="経営理念">
        <Header links={links} cta={cta} homeHref="/" onAnchor={scrollToId} />
        <main>
          <Philosophy />
          <ContactBand />
        </main>
        <Footer />
      </div>
    )
  }

  if (route === 'contact') {
    const links = [
      { label: '事業内容', href: '/business' },
      { label: '経営理念', href: '/philosophy' },
      { label: '会社情報', href: '/#company' },
    ]
    return (
      <div data-screen-label="お問い合わせ">
        <Header links={links} cta={cta} homeHref="/" onAnchor={scrollToId} />
        <main>
          <ContactPage />
        </main>
        <Footer />
      </div>
    )
  }

  // home
  const links = [
    { label: '事業内容', href: '/business' },
    { label: '経営理念', href: '/philosophy' },
    { label: '会社情報', href: '#company' },
  ]
  return (
    <div data-screen-label="Classless コーポレートサイト">
      <Header links={links} cta={cta} homeHref="#top" onAnchor={scrollToId} />
      <main>
        <Hero onNav={scrollToId} />
        <Mission />
        <ColorMerge />
        <Services />
        <Voices />
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
