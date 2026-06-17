/* Classless — What We Do (home core section). 2本柱: AI BPO(基本) + AI開発(オプション). */
function WhatWeDo() {
  const { Badge, Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, Arrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const t1 = s.chars('業務を回す');
  const t2 = s.chars('AI BPO', 'blue');
  const t3 = s.chars('。伸ばすAI開発。');
  const titleN = s.count();

  // ① AI BPO 内訳 / ② AI開発 内訳
  const bpoItems = [
    { t: 'AI BPO顧問', d: '外部AI担当として、窓口・業務設計・改善提案を担う。' },
    { t: 'AI BPO実働', d: '経理・営業事務・採用労務・マーケ・企画調査・情シスまで定型業務を代行。' },
  ];
  const devItems = [
    { t: 'AIシステム開発', d: '業種特化の専用AIエージェントを構築。' },
    { t: 'データベース最適化', d: 'AIが効く“データの土台”を整える。' },
    { t: 'AI教育', d: '社内人材を育て、内製化できる環境を構築。' },
  ];

  // AI BPO 対応業務領域（6カード, 3列）
  const domains = [
    { en: 'ACCOUNTING', name: '経理', list: ['請求書発行', '経費精算', '仕訳レビュー', '会計ソフト入力', '入金確認', '月次締め'] },
    { en: 'SALES OPS', name: '営業事務', list: ['見積作成', '議事録作成', 'アポ調整', '販売データ分析', 'CRM・SFAメンテナンス'] },
    { en: 'HR & LABOR', name: '採用・労務', list: ['スカウト送信', '日程調整', '求人票作成', '勤怠締め', '入退社手続き'] },
    { en: 'MARKETING', name: 'マーケティング', list: ['SNS運用', 'コンテンツ制作', 'SEO分析', 'メルマガ配信', 'MAツール運用'] },
    { en: 'PLANNING', name: '企画・調査', list: ['市場調査', '企画書作成', 'サービス選定', 'リサーチ', '競合分析'] },
    { en: 'AI & IT', name: 'AI導入・情シス', list: ['AIツール選定', '初期設定', '環境構築', '運用保守', '自動化ワークフロー設計'], strong: true },
  ];

  // 自動化 構築事例（6カード, 3列）
  const cases = [
    { t: '日程調整', d: 'BOTに指示すると候補日程を自動抽出しカレンダーへ仮押さえ。確定で仮押さえを全削除し、参加者へ自動通知。', h: '20h' },
    { t: '法務レビュー', d: '契約書PDF・Wordをアップロードするとリスクポイント・重要度・修正案を返信。修正判断もスレッド内で完結。', h: '30h' },
    { t: '議事録作成', d: 'Zoom・Meetの録画（文字起こし）から自動で要約・議事録化し、所定チャンネルへ自動投稿。', h: '30h' },
    { t: 'プロジェクト管理・共有', d: '特定ファイルが更新されるたび、更新者と更新箇所をグループへ自動通知。', h: '5h' },
    { t: 'ファイル保管', d: '特定アドレス宛の添付をAIが読み取り、クラウドの所定フォルダへ書類別に仕分け保管。ファイル名変更も自動。', h: '30h' },
    { t: '社内教育', d: 'AI学習アシスタントがスキル診断結果から個別学習計画を作成。コンテンツ更新でスキル体系も自動チューニング。', h: '50h〜' },
  ];

  const cardBase = {
    background: '#fff', border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
  };
  const grid3 = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 'clamp(16px, 2vw, 22px)',
  };
  const subhead = {
    fontSize: 'clamp(21px, 2.6vw, 30px)', fontWeight: 900, lineHeight: 1.4,
    letterSpacing: '0.01em',
  };

  return (
    <section id="whatwedo" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'end', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
          <div>
            <div className="reveal"><Eyebrow>What We Do</Eyebrow></div>
            <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.32, '--n': titleN, '--win': 7 }}>
              {t1}{t2}{t3}
            </h2>
          </div>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, animationDelay: '0.18s' }}>
            Classlessの事業は、2本柱。まず基本の「AI BPO」で現場を回し、必要に応じて「AI開発」で深める。
          </p>
        </div>

        {/* 2本柱カード */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)', gap: 'clamp(20px, 3vw, 34px)', alignItems: 'stretch' }}>
          {/* ① AI BPO（主役） */}
          <div className="reveal" style={{ ...cardBase, padding: 'clamp(26px, 3.4vw, 44px)', borderColor: 'var(--brand-blue)', background: 'var(--color-bg-subtle)', display: 'flex', flexDirection: 'column' }}>
            <Badge tone="blue" variant="soft" size="sm">基本</Badge>
            <h3 style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginTop: 16, color: 'var(--brand-blue)' }}>AI BPO</h3>
            <p style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.7, marginTop: 12 }}>
              業務をまるごと巻き取り、AIで自動化・定着まで伴走する。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
              {bpoItems.map((it) => (
                <div key={it.t} style={{ borderLeft: '3px solid var(--brand-blue)', paddingLeft: 14 }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--text-primary)' }}>{it.t}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: 4 }}>{it.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ② AI開発（拡張） */}
          <div className="reveal" style={{ ...cardBase, padding: 'clamp(26px, 3.4vw, 44px)', display: 'flex', flexDirection: 'column', animationDelay: '0.1s' }}>
            <Badge tone="orange" variant="soft" size="sm">オプション</Badge>
            <h3 style={{ fontSize: 'clamp(23px, 2.8vw, 32px)', fontWeight: 900, marginTop: 16 }}>AI開発</h3>
            <p style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.7, marginTop: 12 }}>
              もっと深く自動化・内製化したいときに、御社専用システムを構築する。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
              {devItems.map((it) => (
                <div key={it.t} style={{ borderLeft: '3px solid var(--brand-orange)', paddingLeft: 14 }}>
                  <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--text-primary)' }}>{it.t}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.75, color: 'var(--text-secondary)', marginTop: 3 }}>{it.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 帯コピー */}
        <p className="reveal" style={{ textAlign: 'center', fontSize: 'clamp(17px, 2vw, 23px)', fontWeight: 900, lineHeight: 1.6, marginTop: 'clamp(32px, 4vw, 52px)' }}>
          人が受け止め、<span style={{ color: 'var(--brand-blue)' }}>AIが育つ</span>。だから「入れて終わり」にならない。
        </p>

        {/* 中見出し: 業務領域 */}
        <h3 className="reveal" style={{ ...subhead, marginTop: 'clamp(56px, 7vw, 96px)', marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          バックオフィス全般を、まるごとカバー。
        </h3>

        {/* AI BPO 対応業務領域 6カード */}
        <div style={grid3}>
          {domains.map((d, i) => (
            <div key={d.en} className="reveal" style={{ ...cardBase, padding: 'clamp(22px, 2.6vw, 30px)', ...(d.strong ? { borderColor: 'var(--brand-blue)' } : {}), animationDelay: `${(i % 3) * 0.06}s` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', color: d.strong ? 'var(--brand-blue)' : 'var(--text-muted)' }}>{d.en}</span>
                {d.strong && <Badge tone="blue" variant="soft" size="sm">独自の強み</Badge>}
              </div>
              <div style={{ fontWeight: 900, fontSize: 'clamp(18px, 2vw, 22px)', marginTop: 8, color: d.strong ? 'var(--brand-blue)' : 'var(--text-primary)' }}>{d.name}</div>
              <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {d.list.map((li) => (
                  <li key={li} style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: '#fff' }}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 中見出し: 自動化事例 */}
        <h3 className="reveal" style={{ ...subhead, marginTop: 'clamp(56px, 7vw, 96px)', marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          日々の「めんどう」を、AIに任せる。
        </h3>

        {/* 自動化 構築事例 6カード */}
        <div style={grid3}>
          {cases.map((c, i) => (
            <div key={c.t} className="reveal" style={{ ...cardBase, padding: 'clamp(22px, 2.6vw, 30px)', display: 'flex', flexDirection: 'column', animationDelay: `${(i % 3) * 0.06}s` }}>
              <div style={{ fontWeight: 900, fontSize: 'clamp(17px, 1.9vw, 21px)', color: 'var(--text-primary)' }}>{c.t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--text-secondary)', marginTop: 12, flexGrow: 1 }}>{c.d}</p>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--color-border)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.06em', color: 'var(--brand-blue)' }}>
                構築目安 {c.h}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(52px, 6vw, 84px)' }}>
          <a href="/business"><Button variant="secondary" tone="ink" size="lg" iconRight={<Arrow />}>事業内容をくわしく見る</Button></a>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { WhatWeDo });
