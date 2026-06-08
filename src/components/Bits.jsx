/* Classless corporate site — shared bits (color field, reveal, eyebrow, visuals) */

/* The signature animated overlapping-color field. Renders behind hero/CTA. */
function ColorField({ density = 'hero', style = {} }) {
  // positions tuned so the four hues overlap toward the center
  const blobs = density === 'hero'
    ? [
        { c: 'red',    s: 620, top: '-12%', left: '6%' },
        { c: 'orange', s: 560, top: '4%',   left: '54%' },
        { c: 'blue',   s: 680, top: '34%',  left: '20%' },
        { c: 'green',  s: 600, top: '40%',  left: '52%' },
      ]
    : [
        { c: 'blue',   s: 520, top: '-30%', left: '8%' },
        { c: 'green',  s: 480, top: '-10%', left: '38%' },
        { c: 'red',    s: 460, top: '10%',  left: '66%' },
      ];
  return (
    <div className="cf" style={style} aria-hidden="true">
      {blobs.map((b, i) => (
        <span key={i} className={`cf__blob ${b.c}`}
          style={{ width: b.s, height: b.s, top: b.top, left: b.left }} />
      ))}
    </div>
  );
}

/* IntersectionObserver-driven reveal. Adds `in` when the element scrolls in. */
function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    el.querySelectorAll('.reveal, .draw-underline, .slide-l, .slide-r').forEach((n) => io.observe(n));
    if (el.classList.contains('reveal') || el.classList.contains('draw-underline')) io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* English eyebrow label (DS utility + optional tone). */
function Eyebrow({ children, tone, style }) {
  const color = tone ? `var(--accent-${tone})` : undefined;
  return <span className="cl-eyebrow" style={{ ...(color ? { color } : {}), ...style }}>{children}</span>;
}

/* Section wrapper with consistent vertical rhythm. */
function Section({ children, bg = 'transparent', id, style = {}, pad = 'var(--section-y)' }) {
  return (
    <section id={id} style={{ background: bg, paddingTop: pad, paddingBottom: pad, position: 'relative', ...style }}>
      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </section>
  );
}

/* Brand-tinted visual block standing in for production photography.
   Cohesive with the color-field motif; carries a soft mark watermark. */
function BrandVisual({ tone = 'blue', label, ratio = '4 / 3', radius = 'var(--radius-2xl)', className = '', style = {} }) {
  const ramp = {
    blue:   ['var(--blue-200)', 'var(--blue-500)'],
    green:  ['var(--green-200)', 'var(--green-500)'],
    orange: ['var(--orange-200)', 'var(--orange-500)'],
    red:    ['var(--red-200)', 'var(--red-500)'],
  }[tone];
  return (
    <div className={className} style={{
      aspectRatio: ratio, width: '100%', borderRadius: radius, overflow: 'hidden',
      background: `linear-gradient(140deg, ${ramp[0]}, ${ramp[1]})`,
      position: 'relative', boxShadow: 'var(--shadow-lg)', ...style,
    }}>
      <img src="/assets/mark-classless.png" alt="" style={{
        position: 'absolute', right: -28, bottom: -24, width: '46%', opacity: 0.16,
        filter: 'grayscale(1) brightness(3)', mixBlendMode: 'soft-light',
      }} />
      {label && (
        <span style={{ position: 'absolute', left: 18, bottom: 14, fontFamily: 'var(--font-mono)',
          fontSize: 11, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.9)' }}>{label}</span>
      )}
    </div>
  );
}

const Arrow = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

/* Lightweight scroll parallax. Elements with [data-parallax="0.05"] drift
   gently as they pass through the viewport (the "photos go back and forth"
   feel). Reduced-motion users are skipped. Call once after render. */
function initParallax() {
  if (window.__clParallax) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.__clParallax = true;
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const f = parseFloat(el.getAttribute('data-parallax')) || 0;
      const r = el.getBoundingClientRect();
      const delta = (r.top + r.height / 2) - vh / 2;
      el.style.setProperty('--py', (-delta * f).toFixed(1) + 'px');
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

Object.assign(window, { ColorField, useReveal, Eyebrow, Section, BrandVisual, Arrow, initParallax });
