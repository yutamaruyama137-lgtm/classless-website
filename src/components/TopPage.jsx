/* Original Classless first view restored from 0bf5400. */
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
