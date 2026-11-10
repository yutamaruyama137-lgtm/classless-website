import { FriendlyArrow, FriendlyFlower, FriendlyScribble } from './SimpleHome.jsx';
function ContactBand() {
  return <section id="contact-band" className="friendly-contact"><div className="cl-container friendly-contact__inner"><FriendlyFlower className="friendly-contact__flower" /><div><p>まずは、お話ししませんか。</p><h2>まだ、ふわっとした<br />相談でも。</h2><p>仕事のこと、地域のこと、これからのこと。<br />「こんなことできる？」から、一緒に考えます。</p></div><div className="friendly-contact__action"><FriendlyScribble className="friendly-scribble--contact" variant="swoop" /><a href="/contact" className="friendly-button friendly-button--contact">相談してみる<FriendlyArrow /></a></div></div></section>;
}
function Footer() {
  return <footer className="friendly-footer"><div className="cl-container"><div className="friendly-footer__top"><div><a href="/" aria-label="Classless トップページ"><img src="/assets/logo-classless-horizontal.png" alt="Classless" width="190" height="49" /></a><p>合同会社Classless</p></div><nav aria-label="フッターナビゲーション"><a href="/#business">私たちにできること</a><a href="/#projects">プロジェクト</a><a href="/#company">会社情報</a><a href="/blog">ニュース・ナレッジ</a><a href="/contact">お問い合わせ</a></nav></div><div className="friendly-footer__bottom"><small>© {new Date().getFullYear()} Classless LLC.</small><nav aria-label="法務情報"><a href="/privacy">プライバシーポリシー</a><a href="/terms">利用規約</a><a href="/tokushoho">特定商取引法に基づく表記</a></nav></div></div></footer>;
}
Object.assign(window, { ContactBand, Footer });
