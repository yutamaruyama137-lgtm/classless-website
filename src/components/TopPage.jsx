/* Classless corporate site — top page (LayerX-style corporate layout)
   構成: Hero(Mission) → Statement(Vision) → What We Do(2事業) → News → Join → Contact
   装飾は平面的なジオメトリック・シェイプのみ。余白と大きな文字で見せる。 */

/* ---- 平面ジオメトリック装飾(LayerXの角形モチーフ) ---- */
function GeoDecor({ variant = 'hero' }) {
  // 平行四辺形クラスタ。ブランドブルー系 + 薄グレーで静かに。
  const sets = {
    hero: [
      { top: '4%', right: '-2%', w: 220, h: 84, c: 'var(--blue-100)', sk: -18, d: 0 },
      { top: '13%', right: '6%', w: 120, h: 46, c: 'var(--blue-500)', sk: -18, d: 1.2, o: 0.85 },
      { top: '21%', right: '-4%', w: 170, h: 58, c: 'var(--neutral-100)', sk: -18, d: 2.1 },
      { bottom: '18%', left: '-3%', w: 190, h: 66, c: 'var(--blue-50)', sk: -18, d: 0.6 },
      { bottom: '9%', left: '5%', w: 110, h: 40, c: 'var(--blue-300)', sk: -18, d: 1.7, o: 0.7 },
    ],
    band: [
      { top: '-24px', right: '4%', w: 150, h: 52, c: 'var(--blue-100)', sk: -18, d: 0 },
      { top: '30px', right: '-2%', w: 90, h: 34, c: 'var(--blue-400)', sk: -18, d: 1, o: 0.6 },
    ],
  };
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {(sets[variant] || sets.hero).map((g, i) => (
        <span key={i} className="geo-float" style={{
          position: 'absolute', top: g.top, right: g.right, bottom: g.bottom, left: g.left,
          width: g.w, height: g.h, background: g.c, opacity: g.o != null ? g.o : 1,
          transform: `skewX(${g.sk}deg)`, animationDelay: `${g.d}s`,
        }} />
      ))}
    </div>
  );
}

/* ---- 丸枠矢印リンク(LayerXのサークルアロー) ---- */
function CircleLink({ href, children, dark = false, style = {} }) {
  const line = dark ? 'rgba(255,255,255,0.4)' : 'var(--color-border-strong)';
  const ink = dark ? '#fff' : 'var(--text-primary)';
  return (
    <a href={href} className="circle-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 16, color: ink, fontWeight: 700, fontSize: 15, ...style }}>
      <span className="circle-link__ring" style={{
        width: 52, height: 52, borderRadius: '50%', border: `1px solid ${line}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </span>
      {children}
    </a>
  );
}

/* ---- LayerX FV風カットイン(デモ) ----
   平行四辺形パネルが斜めに流れ込み、一部のパネルの中に写真が現れる。
   写真は実写真が支給されるまでUnsplashの仮写真。差し替えは下のsrcのみ。 */
function HeroCutin() {
  return (
    <div className="hero-cutin" aria-hidden="true">
      <span className="cutin-panel cutin-photo cp-1">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1100&auto=format&fit=crop" alt="" loading="eager" />
      </span>
      <span className="cutin-panel cp-2" />
      <span className="cutin-panel cutin-photo cp-3">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1100&auto=format&fit=crop" alt="" loading="eager" />
      </span>
      <span className="cutin-panel cp-4" />
      <span className="cutin-panel cp-5" />
    </div>
  );
}

/* ================================================================
   Hero — Mission を大きく静かに。
   ================================================================ */
function TopHero() {
  const { useReveal } = window;
  const ref = useReveal();

  // 一文字ずつ立ち上がる(既存 .char アニメーション)
  const STEP = 0.045, BASE = 0.25;
  let n = 0;
  const chars = (text) => Array.from(text).map((ch, k) => {
    const delay = (BASE + n * STEP).toFixed(3); n += 1;
    return <span key={`${k}-${delay}`} className="char" style={{ animationDelay: `${delay}s` }}>{ch}</span>;
  });
  const l1 = chars('AIで、人間を');
  const l2 = chars('面白くする。');
  const tail = BASE + n * STEP;

  return (
    <section id="top" ref={ref} style={{
      position: 'relative', minHeight: '92svh', display: 'flex', alignItems: 'center',
      background: 'var(--color-bg)', overflow: 'hidden',
    }}>
      <div className="hero-lights" aria-hidden="true">
        <span className="hl hl-1" />
        <span className="hl hl-2" />
        <span className="hl hl-3" />
        <span className="hero-sheen" />
      </div>
      <HeroCutin />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1, paddingTop: 40, paddingBottom: 120 }}>
        <h1 style={{ fontSize: 'clamp(44px, 8vw, 104px)', fontWeight: 700, lineHeight: 1.28, letterSpacing: '0.015em', margin: 0 }}>
          <span style={{ display: 'block' }}>{l1}</span>
          <span style={{ display: 'block' }}>{l2}</span>
        </h1>
        <p className="reveal in" style={{
          marginTop: 30, fontFamily: 'var(--font-eyebrow)', fontWeight: 600, fontSize: 'clamp(13px, 1.4vw, 16px)',
          letterSpacing: '0.08em', color: 'var(--text-muted)', animationDelay: `${(tail + 0.15).toFixed(2)}s`,
        }}>
          Making Humans Interesting with AI.
        </p>
      </div>
    </section>
  );
}


Object.assign(window, { TopHero });
