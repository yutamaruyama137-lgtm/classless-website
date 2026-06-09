/* Classless corporate site — mission / philosophy band (LayerX-style statement) */
function Mission() {
  const { useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const ml1 = s.chars('AIで、');
  const ml2 = [...s.chars('人間を'), ...s.chars('面白く', 'green'), ...s.chars('する。')];
  const mTitleN = s.count();
  return (
    <section id="mission" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)', position: 'relative', overflow: 'hidden' }}>
      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal"><Eyebrow>Our Mission</Eyebrow></div>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'clamp(32px, 5vw, 88px)', alignItems: 'end', marginTop: 28 }}>
          <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(28px, 4.2vw, 56px)', fontWeight: 900, lineHeight: 1.32, letterSpacing: '0.01em', '--n': mTitleN, '--win': 6 }}>
            <span style={{ display: 'block' }}>{ml1}</span>
            <span style={{ display: 'block' }}>{ml2}</span>
          </h2>
          <div className="reveal" style={{ animationDelay: '0.22s' }}>
            <p style={{ fontSize: 16, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500 }}>
              都市と地方の差は、情報と技術へのアクセスの差です。私たちはその差を、AIで埋めていきます。
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 18 }}>
              導入して終わりにしない。設計から実装、社内への定着までを伴走し、地域の一人ひとりが自分の力でAIを使いこなせる状態をつくります。
            </p>
            <a href="/philosophy" className="arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>
              経営理念を見る
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 30 }}>
              <span className="cl-spectrum-bar" style={{ width: 56, height: 5 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>東北・仙台発 / 全国の地域とともに</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Mission });
