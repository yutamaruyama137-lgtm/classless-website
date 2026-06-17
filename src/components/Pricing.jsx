/* Classless corporate site — 料金 (two-tier pricing: retainer + working packages) */
function Pricing() {
  const { Badge, Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, Arrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const pl1 = s.chars('料金は、');
  const pl2 = s.chars('シンプルな');
  const pl3 = s.chars('2階建て。', 'blue');
  const sTitleN = s.count();

  // No width-based breakpoints exist in the stylesheet, so collapse multi-column
  // layouts to a single column on narrow viewports via matchMedia.
  const isNarrow = usePricingNarrow();

  // ---- ① 顧問料（毎月固定） ----
  const retainers = [
    {
      tag: 'AIパートナー', tone: 'blue', price: '¥50,000', unit: '/月',
      body: '月次の壁打ち・AI活用の相談窓口。「困ったら聞ける」を常設。',
      feature: null,
    },
    {
      tag: '外部CAIO', tone: 'orange', price: '¥150,000', unit: '/月',
      body: 'AI戦略を統括する経営の右腕。実働を 〔¥3,000/h〕 固定で利用できる特典付き。',
      feature: '実働 ¥3,000/h 固定',
      recommended: true,
    },
  ];

  // ---- ② 実働パッケージ（時間 × 契約期間） ----
  const packs = [
    {
      name: 'LIGHT', tone: 'green', hours: '月40時間',
      terms: [
        ['3ヶ月', '¥132,000', null],
        ['6ヶ月', '¥126,000', '5%OFF'],
        ['12ヶ月', '¥120,000', '9%OFF'],
      ],
      popular: false,
    },
    {
      name: 'STANDARD', tone: 'blue', hours: '月80時間',
      terms: [
        ['3ヶ月', '¥264,000', null],
        ['6ヶ月', '¥252,000', '5%OFF'],
        ['12ヶ月', '¥240,000', '9%OFF'],
      ],
      popular: true,
    },
    {
      name: 'FULL', tone: 'red', hours: '月120時間',
      terms: [
        ['3ヶ月', '¥396,000', null],
        ['6ヶ月', '¥378,000', '5%OFF'],
        ['12ヶ月', '¥360,000', '9%OFF'],
      ],
      popular: false,
    },
  ];

  const card = {
    background: '#fff',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
  };
  const mono = (size, weight = 800) => ({
    fontFamily: 'var(--font-mono)', fontWeight: weight, fontSize: size,
    letterSpacing: '-0.01em', color: 'var(--text-primary)', lineHeight: 1,
  });

  return (
    <section id="pricing" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        {/* heading */}
        <div style={{ maxWidth: '40em' }}>
          <div className="reveal"><Eyebrow>Pricing</Eyebrow></div>
          <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(27px, 3.5vw, 46px)', fontWeight: 900, marginTop: 18, lineHeight: 1.32, letterSpacing: '0.01em', '--n': sTitleN, '--win': 7 }}>
            <span style={{ display: 'block' }}>{pl1}</span>
            <span style={{ display: 'block' }}>{pl2}{pl3}</span>
          </h2>
          <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 20, animationDelay: '0.16s' }}>
            初期費用0円。契約期間が長いほど、時給がお得に。
          </p>
        </div>

        {/* ① 顧問料 */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 'clamp(48px, 6vw, 80px)', marginBottom: 24, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 0.9, color: 'var(--brand-blue)' }}>01</span>
          <h3 style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 900, lineHeight: 1.3 }}>顧問料<span style={{ fontSize: '0.62em', fontWeight: 700, color: 'var(--text-muted)', marginLeft: 10 }}>毎月固定</span></h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: 'clamp(18px, 2.4vw, 28px)' }}>
          {retainers.map((r) => (
            <div key={r.tag} className="reveal" style={{
              ...card, padding: 'clamp(26px, 3vw, 38px)', position: 'relative',
              borderColor: r.recommended ? `var(--${r.tone}-300)` : 'var(--color-border)',
              borderWidth: r.recommended ? 2 : 1,
            }}>
              {r.recommended && (
                <span style={{ position: 'absolute', top: -13, left: 'clamp(26px, 3vw, 38px)' }}>
                  <Badge tone="orange" variant="solid" size="sm">おすすめ</Badge>
                </span>
              )}
              <Badge tone={r.tone} variant="soft" size="sm">{r.tag}</Badge>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 22 }}>
                <span style={mono('clamp(34px, 4.4vw, 52px)')}>{r.price}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16, color: 'var(--text-muted)' }}>{r.unit}</span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 18 }}>{r.body}</p>
              {r.feature && (
                <div style={{ marginTop: 18, padding: '10px 14px', borderRadius: 'var(--radius-md, 12px)', background: 'var(--orange-50)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Dot tone={r.tone} />
                  <span style={{ fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 13.5, color: 'var(--orange-700)' }}>{r.feature}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ② 実働パッケージ */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 'clamp(56px, 7vw, 96px)', marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 0.9, color: 'var(--brand-green)' }}>02</span>
          <h3 style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 900, lineHeight: 1.3 }}>実働パッケージ<span style={{ fontSize: '0.62em', fontWeight: 700, color: 'var(--text-muted)', marginLeft: 10 }}>時間 × 契約期間</span></h3>
        </div>
        <p className="reveal" style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 28 }}>
          初期費用 <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 17, color: 'var(--brand-green)' }}>0円</span>。月時間 × 契約期間で、時給がお得に。
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr 1fr', gap: 'clamp(18px, 2.2vw, 26px)', alignItems: 'stretch' }}>
          {packs.map((p) => (
            <div key={p.name} className="reveal" style={{
              ...card,
              padding: 'clamp(24px, 2.6vw, 34px)',
              position: 'relative',
              display: 'flex', flexDirection: 'column',
              borderColor: p.popular ? 'var(--brand-blue)' : 'var(--color-border)',
              borderWidth: p.popular ? 2 : 1,
              boxShadow: p.popular ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              transform: !isNarrow && p.popular ? 'translateY(-14px)' : 'none',
            }}>
              {p.popular && (
                <span style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}>
                  <Badge tone="blue" variant="solid" size="sm">人気</Badge>
                </span>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(18px, 2vw, 22px)', letterSpacing: '0.04em', color: `var(--brand-${p.tone})` }}>{p.name}</span>
                <Dot tone={p.tone} />
              </div>
              <div style={{ marginTop: 16, paddingBottom: 18, borderBottom: '1px solid var(--color-border)' }}>
                <span style={mono('clamp(28px, 3.2vw, 38px)')}>{p.hours}</span>
              </div>
              <dl style={{ margin: 0, marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                {p.terms.map(([term, price, off]) => (
                  <div key={term} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                    <dt style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-muted)' }}>{term}</span>
                      {off && <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, color: `var(--${p.tone}-700)`, background: `var(--${p.tone}-50)`, padding: '2px 7px', borderRadius: 'var(--radius-pill)' }}>{off}</span>}
                    </dt>
                    <dd style={{ margin: 0, ...mono('clamp(17px, 1.9vw, 21px)', 800) }}>{price}</dd>
                  </div>
                ))}
              </dl>
              <div style={{ marginTop: 24 }}>
                <a href="/contact" style={{ display: 'block' }}>
                  <Button fullWidth variant={p.popular ? 'primary' : 'secondary'} tone={p.popular ? 'blue' : 'ink'} iconRight={<Arrow />}>無料AX診断を予約する</Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 補足の帯2つ */}
        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: 'clamp(18px, 2.4vw, 26px)', marginTop: 'clamp(26px, 3vw, 40px)' }}>
          <div className="reveal" style={{ ...card, padding: 'clamp(22px, 2.4vw, 30px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Badge tone="green" variant="soft" size="sm">スモールスタート</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
              <span style={mono('clamp(22px, 2.6vw, 30px)')}>月20時間</span>
              <span style={{ ...mono('clamp(18px, 2vw, 24px)'), color: 'var(--brand-green)' }}>¥66,000</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: 6 }}>3ヶ月〜。まずは小さく試したい方へ。</p>
          </div>

          <div className="reveal" style={{ ...card, padding: 'clamp(22px, 2.4vw, 30px)', display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--neutral-50)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Badge tone="neutral" variant="soft" size="sm">開発スポット</Badge>
              <span style={{ fontFamily: 'var(--font-jp)', fontSize: 12.5, fontWeight: 700, color: 'var(--text-muted)' }}>月120時間超</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
              <span style={mono('clamp(22px, 2.6vw, 30px)')}>要相談</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: 6 }}>専任チーム編成で個別見積もり。<br />※開発（AIシステム構築）は別途見積もりが必須です。</p>
          </div>
        </div>

        {/* 注記 */}
        <p className="reveal" style={{ fontSize: 12.5, lineHeight: 1.8, color: 'var(--text-muted)', marginTop: 'clamp(28px, 3vw, 40px)' }}>
          ※実働パッケージの月間時間は目安です。業務量に応じて柔軟に調整できます。
        </p>
      </div>
    </section>
  );
}

/* Small brand-colored dot accent used across pricing cards. */
function Dot({ tone = 'blue' }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <circle cx="5" cy="5" r="5" fill={`var(--brand-${tone})`} />
    </svg>
  );
}

/* Returns true on narrow viewports (no CSS breakpoints exist in this project,
   so columns are collapsed in JS). */
function usePricingNarrow() {
  const get = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 920px)').matches;
  const [narrow, setNarrow] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 920px)');
    const on = () => setNarrow(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return narrow;
}

Object.assign(window, { Pricing });
