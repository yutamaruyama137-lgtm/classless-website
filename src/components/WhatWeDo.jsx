import './WorkflowShowcase.jsx';

/* AXEL / What We Do — concrete work, outputs, and implementation examples. */
function WhatWeDo() {
  const { useReveal, Eyebrow, Arrow, useScrollVar, makeSplit, DeliveryChain, PayrollWorkflowExample, AutomationWorkflowExample } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const t1 = s.chars('曖昧な業務を整理し、');
  const t2 = s.chars('毎月回る仕組み', 'blue');
  const t3 = s.chars('にする。');
  const titleN = s.count();

  const domains = [
    { en: 'ACCOUNTING', name: '経理', receive: '請求書・入出金データ', work: '仕訳下書き、照合、未処理の抽出', deliver: '入力用一覧、確認リスト' },
    { en: 'SALES OPS', name: '営業事務', receive: '商談メモ・顧客情報', work: '議事録、見積下書き、CRM更新', deliver: '更新済み台帳、対応履歴' },
    { en: 'HR & LABOR', name: '採用・労務', receive: '応募情報・勤怠・申請', work: '日程調整、情報整理、差異確認', deliver: '候補者一覧、確認対象一覧' },
    { en: 'MARKETING', name: 'マーケティング', receive: '企画メモ・実績データ', work: '記事下書き、配信準備、集計', deliver: '確認用原稿、月次レポート' },
    { en: 'RESEARCH', name: '企画・調査', receive: '調査テーマ・判断条件', work: '情報収集、比較表、出典整理', deliver: '調査メモ、比較資料' },
    { en: 'AI & IT', name: 'AI導入・情シス', receive: '現行手順・利用ツール', work: '業務分解、接続設計、テスト', deliver: '自動化フロー、運用手順書', strong: true },
  ];

  return (
    <section id="whatwedo" ref={ref} className="operations-section">
      <div className="cl-container">
        <div className="operations-heading grid2">
          <div>
            <div className="reveal"><Eyebrow>What We Do</Eyebrow></div>
            <h2 ref={titleRef} className="split-host operations-heading__title" style={{ '--n': titleN, '--win': 7 }}>
              {t1}{t2}{t3}
            </h2>
          </div>
          <div className="reveal operations-heading__copy">
            <p>「AIを導入する」こと自体を目的にはしません。いま使っている資料や手順を受け取り、誰が・何を・どこまで確認するかを整理したうえで、実務と仕組みを一緒につくります。</p>
            <ul className="operations-principles" aria-label="支援の原則">
              <li>現行業務を止めずに始める</li>
              <li>判断が必要な箇所は人に残す</li>
              <li>成果物と運用手順をセットで渡す</li>
            </ul>
          </div>
        </div>

        <div className="operations-delivery">
          <div className="operations-delivery__head">
            <span>OUR DELIVERY STANDARD</span>
            <p>ご相談いただいた業務は、次の4点が見える状態にします。</p>
          </div>
          <DeliveryChain />
        </div>

        <div className="operations-subhead reveal">
          <span>業務領域</span>
          <h3>「何を渡せば、何が返ってくるか」まで明確に。</h3>
        </div>
        <div className="operation-domain-grid">
          {domains.map((domain, index) => (
            <article key={domain.en} className={`operation-domain reveal ${domain.strong ? 'operation-domain--strong' : ''}`} style={{ animationDelay: `${(index % 3) * 0.06}s` }}>
              <div className="operation-domain__head"><span>{domain.en}</span><h4>{domain.name}</h4></div>
              <dl>
                <div><dt>受け取るもの</dt><dd>{domain.receive}</dd></div>
                <div><dt>行う作業</dt><dd>{domain.work}</dd></div>
                <div><dt>納品物</dt><dd>{domain.deliver}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        <div className="operations-subhead reveal operations-subhead--workflow">
          <span>業務設計の例</span>
          <h3>資料ではなく、実際に回す流れを見せます。</h3>
          <p>以下は説明用の構成例です。お客様の資料を掲載する場合は、固有名・人数・金額・個別ルールを除き、公開用に描き直します。</p>
        </div>
        <div className="workflow-showcase-stack">
          <div><PayrollWorkflowExample /></div>
          <div><AutomationWorkflowExample /></div>
        </div>

        <div className="reveal operations-cta">
          <div>
            <span>ご相談時に、きれいな資料は必要ありません。</span>
            <p>現在使っているファイルや、担当者しか分からない手順から整理します。</p>
          </div>
          <a href="/contact" className="cl-action-link cl-action-link--primary cl-action-link--lg">対象業務を相談する <Arrow /></a>
          <a href="/business" className="cl-action-link cl-action-link--secondary cl-action-link--lg">支援内容を詳しく見る</a>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { WhatWeDo });
