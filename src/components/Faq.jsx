/* Classless corporate site — FAQ (accordion) */
function Faq() {
  const { useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const qTitle = s.chars('よくあるご質問。');
  const qTitleN = s.count();

  const [open, setOpen] = React.useState(0);

  const items = [
    {
      q: '何から始めればいいですか？',
      a: 'まずは無料のAX診断から。現状の業務とAI活用度を可視化し、最適な進め方をご提案します。',
    },
    {
      q: '導入までどのくらいかかりますか？',
      a: '最短2週間程度で稼働開始が可能です。業務の複雑さや範囲により前後する場合があります。',
    },
    {
      q: 'どのようなツールに対応していますか？',
      a: 'Slack・Google Workspace・Microsoft 365、各種クラウド会計ソフト、CRM/SFAなど幅広く対応します。',
    },
    {
      q: '情報管理は大丈夫ですか？',
      a: 'NDA締結、アクセス権限の最小化、セキュリティ研修済みのメンバーが対応します。安心してお任せください。',
    },
    {
      q: '途中でプランを変更できますか？',
      a: 'はい、業務量の増減に合わせて柔軟に調整いただけます。スモールスタートからの拡大も歓迎です。',
    },
    {
      q: '社内にAI人材がいなくても大丈夫？',
      a: '問題ありません。Classlessが「AX担当の外部責任者」として、設計から実装・定着まで一気通貫で代行します。',
    },
  ];

  return (
    <section id="faq" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div style={{ maxWidth: '36em' }}>
          <div className="reveal"><Eyebrow tone="green">FAQ</Eyebrow></div>
          <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, lineHeight: 1.32, letterSpacing: '0.01em', '--n': qTitleN, '--win': 6 }}>{qTitle}</h2>
        </div>

        {/* accordion */}
        <div className="reveal" style={{ marginTop: 'clamp(40px, 5vw, 72px)', maxWidth: '60em', display: 'flex', flexDirection: 'column', gap: 14, animationDelay: '0.1s' }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
              }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 16,
                    padding: 'clamp(20px, 2.4vw, 28px)', background: 'transparent', border: 'none',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 15, color: 'var(--brand-blue)', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ flex: 1, fontFamily: 'var(--font-jp)', fontWeight: 800, fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    {it.q}
                  </span>
                  <Chevron open={isOpen} />
                </button>
                <div style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows var(--dur, 0.3s) var(--ease-out, ease)',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{
                      margin: 0,
                      padding: '0 clamp(20px, 2.4vw, 28px) clamp(22px, 2.4vw, 28px)',
                      paddingLeft: 'calc(clamp(20px, 2.4vw, 28px) + 15px + 16px)',
                      fontSize: 15, lineHeight: 1.95, color: 'var(--text-secondary)',
                    }}>
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Rotating chevron for the accordion toggle. */
function Chevron({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{
      flexShrink: 0,
      color: 'var(--text-muted)',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform var(--dur, 0.3s) var(--ease-out, ease)',
    }}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

Object.assign(window, { Faq });
