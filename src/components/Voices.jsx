/* Classless corporate site — VOICES (note 埋め込み式の導入事例カード)
   note に公開した導入事例を、ご自身の言葉で読んでもらうセクション。
   記事が増えたら voices 配列に追加するだけ。将来 microCMS 等へ差し替え可能。 */
function Voices() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, BrandVisual, Arrow } = window;
  const ref = useReveal();

  // ▼▼ note 記事を追加・編集するのはここだけ ▼▼
  //   thumb: 画像URL（/voices/xxx.png を public に置く）or 省略でブランドビジュアル
  //   tone : blue / orange / green / red（サムネ未指定時の色）
  //   href : note 記事のURL（'#' のままなら準備中表示）
  const voices = [
    { tone: 'blue',   cat: '導入事例',     title: '繰り返し業務をAIに任せ、コア業務に集中できる体制へ。', href: '#' },
    { tone: 'orange', cat: '導入事例',     title: '業種特化AIエージェントの内製化で、現場のスピードが変わった。', href: '#' },
    { tone: 'green',  cat: '導入事例',     title: '散在データの構造化で、AI活用の土台を整える。', href: '#' },
  ];
  // ▲▲ ここまで ▲▲

  return (
    <section id="voices" ref={ref} style={{ background: 'var(--color-bg)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <div className="reveal"><Eyebrow>Voices</Eyebrow></div>
        <h2 className="reveal" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.32, animationDelay: '0.08s' }}>
          導入事例を、記事で読む。
        </h2>
        <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 16, maxWidth: '34em', animationDelay: '0.14s' }}>
          導入事例を、お客様ご自身の言葉で note に公開しています。
        </p>

        <div className="cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 'clamp(40px, 5vw, 64px)' }}>
          {voices.map((v, i) => {
            const ready = v.href && v.href !== '#';
            const Tag = ready ? 'a' : 'div';
            const tagProps = ready ? { href: v.href, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <Tag key={i} {...tagProps} className="reveal voice-card" style={{
                display: 'flex', flexDirection: 'column', background: '#fff',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)', color: 'var(--text-primary)', animationDelay: `${0.08 * i}s`,
                transition: 'transform .3s var(--ease-out), box-shadow .3s var(--ease-out)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
                {v.thumb
                  ? <img src={v.thumb} alt="" style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover' }} />
                  : <BrandVisual tone={v.tone} ratio="16 / 10" label="note" radius="0" style={{ boxShadow: 'none' }} />}
                <div style={{ padding: '24px 22px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', color: `var(--brand-${v.tone})` }}>{v.cat}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 900, lineHeight: 1.5, marginTop: 12, flex: 1 }}>{v.title}</h3>
                  <span className="arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, fontWeight: 700, fontSize: 14, color: ready ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {ready ? <React.Fragment><b style={{ fontWeight: 800 }}>note</b> で読む <Arrow s={16} /></React.Fragment> : '準備中'}
                  </span>
                </div>
              </Tag>
            );
          })}
        </div>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <a href="https://note.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" tone="ink" size="lg" iconRight={<Arrow />}>note で記事を見る</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Voices });
