/* Shared navigation for the corporate site and its existing inner pages. */
function Header({ links = [], cta, homeHref = '/', onAnchor }) {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef(null);
  const panelRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    const closeOnEscape = event => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
      if (event.key === 'Tab') {
        const elements = [toggleRef.current, ...panelRef.current.querySelectorAll('a')];
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const closeOnDesktop = () => { if (window.innerWidth > 960) setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [open]);
  const handle = href => event => {
    setOpen(false);
    if (href.startsWith('#')) { event.preventDefault(); onAnchor?.(href.slice(1)); }
  };
  const entries = links.flatMap(item => item.children || [item]);
  return (
    <header className="corporate-header">
      <div className="cl-container corporate-header__inner">
        <a href={homeHref} onClick={handle(homeHref)} className="corporate-header__logo" aria-label="Classless トップページ"><img src="/assets/logo-classless-horizontal.png" alt="Classless" width="190" height="49" /></a>
        <nav className="corporate-header__nav" aria-label="メインナビゲーション">
          {entries.map(item => <a href={item.href} onClick={handle(item.href)} key={item.label} aria-current={item.active ? 'page' : undefined}>{item.label}</a>)}
        </nav>
        <div className="corporate-header__actions">
          {cta && <a href={cta.href} className="corporate-header__contact">{cta.label}<span aria-hidden="true">↗</span></a>}
          <button ref={toggleRef} type="button" className="corporate-menu-button" aria-label={open ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={open} aria-controls="corporate-menu" onClick={() => setOpen(!open)}><span aria-hidden="true" className={open ? 'is-open' : ''}><i /><i /></span></button>
        </div>
      </div>
      {open && <nav ref={panelRef} id="corporate-menu" className="corporate-mobile-menu" aria-label="モバイルナビゲーション">
        {entries.map(item => <a href={item.href} key={item.label} onClick={handle(item.href)}>{item.label}<span aria-hidden="true">→</span></a>)}
        <a href="/contact" onClick={handle('/contact')}>お問い合わせ<span aria-hidden="true">↗</span></a>
      </nav>}
    </header>
  );
}
Object.assign(window, { Header });
