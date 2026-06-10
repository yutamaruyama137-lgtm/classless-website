/* Classless — 法務ページ（プライバシーポリシー / 利用規約 / 特定商取引法） */

const LEGAL_INFO = {
  company: '合同会社Classless',
  rep: '丸山侑太',
  address: '東京都渋谷区円山町5番3号 MIEUX渋谷ビル8階',
  tel: '080-3633-6094',
  email: 'contact@classless.jp',
};

const LEGAL_UPDATED = '2026年6月9日';

const lh2 = { fontSize: 'clamp(18px, 2.3vw, 23px)', fontWeight: 800, marginTop: 42, marginBottom: 12, lineHeight: 1.5, letterSpacing: '0.01em' };
const lp = { fontSize: 15, lineHeight: 1.95, color: 'var(--text-secondary)', margin: '0 0 14px' };
const lli = { fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)', marginBottom: 6 };

function LegalShell({ eyebrow, title, updated, children }) {
  const { useReveal, Eyebrow } = window;
  const ref = useReveal();
  return (
    <section ref={ref} style={{ position: 'relative', paddingTop: 'clamp(96px, 12vw, 160px)', paddingBottom: 'clamp(72px, 9vw, 128px)' }}>
      <div className="cl-container" style={{ maxWidth: 880 }}>
        <div className="reveal"><Eyebrow tone="blue">{eyebrow}</Eyebrow></div>
        <h1 className="reveal" style={{ fontSize: 'clamp(30px, 4.4vw, 54px)', fontWeight: 900, marginTop: 16, letterSpacing: '0.01em', lineHeight: 1.25 }}>{title}</h1>
        {updated && <p className="reveal" style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 14, fontFamily: 'var(--font-mono)' }}>最終更新日：{updated}</p>}
        <div className="reveal" style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>{children}</div>
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <LegalShell eyebrow="Privacy Policy" title="プライバシーポリシー" updated={LEGAL_UPDATED}>
      <p style={lp}>{LEGAL_INFO.company}（以下「当社」といいます）は、当社が提供するサービスおよびWebサイトにおけるユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。</p>
      <h2 style={lh2}>第1条（個人情報）</h2>
      <p style={lp}>「個人情報」とは、個人情報保護法に定める「個人情報」を指し、氏名、会社名、メールアドレス、電話番号その他の記述等により特定の個人を識別できる情報を指します。</p>
      <h2 style={lh2}>第2条（個人情報の収集方法）</h2>
      <p style={lp}>当社は、お問い合わせフォームの送信、商談・契約、その他の方法を通じて、ユーザーから氏名・会社名・メールアドレス・電話番号・お問い合わせ内容等の個人情報を取得することがあります。</p>
      <h2 style={lh2}>第3条（個人情報を収集・利用する目的）</h2>
      <p style={lp}>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
      <ul style={{ paddingLeft: 22, margin: '0 0 14px' }}>
        <li style={lli}>お問い合わせへの対応、ご連絡のため</li>
        <li style={lli}>当社サービスの提供・運営・改善のため</li>
        <li style={lli}>サービスに関するご案内・ご提案のため</li>
        <li style={lli}>契約の締結および履行、料金の請求のため</li>
        <li style={lli}>利用規約に違反する行為への対応のため</li>
      </ul>
      <h2 style={lh2}>第4条（第三者提供）</h2>
      <p style={lp}>当社は、法令に基づく場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供しません。ただし、業務委託先に対し、利用目的の達成に必要な範囲内で個人情報の取扱いを委託する場合があります。</p>
      <h2 style={lh2}>第5条（個人情報の開示・訂正・削除）</h2>
      <p style={lp}>当社は、ユーザー本人から個人情報の開示・訂正・追加・削除・利用停止のご請求があった場合、ご本人であることを確認のうえ、法令に従い遅滞なく対応します。ご請求は下記のお問い合わせ窓口までご連絡ください。</p>
      <h2 style={lh2}>第6条（アクセス解析ツール・Cookie）</h2>
      <p style={lp}>当社Webサイトでは、サービス向上のためにGoogle Analytics等のアクセス解析ツールを利用する場合があります。これらのツールはCookieを使用しますが、当該データは匿名で収集されており、個人を特定するものではありません。ブラウザの設定によりCookieを無効化することができます。</p>
      <h2 style={lh2}>第7条（本ポリシーの変更）</h2>
      <p style={lp}>当社は、必要に応じて本ポリシーを変更することがあります。変更後の本ポリシーは、当社Webサイトに掲載した時点から効力を生じるものとします。</p>
      <h2 style={lh2}>第8条（お問い合わせ窓口）</h2>
      <p style={lp}>本ポリシーに関するお問い合わせは、下記までご連絡ください。</p>
      <p style={lp}>{LEGAL_INFO.company}<br />メール：<a href={`mailto:${LEGAL_INFO.email}`} style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>{LEGAL_INFO.email}</a></p>
    </LegalShell>
  );
}

function Terms() {
  return (
    <LegalShell eyebrow="Terms of Service" title="利用規約" updated={LEGAL_UPDATED}>
      <p style={lp}>本利用規約（以下「本規約」といいます）は、{LEGAL_INFO.company}（以下「当社」といいます）が提供するWebサイトおよびサービス（以下「本サービス」といいます）の利用条件を定めるものです。ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。</p>
      <h2 style={lh2}>第1条（適用）</h2>
      <p style={lp}>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
      <h2 style={lh2}>第2条（禁止事項）</h2>
      <p style={lp}>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
      <ul style={{ paddingLeft: 22, margin: '0 0 14px' }}>
        <li style={lli}>法令または公序良俗に違反する行為</li>
        <li style={lli}>犯罪行為に関連する行為</li>
        <li style={lli}>当社または第三者の知的財産権・プライバシー・名誉その他の権利または利益を侵害する行為</li>
        <li style={lli}>本サービスの運営を妨害するおそれのある行為</li>
        <li style={lli}>不正アクセスをし、またはこれを試みる行為</li>
        <li style={lli}>その他、当社が不適切と判断する行為</li>
      </ul>
      <h2 style={lh2}>第3条（本サービスの提供の停止等）</h2>
      <p style={lp}>当社は、システムの保守点検、天災等の不可抗力、その他当社が必要と判断した場合には、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
      <h2 style={lh2}>第4条（著作権・知的財産権）</h2>
      <p style={lp}>本サービスおよび当社Webサイトに含まれるコンテンツ（文章・画像・ロゴ・デザイン等）に関する著作権その他の知的財産権は、当社または正当な権利者に帰属します。当社の事前の許可なく、これらを複製・転用・改変することを禁じます。</p>
      <h2 style={lh2}>第5条（免責事項）</h2>
      <p style={lp}>当社は、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証していません。当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。</p>
      <h2 style={lh2}>第6条（規約の変更）</h2>
      <p style={lp}>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の本規約は、当社Webサイトに掲載した時点から効力を生じます。</p>
      <h2 style={lh2}>第7条（準拠法・裁判管轄）</h2>
      <p style={lp}>本規約の解釈にあたっては日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
      <h2 style={lh2}>お問い合わせ</h2>
      <p style={lp}>{LEGAL_INFO.company}<br />メール：<a href={`mailto:${LEGAL_INFO.email}`} style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>{LEGAL_INFO.email}</a></p>
    </LegalShell>
  );
}

function Tokushoho() {
  const rows = [
    ['販売事業者名', LEGAL_INFO.company],
    ['運営統括責任者', LEGAL_INFO.rep],
    ['所在地', LEGAL_INFO.address],
    ['電話番号', LEGAL_INFO.tel],
    ['メールアドレス', LEGAL_INFO.email],
    ['販売価格', 'サービスごとに異なります。お問い合わせ後、お客様とご相談のうえ個別にお見積り・決定いたします。'],
    ['対価以外に必要な費用', '本Webサイトの閲覧、お問い合わせに伴う通信料等はお客様のご負担となります。'],
    ['支払方法', '銀行振込（請求書を発行いたします）。詳細は個別の契約にて定めます。'],
    ['支払時期', '原則として、サービス提供前または契約時に定める時期にお支払いいただきます。詳細は個別の契約にて定めます。'],
    ['サービスの提供時期', '契約締結後、双方で合意した時期に提供を開始します。'],
    ['キャンセル・返品について', '役務提供型サービスの性質上、契約成立後のお客様都合によるキャンセル・返金は原則としてお受けできません。やむを得ない場合は個別にご相談ください。'],
  ];
  return (
    <LegalShell eyebrow="Legal" title="特定商取引法に基づく表記" updated={LEGAL_UPDATED}>
      <dl style={{ margin: 0, borderTop: '1px solid var(--color-border)' }}>
        {rows.map(([k, v]) => (
          <div key={k} className="legal-row" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, padding: '20px 4px', borderBottom: '1px solid var(--color-border)' }}>
            <dt style={{ fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 14, color: 'var(--text-muted)' }}>{k}</dt>
            <dd style={{ margin: 0, fontFamily: 'var(--font-jp)', fontWeight: 500, fontSize: 15, color: 'var(--text-primary)', lineHeight: 1.85 }}>{v}</dd>
          </div>
        ))}
      </dl>
    </LegalShell>
  );
}

Object.assign(window, { PrivacyPolicy, Terms, Tokushoho });
