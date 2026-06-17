/* Classless corporate site — 導入の流れ (5-step onboarding timeline) */
function Flow() {
  const { Badge, Button } = window.ClasslessDesignSystem_225e16;
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
    { no: '2', tone: 'green', title: 'ヒアリング', body: '独自の手法で社内のAI活用度をヒアリング・スコアリング。' },
    { no: '3', tone: 'orange', title: 'プランのご提案', body: '100以上のツールから最適な構成と導入方法をレポートでご提示。' },
    { no: '4', tone: 'red', title: '実装デモのご共有', body: 'インタラクティブなデモで、完成イメージを明確化します。' },
    { no: '5', tone: 'blue', title: '契約・利用開始', body: '導入から運用まで、専任の担当者が継続的にサポート。', chips: ['NDA締結', '最小権限アクセス', 'ガイドライン策定支援'] },
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
            <Badge tone="green" variant="soft" size="md">最短2週間で稼働</Badge>
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
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 'clamp(38px, 6vw, 64px)', letterSpacing: '-0.01em', lineHeight: 1, color: 'var(--brand-blue)' }}>最短2週間</span>
            <span style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: 'var(--text-primary)' }}>ご相談から業務稼働開始まで。</span>
          </div>
          <a href="/contact" style={{ marginTop: 12 }}>
            <Button size="lg" iconRight={<Arrow />}>無料AX診断を予約する</Button>
          </a>
        </div>

        <p className="reveal" style={{ fontSize: 12.5, lineHeight: 1.8, color: 'var(--text-muted)', marginTop: 'clamp(28px, 3vw, 40px)', textAlign: 'center' }}>
          ※業務の複雑さや範囲により前後する場合があります。
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
