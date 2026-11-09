import { CorporateArrow } from './CorporateImage.jsx';

function ContactBand() {
  return (
    <section id="contact-band" className="corporate-contact"><div className="cl-container corporate-contact__inner">
      <div><p className="corporate-section-label">お問い合わせ</p><h2>次の一歩を、<br />ともに考える。</h2><p>業務のしくみづくりから、地域のプロジェクトまで。<br />構想段階から、お気軽にご相談ください。</p></div>
      <a href="/contact" className="corporate-contact__link">ご相談・お問い合わせ<CorporateArrow /></a>
    </div></section>
  );
}
function Footer() {
  return (
    <footer className="corporate-footer"><div className="cl-container">
      <div className="corporate-footer__top">
        <div><a href="/" aria-label="Classless トップページ"><img src="/assets/logo-classless-horizontal.png" alt="Classless" width="190" height="49" /></a><p>合同会社Classless</p></div>
        <nav aria-label="フッターナビゲーション"><a href="/#business">事業紹介</a><a href="/#projects">プロジェクト</a><a href="/#company">会社情報</a><a href="/blog">ニュース・ナレッジ</a><a href="/contact">お問い合わせ</a></nav>
      </div>
      <div className="corporate-footer__bottom"><small>© {new Date().getFullYear()} Classless LLC.</small><nav aria-label="法務情報"><a href="/privacy">プライバシーポリシー</a><a href="/terms">利用規約</a><a href="/tokushoho">特定商取引法に基づく表記</a></nav></div>
    </div></footer>
  );
}
Object.assign(window, { ContactBand, Footer });
