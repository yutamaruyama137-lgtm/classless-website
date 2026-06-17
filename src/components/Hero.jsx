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

  const line1 = chars('業務を巻き取り、仕組みから変える。');
  const line2a = chars('BPO × DX', 'blue');
  const line2b = chars('サービス。');
  const tailDelay = BASE + n * STEP; // 見出し完了の目安
  const underlineDelay = `${(tailDelay + 0.2).toFixed(2)}s`;

  return (
    <section id="top" ref={ref} style={{
      position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center',
      overflow: 'hidden', background: 'var(--color-bg)',
    }}>
      <div className="hero-aurora" aria-hidden="true" />
      <ColorField density="hero" />

      <div className="cl-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: 96, paddingBottom: 120 }}>
        <div className="reveal in" style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: 26, animationDelay: '0.05s' }}>
          <span className="cl-eyebrow" style={{ fontSize: 13 }}>BPO × DX × AI</span>
        </div>

        <h1 style={{ fontSize: 'clamp(27px, 4vw, 50px)', fontWeight: 900, lineHeight: 1.32, letterSpacing: '0.02em', margin: 0 }}>
          <span style={{ display: 'block' }}>{line1}</span>
          <span style={{ display: 'block' }}>
            {line2a}{line2b}
          </span>
        </h1>

        <p className="reveal in" style={{
          margin: '22px auto 0', maxWidth: '24em', fontSize: 'clamp(17px, 2vw, 25px)', fontWeight: 800,
          lineHeight: 1.6, color: 'var(--text-primary)', animationDelay: `${(tailDelay + 0.06).toFixed(2)}s`,
        }}>
          社員が<span className="draw-underline in" style={{ '--underline-delay': underlineDelay }}>「事業を伸ばす」</span>ことに集中できる組織へ。
        </p>

        <div className="reveal in" style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 26, flexWrap: 'wrap', animationDelay: `${(tailDelay + 0.18).toFixed(2)}s` }}>
          {['初期費用0円', '最短2週間で稼働'].map((b) => (
            <span key={b} style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 15px', borderRadius: 999,
              border: '1px solid var(--color-border)', background: 'var(--color-bg)',
              fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 13, color: 'var(--text-secondary)',
            }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--brand-blue)' }} />
              {b}
            </span>
          ))}
        </div>

        <p className="reveal in" style={{
          margin: '28px auto 0', maxWidth: '34em', fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.95,
          color: 'var(--text-secondary)', fontWeight: 500, animationDelay: `${(tailDelay + 0.28).toFixed(2)}s`,
        }}>
          経理・営業事務・採用・マーケまで。<br className="hide-sp" />
          DXもBPOも、AIでまるっと。繰り返しの業務を巻き取り、自動化・定着まで伴走します。
        </p>

        <div className="reveal in" style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap', animationDelay: `${(tailDelay + 0.42).toFixed(2)}s` }}>
          <Button size="lg" iconRight={<Arrow />} onClick={() => onNav('contact')}>無料AX診断を予約する</Button>
          <Button size="lg" variant="secondary" tone="ink" onClick={() => onNav('pricing')}>料金プランを見る</Button>
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
