import { useState } from 'react';
import { axelExamples } from '../data/axelExamples.js';

function DemoImage({ example }) {
  const [failed, setFailed] = useState(false);
  return <figure className="axel-examples__visual">
    {failed
      ? <div className="axel-examples__image-fallback" role="img" aria-label={example.alt}>{example.choice}<span>業務に合わせたしくみを設計します。</span></div>
      : <img src={example.src} alt={example.alt} width="1536" height="1024" loading="lazy" onError={() => setFailed(true)} />}
    <figcaption>構築例の画面イメージ</figcaption>
  </figure>;
}

export function AxelExamples() {
  const [selected, setSelected] = useState(axelExamples[0].id);
  const example = axelExamples.find(item => item.id === selected);
  return <section id="axel-examples" className="cl-container axel-examples" aria-labelledby="axel-examples-heading">
    <div className="axel-examples__intro">
      <h4 id="axel-examples-heading">アクセルで、仕事はこう変わる。</h4>
      <p>AIを使うだけで終わらせず、いつもの業務につながるしくみへ。<br className="friendly-wide-break" />資料検索、問い合わせ管理、Webとデータの連携を、現場に合わせて設計・実装します。</p>
    </div>
    <div className="axel-examples__choices" role="group" aria-label="アクセルの構築例を選ぶ">
      {axelExamples.map(item => <button key={item.id} type="button" aria-pressed={selected === item.id} aria-controls="axel-example-panel" onClick={() => setSelected(item.id)}>{item.choice}</button>)}
    </div>
    <div id="axel-example-panel" className="axel-examples__panel" role="region" aria-labelledby="axel-example-title">
      <div className="axel-examples__copy" aria-live="polite" aria-atomic="true">
        <h5 id="axel-example-title">{example.title}</h5>
        <p>{example.description}</p>
        <dl>{example.steps.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p className="axel-examples__deliverables"><strong>設計するもの</strong><span>{example.deliverables}</span></p>
      </div>
      <DemoImage key={example.id} example={example} />
    </div>
    <div className="axel-examples__next">
      <div><p>業務の整理から、使い続けるところまで。</p><ol aria-label="ご支援の流れ"><li>業務整理</li><li>設計・実装</li><li>運用改善</li></ol></div>
      <a className="friendly-button" href="/contact?topic=ai">自分たちの業務で相談する<svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg></a>
    </div>
  </section>;
}
