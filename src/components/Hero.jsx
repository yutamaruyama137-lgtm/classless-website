/* Classless corporate site — hero (LayerX-style first look) */
function Hero({ onNav }) {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { ColorField, useReveal, Arrow } = window;
  const ref = useReveal();

  return (
    <section id="top" ref={ref} style={{
      position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center',
      overflow: 'hidden', background: 'var(--color-bg)',
    }}>
      <ColorField density="hero" />

      <div className="cl-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: 96, paddingBottom: 120 }}>
        <div className="reveal in" style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: 30, animationDelay: '0.05s' }}>
          <span className="cl-eyebrow" style={{ fontSize: 13 }}>Beyond Classroom</span>
        </div>

        <h1 style={{ fontSize: 'clamp(38px, 6.6vw, 92px)', fontWeight: 900, lineHeight: 1.18, letterSpacing: '0.02em', margin: 0 }}>
          <span className="reveal in" style={{ display: 'block', animationDelay: '0.12s' }}>
            地方から<span style={{ color: 'var(--brand-blue)' }}>AI</span>で、
          </span>
          <span className="reveal in" style={{ display: 'block', animationDelay: '0.26s' }}>
            人間の可能性を、
          </span>
          <span className="reveal in" style={{ display: 'block', animationDelay: '0.40s' }}>
            <span className="draw-underline in">解放する。</span>
          </span>
        </h1>

        <p className="reveal in" style={{
          margin: '34px auto 0', maxWidth: '32em', fontSize: 'clamp(15px, 1.5vw, 19px)', lineHeight: 1.95,
          color: 'var(--text-secondary)', fontWeight: 500, animationDelay: '0.58s',
        }}>
          むずかしい技術を、誰もが使える道具に。<br />
          合同会社Classless は、東北・仙台から地域の現場に伴走し、<br className="hide-sp" />
          生成AIを「あたりまえ」に変えていきます。
        </p>

        <div className="reveal in" style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 42, flexWrap: 'wrap', animationDelay: '0.72s' }}>
          <Button size="lg" iconRight={<Arrow />} onClick={() => onNav('contact')}>無料で相談する</Button>
          <Button size="lg" variant="secondary" tone="ink" onClick={() => onNav('services')}>事業内容を見る</Button>
        </div>
      </div>

      <button onClick={() => onNav('mission')} className="scroll-cue" aria-label="次のセクションへ" style={{
        position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 2,
        background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em' }}>SCROLL</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </button>
    </section>
  );
}
Object.assign(window, { Hero });
