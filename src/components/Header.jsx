/* Classless corporate site — shared sticky header (multi-page)
   2026.07: 二事業体制に合わせて「事業内容」ドロップダウンとモバイルメニューを追加。 */
function Header({ links = [], cta, homeHref = '/', onAnchor }) {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false); // mobile menu
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  const handle = (href) => (e) => {
    if (href && href.charAt(0) === '#') {
      e.preventDefault();
      setOpen(false);
      onAnchor && onAnchor(href.slice(1));
    } else {
      setOpen(false);
    }
  };

  const linkStyle = (active) => ({
    fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 14.5,
    color: active ? 'var(--brand-blue)' : 'var(--text-primary)', transition: 'color .2s',
  });

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 60,
      // NOTE: backdrop-filter creates a containing block for fixed descendants,
      // which would trap the mobile menu panel inside the header — so while the
      // menu is open we switch to a solid background and drop the filter.
      background: open ? '#fff' : scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled && !open ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled && !open ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'background .35s var(--ease-out), border-color .35s var(--ease-out)',
    }}>
      <div className="cl-container" style={{ height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href={homeHref} onClick={handle(homeHref)} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo-classless-horizontal.png" alt="Classless — BEYOND BORDERS" style={{ height: 44, width: 'auto', display: 'block' }} />
        </a>

        <nav className="site-nav" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map((it) => (
            it.children ? (
              <div key={it.label} className="nav-drop" style={{ position: 'relative' }}>
                <span style={{ ...linkStyle(it.active), display: 'inline-flex', alignItems: 'center', gap: 5, cursor: 'default' }}>
                  {it.label}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </span>
                <div className="nav-drop__menu">
                  {it.children.map((c) => (
                    <a key={c.label} href={c.href} onClick={handle(c.href)} className="nav-drop__item">
                      <img src={c.icon} alt="" style={{ width: 30, height: 30, borderRadius: 8 }} />
                      <span>
                        <span style={{ display: 'block', fontWeight: 800, fontSize: 13.5, color: 'var(--text-primary)' }}>{c.label}</span>
                        <span style={{ display: 'block', fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>{c.desc}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={it.label} href={it.href} onClick={handle(it.href)}
                 style={linkStyle(it.active)}
                 onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-blue)')}
                 onMouseLeave={(e) => (e.currentTarget.style.color = it.active ? 'var(--brand-blue)' : 'var(--text-primary)')}>
                {it.label}
              </a>
            )
          ))}
          {cta && (
            cta.href && cta.href.charAt(0) !== '#'
              ? <a href={cta.href}><Button size="sm">{cta.label}</Button></a>
              : <Button size="sm" onClick={() => onAnchor && onAnchor((cta.href || '#contact').slice(1))}>{cta.label}</Button>
          )}
          {/* モバイル: ハンバーガー */}
          <button className="nav-burger" aria-label="メニュー" aria-expanded={open} onClick={() => setOpen(!open)} style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--text-primary)',
          }}>
            {open
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>}
          </button>
        </nav>
      </div>

      {/* モバイルメニューパネル */}
      {open && (
        <div className="nav-mobile" style={{
          position: 'fixed', top: 74, left: 0, right: 0, bottom: 0, zIndex: 59,
          background: '#fff', padding: '18px 24px 40px', overflowY: 'auto',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {links.flatMap((it) => it.children
              ? it.children.map((c) => ({ label: c.label, href: c.href }))
              : [{ label: it.label, href: it.href }]
            ).map((it) => (
              <a key={it.label} href={it.href} onClick={handle(it.href)} style={{
                padding: '17px 4px', borderBottom: '1px solid var(--color-divider)',
                fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                {it.label}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </a>
            ))}
          </div>
          {cta && (
            <a href={cta.href || '/contact'} onClick={handle(cta.href || '/contact')} style={{ display: 'block', marginTop: 26 }}>
              <Button fullWidth size="lg">{cta.label}</Button>
            </a>
          )}
        </div>
      )}
    </header>
  );
}
Object.assign(window, { Header });
