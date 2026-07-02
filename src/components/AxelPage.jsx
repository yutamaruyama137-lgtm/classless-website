/* Classless — アクセル事業ページのヒーロー。
   既存のBPO×DXセクション群(Background/RoleSplit/WhatWeDo/Voices/Pricing/Flow/Faq)を
   このヒーローの下に再利用する。ブランド色はロゴアイコンの 青→ピンク グラデ。 */

function AxelHero({ onNav }) {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Arrow } = window;
  const ref = useReveal();

  const AXEL_GRAD = 'linear-gradient(90deg, #2b50f0, #f0367c)';

  const badges = ['時間単価制 ¥3,000/h〜', '初期費用 0円', '最短2週間で稼働'];

  return (
    <section id="axel-hero" ref={ref} style={{
      position: 'relative', overflow: 'hidden', background: 'var(--color-bg)',
      paddingTop: 'clamp(64px, 9vw, 130px)', paddingBottom: 'clamp(56px, 7vw, 100px)',
    }}>
      {/* アクセルカラーの平面シェイプ */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <span className="geo-float" style={{ position: 'absolute', top: '10%', right: '-3%', width: 230, height: 84, background: 'rgba(43,80,240,0.10)', transform: 'skewX(-18deg)' }} />
        <span className="geo-float" style={{ position: 'absolute', top: '24%', right: '7%', width: 120, height: 44, background: 'rgba(240,54,124,0.55)', transform: 'skewX(-18deg)', animationDelay: '1.4s' }} />
        <span className="geo-float" style={{ position: 'absolute', bottom: '12%', left: '-2%', width: 180, height: 62, background: 'rgba(43,80,240,0.08)', transform: 'skewX(-18deg)', animationDelay: '0.7s' }} />
      </div>

      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'clamp(36px, 5vw, 80px)', alignItems: 'center' }}>
          <div>
            <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', color: 'var(--text-muted)' }}>
              BUSINESS / <span style={{ color: '#2b50f0', fontWeight: 700 }}>AXEL</span>
            </div>
            <img src="/assets/logo-axel.png" alt="アクセル" className="reveal" style={{ width: 'clamp(210px, 26vw, 320px)', marginTop: 26, animationDelay: '0.06s' }} />
            <h1 className="reveal" style={{ fontSize: 'clamp(27px, 3.6vw, 48px)', fontWeight: 900, lineHeight: 1.4, letterSpacing: '0.015em', marginTop: 26, animationDelay: '0.12s' }}>
              AI×BPOで、<br />事業成長を<span style={{ backgroundImage: AXEL_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>加速</span>させる。
            </h1>
            <p className="reveal" style={{ fontSize: 'clamp(15px, 1.6vw, 17.5px)', lineHeight: 2, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 22, maxWidth: '32em', animationDelay: '0.2s' }}>
              アクセルは、企業のオペレーションとスピードを加速させる時間単価制のAI×BPOサービス。経理・営業事務・採用・マーケまで業務をまるごと巻き取り、AIによる自動化・定着までを一気通貫で伴走します。
            </p>
            <div className="reveal" style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap', animationDelay: '0.28s' }}>
              {badges.map((b) => (
                <span key={b} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 15px', borderRadius: 999,
                  border: '1px solid var(--color-border)', background: '#fff',
                  fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 13, color: 'var(--text-secondary)',
                }}>
                  <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 999, background: AXEL_GRAD }} />
                  {b}
                </span>
              ))}
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap', animationDelay: '0.36s' }}>
              <a href="/contact"><Button size="lg" iconRight={<Arrow />}>無料AX診断を予約する</Button></a>
              <Button size="lg" variant="secondary" tone="ink" onClick={() => onNav && onNav('pricing')}>料金プランを見る</Button>
            </div>
          </div>

          {/* ロゴアイコンを主役に据えたビジュアル */}
          <div className="reveal hide-sp" style={{ display: 'flex', justifyContent: 'center', animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', width: 'clamp(220px, 24vw, 330px)' }}>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '-14%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(43,80,240,0.10), transparent 65%)' }} />
              <img src="/assets/icon-axel.png" alt="" style={{ position: 'relative', width: '100%', filter: 'drop-shadow(0 24px 48px rgba(43,80,240,0.22))' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AxelHero });
