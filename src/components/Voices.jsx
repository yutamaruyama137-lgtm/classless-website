/* Classless corporate site — VOICES（note 記事の自動表示）
   /api/voices（サーバーレス関数）が note RSS を取得して返す。
   記事が0件のときはセクションごと非表示。記事が公開されると自動でカード表示。 */
const NOTE_URL = 'https://note.com/classlessllc_731';

function Voices() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, BrandVisual, Arrow } = window;
  const ref = useReveal();

  const [items, setItems] = React.useState(null); // null=未取得 / []=記事なし / [...]
  React.useEffect(() => {
    let alive = true;
    fetch('/api/voices')
      .then((r) => (r.ok ? r.json() : { items: [] }))
      .then((d) => { if (alive) setItems(Array.isArray(d.items) ? d.items : []); })
      .catch(() => { if (alive) setItems([]); });
    return () => { alive = false; };
  }, []);

  // 記事がまだ無い／取得失敗 → セクションを出さない
  if (!items || items.length === 0) return null;

  const tones = ['blue', 'orange', 'green', 'red'];
  const fmtDate = (s) => {
    const d = new Date(s);
    if (isNaN(d)) return '';
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
  };

  return (
    <section id="voices" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <div className="reveal"><Eyebrow>Voices</Eyebrow></div>
        <h2 className="reveal" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.32, animationDelay: '0.08s' }}>
          導入事例を、記事で読む。
        </h2>
        <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 16, maxWidth: '34em', animationDelay: '0.14s' }}>
          導入事例や活用のヒントを、Classless の note に公開しています。
        </p>

        <div className="cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 'clamp(40px, 5vw, 64px)' }}>
          {items.map((v, i) => {
            const tone = tones[i % tones.length];
            return (
              <a key={v.link || i} href={v.link} target="_blank" rel="noopener noreferrer"
                className="reveal voice-card" style={{
                  display: 'flex', flexDirection: 'column', background: '#fff',
                  border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)', color: 'var(--text-primary)', animationDelay: `${0.08 * i}s`,
                  transition: 'transform .3s var(--ease-out), box-shadow .3s var(--ease-out)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
                {v.image
                  ? <img src={v.image} alt="" loading="lazy" style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover' }} />
                  : <BrandVisual tone={tone} ratio="16 / 10" label="note" radius="0" style={{ boxShadow: 'none' }} />}
                <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', color: `var(--brand-${tone})` }}>{fmtDate(v.pubDate)}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 900, lineHeight: 1.5, marginTop: 10 }}>{v.title}</h3>
                  {v.excerpt && <p style={{ fontSize: 13, lineHeight: 1.85, color: 'var(--text-secondary)', marginTop: 10, flex: 1 }}>{v.excerpt}…</p>}
                  <span className="arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, fontWeight: 700, fontSize: 14 }}>
                    <b style={{ fontWeight: 800 }}>note</b> で読む <Arrow s={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <a href={NOTE_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" tone="ink" size="lg" iconRight={<Arrow />}>note で記事を見る</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Voices });
