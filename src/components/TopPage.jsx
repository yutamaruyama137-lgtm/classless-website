import { CorporateImage, CorporateArrow } from './CorporateImage.jsx';

function TopHero() {
  return (
    <section id="top" className="corporate-hero">
      <div className="corporate-hero__visual"><CorporateImage name="hero" eager /></div>
      <div className="cl-container corporate-hero__content">
        <p className="corporate-hero__statement">Beyond borders. Beyond possibilities.</p>
        <h1><span>AIで、人間を</span><span>面白くする。</span></h1>
        <p className="corporate-hero__lead">テクノロジーと、人のつながりで。<br />新しい挑戦が動き出す、その土台をつくる。</p>
        <a className="corporate-text-link" href="#business">私たちの事業について <CorporateArrow /></a>
      </div>
      <div className="corporate-hero__bottom cl-container"><span>Making Humans Interesting with AI.</span><a href="#business" aria-label="事業紹介へスクロール">Scroll <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
Object.assign(window, { TopHero });
