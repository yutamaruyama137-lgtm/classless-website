/* Classless corporate site — hero (LayerX-style first look)
   見出しは一文字ずつフェード＆ブラーインで立ち上がり、背景は
   オーロラ(ゆっくり動く色) + ColorField(漂う4色)で常に動く。 */
function Hero({ onNav }) {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { ColorField, useReveal, Arrow } = window;
  const ref = useReveal();

  // 一文字ずつ遅延を増やしながら span 化する（色付き区切りに対応）
  const STEP = 0.04;   // 1文字あたりの遅延(秒)
  const BASE = 0.22;   // 開始遅延(秒)
  let n = 0;
  const chars = (text, color) =>
    Array.from(text).map((ch, k) => {
      const delay = (BASE + n * STEP).toFixed(3);
      n += 1;
      return (
        <span key={`${color || 'x'}-${k}-${delay}`} className="char"
          style={{ animationDelay: `${delay}s`, ...(color ? { color: `var(--brand-${color})` } : {}) }}>
          {ch}
        </span>
      );
    });

  const line1 = [...chars('地方から'), ...chars('AI', 'blue'), ...chars('で、')];
  const line2 = chars('人間の可能性を、');
  // 下線は最終行の文字が出そろってから引く
  const underlineDelay = `${(BASE + (n + 5) * STEP + 0.05).toFixed(2)}s`;
  const line3 = chars('解放する。');
  const tailDelay = BASE + n * STEP; // 見出し完了の目安

  return (
    <section id="top" ref={ref} style={{
      position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center',
      overflow: 'hidden', background: 'var(--color-bg)',
    }}>
      <div className="hero-aurora" aria-hidden="true" />
      <ColorField density="hero" />

      <div className="cl-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: 96, paddingBottom: 120 }}>
        <div className="reveal in" style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: 30, animationDelay: '0.05s' }}>
          <span className="cl-eyebrow" style={{ fontSize: 13 }}>Beyond Classroom</span>
        </div>

        <h1 style={{ fontSize: 'clamp(38px, 6.6vw, 92px)', fontWeight: 900, lineHeight: 1.18, letterSpacing: '0.02em', margin: 0 }}>
          <span style={{ display: 'block' }}>{line1}</span>
          <span style={{ display: 'block' }}>{line2}</span>
          <span style={{ display: 'block' }}>
            <span className="draw-underline in" style={{ '--underline-delay': underlineDelay }}>{line3}</span>
          </span>
        </h1>

        <p className="reveal in" style={{
          margin: '34px auto 0', maxWidth: '32em', fontSize: 'clamp(15px, 1.5vw, 19px)', lineHeight: 1.95,
          color: 'var(--text-secondary)', fontWeight: 500, animationDelay: `${(tailDelay + 0.1).toFixed(2)}s`,
        }}>
          むずかしい技術を、誰もが使える道具に。<br />
          合同会社Classless は、東北・仙台から地域の現場に伴走し、<br className="hide-sp" />
          生成AIを「あたりまえ」に変えていきます。
        </p>

        <div className="reveal in" style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 42, flexWrap: 'wrap', animationDelay: `${(tailDelay + 0.28).toFixed(2)}s` }}>
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
