/* Classless corporate site — 特徴 (Why Classless)
   3強み + プロセス帯 + 5ステップ設計 + 原則バンド + 他社比較表。
   白基調＋チャコール、色アクセントは重要語1つだけ。トークン使用・絵文字なし・reveal。 */
function Features() {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, useScrollVar, makeSplit, Arrow } = window;
  const ref = useReveal();

  // section title (scroll-scrubbed per-character reveal)
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const t1 = s.chars('『単なるAI導入』ではない。');
  const t2 = s.chars('設計', 'blue');
  const t3 = s.chars('から定着まで、一気通貫で支援。');
  const titleN = s.count();

  // step section sub-heading
  const stepRef = useScrollVar(0.5, 0.9, 0.46);
  const s2 = makeSplit();
  const st1 = s2.chars('業務の数だけ、');
  const st2 = s2.chars('ワークフロー', 'green');
  const st3 = s2.chars('を設計する。');
  const stepN = s2.count();

  const strengths = [
    {
      no: '01', tone: 'blue',
      title: 'AX診断で"PoC疲れ"を解消',
      body: 'まずは現状のAI活用度を可視化。100以上のツールから自社に最適な構成と導入順序を提示し、迷いなく始められます。',
    },
    {
      no: '02', tone: 'orange',
      title: '伴走で"自走できるAI組織"へ',
      body: '設計→定着→内製化の3段階伴走プログラム。プロンプトライブラリと推進リーダー育成で、外注に依存しない自走チームをつくります。',
    },
    {
      no: '03', tone: 'green',
      title: 'AIと現場をつなぐ実装力',
      body: 'ヒアリング・設計・開発・教育を同一窓口で提供。ツール導入で終わらせず、現場の業務フローに組み込むところまでやり切ります。',
    },
  ];

  const process = [
    { tag: 'お客様', tone: 'ink', label: 'ノンコア業務をそのままお渡し' },
    { tag: 'STEP01 · BPO', tone: 'blue', label: '業務の巻き取り・代行（まず工数削減）' },
    { tag: 'STEP02 · AI', tone: 'orange', label: '自動化ツール開発（環境構築を代行）' },
    { tag: 'RESULT', tone: 'green', label: '手離れ完了＆DXレベル向上' },
  ];

  const steps = [
    { no: 'STEP 01', tone: 'blue',   title: '業務ヒアリング',   body: '現場の業務を洗い出し、頻度・工数・担当者を整理。', out: '業務棚卸しシート' },
    { no: 'STEP 02', tone: 'orange', title: '業務フロー可視化', body: '現状(As-Is)をフロー図に落とし、ボトルネックと判断ポイントを特定。', out: '業務フロー図' },
    { no: 'STEP 03', tone: 'green',  title: 'AI組み込み設計',  body: '「人の工程」と「AIの工程」を切り分け、あるべき姿(To-Be)を設計。', out: 'AI活用マップ' },
    { no: 'STEP 04', tone: 'red',    title: '構築・接続',       body: 'ワークフローを構築し、社内ツール・DBと接合してテスト運用。', out: '自動化ワークフロー' },
    { no: 'STEP 05', tone: 'blue',   title: '運用・改善',       body: '効果を測定し、現場の声をもとに継続改善。手順を整え内製化へ。', out: '運用マニュアル' },
  ];

  const humanTasks = ['意思決定・例外対応', '品質の最終確認', '顧客・社内との関係構築', '改善アイデアの発案'];
  const aiTasks = ['定型データの処理・集計', '文書ドラフト作成', '通知・転記・仕分け', '検索・要約・分析'];

  // comparison table
  const cols = ['Classless', '人材派遣', 'クラウドソーシング', 'フリーランス', '他社BPO'];
  const rows = [
    { label: '業務設計支援（AX診断）', vals: ['○', '×', '×', '×', '△'] },
    { label: 'チーム・伴走体制',       vals: ['○', '△', '×', '×', '○'] },
    { label: '継続性・安定性',         vals: ['○', '△', '×', '△', '○'] },
    { label: 'AI・自動化支援',         vals: ['○', '△', '△', '△', '△'] },
    { label: '組織変革・定着支援',     vals: ['○', '×', '×', '×', '×'] },
    { label: '初期費用',               vals: ['基本無し', '紹介料', 'サービス次第', '0円', 'サービス次第'] },
  ];

  // symbol → style
  const markStyle = (v) => {
    if (v === '○' || v === '◎') return { color: 'var(--brand-blue)', fontWeight: 800 };
    if (v === '△') return { color: 'var(--text-secondary)', fontWeight: 700 };
    if (v === '×') return { color: 'var(--text-muted)', fontWeight: 700, opacity: 0.7 };
    return { color: 'var(--text-secondary)', fontWeight: 600, fontSize: 13 };
  };

  return (
    <section id="features" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'end', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
          <div>
            <div className="reveal"><Eyebrow>Why Classless</Eyebrow></div>
            <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.32, '--n': titleN, '--win': 7 }}>
              <span style={{ display: 'block' }}>{t1}</span>
              <span style={{ display: 'block' }}>{t2}{t3}</span>
            </h2>
          </div>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, animationDelay: '0.18s' }}>
            ツールを入れて終わりにしない。現状の可視化から、現場への組み込み、自走できる組織づくりまで。Classlessは一気通貫で伴走します。
          </p>
        </div>

        {/* 3 strengths */}
        <div className="cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(18px, 2.4vw, 28px)' }}>
          {strengths.map((q) => (
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

        {/* process band — 4 steps, arrows, collapses to column on mobile */}
        <div className="reveal" style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <div className="feat-process" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 12 }}>
            {process.map((p, i) => (
              <React.Fragment key={p.tag}>
                <div style={{
                  flex: '1 1 200px', minWidth: 200, background: '#fff', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(18px, 1.8vw, 24px)',
                  display: 'flex', flexDirection: 'column', gap: 10,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: p.tone === 'ink' ? 'var(--text-muted)' : `var(--brand-${p.tone})`,
                  }}>{p.tag}</span>
                  <span style={{ fontSize: 14.5, fontWeight: 700, lineHeight: 1.6, color: 'var(--text-primary)' }}>{p.label}</span>
                </div>
                {i < process.length - 1 && (
                  <span aria-hidden="true" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
                    color: 'var(--text-muted)', fontSize: 14, fontWeight: 700, minWidth: 16,
                  }}><Arrow s={16} /></span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.85, color: 'var(--text-secondary)', marginTop: 16, fontWeight: 500 }}>
            Classlessが『AX担当の外部責任者』として一気通貫で代行。
          </p>
        </div>

        {/* step section sub-heading */}
        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)', marginBottom: 'clamp(28px, 3.5vw, 44px)' }}>
          <div className="reveal"><Eyebrow tone="green">Workflow Design</Eyebrow></div>
          <h3 ref={stepRef} className="split-host" style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, marginTop: 16, letterSpacing: '0.01em', lineHeight: 1.32, '--n': stepN, '--win': 7 }}>
            {st1}{st2}{st3}
          </h3>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 16, maxWidth: '40em', animationDelay: '0.12s' }}>
            既存の業務フローにAIを組み込むため、5つのステップで設計。各ステップの成果物はすべて御社に残り、内製化の土台になります。
          </p>
        </div>

        {/* 5 step cards */}
        <div className="cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: 'clamp(14px, 1.8vw, 20px)' }}>
          {steps.map((it) => (
            <div key={it.no} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(20px, 2.2vw, 28px)',
              display: 'flex', flexDirection: 'column',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: `var(--brand-${it.tone})`,
              }}>{it.no}</span>
              <h4 style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 900, lineHeight: 1.45, marginTop: 8, marginBottom: 10 }}>{it.title}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--text-secondary)', flex: 1 }}>{it.body}</p>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--color-border)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-muted)' }}>OUTPUT: </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 700, color: 'var(--text-primary)' }}>{it.out}</span>
              </div>
            </div>
          ))}
        </div>

        {/* principle band — 判断はヒトに、作業はAIに */}
        <div className="reveal" style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, lineHeight: 1.35, letterSpacing: '0.01em', marginBottom: 'clamp(24px, 3vw, 36px)' }}>
            判断は<span style={{ color: 'var(--brand-blue)' }}>ヒト</span>に、作業はAIに。
          </h3>
          <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(18px, 2.4vw, 28px)' }}>
            {[
              { en: 'Humans', label: 'ヒトに残す工程', tone: 'blue', list: humanTasks },
              { en: 'AI', label: 'AIに任せる工程', tone: 'green', list: aiTasks },
            ].map((g) => (
              <div key={g.en} style={{
                background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)', padding: 'clamp(24px, 2.6vw, 34px)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: `var(--brand-${g.tone})` }}>{g.en}</span>
                <h4 style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 900, lineHeight: 1.4, marginTop: 8, marginBottom: 16 }}>{g.label}</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {g.list.map((t) => (
                    <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                      <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: `var(--brand-${g.tone})`, marginTop: 8, flex: '0 0 auto' }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.8, color: 'var(--text-muted)', marginTop: 18, letterSpacing: '0.02em' }}>
            Deliverables: 業務フロー図・AI活用マップ・プロンプトライブラリ・運用マニュアル
          </p>
        </div>

        {/* comparison table — horizontal scroll on mobile */}
        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <div className="reveal"><Eyebrow tone="orange">Comparison</Eyebrow></div>
          <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, lineHeight: 1.35, letterSpacing: '0.01em', marginTop: 16, marginBottom: 'clamp(24px, 3vw, 36px)' }}>
            他社にはない、<span style={{ color: 'var(--brand-blue)' }}>一気通貫</span>。
          </h3>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 720, background: '#fff' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '16px 18px', fontSize: 13, fontWeight: 800, color: 'var(--text-muted)', borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap' }}>項目</th>
                  {cols.map((c, i) => {
                    const isCl = i === 0;
                    return (
                      <th key={c} style={{
                        textAlign: 'center', padding: '16px 18px', borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap',
                        fontSize: isCl ? 14 : 13, fontWeight: isCl ? 900 : 700,
                        color: isCl ? 'var(--brand-blue)' : 'var(--text-secondary)',
                        background: isCl ? 'var(--blue-50)' : 'transparent',
                        fontFamily: isCl ? 'var(--font-mono)' : 'var(--font-jp)',
                      }}>{c}</th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, ri) => (
                  <tr key={r.label}>
                    <td style={{ textAlign: 'left', padding: '15px 18px', fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)', borderBottom: ri < rows.length - 1 ? '1px solid var(--color-border)' : 'none', whiteSpace: 'nowrap' }}>{r.label}</td>
                    {r.vals.map((v, ci) => {
                      const isCl = ci === 0;
                      return (
                        <td key={ci} style={{
                          textAlign: 'center', padding: '15px 18px', fontSize: 16,
                          borderBottom: ri < rows.length - 1 ? '1px solid var(--color-border)' : 'none',
                          background: isCl ? 'var(--blue-50)' : 'transparent',
                          fontFamily: (typeof v === 'string' && v.length > 1) ? 'var(--font-jp)' : 'var(--font-mono)',
                          ...markStyle(v),
                        }}>{v}</td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Features });
