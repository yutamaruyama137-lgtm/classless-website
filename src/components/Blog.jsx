/* Classless corporate site — Blog (index + article).
   Reads window.BLOG_ARTICLES (populated by src/blog/registry.js).
   Layout echoes a business-media hub (featured → new posts + ranking sidebar →
   category sections → CTA), restyled to the Classless design tokens. */

/* ---- shared helpers ---------------------------------------------------- */

// Minimal inline formatter: **bold** → <strong>. Returns an array of nodes.
function fmt(text) {
  const out = [];
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0, m, k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<strong key={k++} style={{ fontWeight: 800, color: 'var(--text-primary)' }}>{m[1]}</strong>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function toneOf(a) { return a.tone || 'blue'; }

function useBlogNarrow() {
  const get = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 920px)').matches;
  const [n, setN] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 920px)');
    const on = () => setN(mq.matches); on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return n;
}

/* A single article card (image + date + category chip + title). */
function ArticleCard({ a, size = 'md' }) {
  const { BrandVisual } = window;
  const big = size === 'lg';
  const img = window.pickBlogImage ? window.pickBlogImage(a.category, a.slug) : null;
  return (
    <a href={`/blog/${a.slug}`} className="reveal blog-card" style={{
      display: 'flex', flexDirection: 'column', background: '#fff',
      border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
      overflow: 'hidden', boxShadow: 'var(--shadow-sm)', textDecoration: 'none',
      transition: 'transform .25s var(--ease-out), box-shadow .25s var(--ease-out)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
      <BrandVisual tone={toneOf(a)} label={a.category} image={img} ratio="16 / 9" radius="0" tilt={false} />
      <div style={{ padding: big ? 'clamp(18px,2vw,24px)' : '16px 18px', display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{a.date}</span>
        </div>
        <h3 style={{ fontSize: big ? 'clamp(17px,1.9vw,21px)' : 15, fontWeight: 800, lineHeight: 1.55, color: 'var(--text-primary)' }}>{a.title}</h3>
        <span style={{ marginTop: 'auto', alignSelf: 'flex-start', fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 11.5, color: `var(--${toneOf(a)}-700)`, background: `var(--${toneOf(a)}-50)`, padding: '3px 10px', borderRadius: 'var(--radius-pill)' }}>{a.category}</span>
      </div>
    </a>
  );
}

/* End-of-article CTA — the single place where Classless promotion AND a sense
   of pricing are bundled together. The body stays information-first; brand and
   price talk are consolidated here at the end on purpose. */
function ArticleCta() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { Arrow } = window;
  const price = [
    ['初期費用', '0円'],
    ['実働パッケージ', '月¥66,000〜（月20h）'],
    ['実働単価', '¥3,000/h 固定'],
    ['AI顧問', '月¥50,000〜'],
  ];
  return (
    <div className="reveal" style={{
      margin: 'clamp(32px,4vw,52px) 0 8px', padding: 'clamp(26px,3vw,40px)',
      borderRadius: 'var(--radius-xl, 20px)', background: 'var(--neutral-900)',
      position: 'relative', overflow: 'hidden',
    }}>
      <span className="cl-spectrum-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5 }} />
      <div style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand-blue)' }}>About Classless</div>
      <p style={{ color: '#fff', fontSize: 'clamp(18px,2.2vw,24px)', fontWeight: 900, lineHeight: 1.5, margin: '10px 0 8px' }}>御社専属の「外部AI部署」を、小さくはじめませんか？</p>
      <p style={{ color: 'rgba(255,255,255,0.74)', fontSize: 14, lineHeight: 1.9, margin: '0 0 20px', maxWidth: '40em' }}>
        Classlessは東北・仙台発、地域・中小企業に伴走するAI活用パートナーです。AI BPO・AIシステム開発・データ活用・AI教育まで一気通貫で支援します。初期費用0円・実働は時給固定で、必要な分だけスモールスタートできます。
      </p>
      {/* 金額感 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 22 }}>
        {price.map(([k, v]) => (
          <div key={k} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{k}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 800, color: '#fff' }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <a href="/contact"><Button size="lg" iconRight={<Arrow />}>無料AI診断・相談はこちら</Button></a>
        <a href="/#pricing" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, fontWeight: 700 }}>料金の詳細を見る →</a>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, lineHeight: 1.7, margin: '16px 0 0' }}>※金額は目安です。まずは無料相談・無料体験から、何から始めるかを一緒に整理します。</p>
    </div>
  );
}

/* ---- article body block renderer -------------------------------------- */
function Block({ b, a, idx }) {
  const { BrandVisual } = window;
  switch (b.t) {
    case 'lead':
      return <p style={{ fontSize: 'clamp(16px,1.9vw,18px)', lineHeight: 1.95, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 8px' }}>{fmt(b.text)}</p>;
    case 'h2':
      return <h2 id={b.id} style={{ scrollMarginTop: 90, fontSize: 'clamp(21px,2.6vw,28px)', fontWeight: 900, lineHeight: 1.45, margin: 'clamp(36px,4vw,52px) 0 16px', paddingBottom: 12, borderBottom: '2px solid var(--color-border)' }}>{b.text}</h2>;
    case 'h3':
      return <h3 style={{ fontSize: 'clamp(17px,2vw,21px)', fontWeight: 800, lineHeight: 1.5, margin: 'clamp(24px,2.6vw,32px) 0 12px', color: 'var(--text-primary)' }}>{b.text}</h3>;
    case 'p':
      return <p style={{ fontSize: 15.5, lineHeight: 2.0, color: 'var(--text-secondary)', margin: '0 0 18px' }}>{fmt(b.text)}</p>;
    case 'img': {
      const url = b.image || (window.pickBlogImage && a ? window.pickBlogImage(a.category, `${a.slug}-${idx}`) : null);
      return (
        <figure className="reveal" style={{ margin: 'clamp(24px,2.8vw,36px) 0' }}>
          <BrandVisual tone={b.tone || (a && a.tone) || 'blue'} label={b.label} image={url} ratio="16 / 9" />
          {b.caption && <figcaption style={{ fontSize: 12.5, color: 'var(--text-muted)', textAlign: 'center', marginTop: 10, fontWeight: 600 }}>{b.caption}</figcaption>}
        </figure>
      );
    }
    case 'ul':
      return <ul style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {b.items.map((it, i) => <li key={i} style={{ position: 'relative', paddingLeft: 24, fontSize: 15.5, lineHeight: 1.85, color: 'var(--text-secondary)' }}>
          <span style={{ position: 'absolute', left: 4, top: 11, width: 8, height: 8, borderRadius: '50%', background: 'var(--brand-blue)' }} />{fmt(it)}</li>)}
      </ul>;
    case 'ol':
      return <ol style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', counterReset: 'cl', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {b.items.map((it, i) => <li key={i} style={{ position: 'relative', paddingLeft: 38, fontSize: 15.5, lineHeight: 1.85, color: 'var(--text-secondary)' }}>
          <span style={{ position: 'absolute', left: 0, top: 0, width: 26, height: 26, borderRadius: '50%', background: 'var(--blue-50)', color: 'var(--brand-blue)', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>{fmt(it)}</li>)}
      </ol>;
    case 'table':
      return (
        <div className="reveal" style={{ margin: '0 0 24px', overflowX: 'auto', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md,12px)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr>{b.head.map((h, i) => <th key={i} style={{ textAlign: 'left', padding: '12px 14px', background: 'var(--color-bg-subtle)', fontWeight: 800, color: 'var(--text-primary)', borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap' }}>{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci} style={{ padding: '12px 14px', borderBottom: ri === b.rows.length - 1 ? 'none' : '1px solid var(--color-border)', color: ci === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: ci === 0 ? 800 : 500, lineHeight: 1.7 }}>{fmt(String(c))}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    case 'callout':
      return (
        <div className="reveal" style={{ margin: '0 0 24px', padding: '18px 20px', borderRadius: 'var(--radius-md,12px)', background: `var(--${b.tone || 'blue'}-50)`, borderLeft: `4px solid var(--brand-${b.tone || 'blue'})` }}>
          {b.title && <div style={{ fontWeight: 800, fontSize: 14.5, color: `var(--${b.tone || 'blue'}-700)`, marginBottom: 6 }}>{b.title}</div>}
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: 'var(--text-secondary)' }}>{fmt(b.text)}</p>
        </div>
      );
    case 'cta':
      return <ArticleCta />;
    default:
      return null;
  }
}

/* ---- Article page ------------------------------------------------------ */
function BlogArticle({ slug, onAnchor }) {
  const { useReveal, BrandVisual } = window;
  const all = window.BLOG_ARTICLES || [];
  const ref = useReveal();
  const narrow = useBlogNarrow();

  const a = all.find((x) => x.slug === slug);
  React.useEffect(() => { if (a) document.title = `${a.title}｜Classless`; }, [a]);

  if (!a) {
    return (
      <section style={{ paddingTop: 140, paddingBottom: 'var(--section-y)' }}>
        <div className="cl-container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 28, fontWeight: 900 }}>記事が見つかりませんでした</h1>
          <p style={{ marginTop: 16 }}><a href="/blog" style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>ブログ一覧へ戻る →</a></p>
        </div>
      </section>
    );
  }

  // Assign stable ids to h2 blocks and build the TOC.
  const toc = [];
  const blocks = a.blocks.map((b, i) => {
    if (b.t === 'h2') { const id = `sec-${i}`; toc.push({ id, text: b.text }); return { ...b, id }; }
    return b;
  });

  const related = all.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);
  const relFill = related.length < 3 ? [...related, ...all.filter((x) => x.slug !== a.slug && !related.includes(x)).slice(0, 3 - related.length)] : related;

  return (
    <section ref={ref} style={{ background: '#fff', paddingTop: 'clamp(28px,4vw,52px)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container" style={{ maxWidth: 1140 }}>
        {/* breadcrumb */}
        <nav style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <a href="/" style={{ color: 'var(--text-muted)' }}>ホーム</a><span>/</span>
          <a href="/blog" style={{ color: 'var(--text-muted)' }}>ブログ</a><span>/</span>
          <span style={{ color: 'var(--text-secondary)' }}>{a.category}</span>
        </nav>

        <div className="blog-article-grid" style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(0,1fr) 270px', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}>
          {/* main */}
          <article style={{ minWidth: 0 }}>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 12, color: `var(--${toneOf(a)}-700)`, background: `var(--${toneOf(a)}-50)`, padding: '4px 12px', borderRadius: 'var(--radius-pill)' }}>{a.category}</span>
            <h1 className="reveal" style={{ fontSize: 'clamp(25px,3.4vw,40px)', fontWeight: 900, lineHeight: 1.45, letterSpacing: '0.01em', margin: '16px 0 16px' }}>{a.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 24 }}>
              <span>{a.date}</span><span>約{a.readMin}分で読めます</span>
            </div>

            <div className="reveal" style={{ marginBottom: 'clamp(24px,3vw,36px)' }}>
              <BrandVisual tone={toneOf(a)} label={a.category} image={window.pickBlogImage ? window.pickBlogImage(a.category, a.slug) : null} ratio="16 / 9" />
            </div>

            {/* mobile TOC (top) */}
            {narrow && <TocBox toc={toc} />}

            <div className="blog-body">
              {blocks.map((b, i) => <Block key={i} b={b} a={a} idx={i} />)}
            </div>

            {/* related */}
            {relFill.length > 0 && (
              <div style={{ marginTop: 'clamp(40px,5vw,64px)', borderTop: '1px solid var(--color-border)', paddingTop: 'clamp(28px,3vw,40px)' }}>
                <h2 style={{ fontSize: 'clamp(19px,2.2vw,24px)', fontWeight: 900, marginBottom: 22 }}>関連記事</h2>
                <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr 1fr', gap: 18 }}>
                  {relFill.map((r) => <ArticleCard key={r.slug} a={r} />)}
                </div>
              </div>
            )}
          </article>

          {/* sidebar (desktop) */}
          {!narrow && (
            <aside style={{ position: 'sticky', top: 90, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <TocBox toc={toc} />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

function TocBox({ toc }) {
  if (!toc.length) return null;
  return (
    <div style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'clamp(18px,2vw,24px)', marginBottom: 12 }}>
      <div style={{ fontWeight: 900, fontSize: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 4, height: 16, background: 'var(--brand-blue)', borderRadius: 2 }} />目次
      </div>
      <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {toc.map((t, i) => (
          <li key={t.id}>
            <a href={`#${t.id}`} style={{ display: 'flex', gap: 10, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)', fontWeight: 600, textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--brand-blue)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{t.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SidebarCta() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  return (
    <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'clamp(20px,2.2vw,26px)' }}>
      <p style={{ fontWeight: 800, fontSize: 14.5, lineHeight: 1.6, margin: '0 0 6px', color: 'var(--text-primary)' }}>Classlessについて</p>
      <p style={{ color: 'var(--text-secondary)', fontSize: 12.5, lineHeight: 1.85, margin: '0 0 16px' }}>東北・仙台発、地域・中小企業に伴走するAI活用パートナー。無料相談も受け付けています。</p>
      <a href="/contact"><Button fullWidth size="sm" variant="secondary" tone="ink">無料で相談してみる</Button></a>
    </div>
  );
}

/* ---- Index page -------------------------------------------------------- */
function BlogIndex() {
  const { useReveal, Eyebrow } = window;
  const ref = useReveal();
  const narrow = useBlogNarrow();
  const all = window.BLOG_ARTICLES || [];
  const cats = window.BLOG_CATEGORIES || [];

  React.useEffect(() => { document.title = 'ブログ｜Classless — AI活用・業務効率化のお役立ちコラム'; }, []);

  const featured = all.slice(0, 3);
  const recent = all.slice(0, 9);
  const ranking = all.slice(0, 5); // simple "popular" proxy

  return (
    <section ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'clamp(40px,6vw,90px)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* page heading */}
        <div className="reveal"><Eyebrow>Blog</Eyebrow></div>
        <h1 className="reveal" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, marginTop: 16, lineHeight: 1.3, letterSpacing: '0.01em' }}>
          AI活用と業務効率化の、<span style={{ color: 'var(--brand-blue)' }}>お役立ちコラム</span>
        </h1>
        <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 16, maxWidth: '46em', animationDelay: '0.12s' }}>
          AI BPOの選び方、業務別おすすめAIツール、生成AIの導入ノウハウまで。地方・中小企業がAXを進めるための実践情報をお届けします。
        </p>

        {/* featured */}
        {featured.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1.4fr 1fr', gap: 'clamp(18px,2.4vw,26px)', marginTop: 'clamp(32px,4vw,52px)' }}>
            <ArticleCard a={featured[0]} size="lg" />
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 'clamp(18px,2.4vw,26px)' }}>
              {featured.slice(1, 3).map((a) => <ArticleCard key={a.slug} a={a} />)}
            </div>
          </div>
        )}

        {/* main + sidebar */}
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(0,1fr) 300px', gap: 'clamp(28px,4vw,48px)', marginTop: 'clamp(48px,6vw,80px)', alignItems: 'start' }}>
          <div style={{ minWidth: 0 }}>
            <SectionTitle>新着記事</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr 1fr', gap: 'clamp(18px,2.2vw,24px)' }}>
              {recent.map((a) => <ArticleCard key={a.slug} a={a} />)}
            </div>

            {/* per-category sections */}
            {cats.map((c) => {
              const list = all.filter((a) => a.category === c.key).slice(0, 3);
              if (!list.length) return null;
              return (
                <div key={c.key} style={{ marginTop: 'clamp(44px,5vw,64px)' }}>
                  <SectionTitle tone={c.tone}>{c.key}</SectionTitle>
                  <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr 1fr', gap: 'clamp(18px,2.2vw,24px)' }}>
                    {list.map((a) => <ArticleCard key={a.slug} a={a} />)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* sidebar */}
          {!narrow && (
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 28, position: 'sticky', top: 90 }}>
              {/* ranking */}
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 22 }}>
                <div style={{ fontWeight: 900, fontSize: 15, marginBottom: 16 }}>人気記事ランキング</div>
                <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {ranking.map((a, i) => (
                    <li key={a.slug}>
                      <a href={`/blog/${a.slug}`} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', textDecoration: 'none' }}>
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: i < 3 ? 'var(--brand-orange)' : 'var(--neutral-300, #cbd2da)', color: '#fff', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.55, color: 'var(--text-primary)' }}>{a.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              {/* categories */}
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 22 }}>
                <div style={{ fontWeight: 900, fontSize: 15, marginBottom: 16 }}>カテゴリ</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {cats.map((c) => {
                    const n = all.filter((a) => a.category === c.key).length;
                    return <li key={c.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13.5, fontWeight: 700, color: 'var(--text-secondary)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: `var(--brand-${c.tone})` }} />{c.key}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{n}</span>
                    </li>;
                  })}
                </ul>
              </div>
              <SidebarCta />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children, tone = 'blue' }) {
  return (
    <h2 className="reveal" style={{ fontSize: 'clamp(19px,2.4vw,26px)', fontWeight: 900, marginBottom: 22, display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ width: 6, height: 24, borderRadius: 3, background: `var(--brand-${tone})` }} />{children}
    </h2>
  );
}

Object.assign(window, { BlogIndex, BlogArticle });
