import './WorkflowShowcase.jsx';

/* Classless — 事業内容 detail page
   2サービス（AI BPO / AI開発）を、シンプルに「何を・どうやるか」が分かる構成で。 */

function DetailHero() {
  const { useReveal, Eyebrow, useScrollVar, makeSplit, DeliveryChain } = window;
  const ref = useReveal();
  const h1Ref = useScrollVar(0.5, 0.92, 0.5);
  const s1 = makeSplit();
  const dTitle = s1.chars('事業内容');
  const dTitleN = s1.count();
  const h2Ref = useScrollVar(0.5, 0.9, 0.46);
  const s2 = makeSplit();
  const dl1 = s2.chars('日々の業務を整理し、');
  const dl2 = s2.chars('実務と仕組みの両方で');
  const dl3 = s2.chars('支えます。', 'blue');
  const dLeadN = s2.count();
  return (
    <section ref={ref} style={{ paddingTop: 'clamp(72px, 9vw, 128px)', paddingBottom: 'clamp(40px, 5vw, 72px)' }}>
      <div className="cl-container">
        <div className="reveal"><Eyebrow>Business</Eyebrow></div>
        <h1 ref={h1Ref} className="split-host" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.02em', '--n': dTitleN, '--win': 4 }}>{dTitle}</h1>

        <div className="reveal business-delivery-hero" style={{ animationDelay: '0.12s' }}>
          <div className="business-delivery-hero__head">
            <span>HOW WE WORK</span>
            <p>業務ごとに、入口・処理・確認・出口を定義します。</p>
          </div>
          <DeliveryChain compact />
        </div>

        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(28px, 5vw, 80px)', alignItems: 'end', marginTop: 'clamp(40px, 5vw, 72px)' }}>
          <h2 ref={h2Ref} className="split-host" style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', fontWeight: 900, lineHeight: 1.4, letterSpacing: '0.01em', '--n': dLeadN, '--win': 8 }}>
            <span style={{ display: 'block' }}>{dl1}</span>
            <span style={{ display: 'block' }}>{dl2}</span>
            <span style={{ display: 'block' }}>{dl3}</span>
          </h2>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, animationDelay: '0.12s' }}>
            まずはAI BPOで、現在の資料や依頼を受け取り、日々の実務を動かします。その過程で繰り返し作業と判断箇所を分け、必要な部分だけを自動化・システム化します。
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceArtifactVisual({ kind }) {
  if (kind === 'bpo') {
    return (
      <div className="service-artifact service-artifact--bpo" aria-label="業務運用で用意する成果物の例">
        <div className="service-artifact__bar"><span>OPERATION DESK</span><i /><i /></div>
        <div className="artifact-inbox">
          <span>今週の受領</span><strong>資料・依頼を受付</strong><small>形式がそろっていなくても整理から対応</small>
        </div>
        <div className="artifact-list">
          {['入力・転記する項目', '差異を確認する項目', '担当者へ返す例外'].map((item, i) => <div key={item}><span>{i + 1}</span><p>{item}</p><b>{i === 2 ? '要確認' : '進行中'}</b></div>)}
        </div>
        <div className="artifact-output"><span>OUTPUT</span><p>成果物</p><p>確認ログ</p><p>運用手順</p></div>
      </div>
    );
  }
  return (
    <div className="service-artifact service-artifact--dev" aria-label="業務システムの設計例">
      <div className="service-artifact__bar"><span>SYSTEM BLUEPRINT</span><i /><i /></div>
      <div className="blueprint-layers">
        <div><span>INPUT</span><strong>既存の帳票・システム</strong><p>データの置き場所と更新方法を確認</p></div>
        <div><span>LOGIC</span><strong>処理・ルール・承認</strong><p>自動処理と人の判断を切り分け</p></div>
        <div><span>OUTPUT</span><strong>更新・保存・通知</strong><p>実行結果と履歴が残る形で接続</p></div>
      </div>
      <p className="blueprint-note">既存環境に合わせて、小さな単位から接続します。</p>
    </div>
  );
}

/* 1サービス = 1セクション。
   左：番号・タグ・タイトル・サブ見出し・本文／右：イメージ。
   下：そのサービスの内訳カード（提供形態・機能）をフル幅で。 */
function ServiceSection({ s, flip }) {
  const { Badge } = window.ClasslessDesignSystem_225e16;
  const { useReveal, useScrollVar, makeSplit } = window;
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
                <ServiceArtifactVisual kind={s.visual} />
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
                <span style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 900 }}>対象業務を、業務単位で。</span>
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
      visual: 'bpo',
      subtitle: '資料を受け取り、日々の実務を動かす。',
      body: '現在使っている帳票や依頼を受け取り、入力・整理・照合・下書きなどの作業を担当します。判断が必要な箇所は確認リストにまとめ、お客様の承認後に成果物と作業履歴を納品します。運用の中で見つかった繰り返し作業は、合意した範囲から自動化します。',
      itemsLabelEn: 'How', itemsLabel: '2つの提供形態',
      items: [
        { t: '業務設計・改善', d: '担当者へのヒアリングと既存資料から、入力・処理・確認・納品の流れを整理します。責任範囲と例外時の戻し先を決め、運用手順に落とします。', chips: ['業務棚卸し', '責任範囲', '確認ルール', '手順書'] },
        { t: '実務代行・運用', d: '決めた手順に沿って定型作業を行い、判断が必要な箇所だけをお客様へ返します。実行結果と修正履歴を残し、次回の運用へ反映します。', chips: ['入力・整理', '照合', '下書き', '運用改善'] },
      ],
      domains: ['経理', '営業事務', '採用・労務', 'マーケティング', '企画・調査', 'AI導入・情シス'],
    },
    {
      no: '02', id: 'svc-dev', tone: 'orange', tag: 'AI Development ［オプション］', title: 'AI開発', label: 'ai development',
      visual: 'dev',
      subtitle: '繰り返し作業を、運用できる仕組みに変える。',
      body: '現行業務で使うデータと判断条件を整理し、既存ツールの連携、自動化ワークフロー、必要に応じた専用システムを設計します。小さく試し、担当者が結果を確認できる状態で運用を始めます。',
      itemsLabelEn: 'Lineup', itemsLabel: '3つのメニュー',
      items: [
        { t: '業務システム・自動化', d: 'フォーム、表計算、チャット、基幹システムなどをつなぎ、受領から更新・通知までの流れを構築します。例外時は人へ戻す設計にします。', chips: ['ワークフロー', '既存ツール連携', '承認分岐'] },
        { t: 'データ整備', d: '表記ゆれ、重複、保管場所、更新権限を整理し、処理に使えるデータへ整えます。移行前後の件数や差分も確認します。', chips: ['データ整理', '項目定義', '更新ルール'] },
        { t: '運用研修', d: '実際の業務を題材に、操作方法だけでなく確認手順と例外時の対応を共有します。研修後に見つかった改善点は手順へ反映します。', chips: ['実務ベース', '確認手順', '定着支援'] },
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
