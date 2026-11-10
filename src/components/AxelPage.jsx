import { AxelExamples } from './AxelExamples.jsx';
import { AxelMaterialsForm } from './AxelMaterialsForm.jsx';
import { FriendlyArrow, FriendlyScribble } from './SimpleHome.jsx';

export function AxelPage() {
  return <article className="axel-detail">
    <section className="cl-container axel-detail__intro" aria-labelledby="axel-title">
      <nav className="axel-detail__breadcrumb" aria-label="パンくずリスト"><a href="/">ホーム</a><span aria-hidden="true">/</span><span>アクセル</span></nav>
      <div className="axel-detail__hero">
        <div>
          <img className="axel-detail__logo" src="/assets/logo-axel.png" alt="アクセル" width="1579" height="308" />
          <h1 id="axel-title">人が考える時間を、<br />しくみでつくる。</h1>
          <p>毎日の転記や確認に使っていた時間を、次のアイデアへ。<br className="friendly-wide-break" />アクセルは、今の業務を一緒にひもとき、<br className="friendly-wide-break" />AI・自動化・データを現場で使える形に整えます。</p>
          <div className="axel-detail__intro-actions"><a className="friendly-button" href="#axel-examples">具体的なしくみを見る<FriendlyArrow /></a><a className="friendly-text-link" href="#materials">資料請求<FriendlyArrow /></a></div>
        </div>
        <div className="axel-detail__art"><FriendlyScribble className="axel-detail__scribble" variant="bend" /><img src="/illustrations/ai-workflow.png" alt="人と道具がつながり、仕事のしくみを整える工房" width="1536" height="1024" /></div>
      </div>
      <ul className="axel-detail__scope"><li>n8nによる業務自動化・ツール連携</li><li>データベースの設計・運用管理</li><li>社内資料を探すAI・Webサイトの制作</li></ul>
    </section>
    <AxelExamples />
    <AxelMaterialsForm />
    <section className="cl-container axel-detail__consult"><div><h2>今の業務から、一緒に考えます。</h2><p>ツールが決まっていなくても大丈夫です。<br />困っている作業や、実現したいことを聞かせてください。</p></div><a className="friendly-button" href="/contact?topic=ai">業務について相談する<FriendlyArrow /></a></section>
  </article>;
}
