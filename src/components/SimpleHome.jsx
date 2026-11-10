import { friendlyImages } from '../data/friendlyImages.js';

export function FriendlyArrow({ external = false }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={external ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15M13 6l6 6-6 6'} /></svg>;
}
export function FriendlyFlower({ className = '' }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 100 100" fill="none"><path d="M50 39C17 7 12 46 39 50C7 83 46 88 50 61C83 93 88 54 61 50C93 17 54 12 50 39Z" fill="currentColor" /><circle cx="50" cy="50" r="8" fill="#fff" /></svg>;
}
export function FriendlyScribble({ className = '', variant = 'loop' }) {
  const paths = {
    loop: 'M12 18C53 3 92 7 88 36C85 63 45 64 49 44C53 23 106 36 119 69L125 89M107 79L125 89L129 68',
    bend: 'M12 20C35 6 67 8 83 25C103 46 93 74 111 90M92 83L111 90L115 70',
    swoop: 'M10 34C43 65 83 63 114 31M93 30L114 31L109 53',
  };
  return <svg className={`friendly-scribble ${className}`} aria-hidden="true" focusable="false" viewBox="0 0 144 104" fill="none"><path d={paths[variant] || paths.loop} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function FriendlyPartners() {
  // Restore the original published partner list, without adding claims or companies.
  const logos = [
    { src: 'logo-restep.png', alt: 'RESTEP', height: 42 },
    { src: 'logo-viora.png', alt: 'VIORA', height: 66 },
    { src: 'logo-synplanning.png', alt: 'Synplanning', height: 58 },
    { src: 'logo-oiler.png', alt: '株式会社日本オイラービルサービス', height: 25 },
    { src: 'logo-jmhs.png', alt: '日本健康医療学会', height: 66 },
    { src: 'logo-enepal.png', alt: 'enepal', height: 43 },
    { src: 'logo-uwec.png', alt: 'University of Wisconsin-Eau Claire', height: 39 },
    { src: 'logo-earth-energy.png', alt: 'アースエナジー', height: 36 },
    { src: 'logo-new-partner.png', alt: 'パートナー企業ロゴ', height: 36 },
  ];
  return <section id="partners" className="friendly-partners" aria-labelledby="partners-heading"><div className="cl-container"><h2 id="partners-heading">パートナー・取引先</h2><ul>{logos.map(logo => <li key={logo.src}><img src={`/assets/logos/${logo.src}`} alt={logo.alt} loading="lazy" style={{ '--partner-height': `${logo.height}px` }} /></li>)}</ul></div></section>;
}
function FriendlyImage({ name, className = '', photo = false }) {
  const image = friendlyImages[name];
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => setFailed(false), [image.src]);
  return <div className={`friendly-image ${photo ? 'friendly-image--photo' : 'friendly-image--drawing'} ${className}`}>
    {image.src && !failed ? <img src={image.src} alt={image.alt} width="960" height="640" loading="lazy" style={{ objectPosition: image.position }} onError={() => setFailed(true)} /> : <div className="friendly-image__fallback" role="img" aria-label={image.alt}><FriendlyFlower /><span>{image.label}</span></div>}
  </div>;
}
function FriendlyIntro() {
  const trail = React.useRef(null);
  React.useEffect(() => {
    const target = trail.current;
    if (!target) return undefined;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { target.classList.add('is-drawn'); observer.disconnect(); }
    }, { threshold: 0.2 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  return <section className="friendly-intro"><div className="cl-container friendly-intro__inner">
    <div className="friendly-intro__heading"><FriendlyFlower className="friendly-intro__flower" /><h2>いっしょに、<br />面白い方へ。</h2></div>
    <div className="friendly-intro__words"><p>「こんなことができたら。」<br />その小さなアイデアから、はじめましょう。</p><p>仕事を進めるしくみをつくること。<br />人と人が出会うきっかけをつくること。</p><p>Classlessは、AIとコミュニティの力で、<br />あなたのプロジェクトに伴走します。</p></div>
    <svg ref={trail} className="friendly-trail" aria-hidden="true" viewBox="0 0 260 130" fill="none"><path pathLength="1" d="M8 22C68 4 96 15 86 52C75 90 32 88 48 57C69 20 174 37 197 90L220 116M194 108L220 116L220 90" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </div></section>;
}
function SimpleBusiness() {
  return <section id="business" className="friendly-business">
    <div className="cl-container friendly-section-heading"><p>私たちにできること</p><h2>つくる、つながる。<br className="friendly-mobile-break" />ふたつの得意。</h2></div>
    <article id="ai" className="friendly-service friendly-service--ai"><div className="cl-container friendly-service__layout">
      <div className="friendly-service__copy">
        <div className="friendly-service__name"><h3>AI事業</h3><img src="/assets/logo-axel.png" alt="アクセル" width="132" height="46" /></div>
        <h4>むずかしい仕事に、<br />やさしいしくみを。</h4>
        <p>毎日くり返す作業も、あちこちに散らばる情報も。<br className="friendly-wide-break" />AI活用サービス「アクセル」で整理して、<br className="friendly-wide-break" />やりたいことに向き合う時間をつくります。</p>
        <ul className="friendly-services"><li>n8nによるワークフロー設計</li><li>データベースマネジメント</li><li>サイト設計・制作</li></ul>
        <a className="friendly-button" href="/contact?topic=ai">しくみづくりを相談する<FriendlyArrow /></a>
      </div>
      <div className="friendly-service__art"><span className="friendly-note">仕事が、すいすい。</span><FriendlyScribble className="friendly-scribble--service" variant="bend" /><FriendlyImage name="ai" /><span className="friendly-service__image-note">AI活用のイメージイラスト</span></div>
    </div></article>
    <article id="community" className="friendly-service friendly-service--community"><div className="cl-container friendly-service__layout">
      <div className="friendly-service__art"><span className="friendly-note">出会いから、はじまる。</span><FriendlyImage name="community" /><span className="friendly-service__image-note">コミュニティづくりのイメージイラスト</span></div>
      <div className="friendly-service__copy">
        <div className="friendly-service__name"><h3>コミュニティ組成事業</h3></div>
        <h4>人と人のあいだに、<br />新しいきっかけを。</h4>
        <p>Tokyo Global Hubや、ちいきのかまど。<br className="friendly-wide-break" />背景の違う人が集まり、話し、一緒につくる。<br className="friendly-wide-break" />そんな場と、活動が続くしくみを育てています。</p>
        <ul className="friendly-services"><li>コミュニティの企画・運営</li><li>地域おこし協力隊のネットワーク設計</li><li>地域のプロジェクト支援</li></ul>
        <a className="friendly-button friendly-button--green" href="https://chiikinokamado.jp/" target="_blank" rel="noopener noreferrer">ちいきのかまどを見る<FriendlyArrow external /></a>
      </div>
    </div></article>
  </section>;
}
function SimpleProjects() {
  const projects = [
    { title: 'アクセル', category: '仕事のしくみづくり', image: 'axelProject', text: 'n8nの自動化から、データベース、Webサイトまで。現場で使い続けられるしくみを。', href: '/contact?topic=ai', link: '相談する', photo: false, logo: true },
    { title: 'Tokyo Global Hub', category: '国際交流のコミュニティ', image: 'globalHub', text: '異なる背景を持つ人が出会い、一緒に活動する。交流から次のきっかけをつくります。', href: 'https://www.instagram.com/tokyoglobalhub/', link: 'Instagramを見る', external: true, photo: true },
    { title: 'ちいきのかまど', category: '地域からはじまるつながり', image: 'kamado', text: '地域を知る、関わる、つながる。地域で動く人と、その挑戦を支える取り組みです。', href: 'https://chiikinokamado.jp/', link: '活動を見る', external: true, photo: true },
  ];
  return <section id="projects" className="friendly-projects"><div className="cl-container">
    <div className="friendly-section-heading"><p>ともにつくるプロジェクト</p><h2>いろんな場所で、<br />面白いことが動いています。</h2><FriendlyScribble className="friendly-scribble--projects" /></div>
    <div className="friendly-project-grid">{projects.map(project => <article className="friendly-project" key={project.title}>
      <a className={`friendly-project__image-link${project.logo ? ' friendly-project__image-link--logo' : ''}`} href={project.href} {...(project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={`${project.title} ${project.link}`}><FriendlyImage name={project.image} photo={project.photo} className={project.logo ? 'friendly-image--logo' : ''} /></a>
      <p className="friendly-project__category">{project.category}</p><h3>{project.title}</h3><p className="friendly-project__description">{project.text}</p>
      <a className="friendly-text-link" href={project.href} {...(project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{project.link}<FriendlyArrow external={project.external} /></a>
    </article>)}</div>
  </div></section>;
}
function SimpleCompany() {
  const rows = [['会社名', '合同会社Classless'], ['代表者', '丸山 侑太'], ['所在地', '東京都渋谷区円山町5-3 MIEUX渋谷ビル 5階'], ['設立', '2025年10月1日']];
  return <section id="company" className="friendly-company"><div className="cl-container friendly-company__inner"><div className="friendly-company__intro"><p>私たちのこと</p><h2>境界を越えて、<br />可能性を広げる。</h2><p>テクノロジーも、人のつながりも。<br />挑戦する人のそばで、手を動かす会社です。</p></div><dl>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></section>;
}
Object.assign(window, { FriendlyIntro, FriendlyPartners, SimpleBusiness, SimpleProjects, SimpleCompany });
