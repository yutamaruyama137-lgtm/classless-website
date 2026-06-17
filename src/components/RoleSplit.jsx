/* Classless corporate site — RoleSplit (役割分担: 現場はあなた、AIは私たち) */
function RoleSplit() {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, Arrow } = window;
  const ref = useReveal();

  const you = [
    { t: '現場を教える', d: 'どんな仕事で、どこが大変か。現場の言葉のままで充分です' },
    { t: '方針を決める', d: '私たちの提案に「やる・やらない」の判断をするだけ' },
    { t: 'あとは任せる', d: '横文字の勉強も、ツール選びも、一切不要です' },
  ];
  const us = [
    { t: '最新AIを学び続ける', d: '毎日生まれる新ツールの目利きは、私たちの本業です' },
    { t: '御社に合う形に作る', d: '現場をヒアリングし、いまの業務にそのまま組み込む' },
    { t: '現場に定着させる', d: '使われるまで伴走。研修も運用もセットで請け負います' },
  ];
  const steps = ['可視化', '最適化', '定着'];

  // inline icons (24x24, stroke2, currentColor)
  const IconUser = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  );
  const IconSpark = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /><circle cx="12" cy="12" r="3" /></svg>
  );

  const Column = ({ side, accent, badge, kicker, items, IconC }) => (
    <div className="reveal" style={{
      background: '#fff',
      border: `1px solid ${side === 'us' ? 'var(--brand-blue)' : 'var(--color-border)'}`,
      borderTop: `4px solid ${side === 'us' ? 'var(--brand-blue)' : 'var(--color-border-strong)'}`,
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
      padding: 'clamp(26px, 3vw, 40px)', display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42,
          borderRadius: 'var(--radius-md)', color: accent,
          background: side === 'us' ? 'var(--color-bg)' : '#fff', border: `1px solid ${accent}`,
        }}><IconC /></span>
        <Badge tone={badge} variant="soft" size="sm">{side === 'us' ? 'CLASSLESS' : 'YOU'}</Badge>
      </div>
      <h4 style={{ fontSize: 'clamp(19px, 2vw, 24px)', fontWeight: 900, lineHeight: 1.4, margin: 0 }}>{kicker}</h4>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
        {items.map((it, i) => (
          <li key={it.t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <span style={{
              flex: '0 0 auto', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14,
              width: 30, height: 30, borderRadius: 'var(--radius-pill)', color: accent,
              border: `1.5px solid ${accent}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>{i + 1}</span>
            <div>
              <div style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.5 }}>{it.t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: 4 }}>{it.d}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <section id="approach" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="reveal" style={{ maxWidth: '42em', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <Eyebrow>Our Approach</Eyebrow>
          <h2 style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.34 }}>
            経営者が、AIを無理に<span style={{ color: 'var(--brand-orange)' }}>学ぶ必要</span>はありません。
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.85, marginTop: 20 }}>
            経理を税理士に任せるように、AIは私たちに。学ぶのは、私たちの仕事です。
          </p>
        </div>

        {/* big sub-heading: あなた vs 私たち */}
        <h3 className="reveal" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, lineHeight: 1.45, letterSpacing: '0.01em', marginBottom: 'clamp(32px, 4vw, 52px)' }}>
          現場を知るのは、<span style={{ color: 'var(--brand-orange)' }}>あなた</span>。AIを知るのは、<span style={{ color: 'var(--brand-blue)' }}>私たち</span>。
        </h3>

        {/* two columns */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 32px)', alignItems: 'stretch' }}>
          <Column side="you" accent="var(--brand-orange)" badge="orange" kicker="経営者がやることは、3つだけ" items={you} IconC={IconUser} />
          <Column side="us" accent="var(--brand-blue)" badge="blue" kicker="私たちがやること、ぜんぶ" items={us} IconC={IconSpark} />
        </div>

        {/* process band */}
        <div className="reveal" style={{
          marginTop: 'clamp(36px, 4vw, 56px)', background: '#fff', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(22px, 2.6vw, 34px)',
          display: 'flex', flexDirection: 'column', gap: 22,
        }}>
          <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-secondary)', margin: 0 }}>
            「人に仕事をつける」から、業務がブラックボックス化する。だからまず——
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
            {steps.map((s, i) => (
              <React.Fragment key={s}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10, padding: '11px 20px',
                  borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: 'var(--color-bg-subtle)',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--brand-blue)' }}>{`0${i + 1}`}</span>
                  <span style={{ fontFamily: 'var(--font-jp)', fontSize: 15, fontWeight: 800, color: 'var(--text-primary)' }}>{s}</span>
                </span>
                {i < steps.length - 1 && (
                  <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}><Arrow s={18} /></span>
                )}
              </React.Fragment>
            ))}
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-secondary)', marginLeft: 4 }}>の順で進めます。</span>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { RoleSplit });
