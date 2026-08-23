import './WorkflowShowcase.jsx';

/* Classless — アクセル事業ページのヒーロー。
   既存のBPO×DXセクション群(Background/RoleSplit/WhatWeDo/Voices/Pricing/Flow/Faq)を
   このヒーローの下に再利用する。ブランド色はロゴアイコンの 青→ピンク グラデ。 */

function AxelHero({ onNav }) {
  const { useReveal, Arrow } = window;
  const ref = useReveal();

  const AXEL_GRAD = 'linear-gradient(90deg, #2b50f0, #f0367c)';

  const badges = ['業務単位で相談', '人の確認工程を設計', '運用後も見直し'];

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
              任せたい業務を整理し、<br /><span style={{ backgroundImage: AXEL_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>実際に回る仕組み</span>にする。
            </h1>
            <p className="reveal" style={{ fontSize: 'clamp(15px, 1.6vw, 17.5px)', lineHeight: 2, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 22, maxWidth: '32em', animationDelay: '0.2s' }}>
              アクセルは、経理・営業事務・採用・マーケティングなどの業務を、設計と実務の両面から支えるAI×BPOサービスです。いま使っている資料や手順を起点に、入力・処理・確認・納品の流れを整えます。
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
              <a href="/contact" className="cl-action-link cl-action-link--primary cl-action-link--lg">対象業務を相談する <Arrow /></a>
              <a href="#whatwedo" className="cl-action-link cl-action-link--secondary cl-action-link--lg" onClick={(event) => { if (onNav) { event.preventDefault(); onNav('whatwedo'); } }}>業務例を見る</a>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="axel-hero-brief" aria-label="業務支援の流れ">
              <div className="axel-hero-brief__head"><span>OPERATION BRIEF</span><b>構成例</b></div>
              {[
                ['INPUT', '受け取る', '帳票・データ・担当者からの依頼'],
                ['WORK', '作業する', '入力・整理・照合・下書き'],
                ['CHECK', '確認する', '差異と例外を担当者へ返す'],
                ['OUTPUT', '納品する', '成果物・履歴・次回の手順'],
              ].map(([en, title, body], i) => (
                <div className="axel-hero-brief__row" key={en}>
                  <span>{String(i + 1).padStart(2, '0')}</span><div><small>{en}</small><strong>{title}</strong><p>{body}</p></div>
                </div>
              ))}
              <div className="axel-hero-brief__foot"><span /> 実際の業務に合わせて確認箇所を設計</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AxelHero });
