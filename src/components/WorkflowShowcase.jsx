/* Reusable operational diagrams.
   All examples are reconstructed for explanation and contain no client names,
   headcounts, source-file values, or company-specific rules. */

const FlowIcon = ({ type }) => {
  const paths = {
    inbox: <React.Fragment><path d="M4 5h16v14H4z" /><path d="M4 13h4l2 3h4l2-3h4" /></React.Fragment>,
    table: <React.Fragment><rect x="4" y="5" width="16" height="14" rx="1" /><path d="M4 10h16M10 5v14" /></React.Fragment>,
    check: <React.Fragment><circle cx="12" cy="12" r="8" /><path d="m8.5 12 2.2 2.2 4.8-5" /></React.Fragment>,
    file: <React.Fragment><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></React.Fragment>,
    branch: <React.Fragment><path d="M6 5v5a2 2 0 0 0 2 2h8M12 8l4 4-4 4" /><circle cx="6" cy="4" r="2" /><circle cx="18" cy="12" r="2" /></React.Fragment>,
    send: <React.Fragment><path d="m3 11 18-8-7 18-3-7z" /><path d="m11 14 4-4" /></React.Fragment>,
  };
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[type] || paths.file}
    </svg>
  );
};

function DeliveryChain({ className = '', compact = false }) {
  const steps = [
    { no: '01', label: '受け取るもの', title: '資料・データ・依頼', body: '現在使っている帳票、入力データ、担当者からの依頼を受け取ります。', icon: 'inbox' },
    { no: '02', label: '行う作業', title: '整理・照合・下書き', body: '手順を分解し、転記や照合など、任せる作業を決めて実行します。', icon: 'table' },
    { no: '03', label: '人が確認', title: '例外・判断・承認', body: '金額や対外送信など、判断が必要な箇所は担当者が確認します。', icon: 'check' },
    { no: '04', label: '納品物', title: '成果物・履歴・手順書', body: '成果物だけでなく、確認履歴と次回運用の手順も残します。', icon: 'file' },
  ];
  return (
    <div className={`delivery-chain ${compact ? 'delivery-chain--compact' : ''} ${className}`} aria-label="業務を受け取ってから納品するまでの流れ">
      {steps.map((step, index) => (
        <React.Fragment key={step.no}>
          <article className="delivery-step">
            <div className="delivery-step__top">
              <span className="delivery-step__icon"><FlowIcon type={step.icon} /></span>
              <span className="delivery-step__no">{step.no}</span>
            </div>
            <p className="delivery-step__label">{step.label}</p>
            <h3>{step.title}</h3>
            {!compact && <p className="delivery-step__body">{step.body}</p>}
          </article>
          {index < steps.length - 1 && <span className="delivery-chain__arrow" aria-hidden="true">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function PayrollWorkflowExample() {
  const before = [
    ['回収', '複数のファイルと申請を個別に受領'],
    ['転記', '表記や形式を手作業でそろえる'],
    ['照合', '変更点と不足情報を目視で探す'],
    ['確認', '作業全体を最初から見直す'],
  ];
  const after = [
    ['受領', '勤怠・変更申請・支給控除の情報'],
    ['整形', '形式統一、不足検知、差異の一覧化'],
    ['人が確認', '差異と例外だけを担当者が承認'],
    ['納品', '計算用一覧・確認ログ・運用手順'],
  ];
  const lane = (items, mode) => (
    <div className={`payroll-lane payroll-lane--${mode}`}>
      <div className="payroll-lane__name">
        <span>{mode === 'before' ? 'AS-IS' : 'TO-BE'}</span>
        <strong>{mode === 'before' ? '作業が人に集中' : '確認すべき点を絞る'}</strong>
      </div>
      <div className="payroll-lane__steps">
        {items.map(([title, body], index) => (
          <React.Fragment key={title}>
            <div className="payroll-node">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </div>
            {index < items.length - 1 && <span className="payroll-node__arrow" aria-hidden="true">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
  return (
    <div className="payroll-workflow" aria-label="給与計算業務を整理する例">
      <div className="workflow-caption">
        <div>
          <span className="workflow-caption__id">WORKFLOW / 01</span>
          <h3>給与計算業務を、確認しやすい流れに組み替える</h3>
        </div>
        <span className="workflow-caption__note">匿名化した構成例</span>
      </div>
      <p className="workflow-intro">資料を受け取ったら、現行手順をそのまま自動化するのではなく、入力・処理・確認・納品に分けます。どこを仕組みに任せ、どこを人が判断するかを先に決めます。</p>
      <div className="payroll-lanes">
        {lane(before, 'before')}
        {lane(after, 'after')}
      </div>
      <p className="workflow-disclaimer">※ 実在案件の固有名・数値・個別ルールを使用せず、説明用に再構成しています。実装内容はヒアリング後に確定します。</p>
    </div>
  );
}

function AutomationWorkflowExample() {
  const nodes = [
    { type: 'trigger', icon: 'inbox', kicker: 'TRIGGER', title: '依頼を受け付ける', body: 'フォーム / メール / 共有フォルダ' },
    { type: 'process', icon: 'table', kicker: 'PROCESS', title: '内容を整理する', body: '項目抽出・形式統一・不足チェック' },
    { type: 'decision', icon: 'branch', kicker: 'ROUTING', title: '確認が必要か判定', body: '金額・例外・入力不足を振り分け' },
  ];
  return (
    <div className="automation-workflow" aria-label="業務自動化ワークフローの構成例">
      <div className="workflow-caption workflow-caption--dark">
        <div>
          <span className="workflow-caption__id">AUTOMATION / 02</span>
          <h3>自動処理の途中に、人の確認を置く</h3>
        </div>
        <span className="workflow-caption__note">構成例</span>
      </div>
      <p className="workflow-intro">自動化ツールと既存システムをつなぎ、例外だけを担当者へ返します。実行結果と確認履歴が残るところまでを一つの運用として設計します。</p>
      <div className="automation-canvas">
        <div className="automation-mainline">
          {nodes.map((node, index) => (
            <React.Fragment key={node.title}>
              <article className={`automation-node automation-node--${node.type}`}>
                <span className="automation-node__icon"><FlowIcon type={node.icon} /></span>
                <div><span>{node.kicker}</span><strong>{node.title}</strong><p>{node.body}</p></div>
              </article>
              <span className="automation-connector" aria-hidden="true">→</span>
            </React.Fragment>
          ))}
          <div className="automation-branches">
            <article className="automation-node automation-node--human">
              <span className="automation-branch-label">要確認</span>
              <span className="automation-node__icon"><FlowIcon type="check" /></span>
              <div><span>HUMAN CHECK</span><strong>担当者が承認する</strong><p>差異・例外のみを確認</p></div>
            </article>
            <article className="automation-node automation-node--done">
              <span className="automation-branch-label">確認不要</span>
              <span className="automation-node__icon"><FlowIcon type="send" /></span>
              <div><span>DELIVER</span><strong>更新・通知する</strong><p>台帳更新・成果物保存・関係者通知</p></div>
            </article>
          </div>
        </div>
      </div>
      <div className="automation-foot">
        <span>接続候補</span>
        <ul><li>チャット</li><li>メール</li><li>表計算</li><li>会計・人事システム</li><li>クラウドストレージ</li></ul>
      </div>
    </div>
  );
}

Object.assign(window, { DeliveryChain, PayrollWorkflowExample, AutomationWorkflowExample });
