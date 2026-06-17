/* Classless corporate site — 導入事例（軽め・指標中心）
   英タグ＋業種＋1行見出し＋主要指標を、2×2のコンパクトカードで。
   白基調＋チャコール、数値はmono。トークン使用・絵文字なし・reveal。 */
function Cases() {
  const { useReveal, Eyebrow } = window;
  const ref = useReveal();

  const cases = [
    {
      en: 'AI TRAINING', tone: 'blue',
      industry: '小売業・FC加盟店（30店舗）',
      title: '3ヶ月で30店舗のSNS相談文化を醸成。',
      metrics: [
        { value: '月60万', label: 'SNS外注費 削減' },
        { value: '年720万', label: '削減効果' },
        { value: '約1ヶ月', label: '投資回収' },
      ],
    },
    {
      en: 'BUSINESS AX', tone: 'orange',
      industry: '製造業（80〜100名）',
      title: '月次レポートを完全自動化。',
      metrics: [
        { value: '60h→0', label: '月次工数' },
        { value: '年252万', label: '削減効果' },
        { value: '約2.5ヶ月', label: '投資回収' },
      ],
    },
    {
      en: 'SYSTEM DEVELOPMENT', tone: 'green',
      industry: '教育・学習塾（50〜60名）',
      title: '運営オペレーションをAIで再設計。',
      metrics: [
        { value: '月40h', label: '対応工数 削減' },
        { value: '年72万', label: '削減効果' },
        { value: '約3ヶ月', label: '投資回収' },
      ],
    },
    {
      en: 'BUSINESS AX × AI TRAINING', tone: 'red',
      industry: 'サービス業（30〜50名）',
      title: '勤怠自動化＋週1回のAIレッスン。',
      metrics: [
        { value: '年182万', label: '改善効果' },
        { value: '80%', label: '全社員AI活用率' },
        { value: '約4.5ヶ月', label: '投資回収' },
      ],
    },
  ];

  return (
    <section id="cases" ref={ref} style={{ background: '#fff', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="reveal"><Eyebrow>Case Study</Eyebrow></div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 14, marginTop: 18, marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <h2 className="reveal" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, letterSpacing: '0.01em', lineHeight: 1.32 }}>
            導入の成果を、<span style={{ color: 'var(--brand-blue)' }}>数字</span>で。
          </h2>
          <span className="reveal" style={{ fontSize: 12.5, color: 'var(--text-muted)', fontWeight: 500, animationDelay: '0.1s' }}>※成果は一例です。</span>
        </div>

        {/* 2×2 cards */}
        <div className="cards-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(18px, 2.4vw, 28px)' }}>
          {cases.map((c, i) => (
            <div key={c.en} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(24px, 2.6vw, 34px)',
              display: 'flex', flexDirection: 'column', animationDelay: `${0.08 * i}s`,
            }}>
              {/* tag + industry */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: `var(--brand-${c.tone})`,
                }}>{c.en}</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>{c.industry}</span>
              </div>

              {/* 1-line headline */}
              <h3 style={{ fontSize: 'clamp(17px, 1.8vw, 21px)', fontWeight: 900, lineHeight: 1.45, marginBottom: 'clamp(20px, 2.4vw, 28px)' }}>{c.title}</h3>

              {/* metrics */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px, 2vw, 28px)', marginTop: 'auto', paddingTop: 18, borderTop: '1px solid var(--color-border)' }}>
                {c.metrics.map((m) => (
                  <div key={m.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 800,
                      lineHeight: 1, color: 'var(--text-primary)', letterSpacing: '-0.01em',
                    }}>{m.value}</span>
                    <span style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)' }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Cases });
