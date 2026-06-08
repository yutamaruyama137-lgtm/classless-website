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
    }, { threshold: 0.2, rootMargin: '0px 0px -26% 0px' });
    el.querySelectorAll('.reveal, .draw-underline, .slide-l, .slide-r, .gather-host, .pop-in').forEach((n) => io.observe(n));
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
function BrandVisual({ tone = 'blue', label, ratio = '4 / 3', radius = 'var(--radius-2xl)', className = '', style = {}, tilt = true }) {
  const ramp = {
    blue:   ['var(--blue-200)', 'var(--blue-500)'],
    green:  ['var(--green-200)', 'var(--green-500)'],
    orange: ['var(--orange-200)', 'var(--orange-500)'],
    red:    ['var(--red-200)', 'var(--red-500)'],
  }[tone];

  // Pointer-driven 3D tilt (fine pointers only; respects reduced-motion).
  const fine = typeof window !== 'undefined'
    && window.matchMedia('(pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onMove = (e) => {
    if (!tilt || !fine) return;
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${(px * 9).toFixed(2)}deg) rotateX(${(-py * 9).toFixed(2)}deg) scale(1.025)`;
    const sheen = el.querySelector('.bv-sheen');
    if (sheen) sheen.style.background =
      `radial-gradient(420px circle at ${((px + 0.5) * 100).toFixed(0)}% ${((py + 0.5) * 100).toFixed(0)}%, rgba(255,255,255,0.35), transparent 55%)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = ''; const s = e.currentTarget.querySelector('.bv-sheen'); if (s) s.style.background = 'transparent'; };

  return (
    <div className={`bv-tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} style={{
      aspectRatio: ratio, width: '100%', borderRadius: radius, overflow: 'hidden',
      background: `linear-gradient(140deg, ${ramp[0]}, ${ramp[1]})`,
      position: 'relative', boxShadow: 'var(--shadow-lg)', transformStyle: 'preserve-3d', ...style,
    }}>
      <img src="/assets/mark-classless.png" alt="" style={{
        position: 'absolute', right: -28, bottom: -24, width: '46%', opacity: 0.16,
        filter: 'grayscale(1) brightness(3)', mixBlendMode: 'soft-light',
      }} />
      <span className="bv-sheen" aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'transparent', transition: 'background .2s', pointerEvents: 'none' }} />
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

/* Canvas star field with occasional shooting stars (流れ星).
   Sits behind dark sections. Pauses when offscreen; skipped for reduced-motion. */
function StarField({ count = 70, color = '255,255,255', shooting = true }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = 1, raf = 0, running = true, last = 0;
    const stars = [], shoots = [];
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = canvas.width = Math.max(1, r.width * dpr);
      h = canvas.height = Math.max(1, r.height * dpr);
    };
    resize();
    for (let i = 0; i < count; i++)
      stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.1 + 0.3, tw: Math.random() * 6.28, sp: Math.random() * 0.02 + 0.004 });
    const spawn = () => shoots.push({ x: Math.random() * w * 0.7, y: Math.random() * h * 0.4, len: Math.random() * 130 + 90, sp: Math.random() * 7 + 7, a: 1, ang: 0.32 + Math.random() * 0.12 });
    const frame = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.tw += s.sp;
        const o = (Math.sin(s.tw) * 0.5 + 0.5) * 0.7 + 0.15;
        ctx.fillStyle = `rgba(${color},${o.toFixed(3)})`;
        ctx.beginPath(); ctx.arc(s.x * w, s.y * h, s.r * dpr, 0, 6.2832); ctx.fill();
      }
      if (shooting && t - last > 1300 && Math.random() < 0.55) { spawn(); last = t; }
      for (let i = shoots.length - 1; i >= 0; i--) {
        const sh = shoots[i];
        const dx = Math.cos(sh.ang) * sh.len * dpr, dy = Math.sin(sh.ang) * sh.len * dpr;
        const g = ctx.createLinearGradient(sh.x, sh.y, sh.x + dx, sh.y + dy);
        g.addColorStop(0, `rgba(${color},${sh.a.toFixed(3)})`); g.addColorStop(1, `rgba(${color},0)`);
        ctx.strokeStyle = g; ctx.lineWidth = 1.6 * dpr; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(sh.x + dx, sh.y + dy); ctx.stroke();
        sh.x += Math.cos(sh.ang) * sh.sp * dpr; sh.y += Math.sin(sh.ang) * sh.sp * dpr; sh.a -= 0.011;
        if (sh.a <= 0 || sh.x > w + 200 || sh.y > h + 200) shoots.splice(i, 1);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    const io = new IntersectionObserver((e) => {
      running = e[0].isIntersecting;
      if (running) { last = 0; raf = requestAnimationFrame(frame); } else cancelAnimationFrame(raf);
    }, { threshold: 0 });
    io.observe(canvas);
    window.addEventListener('resize', resize);
    return () => { running = false; cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
}

/* Drives a CSS variable --p (0→1) on the element as it scrolls through the
   viewport. No React re-render (sets the var directly), so it's cheap. */
function useScrollVar(centerBias = 0.5, startFrac = 0.82, endFrac = 0.5) {
  // --p ramps 0→1 only while the element's center travels from startFrac of
  // the viewport height up to endFrac. Default: starts late, completes dead-center.
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const upd = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = el.getBoundingClientRect();
      const center = (r.top + r.height * centerBias) / vh;
      const p = (startFrac - center) / (startFrac - endFrac);
      el.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(upd); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    upd();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return ref;
}

/* Wrap text so each character flies in from a scattered position when the
   host (.gather-host) scrolls into view (文字が集まる). */
function gatherChars(text, opts = {}) {
  const spread = opts.spread || 60;
  const step = opts.step != null ? opts.step : 0.025;
  const base = opts.base || 0;
  return Array.from(text).map((ch, k) => {
    const ang = (k * 137.5) % 360;          // golden-angle scatter (deterministic)
    const dist = spread * (0.5 + ((k * 53) % 7) / 7);
    const dx = Math.cos(ang * Math.PI / 180) * dist;
    const dy = Math.sin(ang * Math.PI / 180) * dist;
    const rot = (((k * 37) % 24) - 12);
    return (
      <span key={k} className="gchar" style={{
        '--dx': `${dx.toFixed(1)}px`, '--dy': `${dy.toFixed(1)}px`, '--gr': `${rot}deg`,
        '--gd': `${(base + k * step).toFixed(3)}s`,
      }}>{ch === ' ' ? ' ' : ch}</span>
    );
  });
}

Object.assign(window, { ColorField, useReveal, Eyebrow, Section, BrandVisual, Arrow, initParallax, StarField, useScrollVar, gatherChars });
