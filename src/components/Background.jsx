/* Classless corporate site — Background (なぜ AI が「よくわからない」のか / 業種別の現場の声) */
function Background() {
  const { useReveal, Eyebrow } = window;
  const ref = useReveal();

  const cases = [
    {
      tone: 'blue', label: 'MANUFACTURING', name: '製造業',
      voice: '図面の保管場所や見積もりの確認手順が担当者ごとに異なり、引き継ぎに時間がかかる。',
    },
    {
      tone: 'orange', label: 'CONSTRUCTION', name: '建設業',
      voice: '現場ごとに届く写真と報告を整理し、日報へ転記して確認する作業が毎日発生する。',
    },
    {
      tone: 'green', label: 'LOGISTICS', name: '運送・物流',
      voice: '複数の方法で届く注文情報を一つの台帳へまとめ、配車担当者が内容を確認している。',
    },
    {
      tone: 'red', label: 'WHOLESALE / RETAIL', name: '卸売・小売',
      voice: '電話や書類で受けた注文を基幹システムへ入力し、担当者が差異を見直している。',
    },
    {
      tone: 'blue', label: 'HOSPITALITY', name: '旅館・観光',
      voice: '複数の予約経路から届く問い合わせを確認し、空室状況と回答内容を照合している。',
    },
    {
      tone: 'orange', label: 'FOOD PROCESSING', name: '食品加工',
      voice: '受注データの集計方法が一人の担当者に集中し、確認や出荷用データの作成を代替しにくい。',
    },
  ];

  return (
    <section id="background" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="reveal" style={{ maxWidth: '40em', marginBottom: 'clamp(48px, 6vw, 84px)' }}>
          <Eyebrow>Background</Eyebrow>
          <h2 style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.34 }}>
            任せたい業務はある。けれど、<span style={{ color: 'var(--brand-blue)' }}>手順が担当者の中にしかない</span>。
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.85, marginTop: 22 }}>
            まず必要なのは、新しいツールではなく、何を受け取り、どう処理し、誰が確認し、何を納品するかの整理です。
          </p>
        </div>

        {/* industry voices — 3-col, collapses via auto-fit/minmax */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(18px, 2vw, 26px)' }}>
          {cases.map((c, i) => (
            <div key={c.label} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderLeft: `4px solid var(--brand-${c.tone})`,
              borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(22px, 2.4vw, 30px)',
              display: 'flex', flexDirection: 'column', gap: 12, transition: 'transform .25s ease, box-shadow .25s ease',
              animationDelay: `${(i % 3) * 0.08}s`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.16em', fontWeight: 700, color: `var(--brand-${c.tone})` }}>{c.label}</span>
              <span style={{ fontSize: 'clamp(18px, 1.8vw, 21px)', fontWeight: 900, lineHeight: 1.4, color: 'var(--text-primary)' }}>{c.name}</span>
              <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--text-secondary)', margin: 0 }}>{c.voice}</p>
            </div>
          ))}
        </div>

        {/* closing statement */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <span className="cl-spectrum-bar" style={{ display: 'block', width: 64, margin: '0 auto 28px' }} />
          <p style={{ fontSize: 'clamp(23px, 3vw, 38px)', fontWeight: 900, lineHeight: 1.5, letterSpacing: '0.01em', margin: 0 }}>
            必要なのは、受領・処理・確認・納品を<br />
            <span style={{
              color: 'var(--brand-green)',
              borderBottom: '3px solid var(--brand-green)', paddingBottom: 2,
            }}>一緒に整理して運用する相手</span>です。
          </p>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Background });
