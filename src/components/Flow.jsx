/* Classless corporate site — 導入の流れ (5-step onboarding timeline) */
function Flow() {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, Arrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const fl1 = s.chars('無料AX診断から始まる、');
  const fl2 = s.chars('伴走のステップ。', 'blue');
  const sTitleN = s.count();

  const isNarrow = useFlowNarrow();

  const steps = [
    { no: '1', tone: 'blue', title: '無料AX診断のご予約', free: true, body: '業務効率化のためのAI導入を検討されたら、まずはご相談ください。' },
    { no: '2', tone: 'green', title: '業務ヒアリング', body: '受け取る資料、現在の手順、確認者、納品物、例外時の対応を確認します。' },
    { no: '3', tone: 'orange', title: '対象範囲のご提案', body: '利用中のツールと業務範囲を踏まえ、実務で担当する範囲と自動化する範囲をご提示します。' },
    { no: '4', tone: 'red', title: '手順・試行結果の確認', body: '小さな業務単位で試行し、処理結果と人が確認する箇所を一緒に確かめます。' },
    { no: '5', tone: 'blue', title: '契約・運用開始', body: '合意した手順で業務を開始し、成果物と確認履歴を残しながら見直します。', chips: ['NDA締結', '最小権限アクセス', '運用手順の共有'] },
  ];

  const card = {
    background: '#fff',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
  };

  return (
    <section id="flow" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div style={{ maxWidth: '42em' }}>
          <div className="reveal"><Eyebrow tone="blue">Get Started</Eyebrow></div>
          <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, lineHeight: 1.32, letterSpacing: '0.01em', '--n': sTitleN, '--win': 7 }}>
            <span style={{ display: 'block' }}>{fl1}</span>
            <span style={{ display: 'block' }}>{fl2}</span>
          </h2>
          <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24, animationDelay: '0.16s' }}>
            <Badge tone="blue" variant="soft" size="md">初回相談 無料</Badge>
            <Badge tone="green" variant="soft" size="md">開始時期は対象業務の確認後にご案内</Badge>
          </div>
        </div>

        {/* timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 22px)', marginTop: 'clamp(44px, 5.5vw, 76px)' }}>
          {steps.map((st) => (
            <div key={st.no} className="reveal" style={{
              ...card,
              padding: 'clamp(22px, 2.6vw, 32px)',
              display: 'grid',
              gridTemplateColumns: isNarrow ? 'auto 1fr' : 'auto 1fr',
              gap: 'clamp(18px, 2.4vw, 30px)',
              alignItems: 'start',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.8,
                color: `var(--brand-${st.tone})`,
              }}>{st.no}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 900, lineHeight: 1.3 }}>{st.title}</h3>
                  {st.free && <Badge tone="blue" variant="solid" size="sm">FREE</Badge>}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 10, maxWidth: '40em' }}>{st.body}</p>
                {st.chips && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 16 }}>
                    {st.chips.map((c) => (
                      <span key={c} style={{
                        fontFamily: 'var(--font-jp)', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)',
                        padding: '6px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: 'var(--color-bg-subtle)',
                      }}>{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* closing */}
        <div className="reveal" style={{
          marginTop: 'clamp(40px, 5vw, 72px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-jp)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '0.01em', lineHeight: 1.3, color: 'var(--brand-blue)' }}>開始時期をご案内</span>
            <span style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: 'var(--text-primary)' }}>対象業務と連携先を確認したうえで決めます。</span>
          </div>
          <a href="/contact" className="cl-action-link cl-action-link--primary cl-action-link--lg" style={{ marginTop: 12 }}>無料AX診断を予約する <Arrow /></a>
        </div>

        <p className="reveal" style={{ fontSize: 12.5, lineHeight: 1.8, color: 'var(--text-muted)', marginTop: 'clamp(28px, 3vw, 40px)', textAlign: 'center' }}>
          ※開始までの期間は、業務範囲・資料の状態・連携先・確認体制によって異なります。
        </p>
      </div>
    </section>
  );
}

/* Narrow-viewport detector (no CSS breakpoints in this project). */
function useFlowNarrow() {
  const get = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches;
  const [narrow, setNarrow] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const on = () => setNarrow(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return narrow;
}

Object.assign(window, { Flow });
