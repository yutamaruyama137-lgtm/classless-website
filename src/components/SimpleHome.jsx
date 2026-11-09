import { CorporateImage, CorporateArrow } from './CorporateImage.jsx';

function CorporateIntro() {
  return (
    <section className="corporate-intro">
      <div className="cl-container corporate-intro__grid">
        <p className="corporate-section-label">私たちについて</p>
        <div><h2>しくみをつくる。<br />つながりを育てる。</h2>
          <p>人が本来の力を発揮できるように、仕事のしくみを整える。<br className="hide-sp" />新しい可能性が生まれるように、人と地域をつなぐ。</p>
          <p>Classlessは、AIとコミュニティのふたつの事業を通じて、<br className="hide-sp" />一人ひとりの挑戦と、さまざまなプロジェクトに伴走します。</p>
        </div>
      </div>
    </section>
  );
}

function SimpleBusiness() {
  return (
    <section id="business" className="corporate-business">
      <div className="cl-container">
        <div className="corporate-section-head"><h2>事業紹介</h2><p>アイデアを、動き続けるプロジェクトへ。</p></div>
        <article id="ai" className="corporate-business-row">
          <CorporateImage name="ai" />
          <div className="corporate-business-copy">
            <div className="corporate-business-title"><h3>AI事業</h3><img src="/assets/logo-axel.png" alt="アクセル" width="132" height="46" /></div>
            <h4>仕事のしくみを、<br />もっと使いやすく。</h4>
            <p>AI活用サービス「アクセル」は、業務の整理から設計・実装・運用までを支援。現場に合うしくみを、小さく始めて育てていきます。</p>
            <ul className="corporate-services"><li>n8nによるワークフロー設計</li><li>データベースマネジメント</li><li>サイト設計・制作</li></ul>
            <a href="/contact?topic=ai" className="corporate-text-link">AI・業務設計を相談する <CorporateArrow /></a>
          </div>
        </article>
        <article id="community" className="corporate-business-row corporate-business-row--reverse">
          <CorporateImage name="community" />
          <div className="corporate-business-copy">
            <div className="corporate-business-title"><h3>コミュニティ組成事業</h3></div>
            <h4>人と地域のつながりを、<br />次の可能性へ。</h4>
            <p>Tokyo Global Hubや「ちいきのかまど」など、人が集まり、活動が続く場をつくる。企画から運営、発信まで、プロジェクトに寄り添います。</p>
            <ul className="corporate-services"><li>コミュニティの企画・運営</li><li>地域おこし協力隊のネットワーク設計</li><li>地域のプロジェクト支援</li></ul>
            <a href="https://chiikinokamado.jp/" target="_blank" rel="noopener noreferrer" className="corporate-text-link">ちいきのかまどを見る <CorporateArrow external /></a>
          </div>
        </article>
      </div>
    </section>
  );
}

function SimpleProjects() {
  const projects = [
    { title: 'アクセル', category: 'AI・業務設計', image: 'axel', text: '業務と情報をつなぎ、プロジェクトが前へ進む土台をつくる。', href: '/contact?topic=ai', link: '相談する' },
    { title: 'Tokyo Global Hub', category: 'コミュニティ', image: 'globalHub', text: '異なる背景を持つ人が出会い、ともに活動するきっかけをつくる。', href: 'https://note.com/tokyoglobalhub', link: '活動を見る', external: true },
    { title: 'ちいきのかまど', category: '地域・コミュニティ', image: 'kamado', text: '地域に関わる人をつなぎ、地域から生まれる挑戦を支える。', href: 'https://chiikinokamado.jp/', link: '活動を見る', external: true },
  ];
  return (
    <section id="projects" className="corporate-projects"><div className="cl-container">
      <div className="corporate-section-head"><h2>プロジェクト</h2><p>仕事の現場から、人が集まる場まで。</p></div>
      <div className="corporate-project-grid">{projects.map(project => (
        <article className="corporate-project" key={project.title}>
          <CorporateImage name={project.image} />
          <div className="corporate-project__body"><p className="corporate-project__category">{project.category}</p><h3>{project.title}</h3><p>{project.text}</p>
            <a className="corporate-text-link" href={project.href} {...(project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{project.link}<CorporateArrow external={project.external} /></a>
          </div>
        </article>
      ))}</div>
    </div></section>
  );
}

function SimpleCompany() {
  const rows = [['会社名', '合同会社Classless'], ['代表者', '丸山 侑太'], ['所在地', '東京都渋谷区円山町5-3 MIEUX渋谷ビル 5階'], ['設立', '2025年10月1日']];
  return (
    <section id="company" className="corporate-company"><div className="cl-container corporate-company__grid">
      <div><p className="corporate-section-label">会社情報</p><h2>境界を越えて、<br />可能性を広げる。</h2><p className="corporate-company__lead">テクノロジーと、人の力。<br />その両方を信じて、未来をつくります。</p></div>
      <dl>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div></section>
  );
}
Object.assign(window, { CorporateIntro, SimpleBusiness, SimpleProjects, SimpleCompany });
