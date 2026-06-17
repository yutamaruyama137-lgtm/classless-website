/* Classless corporate site — 安心・信頼 (Trust & Quality)
   品質保証3カード + セキュリティ6項目。白基調＋チャコール、色アクセントは
   重要語1つだけ。トークン使用・絵文字なし・reveal。 */
function Trust() {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, Arrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();

  // section title (scroll-scrubbed per-character reveal)
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const t1 = s.chars('安心してお任せいただく、');
  const t2 = s.chars('品質', 'blue');
  const t3 = s.chars('とセキュリティ。');
  const titleN = s.count();

  // sub-heading (security)
  const secRef = useScrollVar(0.5, 0.9, 0.46);
  const s2 = makeSplit();
  const h1 = s2.chars('データを守る', 'green');
  const h2 = s2.chars('、6つの取り組み。');
  const h3 = null;
  const secN = s2.count();

  const quality = [
    {
      no: '01', tone: 'blue',
      title: '専任担当による品質管理',
      body: 'お客様と現場の間に必ず専任ディレクターが入り、進捗管理と品質チェックを実施。お客様の管理工数を最小化します。',
    },
    {
      no: '02', tone: 'orange',
      title: '定期的なパフォーマンス評価',
      body: '担当のパフォーマンスを定期的に評価。品質基準を満たさない場合は、迅速に体制の見直し・改善を行います。',
    },
    {
      no: '03', tone: 'green',
      title: 'フィードバックの反映サイクル',
      body: 'お客様からのフィードバックを随時収集し、業務プロセスや品質改善に反映。継続的な改善サイクルを回します。',
    },
  ];

  const flow = ['業務実行', '品質チェック', '納品', 'フィードバック反映'];

  const security = [
    { en: 'NDA', title: '秘密保持契約の締結', body: '業務開始前にNDAを締結し、お客様の機密情報を適切に保護します。' },
    { en: 'LEAST PRIVILEGE', title: 'アクセス権限の最小化', body: '業務に必要な最小限のアクセス権限のみを付与します。' },
    { en: 'TRAINING', title: 'セキュリティ研修', body: '情報セキュリティ・コンプライアンス研修を全メンバーへ実施済み。' },
    { en: 'ONGOING', title: '定期的な教育', body: '最新のセキュリティ脅威に対応するため、定期的に教育を実施。' },
    { en: 'INCIDENT', title: 'インシデント対応フロー', body: '万が一の際も迅速に対応できるよう、発生時の対応フローを整備。' },
    { en: 'GUIDELINE', title: '利用ガイドライン策定支援', body: '社内で安全にAIを活用するための利用ルール・ガイドライン策定も支援します。' },
  ];

  return (
    <section id="trust" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'end', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
          <div>
            <div className="reveal"><Eyebrow>Trust &amp; Quality</Eyebrow></div>
            <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.32, '--n': titleN, '--win': 7 }}>
              <span style={{ display: 'block' }}>{t1}</span>
              <span style={{ display: 'block' }}>{t2}{t3}</span>
            </h2>
          </div>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, animationDelay: '0.18s' }}>
            専任体制での品質管理と、堅牢なセキュリティ体制。大切な業務をまるごとお任せいただくための仕組みを、私たちは標準で備えています。
          </p>
        </div>

        {/* quality flow strip */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 'clamp(28px, 3.5vw, 44px)' }}>
          {flow.map((f, i) => (
            <React.Fragment key={f}>
              <span style={{
                fontFamily: 'var(--font-jp)', fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)',
                padding: '7px 15px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: '#fff',
              }}>{f}</span>
              {i < flow.length - 1 && (
                <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }} aria-hidden="true"><Arrow s={16} /></span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* quality 3 cards */}
        <div className="cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'clamp(18px, 2.4vw, 28px)' }}>
          {quality.map((q) => (
            <div key={q.no} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(24px, 2.6vw, 34px)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 0.8, color: `var(--brand-${q.tone})` }}>{q.no}</span>
                <span style={{ width: 36, height: 4, borderRadius: 'var(--radius-pill)', background: `var(--brand-${q.tone})`, opacity: 0.85 }} aria-hidden="true" />
              </div>
              <h3 style={{ fontSize: 'clamp(17px, 1.7vw, 20px)', fontWeight: 900, lineHeight: 1.45, marginBottom: 12 }}>{q.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-secondary)' }}>{q.body}</p>
            </div>
          ))}
        </div>

        {/* security sub-heading */}
        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)', marginBottom: 'clamp(28px, 3.5vw, 44px)' }}>
          <div className="reveal"><Eyebrow tone="green">Security</Eyebrow></div>
          <h3 ref={secRef} className="split-host" style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, marginTop: 16, letterSpacing: '0.01em', lineHeight: 1.32, '--n': secN, '--win': 7 }}>
            {h1}{h2}{h3}
          </h3>
        </div>

        {/* security 6 items */}
        <div className="cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 'clamp(14px, 1.8vw, 20px)' }}>
          {security.map((it) => (
            <div key={it.en} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(20px, 2.2vw, 28px)',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
              }}>{it.en}</span>
              <h4 style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', fontWeight: 800, lineHeight: 1.5, marginTop: 8, marginBottom: 10 }}>{it.title}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--text-secondary)' }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Trust });
