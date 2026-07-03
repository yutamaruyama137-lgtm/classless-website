/* Classless corporate site — top page (LayerX-style corporate layout)
   構成: Hero(Mission) → Statement(Vision) → What We Do(2事業) → News → Join → Contact
   装飾は平面的なジオメトリック・シェイプのみ。余白と大きな文字で見せる。 */

/* ---- 平面ジオメトリック装飾(LayerXの角形モチーフ) ---- */
function GeoDecor({ variant = 'hero' }) {
  // 平行四辺形クラスタ。ブランドブルー系 + 薄グレーで静かに。
  const sets = {
    hero: [
      { top: '4%', right: '-2%', w: 220, h: 84, c: 'var(--blue-100)', sk: -18, d: 0 },
      { top: '13%', right: '6%', w: 120, h: 46, c: 'var(--blue-500)', sk: -18, d: 1.2, o: 0.85 },
      { top: '21%', right: '-4%', w: 170, h: 58, c: 'var(--neutral-100)', sk: -18, d: 2.1 },
      { bottom: '18%', left: '-3%', w: 190, h: 66, c: 'var(--blue-50)', sk: -18, d: 0.6 },
      { bottom: '9%', left: '5%', w: 110, h: 40, c: 'var(--blue-300)', sk: -18, d: 1.7, o: 0.7 },
    ],
    band: [
      { top: '-24px', right: '4%', w: 150, h: 52, c: 'var(--blue-100)', sk: -18, d: 0 },
      { top: '30px', right: '-2%', w: 90, h: 34, c: 'var(--blue-400)', sk: -18, d: 1, o: 0.6 },
    ],
  };
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {(sets[variant] || sets.hero).map((g, i) => (
        <span key={i} className="geo-float" style={{
          position: 'absolute', top: g.top, right: g.right, bottom: g.bottom, left: g.left,
          width: g.w, height: g.h, background: g.c, opacity: g.o != null ? g.o : 1,
          transform: `skewX(${g.sk}deg)`, animationDelay: `${g.d}s`,
        }} />
      ))}
    </div>
  );
}

/* ---- 丸枠矢印リンク(LayerXのサークルアロー) ---- */
function CircleLink({ href, children, dark = false, style = {} }) {
  const line = dark ? 'rgba(255,255,255,0.4)' : 'var(--color-border-strong)';
  const ink = dark ? '#fff' : 'var(--text-primary)';
  return (
    <a href={href} className="circle-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 16, color: ink, fontWeight: 700, fontSize: 15, ...style }}>
      <span className="circle-link__ring" style={{
        width: 52, height: 52, borderRadius: '50%', border: `1px solid ${line}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </span>
      {children}
    </a>
  );
}

/* ================================================================
   Hero — Mission を大きく静かに。
   ================================================================ */
function TopHero() {
  const { useReveal } = window;
  const ref = useReveal();

  // 一文字ずつ立ち上がる(既存 .char アニメーション)
  const STEP = 0.045, BASE = 0.25;
  let n = 0;
  const chars = (text) => Array.from(text).map((ch, k) => {
    const delay = (BASE + n * STEP).toFixed(3); n += 1;
    return <span key={`${k}-${delay}`} className="char" style={{ animationDelay: `${delay}s` }}>{ch}</span>;
  });
  const l1 = chars('AIで、人間を');
  const l2 = chars('面白くする。');
  const tail = BASE + n * STEP;

  return (
    <section id="top" ref={ref} style={{
      position: 'relative', minHeight: '92svh', display: 'flex', alignItems: 'center',
      background: 'var(--color-bg)', overflow: 'hidden',
    }}>
      <GeoDecor variant="hero" />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1, paddingTop: 40, paddingBottom: 120 }}>
        <h1 style={{ fontSize: 'clamp(44px, 8vw, 104px)', fontWeight: 900, lineHeight: 1.28, letterSpacing: '0.015em', margin: 0 }}>
          <span style={{ display: 'block' }}>{l1}</span>
          <span style={{ display: 'block' }}>{l2}</span>
        </h1>
        <p className="reveal in" style={{
          marginTop: 30, fontFamily: 'var(--font-eyebrow)', fontWeight: 600, fontSize: 'clamp(13px, 1.4vw, 16px)',
          letterSpacing: '0.08em', color: 'var(--text-muted)', animationDelay: `${(tail + 0.15).toFixed(2)}s`,
        }}>
          Making Humans Interesting with AI.
        </p>
      </div>
      <div className="scroll-cue" aria-hidden="true" style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em' }}>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </div>
    </section>
  );
}

/* ================================================================
   Statement — Vision。短い宣言 + 私たちについてへ。
   ================================================================ */
function TopStatement() {
  const { useReveal, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const v1 = s.chars('AIで、一人ひとりも、');
  const v2 = s.chars('地方も、社会も、');
  const v3 = [...s.chars('もっと'), ...s.chars('ワクワク', 'blue'), ...s.chars('していく未来へ。')];
  const vN = s.count();
  return (
    <section id="vision" ref={ref} style={{ position: 'relative', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)', overflow: 'hidden' }}>
      <GeoDecor variant="band" />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal"><span className="cl-eyebrow">Our Vision</span></div>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 'clamp(32px, 5vw, 88px)', alignItems: 'end', marginTop: 30 }}>
          <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(27px, 3.8vw, 52px)', fontWeight: 900, lineHeight: 1.42, letterSpacing: '0.01em', '--n': vN, '--win': 6 }}>
            <span style={{ display: 'block' }}>{v1}</span>
            <span style={{ display: 'block' }}>{v2}</span>
            <span style={{ display: 'block' }}>{v3}</span>
          </h2>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <p style={{ fontSize: 15.5, lineHeight: 2.05, color: 'var(--text-secondary)', fontWeight: 500 }}>
              テクノロジーは、人をラクにするだけのものじゃない。AIで一人ひとりの「やってみたい」を解き放ち、毎日の仕事や暮らしを、もっと面白くしていく。それが、Classlessの存在意義です。
            </p>
            <CircleLink href="/philosophy" style={{ marginTop: 34 }}>私たちについて</CircleLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   What We Do — 2事業(アクセル / リートス)。
   ================================================================ */
function TopBusiness() {
  const { useReveal, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const w1 = s.chars('Classlessは、AIの力で');
  const w2 = s.chars('企業のオペレーションと成長を');
  const w3 = s.chars('加速させる挑戦を続けています。');
  const wN = s.count();

  const businesses = [
    {
      name: 'アクセル事業',
      logo: '/assets/logo-axel.png',
      logoW: 150,
      en: 'AXEL — AI × BPO',
      desc: 'AI×BPOで、企業のオペレーションとスピードを加速させる時間単価制の伴走型サービス。業務の巻き取りからAI自動化・定着までを一気通貫で担います。',
      href: '/axel',
      accent: 'linear-gradient(90deg, #2b50f0, #f0367c)',
    },
    {
      name: 'リートス事業',
      logo: '/assets/logo-leadtoss.png',
      logoW: 132,
      en: 'LEADTOSS — Sales Infrastructure',
      desc: 'AI×LinkedInで決裁者に直接アプローチし、商談だけを作って届ける完全成果報酬型の営業インフラ。固定費ゼロで、質の高い商談を供給します。',
      href: '/leadtoss',
      accent: 'linear-gradient(90deg, #3e7bfa, #8b5cf6)',
    },
  ];

  return (
    <section id="business" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <div className="reveal"><span className="cl-eyebrow">What We Do</span></div>
        <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(25px, 3.4vw, 46px)', fontWeight: 900, lineHeight: 1.5, letterSpacing: '0.01em', marginTop: 30, maxWidth: '22em', '--n': wN, '--win': 7 }}>
          <span style={{ display: 'block' }}>{w1}</span>
          <span style={{ display: 'block' }}>{w2}</span>
          <span style={{ display: 'block' }}>{w3}</span>
        </h2>

        <div className="reveal" style={{ marginTop: 'clamp(44px, 6vw, 72px)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', color: 'var(--text-muted)' }}>BUSINESS</span>
        </div>

        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 22px)' }}>
          {businesses.map((b, i) => (
            <a key={b.name} href={b.href} className="biz-row reveal" style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center',
              gap: 'clamp(20px, 3.4vw, 52px)', padding: 'clamp(22px, 3vw, 36px)',
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', color: 'var(--text-primary)', position: 'relative', overflow: 'hidden',
              animationDelay: `${i * 0.1}s`,
            }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: b.accent }} />
              <span className="biz-row__logo" style={{
                width: 'clamp(140px, 16vw, 210px)', height: 'clamp(76px, 8vw, 104px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--color-divider)', borderRadius: 'var(--radius-md, 12px)', background: '#fff',
              }}>
                <img src={b.logo} alt={b.name} style={{ width: b.logoW, maxWidth: '78%', height: 'auto' }} />
              </span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.12em', color: 'var(--text-muted)' }}>{b.en}</span>
                <span style={{ display: 'block', fontSize: 'clamp(20px, 2.4vw, 27px)', fontWeight: 900, marginTop: 6 }}>{b.name}</span>
                <span className="biz-row__desc ja-wrap" style={{ display: 'block', fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 10, maxWidth: '38em' }}>{b.desc}</span>
              </span>
              <span className="circle-link__ring biz-row__arrow" style={{
                width: 52, height: 52, borderRadius: '50%', border: '1px solid var(--color-border-strong)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Latest News — ブログ最新3件。
   ================================================================ */
function TopNews() {
  const { useReveal } = window;
  const ref = useReveal();
  const all = window.BLOG_ARTICLES || [];
  const latest = all.slice(0, 3);
  const toneOf = (a) => a.tone || 'blue';
  return (
    <section id="news" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start' }}>
          <div className="reveal">
            <span className="cl-eyebrow">Latest News</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 42px)', fontWeight: 900, marginTop: 18, lineHeight: 1.3 }}>ニュース</h2>
            <CircleLink href="/blog" style={{ marginTop: 30 }}>ニュース一覧へ</CircleLink>
          </div>
          <div>
            {latest.map((a, i) => (
              <a key={a.slug} href={`/blog/${a.slug}`} className="news-row reveal" style={{
                display: 'grid', gridTemplateColumns: 'auto auto 1fr', alignItems: 'center', gap: 'clamp(14px, 2vw, 26px)',
                padding: 'clamp(18px, 2.2vw, 26px) 4px', borderBottom: '1px solid var(--color-border)',
                borderTop: i === 0 ? '1px solid var(--color-border)' : 'none',
                color: 'var(--text-primary)', animationDelay: `${i * 0.08}s`,
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{a.date}</span>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                  background: `var(--${toneOf(a)}-50)`, color: `var(--${toneOf(a)}-700)`, whiteSpace: 'nowrap',
                }}>{a.category}</span>
                <span className="news-row__title" style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.7 }}>{a.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Join — ダークバンド。実写真が支給されたら写真モザイクをここに追加する。
   ================================================================ */
function TopJoin() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Arrow, StarField, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.92, 0.5);
  const s = makeSplit();
  const j1 = s.chars('AIで、人間を');
  const j2 = s.chars('面白くする仲間へ。');
  const jN = s.count();

  return (
    <section id="join" ref={ref} style={{ background: 'var(--neutral-900)', position: 'relative', overflow: 'hidden' }}>
      <StarField color="255,255,255" count={50} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(900px 420px at 50% -10%, rgba(55,171,217,0.18), transparent 62%)', pointerEvents: 'none' }} />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1, paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'center' }}>
          <div>
            <div className="reveal" style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand-blue)' }}>Join Us</div>
            <h2 ref={titleRef} className="split-host" style={{ color: '#fff', fontSize: 'clamp(28px, 3.8vw, 52px)', fontWeight: 900, marginTop: 20, lineHeight: 1.34, letterSpacing: '0.02em', '--n': jN, '--win': 7 }}>
              <span style={{ display: 'block' }}>{j1}</span>
              <span style={{ display: 'block' }}>{j2}</span>
            </h2>
          </div>
          <div className="reveal" style={{ animationDelay: '0.18s' }}>
            <p style={{ color: 'rgba(255,255,255,0.74)', fontSize: 15.5, lineHeight: 2.05, fontWeight: 500 }}>
              Classlessは、AIで企業のオペレーションを変える「アクセル」と、営業の常識を変える「リートス」を通じて、一緒に未来を実装する仲間・パートナーを探しています。事業のご相談も、協業のご提案も、お気軽にどうぞ。
            </p>
            <div style={{ marginTop: 30 }}>
              <a href="/contact"><Button size="lg" iconRight={<Arrow />}>お問い合わせへ</Button></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { TopHero, TopStatement, TopBusiness, TopNews, TopJoin, CircleLink, GeoDecor });
