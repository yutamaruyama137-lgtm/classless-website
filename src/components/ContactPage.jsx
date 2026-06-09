/* Classless — お問い合わせ (contact) page.
   No backend is wired yet, so submit builds a mailto: to the company inbox and
   shows a thank-you state. Swap onSubmit for a POST to /api/contact once a mail
   sender (SendGrid / Resend 等) is configured. */

const CONTACT_TO = 'contact@classless.jp';

function ContactPage() {
  const { Button, Card } = window.ClasslessDesignSystem_225e16;
  const { ColorField, useReveal, Arrow, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();

  const titleRef = useScrollVar(0.5, 0.95, 0.55);
  const s = makeSplit();
  const ctTitle = s.chars('お問い合わせ');
  const ctTitleN = s.count();

  const [form, setForm] = React.useState({
    name: '', company: '', email: '', tel: '', topic: 'AI BPO', message: '',
  });
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const valid = form.name.trim() && form.email.trim() && form.message.trim();

  // Fallback when the API send fails (e.g. mail not yet configured).
  const mailtoHref = () => {
    const subject = `【お問い合わせ】${form.topic} / ${form.company || form.name}`;
    const lines = [
      `お名前　：${form.name}`,
      `会社名　：${form.company}`,
      `メール　：${form.email}`,
      `電話番号：${form.tel}`,
      `ご相談領域：${form.topic}`,
      '',
      '── お問い合わせ内容 ──',
      form.message,
    ].join('\n');
    return `mailto:${CONTACT_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    setStatus('sending');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await r.json().catch(() => ({}));
      setStatus(r.ok && data.ok ? 'sent' : 'error');
    } catch (_) {
      setStatus('error');
    }
  };

  const field = {
    width: '100%', padding: '13px 15px', borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-border-strong)', background: 'var(--color-bg)',
    fontFamily: 'var(--font-jp)', fontSize: 15, color: 'var(--text-primary)',
    outline: 'none', transition: 'border-color .2s, box-shadow .2s', boxSizing: 'border-box',
  };
  const label = {
    display: 'block', fontFamily: 'var(--font-jp)', fontWeight: 700,
    fontSize: 13, color: 'var(--text-secondary)', marginBottom: 7,
  };
  const onFocus = (e) => { e.target.style.borderColor = 'var(--brand-blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(55,171,217,0.14)'; };
  const onBlur = (e) => { e.target.style.borderColor = 'var(--color-border-strong)'; e.target.style.boxShadow = 'none'; };
  const Req = () => <span style={{ color: 'var(--brand-red)', marginLeft: 4 }}>*</span>;

  const topics = ['AI BPO', 'AIシステム開発', 'データベース最適化', 'AI教育', '採用・その他'];

  return (
    <section id="contact" ref={ref} style={{ position: 'relative', overflow: 'hidden', background: 'transparent' }}>
      <div className="hero-aurora" aria-hidden="true" style={{ opacity: 0.32 }} />
      <ColorField density="cta" style={{ opacity: 0.4 }} />

      <div className="cl-container" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(96px, 12vw, 160px)', paddingBottom: 'clamp(72px, 9vw, 128px)' }}>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(40px, 6vw, 88px)', alignItems: 'start' }}>

          {/* left: intro + direct contact */}
          <div>
            <div className="reveal"><Eyebrow tone="blue">Contact</Eyebrow></div>
            <h1 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(38px, 5.2vw, 68px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.01em', lineHeight: 1.25, '--n': ctTitleN, '--win': 6 }}>{ctTitle}</h1>
            <p className="reveal" style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 24, maxWidth: '26em', animationDelay: '0.1s' }}>
              AI BPOのご相談から、システム開発・データベース最適化・人材育成まで。
              地域の現場に伴走します。初回のご相談は無料です。お気軽にお問い合わせください。
            </p>

            <dl className="reveal" style={{ margin: '36px 0 0', animationDelay: '0.16s' }}>
              {[
                ['Email', CONTACT_TO],
                ['拠点', '宮城県仙台市（東北）'],
                ['対応領域', 'AI BPO / システム開発 / DB最適化 / AI教育'],
              ].map(([k, v]) => (
                <div key={k} style={{ padding: '14px 0', borderTop: '1px solid var(--color-border)' }}>
                  <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</dt>
                  <dd style={{ margin: '6px 0 0', fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* right: form card */}
          <div className="reveal" style={{ animationDelay: '0.12s' }}>
            <Card padding="clamp(26px, 3vw, 44px)" style={{ background: 'var(--color-bg)' }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '24px 8px' }}>
                  <span style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: '50%', background: 'var(--green-50)', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <h2 style={{ fontSize: 24, fontWeight: 900, marginTop: 22 }}>送信が完了しました</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 12 }}>
                    お問い合わせありがとうございます。<br />
                    担当より2〜3営業日以内にご連絡いたします。
                  </p>
                  <div style={{ marginTop: 24 }}>
                    <Button variant="secondary" tone="ink" onClick={() => setStatus('idle')}>フォームに戻る</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label style={label}>お名前<Req /></label>
                    <input style={field} value={form.name} onChange={set('name')} onFocus={onFocus} onBlur={onBlur} placeholder="山田 太郎" />
                  </div>
                  <div>
                    <label style={label}>会社名・団体名</label>
                    <input style={field} value={form.company} onChange={set('company')} onFocus={onFocus} onBlur={onBlur} placeholder="合同会社○○" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={label}>メールアドレス<Req /></label>
                      <input type="email" style={field} value={form.email} onChange={set('email')} onFocus={onFocus} onBlur={onBlur} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label style={label}>電話番号</label>
                      <input type="tel" style={field} value={form.tel} onChange={set('tel')} onFocus={onFocus} onBlur={onBlur} placeholder="022-000-0000" />
                    </div>
                  </div>
                  <div>
                    <label style={label}>ご相談領域</label>
                    <select style={{ ...field, appearance: 'auto' }} value={form.topic} onChange={set('topic')} onFocus={onFocus} onBlur={onBlur}>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={label}>お問い合わせ内容<Req /></label>
                    <textarea style={{ ...field, minHeight: 130, resize: 'vertical', lineHeight: 1.7 }} value={form.message} onChange={set('message')} onFocus={onFocus} onBlur={onBlur} placeholder="ご相談内容をご記入ください" />
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <Button size="lg" type="submit" iconRight={<Arrow />} onClick={onSubmit} style={{ width: '100%', opacity: valid && status !== 'sending' ? 1 : 0.55 }}>
                      {status === 'sending' ? '送信中…' : '送信する'}
                    </Button>
                    {status === 'error' && (
                      <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--brand-red)', marginTop: 12, textAlign: 'center' }}>
                        送信に失敗しました。お手数ですが <a href={mailtoHref()} style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>メールソフトから送信</a> いただくか、{CONTACT_TO} までご連絡ください。
                      </p>
                    )}
                    <p style={{ fontSize: 12, lineHeight: 1.7, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
                      送信いただいた内容は、お問い合わせ対応の目的にのみ利用します。
                    </p>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ContactPage });
