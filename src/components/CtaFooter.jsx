/* Classless corporate site — company info, dark CTA, footer */

function Company() {
  const { useReveal, Eyebrow } = window;
  const ref = useReveal();
  const rows = [
    ['会社名', '合同会社Classless'],
    ['拠点', '宮城県仙台市（東北）'],
    ['事業内容', 'AI BPO / AIシステム開発 / データベース最適化 / AI教育'],
    ['ミッション', '地方からAIで、人間の可能性を解放する。'],
  ];
  return (
    <section id="company" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start' }}>
          <div>
            <div className="reveal"><Eyebrow tone="orange">Company</Eyebrow></div>
            <h2 className="reveal" style={{ fontSize: 'clamp(26px, 3.4vw, 44px)', fontWeight: 900, marginTop: 18, lineHeight: 1.3, animationDelay: '0.08s' }}>会社概要</h2>
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
            <p style={{ fontSize: 11, lineHeight: 1.7, color: 'var(--text-muted)', marginTop: 14, opacity: 0.8 }}>
              所在地：東京都渋谷区円山町5番3号 MIEUX渋谷ビル8階（バーチャルオフィス／移転予定）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinCta({ onNav }) {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { ColorField, useReveal, Arrow, StarField, gatherChars } = window;
  const ref = useReveal();
  return (
    <section id="contact" ref={ref} style={{ background: 'var(--neutral-900)', position: 'relative', overflow: 'hidden' }}>
      <ColorField density="cta" style={{ opacity: 0.55 }} />
      <StarField color="255,255,255" />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(900px 420px at 50% -10%, rgba(55,171,217,0.22), transparent 62%)', pointerEvents: 'none' }} />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1, paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)', textAlign: 'center' }}>
        <span className="cl-spectrum-bar reveal" style={{ width: 72, height: 6, margin: '0 auto 30px' }} />
        <div className="reveal" style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brand-blue)', animationDelay: '0.06s' }}>Let's Build Together</div>
        <h2 className="gather-host" style={{ color: '#fff', fontSize: 'clamp(30px, 4.6vw, 62px)', fontWeight: 900, marginTop: 22, lineHeight: 1.26, letterSpacing: '0.02em' }}>
          <span style={{ display: 'block' }}>{gatherChars('地方の未来を、')}</span>
          <span style={{ display: 'block' }}>{gatherChars('一緒に実装しよう。', { base: 0.1 })}</span>
        </h2>
        <p className="reveal" style={{ color: 'rgba(255,255,255,0.74)', fontSize: 17, lineHeight: 1.95, maxWidth: '40em', margin: '24px auto 0', fontWeight: 500, animationDelay: '0.22s' }}>
          AI BPOのご相談から、システム開発・人材育成まで。<br className="hide-sp" />まずはお気軽にお問い合わせください。初回のご相談は無料です。
        </p>
        <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap', animationDelay: '0.3s' }}>
          <Button size="lg" iconRight={<Arrow />}>無料で相談する</Button>
          <Button size="lg" variant="secondary" tone="ink" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>資料をダウンロード</Button>
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
    <section id="contact" ref={ref} style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="cl-container" style={{ paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
          <div className="reveal">
            <div style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 64px)', letterSpacing: '0.01em', color: 'var(--text-primary)' }}>Contact</div>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', fontWeight: 600, marginTop: 10 }}>AI活用のご相談・お見積りはこちらから。</p>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="reveal" style={{ animationDelay: '0.1s' }}>
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
      { l: '無料相談', href: '#contact' },
      { l: '資料ダウンロード', href: '#contact' },
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
              地方からAIで、人間の可能性を解放する。<br />合同会社Classless / 宮城県仙台市
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
            {['プライバシーポリシー', '利用規約', '特定商取引法'].map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Company, JoinCta, ContactBand, Footer });
