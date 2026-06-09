/* Classless corporate site — shared sticky header (multi-page) */
function Header({ links = [], cta, homeHref = '/', onAnchor }) {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handle = (href) => (e) => {
    if (href && href.charAt(0) === '#') {
      e.preventDefault();
      onAnchor && onAnchor(href.slice(1));
    }
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 60,
      background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'background .35s var(--ease-out), border-color .35s var(--ease-out)',
    }}>
      <div className="cl-container" style={{ height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href={homeHref} onClick={handle(homeHref)} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <img src="/assets/mark-classless.png" alt="Classless" style={{ width: 40, height: 40 }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 27, color: 'var(--text-primary)', letterSpacing: '0.005em' }}>Classless</span>
        </a>
        <nav className="site-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((it) => (
            <a key={it.label} href={it.href} onClick={handle(it.href)}
               style={{ fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 14.5, color: it.active ? 'var(--brand-blue)' : 'var(--text-primary)', transition: 'color .2s' }}
               onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-blue)')}
               onMouseLeave={(e) => (e.currentTarget.style.color = it.active ? 'var(--brand-blue)' : 'var(--text-primary)')}>
              {it.label}
            </a>
          ))}
          {cta && (
            cta.href && cta.href.charAt(0) !== '#'
              ? <a href={cta.href}><Button size="sm">{cta.label}</Button></a>
              : <Button size="sm" onClick={() => onAnchor && onAnchor((cta.href || '#contact').slice(1))}>{cta.label}</Button>
          )}
        </nav>
      </div>
    </header>
  );
}
Object.assign(window, { Header });
