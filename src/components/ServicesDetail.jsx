/* Classless — 事業内容 detail page
   2サービス（AI BPO / AI開発）を、シンプルに「何を・どうやるか」が分かる構成で。 */

function DetailHero() {
  const { ColorField, useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const h1Ref = useScrollVar(0.5, 0.92, 0.5);
  const s1 = makeSplit();
  const dTitle = s1.chars('事業内容');
  const dTitleN = s1.count();
  const h2Ref = useScrollVar(0.5, 0.9, 0.46);
  const s2 = makeSplit();
  const dl1 = s2.chars('地方の現場の業務を');
  const dl2 = s2.chars('“まるごと”巻き取る、');
  const dl3 = s2.chars('AI BPO。', 'blue');
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
            Classlessの事業は、2つ。まず基本の「AI BPO」で繰り返しの業務をまるごと巻き取り、現場を回す。さらに必要に応じて「AI開発」で、自動化と内製化をもっと深めていきます。
          </p>
        </div>
      </div>
    </section>
  );
}

/* 1サービス = 1セクション。
   左：番号・タグ・タイトル・サブ見出し・本文／右：イメージ。
   下：そのサービスの内訳カード（提供形態・機能）をフル幅で。 */
function ServiceSection({ s, flip }) {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, BrandVisual, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.92, 0.5);
  const sp = makeSplit();
  const title = sp.chars(s.title);
  const titleN = sp.count();
  return (
    <section id={s.id} ref={ref} style={{ background: flip ? 'var(--color-bg-subtle)' : 'transparent', paddingTop: 'clamp(56px, 8vw, 112px)', paddingBottom: 'clamp(56px, 8vw, 112px)' }}>
      <div className="cl-container">
        {/* intro: 説明 + イメージ */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'center' }}>
          {/* 説明 */}
          <div style={{ order: flip ? 2 : 1 }}>
            <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: `var(--brand-${s.tone})`, letterSpacing: '0.1em' }}>({s.no})</div>
            <div className="reveal" style={{ marginTop: 12, animationDelay: '0.04s' }}>
              <Badge tone={s.tone} variant="soft" size="sm">{s.tag}</Badge>
            </div>
            <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(30px, 4.2vw, 56px)', fontWeight: 900, lineHeight: 1.1, marginTop: 16, color: `var(--brand-${s.tone})`, '--n': titleN, '--win': 5 }}>{title}</h2>
            <h3 className="reveal" style={{ fontSize: 'clamp(19px, 2.2vw, 28px)', fontWeight: 900, lineHeight: 1.5, marginTop: 22, animationDelay: '0.1s' }}>{s.subtitle}</h3>
            <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', marginTop: 20, animationDelay: '0.14s' }}>{s.body}</p>
          </div>

          {/* イメージ */}
          <div style={{ order: flip ? 1 : 2 }}>
            <div className={flip ? 'slide-l' : 'slide-r'}>
              <div className="parallax" data-parallax={flip ? 0.05 : 0.06}>
                <BrandVisual tone={s.tone} image={s.image} ratio="16 / 11" label={`business / ${s.label}`} className="svc-visual" />
              </div>
            </div>
          </div>
        </div>

        {/* 内訳カード */}
        <div className="reveal" style={{ marginTop: 'clamp(40px, 5vw, 64px)', animationDelay: '0.08s' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(20px, 2.6vw, 30px)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{s.itemsLabelEn}</span>
            <span style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 900 }}>{s.itemsLabel}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${s.items.length <= 2 ? 360 : 260}px), 1fr))`, gap: 'clamp(16px, 2vw, 22px)' }}>
            {s.items.map((it) => (
              <div key={it.t} style={{
                background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)', padding: 'clamp(22px, 2.6vw, 32px)', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span aria-hidden="true" style={{ width: 30, height: 4, borderRadius: 'var(--radius-pill)', background: `var(--brand-${s.tone})` }} />
                  <h4 style={{ fontSize: 'clamp(17px, 1.8vw, 21px)', fontWeight: 900, lineHeight: 1.4 }}>{it.t}</h4>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-secondary)', flex: 1 }}>{it.d}</p>
                {it.chips && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                    {it.chips.map((c) => (
                      <span key={c} style={{
                        fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)',
                        padding: '6px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: 'var(--color-bg-subtle)',
                      }}>{c}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 対応領域（AI BPOのみ） */}
          {s.domains && (
            <div style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Coverage</span>
                <span style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 900 }}>バックオフィス全般を、まるごと。</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {s.domains.map((d) => (
                  <span key={d} style={{
                    fontSize: 14, fontWeight: 800, color: 'var(--text-primary)',
                    padding: '10px 18px', borderRadius: 'var(--radius-pill)', border: `1px solid var(--brand-${s.tone})`, background: '#fff',
                  }}>{d}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ServicesDetail() {
  const services = [
    {
      no: '01', id: 'svc-bpo', tone: 'blue', tag: 'AI BPO ［基本］', title: 'AI BPO', label: 'ai bpo',
      image: '/business/ai-bpo.png',
      subtitle: '繰り返しの業務を、まるごと巻き取る。',
      body: 'ノンコア業務をそのまま渡すだけ。外部のAI担当として受け取り、まず人が巻き取って現場を止めず、裏でAIに置き換え、定着まで一気通貫で伴走します。「顧問」と「実働」の両輪で、御社のバックオフィスを回します。',
      itemsLabelEn: 'How', itemsLabel: '2つの提供形態',
      items: [
        { t: 'AI BPO顧問', d: '外部のAI担当者として常駐せずに伴走。業務の棚卸し・設計、ツール選定、改善提案、社内への定着までを窓口ひとつで担います。', chips: ['業務設計', 'ツール選定', '改善提案', '定着伴走'] },
        { t: 'AI BPO実働', d: '日々の定型業務を実際に代行。経理・営業事務・採用労務・マーケ・企画調査・情シスまで、手を動かす作業をまるごと巻き取ります。', chips: ['業務代行', '自動化構築', '運用・保守'] },
      ],
      domains: ['経理', '営業事務', '採用・労務', 'マーケティング', '企画・調査', 'AI導入・情シス'],
    },
    {
      no: '02', id: 'svc-dev', tone: 'orange', tag: 'AI Development ［オプション］', title: 'AI開発', label: 'ai development',
      image: '/business/ai-system.png',
      subtitle: '自動化と内製化を、もっと深く。',
      body: 'AI BPOで現場が回り始めたら、次は仕組みづくり。御社専用のAIシステム開発、AIが効くデータ基盤の整備、社内人材の育成までを組み合わせ、外注に依存しない“自走できるAI組織”へと進化させます。',
      itemsLabelEn: 'Lineup', itemsLabel: '3つのメニュー',
      items: [
        { t: 'AIシステム開発', d: '既製ツールでは解決できない課題に、業務フローに合わせたオーダーメイドのAIエージェントを設計・開発。外部CAIO（AI統括人材）の派遣もセットで提供します。', chips: ['AIエージェント', 'オーダーメイド', '外部CAIO派遣'] },
        { t: 'データベース最適化', d: '社内に散らばった情報資産を整理・構造化・最適化。AIが本来の力を発揮できる“データの土台”を整え、導入効果を最大化します。', chips: ['整理', '構造化', '最適化'] },
        { t: 'AI教育', d: '1回1時間〜の講義＋ワークショップを、1人から。業種・職種に合わせてカリキュラムをカスタムし、研修後の定着フォローまで伴走します。', chips: ['1日から', '少人数OK', '定着フォロー'] },
      ],
    },
  ];
  return (
    <React.Fragment>
      <DetailHero />
      {services.map((s, i) => <ServiceSection key={s.id} s={s} flip={i % 2 === 1} />)}
    </React.Fragment>
  );
}
Object.assign(window, { ServicesDetail });
