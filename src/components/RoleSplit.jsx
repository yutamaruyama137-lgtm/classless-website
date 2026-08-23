/* Classless corporate site — RoleSplit (役割分担: 現場はあなた、AIは私たち) */
function RoleSplit() {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, Arrow } = window;
  const ref = useReveal();

  const you = [
    { t: '資料と依頼を共有する', d: '現在使っている帳票、入力データ、依頼方法をそのまま共有いただきます' },
    { t: '確認者と判断条件を決める', d: '金額・対外送信・例外など、社内で確認する箇所を決めます' },
    { t: '成果物を確認する', d: '納品物と確認ログを見て、修正点や次回の変更を伝えていただきます' },
  ];
  const us = [
    { t: '現行手順を整理する', d: '資料の受領から処理・確認・納品までを分解し、責任範囲を明確にします' },
    { t: '実務と仕組みをつくる', d: '定型作業を実行し、合意した範囲から連携や自動化を構築します' },
    { t: '履歴と手順を残す', d: '成果物、確認ログ、例外対応、次回運用の手順をまとめて共有します' },
  ];
  const steps = ['受領', '処理', '確認', '納品'];

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
            AIを学ぶ前に、<span style={{ color: 'var(--brand-orange)' }}>業務の受け渡し</span>を決めます。
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.85, marginTop: 20 }}>
            お客様が判断する箇所と、Classlessが担当する作業を分け、毎回同じ流れで確認できる状態にします。
          </p>
        </div>

        {/* big sub-heading: あなた vs 私たち */}
        <h3 className="reveal" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, lineHeight: 1.45, letterSpacing: '0.01em', marginBottom: 'clamp(32px, 4vw, 52px)' }}>
          業務の判断は、<span style={{ color: 'var(--brand-orange)' }}>お客様</span>。整理・実行・記録は、<span style={{ color: 'var(--brand-blue)' }}>Classless</span>。
        </h3>

        {/* two columns */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 32px)', alignItems: 'stretch' }}>
          <Column side="you" accent="var(--brand-orange)" badge="orange" kicker="お客様にお願いすること" items={you} IconC={IconUser} />
          <Column side="us" accent="var(--brand-blue)" badge="blue" kicker="Classlessが担当すること" items={us} IconC={IconSpark} />
        </div>

        {/* process band */}
        <div className="reveal" style={{
          marginTop: 'clamp(36px, 4vw, 56px)', background: '#fff', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(22px, 2.6vw, 34px)',
          display: 'flex', flexDirection: 'column', gap: 22,
        }}>
          <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-secondary)', margin: 0 }}>
            業務は、担当者名ではなく、受け渡しの流れで整理します。
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
