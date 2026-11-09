function ContactBand() {
  return <section id="contact-band" className="simple-contact"><div className="cl-container simple-contact-inner"><div><h2>まずは、話すところから。</h2><p>仕事のしくみも、人が集まる場も。<br />いま考えていることを聞かせてください。</p></div><a href="/contact" className="cl-action-link cl-action-link--primary cl-action-link--lg">相談する <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h15M13 6l6 6-6 6" /></svg></a></div></section>;
}
function Footer() {
  return <footer className="simple-footer"><div className="cl-container"><div className="simple-footer-top"><a href="/" aria-label="Classless トップページ"><img src="/assets/logo-classless-horizontal.png" alt="Classless" width="190" height="44" /></a><nav aria-label="フッターナビゲーション"><a href="/#ai">アクセル・AI事業</a><a href="/#community">コミュニティ組成事業</a><a href="/blog">ニュース・ナレッジ</a><a href="/contact">お問い合わせ</a></nav></div><div className="simple-footer-bottom"><small>© {new Date().getFullYear()} Classless LLC.</small><div><a href="/privacy">プライバシーポリシー</a><a href="/terms">利用規約</a><a href="/tokushoho">特定商取引法</a></div></div></div></footer>;
}
Object.assign(window, { ContactBand, Footer });
