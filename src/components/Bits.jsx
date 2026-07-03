/* Classless corporate site — shared bits (color field, reveal, eyebrow, visuals) */
import { loadDefaultJapaneseParser } from 'budoux';
const __budouxJa = loadDefaultJapaneseParser();

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

/* IntersectionObserver-driven reveal. Adds `in` the first time the element
   enters the viewport and never removes it — replaying (and hiding text) on
   every re-entry made the page flicker while scrolling back up. */
function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -12% 0px' });
    el.querySelectorAll('.reveal, .draw-underline, .slide-l, .slide-r, .gather-host, .pop-in, .split-host').forEach((n) => io.observe(n));
    if (el.classList.contains('reveal') || el.classList.contains('draw-underline')) io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* Sitewide ambient motion: faint colored light streaks drift diagonally across
   the screen at all times (a calm "流れ星 / ライン" layer). Fixed, behind the
   header, never interactive; disabled for reduced-motion via CSS. */
function AmbientFlow({ count = 6 }) {
  return (
    <div className="ambient-flow" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`afl afl-${i % 6}`} />
      ))}
    </div>
  );
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
function BrandVisual({ tone = 'blue', label, image, ratio = '4 / 3', radius = 'var(--radius-2xl)', className = '', style = {}, tilt = true }) {
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
      background: image ? 'var(--color-bg-subtle)' : `linear-gradient(140deg, ${ramp[0]}, ${ramp[1]})`,
      position: 'relative', boxShadow: 'var(--shadow-lg)', transformStyle: 'preserve-3d', ...style,
    }}>
      {image ? (
        <img src={image} alt={label || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <img src="/assets/mark-classless.png" alt="" style={{
          position: 'absolute', right: -28, bottom: -24, width: '46%', opacity: 0.16,
          filter: 'grayscale(1) brightness(3)', mixBlendMode: 'soft-light',
        }} />
      )}
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

/* 日本語テキストを「文節っぽい」チャンクに分割する。1文字ずつ inline-block
   にすると折り返しがどの文字間でも起こる（句読点の行頭落ち・語中折れ）ため、
   チャンクごと .sseg/.gseg(nowrap) で包み、折り返しはチャンク境界のみにする。 */
/* BudouXが語中で誤分割する複合語（例: お問い|合わせ, 受け取り方|法）。
   境界がこれらの語をまたぐ場合はチャンクを連結する。 */
const __NO_BREAK_WORDS = [
  '問い合わせ', '打ち合わせ', '書き起こし', '折り返し', '巻き取り', '絞り込み',
  '見積もり', '見積り', '申し込み', '立ち上げ', '引き継ぎ', '受け取り', '読み取り',
  '取り組み', '仕組み', '方法',
];
function __mergeMisSplits(segs) {
  const out = [];
  for (const s of segs) {
    const prev = out.length ? out[out.length - 1] : null;
    if (prev != null && !/\s$/.test(prev) && !/^\s/.test(s)) {
      const tail = prev.slice(-6);
      const joint = tail + s.slice(0, 6);
      const straddles = __NO_BREAK_WORDS.some((w) => {
        const idx = joint.indexOf(w);
        return idx !== -1 && idx < tail.length && idx + w.length > tail.length;
      });
      // 「5つの|フィルタ」のような、短い連体修飾「〜の」直後の折り返しも防ぐ
      const shortNo = prev.length <= 4 && /の$/.test(prev);
      if (straddles || shortNo) { out[out.length - 1] += s; continue; }
    }
    out.push(s);
  }
  return out;
}

/* 長すぎる文節（例:「業界・役職・地域・企業規模・アクティブ度の」）は
   nowrapのまま行幅を超えてしまうので、「・」の直後で分割し直す。 */
function __splitLongSegments(segs) {
  const out = [];
  for (const s of segs) {
    if (s.length > 10 && s.indexOf('・') > 0) {
      const parts = s.split('・');
      for (let i = 0; i < parts.length; i++) {
        const p = i < parts.length - 1 ? parts[i] + '・' : parts[i];
        if (p) out.push(p);
      }
    } else {
      out.push(s);
    }
  }
  return out;
}

function phraseSegments(text) {
  // BudouX（Chromeのword-break:auto-phraseと同じモデル）で文節に分割。
  // 空白は折り返し可能な独立セグメントとして保持する。
  const out = [];
  for (const part of String(text).split(/(\s+)/)) {
    if (!part) continue;
    if (/^\s+$/.test(part)) { out.push(part); continue; }
    out.push(...__budouxJa.parse(part));
  }
  return __splitLongSegments(__mergeMisSplits(out));
}

/* 素の日本語テキスト（見出し演出を使わない p / li / 説明span など）の折り返しを
   文節単位にする。BudouX+連結辞書で分割した各文節を nowrap の span(.jseg) で
   包むので、折り返しは文節境界でのみ起こる（見出しの .sseg と同じ仕組み）。
   ゼロ幅スペース方式と違い「〜」等の後ろでの意図しない折り返しも防げる。
   初回レンダー後に main.jsx から呼ぶ（このサイトはページ遷移=フルロード）。 */
function applyPhraseWrap(root = document) {
  const JA_RE = /[ぁ-ヿ㐀-鿿]/;
  root.querySelectorAll('p, li, dd, dt, td, th, figcaption, blockquote, .ja-wrap').forEach((el) => {
    if (el.dataset.jaWrapped) return;
    if (el.closest('.split-host, .gather-host, pre, code')) return;
    if (el.querySelector('.schar, .gchar, .sseg, .gseg, .jseg')) return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest('code, pre, style, script'))
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    let touched = false;
    nodes.forEach((n) => {
      const v = n.nodeValue;
      if (!v || v.length < 6 || !JA_RE.test(v)) return;
      const frag = document.createDocumentFragment();
      phraseSegments(v).forEach((seg) => {
        // 空白と、分割してもなお長すぎる文節は素のテキスト（通常折り返し）に
        // フォールバックして、nowrapによるはみ出しを防ぐ
        if (/^\s+$/.test(seg) || seg.length > 16) { frag.appendChild(document.createTextNode(seg)); return; }
        const sp = document.createElement('span');
        sp.className = 'jseg';
        sp.textContent = seg;
        frag.appendChild(sp);
      });
      n.parentNode.replaceChild(frag, n);
      touched = true;
    });
    if (touched) el.dataset.jaWrapped = '1';
  });
}

/* Wrap text so each character flies in from a scattered position when the
   host (.gather-host) scrolls into view (文字が集まる). */
function gatherChars(text, opts = {}) {
  const spread = opts.spread || 60;
  const step = opts.step != null ? opts.step : 0.025;
  const base = opts.base || 0;
  let k = 0;
  return phraseSegments(text).map((seg, s) => {
    if (/^\s+$/.test(seg)) { k += seg.length; return ' '; } // 素の空白 = 折り返し可能
    const at = k;
    const inner = Array.from(seg).map((ch) => {
      const idx = k++;
      const ang = (idx * 137.5) % 360;      // golden-angle scatter (deterministic)
      const dist = spread * (0.5 + ((idx * 53) % 7) / 7);
      const dx = Math.cos(ang * Math.PI / 180) * dist;
      const dy = Math.sin(ang * Math.PI / 180) * dist;
      const rot = (((idx * 37) % 24) - 12);
      return (
        <span key={idx} className="gchar" style={{
          '--dx': `${dx.toFixed(1)}px`, '--dy': `${dy.toFixed(1)}px`, '--gr': `${rot}deg`,
          '--gd': `${(base + idx * step).toFixed(3)}s`,
        }}>{ch}</span>
      );
    });
    return <span key={`g-${at}`} className="gseg">{inner}</span>;
  });
}

/* Scroll-scrubbed per-character reveal (一文字ずつフェードイン).
   Unlike the load-once hero, this is driven by --p (0→1, set by useScrollVar
   on the host). Each char carries its index --i; the CSS turns (p, i, n) into a
   per-char progress, so scrolling DOWN reveals char-by-char and scrolling back
   UP plays the exact reverse. Usage:

     const ref = useScrollVar(0.5, 0.9, 0.46);
     const s = makeSplit();
     const l1 = s.chars('見出し前半、');
     const l2 = s.chars('後半。', 'green');     // 2nd arg = brand color
     <h2 ref={ref} className="split-host" style={{ '--n': s.count(), '--win': 7 }}>
       <span style={{ display:'block' }}>{l1}</span>
       <span style={{ display:'block' }}>{l2}</span>
     </h2>
*/
function makeSplit() {
  let i = 0;
  const chars = (text, color) => phraseSegments(text).map((seg, s) => {
    if (/^\s+$/.test(seg)) { i += seg.length; return ' '; } // 素の空白 = 折り返し可能
    const at = i; // グローバル文字位置 → chars()を複数回呼んでもkeyが一意
    const inner = (seg.match(/[A-Za-z0-9][A-Za-z0-9_.&'’-]*|[\s\S]/g) || []).map((ch, k) => {
      const idx = i++;
      return (
        <span key={`${idx}-${k}`} className="schar"
          style={{ '--i': idx, ...(color ? { color: `var(--brand-${color})` } : {}) }}>
          {ch}
        </span>
      );
    });
    return <span key={`s-${at}`} className="sseg">{inner}</span>;
  });
  return { chars, count: () => i };
}

Object.assign(window, { ColorField, useReveal, Eyebrow, Section, BrandVisual, Arrow, initParallax, StarField, useScrollVar, gatherChars, makeSplit, AmbientFlow, applyPhraseWrap });
