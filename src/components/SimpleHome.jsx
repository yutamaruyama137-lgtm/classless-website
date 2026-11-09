import { activityPhotos } from '../data/activityPhotos.js';

function ActivityPhoto({ photo }) {
  const [unavailable, setUnavailable] = React.useState(false);
  React.useEffect(() => setUnavailable(false), [photo.src]);
  const hasPhoto = Boolean(photo.src) && !unavailable;

  return (
    <figure className={`activity-photo activity-photo--${photo.shape} activity-photo--${photo.tone} activity-photo--${photo.id}${hasPhoto ? ' has-photo' : ' is-space'}`}>
      <div className="activity-photo__surface">
        {hasPhoto ? (
          <img src={photo.src} alt={photo.alt} loading="lazy" width="720" height="520"
            style={{ objectPosition: photo.position }} onError={() => setUnavailable(true)} />
        ) : (
          <div className="activity-photo__space">
            <span className="activity-photo__mark" aria-hidden="true"><i /><i /><i /></span>
            <span>{photo.word}</span>
          </div>
        )}
      </div>
      {hasPhoto && photo.caption && <figcaption>{photo.caption}</figcaption>}
    </figure>
  );
}

function ActivityCollage() {
  return (
    <section className="activity-collage" aria-labelledby="activity-title">
      <div className="cl-container">
        <div className="activity-collage__intro">
          <h2 id="activity-title">面白いことは、<br className="activity-title-break" />人が集まるところから。</h2>
          <p>出会って、話して、つくってみる。</p>
        </div>
        <div className="activity-collage__board">
          {activityPhotos.map(photo => <ActivityPhoto key={photo.id} photo={photo} />)}
        </div>
      </div>
    </section>
  );
}

function LinkArrow({ external = false }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d={external ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15M13 6l6 6-6 6'} /></svg>;
}

function SimpleBusiness() {
  return <section id="business" className="simple-business">
    <div className="cl-container">
      <div className="simple-intro">
        <h2>しくみをつくる。<br />つながりを育てる。</h2>
        <p>AIで仕事の流れを整え、人と地域が出会う場をつくる。<br className="hide-sp" />Classlessは、ふたつの事業でプロジェクトに伴走します。</p>
      </div>
      <div className="business-pair">
        <article id="ai" className="business-item">
          <div className="business-heading"><h3>AI事業</h3><img src="/assets/logo-axel.png" alt="アクセル" width="132" height="46" /></div>
          <p className="business-lead">毎日の仕事に、<br />使い続けられるしくみを。</p>
          <p>「アクセル」は、業務の整理から設計・実装・運用までを支援するサービス。現場に合った、小さく始められるAI活用を一緒につくります。</p>
          <ul className="service-list"><li><strong>ワークフロー設計</strong><span>n8nでツールをつなぎ、繰り返す仕事を自動化。</span></li><li><strong>データベースマネジメント</strong><span>散らばった情報を整理し、使いやすい管理基盤へ。</span></li><li><strong>サイト設計・制作</strong><span>伝えたいことを整理し、運用しやすいWebサイトへ。</span></li></ul>
          <a href="/contact?topic=ai" className="simple-link">AI・しくみづくりを相談する <LinkArrow /></a>
        </article>
        <article id="community" className="business-item business-item--community">
          <div className="business-heading"><h3>コミュニティ組成事業</h3><span className="community-symbol" aria-hidden="true"><i /><i /><i /></span></div>
          <p className="business-lead">出会いを、<br />次のプロジェクトへ。</p>
          <p>Tokyo Global Hubや「ちいきのかまど」など、人と人、人と地域をつなぐ取り組み。参加のきっかけから、活動が続くしくみまで支えます。</p>
          <ul className="service-list"><li><strong>コミュニティの企画・運営</strong><span>目的を共有し、自然につながれる場を設計。</span></li><li><strong>地域おこし協力隊のネットワーク設計</strong><span>隊員・地域・自治体をつなぐ情報共有のしくみ。</span></li><li><strong>地域のプロジェクト支援</strong><span>企画の整理から発信、日々の運営まで伴走。</span></li></ul>
          <a href="https://chiikinokamado.jp/" target="_blank" rel="noopener noreferrer" className="simple-link">ちいきのかまどを見る <LinkArrow external /></a>
        </article>
      </div>
    </div>
  </section>;
}

function SimpleProjects() {
  const projects = [
    { title: 'アクセル', category: 'AI・業務設計', image: '/projects/workflow.svg', alt: '受付、AIで整理、データベース、担当者確認をつなぐワークフローの説明図', note: 'ワークフローの設計イメージ', text: 'n8nによる自動化、データベース管理、サイト設計。日々の業務と情報をつなぎ、プロジェクトが進む土台をつくります。', href: '/contact?topic=ai', link: 'この領域について相談する' },
    { title: 'Tokyo Global Hub', category: 'コミュニティ', image: '/projects/tokyo-global-hub.jpg', alt: 'Tokyo Global Hubの交流イベントの様子', note: 'Tokyo Global Hub ／ 交流イベント', text: '東京を起点に、異なる背景を持つ人がつながる場へ。交流をきっかけに、一緒に活動できるコミュニティづくりに取り組みます。', href: 'https://note.com/tokyoglobalhub', link: 'Tokyo Global Hubを見る', external: true },
    { title: 'ちいきのかまど', category: '地域・コミュニティ', image: '/projects/chiikinokamado.jpg', alt: 'ちいきのかまど Local Question #01 のイベント会場', note: 'Local Question #01 ／ ちいきのかまど', text: '地域を知る、関わる、つながる。地域おこし協力隊のネットワーク設計など、地域で動く人とプロジェクトを支えます。', href: 'https://chiikinokamado.jp/', link: 'ちいきのかまどを見る', external: true },
  ];
  return <section id="projects" className="simple-projects"><div className="cl-container">
    <div className="simple-section-heading"><h2>ともにつくる、取り組み。</h2><p>仕事の現場から、人が集まる場まで。</p></div>
    <div className="project-grid">{projects.map(p => <article className="project-item" key={p.title}>
      <figure><img src={p.image} alt={p.alt} width="720" height="500" loading="lazy" /><figcaption>{p.note}</figcaption></figure>
      <p className="project-category">{p.category}</p><h3>{p.title}</h3><p className="project-text">{p.text}</p>
      <a className="simple-link" href={p.href} {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{p.link}<LinkArrow external={p.external} /></a>
    </article>)}</div>
  </div></section>;
}

function SimpleCompany() {
  return <section id="company" className="simple-company"><div className="cl-container simple-company-grid"><div><h2>Classlessについて</h2><p>境界を越えて、可能性を広げる。<br />AIとコミュニティの両面から、<br />挑戦する人のそばで手を動かします。</p></div><dl>{[['会社名', '合同会社Classless'], ['代表者', '丸山 侑太'], ['所在地', '東京都渋谷区円山町5-3 MIEUX渋谷ビル 5階'], ['設立', '2025年10月1日']].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></section>;
}

Object.assign(window, { ActivityCollage, SimpleBusiness, SimpleProjects, SimpleCompany });
