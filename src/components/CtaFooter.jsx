/* Classless corporate site — company info, dark CTA, footer */

function Company() {
  const { useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const cTitle = s.chars('会社概要');
  const cTitleN = s.count();
  const rows = [
    ['会社名', '合同会社Classless'],
    ['事業内容', 'AI BPO / AIシステム開発 / データベース最適化 / AI教育'],
  ];
  return (
    <section id="company" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start' }}>
          <div>
            <div className="reveal"><Eyebrow tone="orange">Company</Eyebrow></div>
            <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(26px, 3.4vw, 44px)', fontWeight: 900, marginTop: 18, lineHeight: 1.3, '--n': cTitleN, '--win': 4 }}>{cTitle}</h2>
          </div>
          <div className="reveal" style={{ animationDelay: '0.16s' }}>
            <dl style={{ margin: 0, borderTop: '1px solid var(--color-border)' }}>
              {rows.map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, padding: '22px 4px', borderBottom: '1px solid var(--color-border)' }}>
                  <dt style={{ fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 14, color: 'var(--text-muted)' }}>{k}</dt>
                  <dd style={{ margin: 0, fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)', lineHeight: 1.7 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinCta({ onNav }) {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { ColorField, useReveal, Arrow, StarField, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.92, 0.5);
  const s = makeSplit();
  const jl1 = s.chars('地方の未来を、');
  const jl2 = s.chars('一緒に実装しよう。');
  const jTitleN = s.count();
  return (
    <section id="contact" ref={ref} style={{ background: 'var(--neutral-900)', position: 'relative', overflow: 'hidden' }}>
      <ColorField density="cta" style={{ opacity: 0.55 }} />
      <StarField color="255,255,255" />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(900px 420px at 50% -10%, rgba(55,171,217,0.22), transparent 62%)', pointerEvents: 'none' }} />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1, paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)', textAlign: 'center' }}>
        <span className="cl-spectrum-bar reveal" style={{ width: 72, height: 6, margin: '0 auto 30px' }} />
        <div className="reveal" style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand-blue)', animationDelay: '0.06s' }}>Let's Build Together</div>
        <h2 ref={titleRef} className="split-host" style={{ color: '#fff', fontSize: 'clamp(30px, 4.6vw, 62px)', fontWeight: 900, marginTop: 22, lineHeight: 1.26, letterSpacing: '0.02em', '--n': jTitleN, '--win': 7 }}>
          <span style={{ display: 'block' }}>{jl1}</span>
          <span style={{ display: 'block' }}>{jl2}</span>
        </h2>
        <p className="reveal" style={{ color: 'rgba(255,255,255,0.74)', fontSize: 17, lineHeight: 1.95, maxWidth: '40em', margin: '24px auto 0', fontWeight: 500, animationDelay: '0.22s' }}>
          AI BPOのご相談から、システム開発・人材育成まで。<br className="hide-sp" />まずはお気軽にお問い合わせください。初回のご相談は無料です。
        </p>
        <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap', animationDelay: '0.3s' }}>
          <Button size="lg" iconRight={<Arrow />} onClick={() => onNav && onNav('contact')}>無料で相談する</Button>
          <a href="/business"><Button size="lg" variant="secondary" tone="ink" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>事業内容を見る</Button></a>
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Arrow } = window;
  const ref = useReveal();
  return (
    <section id="contact" ref={ref} style={{ background: 'transparent', borderTop: '1px solid var(--color-border)' }}>
      <div className="cl-container" style={{ paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
          <div className="reveal">
            <div style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 64px)', letterSpacing: '0.01em', color: 'var(--text-primary)' }}>Contact</div>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', fontWeight: 600, marginTop: 10 }}>AI活用のご相談・お見積りはこちらから。</p>
          </div>
          <a href="/contact" className="reveal" style={{ animationDelay: '0.1s' }}>
            <Button size="lg" iconRight={<Arrow />}>お問い合わせ</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  const cols = [
    { h: '事業内容', items: [
      { l: 'AI BPO', href: '/business#svc-01' },
      { l: 'AIシステム開発', href: '/business#svc-02' },
      { l: 'データベース最適化', href: '/business#svc-03' },
      { l: 'AI教育', href: '/business#svc-04' },
    ] },
    { h: '会社情報', items: [
      { l: '経営理念', href: '/philosophy' },
      { l: '事業内容', href: '/business' },
      { l: '会社概要', href: '/#company' },
    ] },
    { h: 'お問い合わせ', items: [
      { l: 'お問い合わせフォーム', href: '/contact' },
      { l: '無料相談', href: '/contact' },
    ] },
  ];
  return (
    <footer style={{ background: 'var(--neutral-900)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="cl-container" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="/assets/mark-classless.png" alt="" style={{ width: 40, height: 40 }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, color: '#fff', letterSpacing: '0.01em' }}>Classless</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.95, marginTop: 16, maxWidth: '26em' }}>
              地方からAIで、人間の可能性を解放する。<br />合同会社Classless
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 16, letterSpacing: '0.04em' }}>{c.h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.items.map((it) => (
                  <li key={it.l}><a href={it.href} style={{ color: 'rgba(255,255,255,0.66)', fontSize: 13.5 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.66)')}>{it.l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="cl-spectrum-bar" style={{ margin: '44px 0 24px', opacity: 0.9 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>© 2026 Classless LLC.</span>
          <div style={{ display: 'flex', gap: 22 }}>
            {[
              ['プライバシーポリシー', '/privacy'],
              ['利用規約', '/terms'],
              ['特定商取引法', '/tokushoho'],
            ].map(([l, href]) => (
              <a key={l} href={href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Company, JoinCta, ContactBand, Footer });
