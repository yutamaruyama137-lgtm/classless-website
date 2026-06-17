/* Classless corporate site — Background (なぜ AI が「よくわからない」のか / 業種別の現場の声) */
function Background() {
  const { useReveal, Eyebrow } = window;
  const ref = useReveal();

  const cases = [
    {
      tone: 'blue', label: 'MANUFACTURING', name: '製造業',
      voice: '図面の管理も、見積もりの勘所も、ぜんぶベテランの頭の中。あの人が辞めたらと思うと…',
    },
    {
      tone: 'orange', label: 'CONSTRUCTION', name: '建設業',
      voice: '現場写真の整理と日報の作成だけで、所長が毎晩1時間。本当は段取りに使いたい時間なのに',
    },
    {
      tone: 'green', label: 'LOGISTICS', name: '運送・物流',
      voice: '配車は長年のカン。注文書はいまだにFAXで届く。デジタル化と言われても、どこから？',
    },
    {
      tone: 'red', label: 'WHOLESALE / RETAIL', name: '卸売・小売',
      voice: '受発注は電話とFAX。手で転記するから、月に何度もミスが出る。でも回ってはいるんだよな',
    },
    {
      tone: 'blue', label: 'HOSPITALITY', name: '旅館・観光',
      voice: '予約の問い合わせ対応に、女将が一日中追われている。お客様と向き合う時間が削られていく',
    },
    {
      tone: 'orange', label: 'FOOD PROCESSING', name: '食品加工',
      voice: '受注の集計はExcelが得意なひとりに頼りきり。その人が休むと、出荷が止まりかねない',
    },
  ];

  return (
    <section id="background" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="reveal" style={{ maxWidth: '40em', marginBottom: 'clamp(48px, 6vw, 84px)' }}>
          <Eyebrow>Background</Eyebrow>
          <h2 style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.34 }}>
            DXだ、AIだと言われるけれど——正直、<span style={{ color: 'var(--brand-blue)' }}>よくわからない</span>。
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.85, marginTop: 22 }}>
            でも、使わなきゃいけない気はしている。その感覚は、間違っていません。
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
              <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--text-secondary)', margin: 0 }}>「{c.voice}」</p>
            </div>
          ))}
        </div>

        {/* closing statement */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <span className="cl-spectrum-bar" style={{ display: 'block', width: 64, margin: '0 auto 28px' }} />
          <p style={{ fontSize: 'clamp(23px, 3vw, 38px)', fontWeight: 900, lineHeight: 1.5, letterSpacing: '0.01em', margin: 0 }}>
            足りないのは知識ではなく、<br />
            <span style={{
              color: 'var(--brand-green)',
              borderBottom: '3px solid var(--brand-green)', paddingBottom: 2,
            }}>丸ごと任せられる相手</span>。
          </p>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Background });
