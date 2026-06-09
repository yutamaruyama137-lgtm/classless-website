/* Classless — 事業内容 detail page (LayerX-style scroll-through) */

function DetailHero() {
  const { ColorField, useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const h1Ref = useScrollVar(0.5, 0.92, 0.5);
  const s1 = makeSplit();
  const dTitle = s1.chars('事業内容');
  const dTitleN = s1.count();
  const h2Ref = useScrollVar(0.5, 0.9, 0.46);
  const s2 = makeSplit();
  const dl1 = s2.chars('Classless は、地方の');
  const dl2 = s2.chars('あらゆる現場の課題解決に');
  const dl3 = s2.chars('挑戦を続けています。');
  const dLeadN = s2.count();
  return (
    <section ref={ref} style={{ paddingTop: 'clamp(72px, 9vw, 128px)', paddingBottom: 'clamp(40px, 5vw, 72px)' }}>
      <div className="cl-container">
        <div className="reveal"><Eyebrow>Business</Eyebrow></div>
        <h1 ref={h1Ref} className="split-host" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.02em', '--n': dTitleN, '--win': 4 }}>{dTitle}</h1>

        {/* animated color band (the overlapping-color signature) */}
        <div className="reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-2xl)', height: 'clamp(200px, 28vw, 360px)', marginTop: 'clamp(36px, 5vw, 64px)', background: 'var(--color-bg-subtle)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)', animationDelay: '0.12s' }}>
          <ColorField density="hero" />
          <span className="cl-spectrum-bar" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 6, borderRadius: 0 }} />
        </div>

        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(28px, 5vw, 80px)', alignItems: 'end', marginTop: 'clamp(40px, 5vw, 72px)' }}>
          <h2 ref={h2Ref} className="split-host" style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', fontWeight: 900, lineHeight: 1.4, letterSpacing: '0.01em', '--n': dLeadN, '--win': 8 }}>
            <span style={{ display: 'block' }}>{dl1}</span>
            <span style={{ display: 'block' }}>{dl2}</span>
            <span style={{ display: 'block' }}>{dl3}</span>
          </h2>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, animationDelay: '0.12s' }}>
            むずかしい技術を、誰もが使える道具に。AI BPO・AIシステム開発・データベース最適化・AI教育の4つの領域で、地域の「できる」を増やしていきます。
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({ b, flip }) {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, BrandVisual, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.92, 0.5);
  const s = makeSplit();
  const bTitle = s.chars(b.title);
  const bTitleN = s.count();
  return (
    <section id={b.id} ref={ref} style={{ background: flip ? 'var(--color-bg-subtle)' : 'transparent', paddingTop: 'clamp(56px, 8vw, 112px)', paddingBottom: 'clamp(56px, 8vw, 112px)' }}>
      <div className="cl-container">
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'start' }}>

          {/* title rail */}
          <div style={{ order: flip ? 2 : 1 }}>
            <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: `var(--brand-${b.tone})`, letterSpacing: '0.1em' }}>({b.no})</div>
            <div className="reveal" style={{ marginTop: 14, animationDelay: '0.06s' }}>
              <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', fontWeight: 900, lineHeight: 1.2, '--n': bTitleN, '--win': 5 }}>{bTitle}</h2>
            </div>
            <div className="reveal" style={{ marginTop: 16, animationDelay: '0.1s' }}>
              <Badge tone={b.tone} variant="soft" size="sm">{b.tag}</Badge>
            </div>
            <h3 className="reveal" style={{ fontSize: 'clamp(19px, 2vw, 26px)', fontWeight: 900, lineHeight: 1.55, marginTop: 28, maxWidth: '15em', animationDelay: '0.14s' }}>{b.subtitle}</h3>
          </div>

          {/* image + copy + service items */}
          <div style={{ order: flip ? 1 : 2 }}>
            <div className={flip ? 'slide-l' : 'slide-r'}>
              <div className="parallax" data-parallax={flip ? 0.05 : 0.06}>
                <BrandVisual tone={b.tone} image={b.image} ratio="16 / 10" label={`business / ${b.tag.toLowerCase()}`} className="svc-visual" />
              </div>
            </div>
            <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', marginTop: 30 }}>{b.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesDetail() {
  const businesses = [
    { no: '01', id: 'svc-01', tone: 'blue', tag: 'AI BPO', title: 'AI BPO', image: '/business/ai-bpo.png',
      subtitle: '繰り返しの業務をAIに任せ、人はより価値ある仕事へ。',
      body: 'ヒアリングから設計・実装・定着支援まで一気通貫で対応します。SNS運用・営業メール・データ処理など、あらゆる定型業務を自動化し、人にしかできない仕事に集中できる環境をつくります。',
      items: [
        { d: '2026.05.20', t: 'SNS運用代行にAIを導入し、投稿作成の工数を最大70%削減' },
        { d: '2026.04.10', t: '営業メールの自動生成・送信フローを構築し、返信率が向上' },
        { d: '2026.03.02', t: 'バックオフィスのデータ入力をAIエージェントで自動化' },
      ] },
    { no: '02', id: 'svc-02', tone: 'orange', tag: 'System Development', title: 'AIシステム開発', image: '/business/ai-system.png',
      subtitle: '業種特化型のAIエージェントを、御社専用に。',
      body: '既製ツールでは解決できない課題に対し、業務フローに合わせたオーダーメイドのAIシステムを設計・開発します。外部CAIO（AI統括人材）の派遣もセットで提供し、開発から運用までを伴走します。',
      items: [
        { d: '2026.05.08', t: '製造業向けの業務特化AIエージェントを共同開発' },
        { d: '2026.04.18', t: '外部CAIO（AI統括人材）派遣プログラムの提供を開始' },
        { d: '2026.03.15', t: '社内ナレッジ検索AIをオーダーメイドで構築' },
      ] },
    { no: '03', id: 'svc-03', tone: 'green', tag: 'Database Optimization', title: 'データベース最適化', image: '/business/database.png',
      subtitle: 'AIが正しく機能する、データの土台をつくる。',
      body: 'データの整理・構造化・最適化を行い、社内に散らばった情報資産を整備します。AIが本来の力を発揮できる基盤を構築し、導入効果を最大化します。',
      items: [
        { d: '2026.05.02', t: '散在する顧客データを統合し、AI活用の基盤を整備' },
        { d: '2026.04.05', t: '社内ドキュメントの構造化・タグ付けを自動化' },
        { d: '2026.02.28', t: 'データ品質を可視化するダッシュボードを提供' },
      ] },
    { no: '04', id: 'svc-04', tone: 'red', tag: 'AI Education', title: 'AI教育', image: '/business/ai-education.png',
      subtitle: 'ツールを導入して終わりにしない。',
      body: '社内でAIを使いこなせる人材を育てる研修・ワークショップを提供します。現場で即実践できるプログラム設計が強みで、組織にAI活用の文化を根づかせます。',
      items: [
        { d: '2026.05.15', t: '自治体向けのAI人材育成プログラムを開講' },
        { d: '2026.04.22', t: '管理職向け「AIマネジメント研修」を提供開始' },
        { d: '2026.03.10', t: '現場実践型ワークショップを東北6県で展開' },
      ] },
  ];
  return (
    <React.Fragment>
      <DetailHero />
      {businesses.map((b, i) => <ServiceBlock key={b.id} b={b} flip={i % 2 === 1} />)}
    </React.Fragment>
  );
}
Object.assign(window, { ServicesDetail });
