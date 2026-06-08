/* Classless corporate site — 事業内容 (4 business segments, Digital-Gorilla-style rows) */
function Services() {
  const { Badge, Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, BrandVisual, Arrow } = window;
  const ref = useReveal();

  const items = [
    {
      no: '01', tone: 'blue', tag: 'AI BPO',
      title: 'AI BPO',
      lead: '繰り返しの業務をAIに任せ、人間はより価値ある仕事へ。',
      body: 'ヒアリングから設計・実装・定着支援まで一気通貫で対応します。SNS運用・営業メール・データ処理など、あらゆる定型業務を自動化します。',
      chips: ['SNS運用', '営業メール', 'データ処理', '定着支援'],
    },
    {
      no: '02', tone: 'orange', tag: 'System Development',
      title: 'AIシステム開発',
      lead: '業種特化型のAIエージェントを、御社専用に。',
      body: '既製ツールでは解決できない課題に対し、業務フローに合わせたオーダーメイドのAIシステムを設計・開発。外部CAIO（AI統括人材）の派遣もセットで提供します。',
      chips: ['AIエージェント', 'オーダーメイド', '外部CAIO派遣'],
    },
    {
      no: '03', tone: 'green', tag: 'Database Optimization',
      title: 'データベース最適化',
      lead: 'AIが正しく機能する、データの土台をつくる。',
      body: 'AIの価値を最大化するために、データの整理・構造化・最適化を行います。社内に散らばった情報資産を整備し、AIが力を発揮できる基盤を構築します。',
      chips: ['整理', '構造化', '最適化'],
    },
    {
      no: '04', tone: 'red', tag: 'AI Education',
      title: 'AI教育',
      lead: 'ツールを導入して終わりにしない。',
      body: '社内でAIを使いこなせる人材を育てるための研修・ワークショップを提供します。現場で即実践できるプログラム設計が、私たちの強みです。',
      chips: ['研修', 'ワークショップ', '実践プログラム'],
    },
  ];

  return (
    <section id="services" ref={ref} style={{ background: 'var(--color-bg)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'end', marginBottom: 'clamp(48px, 6vw, 88px)' }}>
          <div>
            <div className="reveal"><Eyebrow>What We Do</Eyebrow></div>
            <h2 className="reveal" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.32, animationDelay: '0.1s' }}>
              4つの領域で、<br />AI活用をまるごと支える。
            </h2>
          </div>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, animationDelay: '0.18s' }}>
            AI BPO・AIシステム開発・データベース最適化。3つの軸に、人を育てる「AI教育」を加えた4つの領域で、御社のAI活用を一気通貫で支えます。
          </p>
        </div>

        {/* rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(56px, 7vw, 104px)' }}>
          {items.map((it, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={it.no} className="svc-row reveal" style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px, 5vw, 72px)', alignItems: 'center',
              }}>
                {/* text */}
                <div style={{ order: flip ? 2 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 18 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(44px, 6vw, 84px)', lineHeight: 0.8, color: `var(--brand-${it.tone})` }}>{it.no}</span>
                    <Badge tone={it.tone} variant="soft" size="sm">{it.tag}</Badge>
                  </div>
                  <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, lineHeight: 1.3, marginBottom: 12 }}>{it.title}</h3>
                  <p style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: 14 }}>{it.lead}</p>
                  <p style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', maxWidth: '36em' }}>{it.body}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 24 }}>
                    {it.chips.map((c) => (
                      <span key={c} style={{
                        fontFamily: 'var(--font-jp)', fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)',
                        padding: '7px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: '#fff',
                      }}>{c}</span>
                    ))}
                  </div>
                </div>

                {/* visual */}
                <div className={flip ? 'slide-l' : 'slide-r'} style={{ order: flip ? 1 : 2 }}>
                  <div className="parallax" data-parallax={flip ? 0.045 : 0.06} style={{ position: 'relative' }}>
                    <BrandVisual tone={it.tone} ratio="5 / 4" label={`service / ${it.tag.toLowerCase()}`} className="svc-visual" />
                    <span style={{
                      position: 'absolute', top: -16, [flip ? 'right' : 'left']: -10, zIndex: 2,
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--color-bg)', padding: '4px 10px',
                    }}>{it.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(52px, 6vw, 84px)' }}>
          <a href="/business"><Button variant="secondary" tone="ink" size="lg" iconRight={<Arrow />}>事業内容をくわしく見る</Button></a>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Services });
