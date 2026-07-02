/* Classless — リートス事業ページ(営業代行 / 商談供給インフラ)。
   LEADTOSS営業資料(2026.06)の内容を1ページに再構成。
   ブランド色はロゴの 青→紫 グラデーション。 */

const LT_GRAD = 'linear-gradient(90deg, #3e7bfa, #8b5cf6)';
const LT_BLUE = '#3e7bfa';
const LT_PURPLE = '#8b5cf6';

/* 共通: セクション見出し */
function LtHead({ en, title, lead, invert = false }) {
  const { useReveal } = window;
  const ref = useReveal();
  return (
    <div ref={ref} style={{ maxWidth: '44em' }}>
      <div className="reveal" style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{en}</div>
      <h2 className="reveal" style={{ fontSize: 'clamp(25px, 3.2vw, 42px)', fontWeight: 900, lineHeight: 1.42, letterSpacing: '0.01em', marginTop: 16, color: invert ? '#fff' : 'var(--text-primary)', animationDelay: '0.08s' }}>{title}</h2>
      {lead && <p className="reveal" style={{ fontSize: 15.5, lineHeight: 2, color: invert ? 'rgba(255,255,255,0.72)' : 'var(--text-secondary)', fontWeight: 500, marginTop: 18, animationDelay: '0.16s' }}>{lead}</p>}
    </div>
  );
}

/* ================================================================
   Hero — 商談だけ、トスする。
   ================================================================ */
function LtHero() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Arrow } = window;
  const ref = useReveal();

  const badges = ['完全成果報酬', '固定費ゼロ', '最短数日で立ち上げ'];

  return (
    <section id="lt-hero" ref={ref} style={{
      position: 'relative', overflow: 'hidden', background: 'var(--color-bg)',
      paddingTop: 'clamp(64px, 9vw, 130px)', paddingBottom: 'clamp(56px, 7vw, 100px)',
    }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <span className="geo-float" style={{ position: 'absolute', top: '8%', right: '-3%', width: 230, height: 84, background: 'rgba(62,123,250,0.10)', transform: 'skewX(-18deg)' }} />
        <span className="geo-float" style={{ position: 'absolute', top: '22%', right: '7%', width: 120, height: 44, background: 'rgba(139,92,246,0.5)', transform: 'skewX(-18deg)', animationDelay: '1.4s' }} />
        <span className="geo-float" style={{ position: 'absolute', bottom: '10%', left: '-2%', width: 180, height: 62, background: 'rgba(139,92,246,0.09)', transform: 'skewX(-18deg)', animationDelay: '0.7s' }} />
      </div>

      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'clamp(36px, 5vw, 80px)', alignItems: 'center' }}>
          <div>
            <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', color: 'var(--text-muted)' }}>
              BUSINESS / <span style={{ color: LT_PURPLE, fontWeight: 700 }}>LEADTOSS</span>
            </div>
            <img src="/assets/logo-leadtoss.png" alt="リートス" className="reveal" style={{ width: 'clamp(190px, 22vw, 280px)', marginTop: 26, animationDelay: '0.06s' }} />
            <h1 className="reveal" style={{ fontSize: 'clamp(30px, 4.2vw, 56px)', fontWeight: 900, lineHeight: 1.36, letterSpacing: '0.015em', marginTop: 26, animationDelay: '0.12s' }}>
              商談<span style={{ backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>だけ</span>、トスする。
            </h1>
            <p className="reveal" style={{ fontSize: 'clamp(15px, 1.6vw, 17.5px)', lineHeight: 2, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 22, maxWidth: '32em', animationDelay: '0.2s' }}>
              リートスは、AI×LinkedInで決裁者に直接アプローチし、質の高い商談を作って届ける営業インフラ。あなたは届いた商談で、クロージングに集中するだけ。
            </p>
            <div className="reveal" style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap', animationDelay: '0.28s' }}>
              {badges.map((b) => (
                <span key={b} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 15px', borderRadius: 999,
                  border: '1px solid var(--color-border)', background: '#fff',
                  fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 13, color: 'var(--text-secondary)',
                }}>
                  <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 999, background: LT_GRAD }} />
                  {b}
                </span>
              ))}
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap', animationDelay: '0.36s' }}>
              <a href="/contact"><Button size="lg" iconRight={<Arrow />}>無料で相談する</Button></a>
            </div>
          </div>

          <div className="reveal hide-sp" style={{ display: 'flex', justifyContent: 'center', animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', width: 'clamp(200px, 22vw, 300px)' }}>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '-14%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent 65%)' }} />
              <img src="/assets/icon-leadtoss.png" alt="" style={{ position: 'relative', width: '100%', borderRadius: '22%', filter: 'drop-shadow(0 24px 48px rgba(139,92,246,0.28))' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Challenge — 営業の構造課題を数字で。
   ================================================================ */
function LtChallenge() {
  const { useReveal } = window;
  const ref = useReveal();
  const stats = [
    { n: '約10倍', t: '営業職の人手不足感', d: '他職種と比べた営業職の不足感。採用市場では奪い合いが続く。' },
    { n: '2.5年', t: 'インサイドセールスの平均在籍', d: '採用できても定着しない。育てた頃には、また採用に逆戻り。' },
    { n: '約90%', t: '決裁者に届かない電話', d: '従来のテレアポは、決裁者に「届く前」に大半が消えていく。' },
    { n: '50〜100万円', t: '成果が出る前に消える固定費', d: '外注も採用も、当たっても外れても初期費用と月額が積み上がる。' },
  ];
  return (
    <section id="lt-challenge" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Challenge" title={<span>商品はいい。<br />でも、売る人がいない。</span>}
          lead="営業の採用・育成は、いまや最も難しい経営課題のひとつ。かけた時間と人件費の9割が、会話にすらならず消えていきます。" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(16px, 2vw, 22px)', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          {stats.map((s, i) => (
            <div key={s.t} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(24px, 2.6vw, 32px)', animationDelay: `${(i % 4) * 0.07}s`,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', letterSpacing: '-0.01em', backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.n}</div>
              <div style={{ fontWeight: 800, fontSize: 15, marginTop: 12, color: 'var(--text-primary)' }}>{s.t}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.85, color: 'var(--text-secondary)', marginTop: 8 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Solution — 商談“だけ”を、作って届ける。
   ================================================================ */
function LtSolution() {
  const { useReveal } = window;
  const ref = useReveal();
  const cards = [
    { t: '訪問ゼロ', d: '商談はすべてオンライン。移動も対面アポも不要で、最短数日で立ち上がる。', icon: 'M3 12h18M12 3v18' },
    { t: 'AIで量産', d: 'リスト作成も文面生成もAIが担当。人手をかけずに決裁者へ大量にアプローチ。', icon: null },
    { t: '完全成果報酬', d: '月額固定なし。初期3万円のみで、出た成果にだけお支払い。固定費はゼロ。', icon: null },
  ];
  const icons = [
    <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#ltg0)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="ltg0" x1="0" y1="0" x2="1" y2="0"><stop stopColor={LT_BLUE}/><stop offset="1" stopColor={LT_PURPLE}/></linearGradient></defs><rect x="2.5" y="5" width="19" height="13" rx="2.5"/><path d="M8 21h8"/><path d="M12 18v3"/></svg>,
    <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#ltg1)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="ltg1" x1="0" y1="0" x2="1" y2="0"><stop stopColor={LT_BLUE}/><stop offset="1" stopColor={LT_PURPLE}/></linearGradient></defs><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.4"/></svg>,
    <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#ltg2)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="ltg2" x1="0" y1="0" x2="1" y2="0"><stop stopColor={LT_BLUE}/><stop offset="1" stopColor={LT_PURPLE}/></linearGradient></defs><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.4 9.2c0-1 1.1-1.7 2.6-1.7s2.6.7 2.6 1.7c0 2.6-5.2 1.5-5.2 4.1 0 1 1.1 1.7 2.6 1.7s2.6-.7 2.6-1.7"/></svg>,
  ];
  return (
    <section id="lt-solution" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Solution" title={<span>商談<span style={{ backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>“だけ”</span>を、作って届ける。</span>}
          lead="リートスは「契約代行」ではなく、決裁者との商談を供給する営業インフラ。刈り取りはあなた、商談供給はリートス。" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 2vw, 24px)', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          {cards.map((c, i) => (
            <div key={c.t} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(26px, 3vw, 36px)', animationDelay: `${i * 0.08}s`,
            }}>
              <span style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg, rgba(62,123,250,0.1), rgba(139,92,246,0.1))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icons[i]}</span>
              <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 900, marginTop: 18 }}>{c.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-secondary)', marginTop: 10 }}>{c.d}</p>
            </div>
          ))}
        </div>

        {/* 役割分担バンド */}
        <div className="reveal" style={{
          marginTop: 'clamp(28px, 3.4vw, 44px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0,
          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ padding: 'clamp(24px, 3vw, 36px)', background: 'linear-gradient(135deg, rgba(62,123,250,0.06), rgba(139,92,246,0.06))' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.14em', color: LT_PURPLE, fontWeight: 700 }}>LEADTOSS</div>
            <div style={{ fontSize: 'clamp(17px, 1.9vw, 21px)', fontWeight: 900, marginTop: 8 }}>決裁者との商談を、作ってセットするまで。</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {['ターゲット設計', 'AI量産アプローチ', '返信対応・関係構築', 'Zoom商談セット'].map((x) => (
                <span key={x} style={{ fontSize: 12.5, fontWeight: 700, padding: '6px 12px', borderRadius: 999, background: '#fff', border: '1px solid var(--color-border)', color: 'var(--text-secondary)' }}>{x}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: 'clamp(24px, 3vw, 36px)', background: '#fff', borderLeft: '1px solid var(--color-border)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.14em', color: 'var(--text-muted)', fontWeight: 700 }}>YOU</div>
            <div style={{ fontSize: 'clamp(17px, 1.9vw, 21px)', fontWeight: 900, marginTop: 8 }}>届いた商談で、提案・受注に集中。</div>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 14 }}>
              最も価値の高い「クロージング」に、リソースを全集中できる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Why LinkedIn — 決裁者はもうLinkedInにいる。
   ================================================================ */
function LtWhyLinkedin() {
  const { useReveal } = window;
  const ref = useReveal();
  const stats = [
    { n: '13億人超', t: '世界のLinkedIn登録ユーザー数', d: 'ビジネス特化型SNSとして、海外の決裁者・購買担当が日常的に利用。' },
    { n: '25%超', t: '経営層・役職者の割合', d: '利用者の4人に1人以上が決裁層。役職で直接ターゲティングできる。' },
    { n: '約4%', t: '日本の普及率(欧米は60〜75%)', d: '日本でやっている会社が、まだ少ない。決裁者に直接届けば埋もれずに目立てる、先行者利益のタイミング。' },
  ];
  const rows = [
    ['LinkedIn', '◎ 低', '◎ 高', '◎ 直接'],
    ['メール', '◯', '◯', '△'],
    ['問い合わせフォーム', '◯', '△', '△'],
    ['テレアポ', '× 高', '◯', '× 約1割'],
  ];
  return (
    <section id="lt-linkedin" ref={ref} style={{ background: 'var(--neutral-900)', position: 'relative', overflow: 'hidden', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `radial-gradient(800px 400px at 80% -10%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(700px 380px at 10% 110%, rgba(62,123,250,0.18), transparent 60%)`, pointerEvents: 'none' }} />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>
        <LtHead en="Why LinkedIn" invert
          title={<span style={{ color: '#fff' }}>世界の決裁者は、<br />もうLinkedInにいる。</span>}
          lead="中心はコスト効率と質に優れたLinkedIn。メール・問い合わせフォームも重ね、1社に複数チャネルで接触して取りこぼしません。" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(16px, 2vw, 24px)', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          {stats.map((s, i) => (
            <div key={s.t} className="reveal" style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 2.6vw, 34px)', animationDelay: `${i * 0.08}s`,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 'clamp(30px, 3.4vw, 42px)', letterSpacing: '-0.01em', backgroundImage: 'linear-gradient(90deg, #7da7ff, #b494ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.n}</div>
              <div style={{ fontWeight: 800, fontSize: 14.5, marginTop: 12, color: '#fff' }}>{s.t}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'rgba(255,255,255,0.68)', marginTop: 8 }}>{s.d}</p>
            </div>
          ))}
        </div>

        {/* チャネル比較表 */}
        <div className="reveal" style={{ marginTop: 'clamp(32px, 4vw, 52px)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
            <thead>
              <tr>
                {['チャネル', 'コスト', 'アポの質', '決裁者到達'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', fontFamily: 'var(--font-jp)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.18)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={r[0]} style={{ background: ri === 0 ? 'linear-gradient(90deg, rgba(62,123,250,0.14), rgba(139,92,246,0.14))' : 'transparent' }}>
                  {r.map((c, ci) => (
                    <td key={ci} style={{
                      padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.09)',
                      fontFamily: ci === 0 ? 'var(--font-jp)' : 'var(--font-mono)', fontWeight: ri === 0 ? 800 : 600,
                      fontSize: ci === 0 ? 14.5 : 14, color: ri === 0 ? '#fff' : 'rgba(255,255,255,0.75)',
                    }}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   How it works — 5ステップ + ターゲティングファネル。
   ================================================================ */
function LtHow() {
  const { useReveal } = window;
  const ref = useReveal();
  const steps = [
    { n: '01', t: 'ターゲット設計', d: '業界・役職・地域・企業規模・アクティブ度の5つのフィルタで、会うべき決裁者を精密に定義。' },
    { n: '02', t: 'AIでリスト&文面', d: 'リスト化と企業分析、1通ずつのパーソナライズ文面生成をAIが担当。定型コピペは送らない。' },
    { n: '03', t: 'マルチチャネル送信', d: 'LinkedIn・メール・問い合わせフォームで週100〜200件を安全運用。InMailで未接続の決裁者にも。' },
    { n: '04', t: '返信・関係構築', d: 'いきなり売り込まず、相手の文脈に合わせて接点を温める。' },
    { n: '05', t: 'Zoom商談セット', d: '日程調整まで行い、決裁者との商談を確定。あとはあなたが受注するだけ。' },
  ];
  const funnel = [
    { label: 'つながり申請', n: '400–870', unit: '件 / 月・1アカウント', w: '100%' },
    { label: '承認(承認率20–50%)', n: '80–300', unit: '件 / 月', w: '68%' },
    { label: '商談化(返信率20–40%)', n: '10–40', unit: '有望リード / 月', w: '38%' },
  ];
  return (
    <section id="lt-how" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="How It Works" title={<span>AIが回し、人は「商談」だけに集中する。</span>}
          lead="13億人から、会うべき決裁者だけに絞り込み、アプローチから商談セットまでをワンストップで。" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 'clamp(14px, 1.8vw, 20px)', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          {steps.map((st, i) => (
            <div key={st.n} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(20px, 2.2vw, 28px)', animationDelay: `${i * 0.07}s`,
              display: 'flex', flexDirection: 'column',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{st.n}</span>
              <div style={{ fontWeight: 900, fontSize: 16, marginTop: 10 }}>{st.t}</div>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: 'var(--text-secondary)', marginTop: 8 }}>{st.d}</p>
            </div>
          ))}
        </div>

        {/* 歩留まりファネル */}
        <div className="reveal" style={{
          marginTop: 'clamp(40px, 5vw, 64px)', background: '#fff', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(26px, 3.4vw, 44px)',
        }}>
          <div style={{ fontWeight: 900, fontSize: 'clamp(18px, 2.2vw, 24px)' }}>実数のレンジを、そのまま開示。</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26 }}>
            {funnel.map((f) => (
              <div key={f.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-secondary)' }}>{f.label}</span>
                  <span><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 20 }}>{f.n}</span><span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 6 }}>{f.unit}</span></span>
                </div>
                <div style={{ height: 12, borderRadius: 999, background: 'var(--neutral-100)', marginTop: 6, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: f.w, borderRadius: 999, background: LT_GRAD }} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 22, fontSize: 14.5, fontWeight: 800, color: 'var(--text-primary)' }}>
            → 1アカウントあたり、<span style={{ backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>月5〜15商談</span>が現実的なライン。
          </p>
          <p style={{ marginTop: 8, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.8 }}>
            ※月次レポートでアクション数・反応率・商談数を毎月開示します。商談はZoom、契約は電子契約+NDA、連絡は全ツール対応。すべてオンラインで完結します。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Pricing — 固定費ゼロ。出た成果にだけ、払う。
   ================================================================ */
function LtPricing() {
  const { useReveal } = window;
  const ref = useReveal();
  const compare = [
    ['初期費用', '20〜80万円', '50〜100万円', '3万円'],
    ['月額固定', 'あり', '人件費', 'なし'],
    ['立ち上がり', '2〜4週間', '3〜6ヶ月', '最短数日'],
    ['失注時のコスト', '固定費が継続', '雇用リスク', '費用ゼロ'],
  ];
  const fees = [
    ['初期費用', '¥30,000', '契約時(期間限定価格)'],
    ['アポ単価報酬', '¥10,000–50,000', 'Zoom商談の実施ごと'],
    ['成約報酬', '成約額の10–15%', '成約・入金後'],
    ['月額固定 / ツール費', 'なし ／ 実費別', '—'],
  ];
  return (
    <section id="lt-pricing" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Pricing" title={<span>固定費ゼロ。<br />出た成果にだけ、払う。</span>}
          lead="月額固定なし。初期3万円のみで、成果が出た分だけのお支払い。リスクを反転させた完全成果報酬型です。" />

        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 36px)', marginTop: 'clamp(40px, 5vw, 64px)', alignItems: 'start' }}>
          {/* 料金テーブル */}
          <div className="reveal" style={{ border: '2px solid transparent', borderRadius: 'var(--radius-lg)', background: `linear-gradient(#fff, #fff) padding-box, ${LT_GRAD} border-box`, boxShadow: 'var(--shadow-md)', padding: 'clamp(24px, 3vw, 36px)' }}>
            <div style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 999, background: LT_GRAD, color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em' }}>完全成果報酬</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 52px)', letterSpacing: '-0.01em' }}>¥30,000</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)' }}>初期のみ</span>
            </div>
            <dl style={{ margin: '22px 0 0', borderTop: '1px solid var(--color-border)' }}>
              {fees.map(([k, v, when]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, padding: '14px 2px', borderBottom: '1px solid var(--color-divider)' }}>
                  <div>
                    <dt style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--text-primary)' }}>{k}</dt>
                    <dd style={{ margin: 0, fontSize: 11.5, color: 'var(--text-muted)', marginTop: 3 }}>{when}</dd>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 16, alignSelf: 'center' }}>{v}</span>
                </div>
              ))}
            </dl>
            <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 14, lineHeight: 1.8 }}>※ターゲットや業界によってアポ単価は上下します。</p>
          </div>

          {/* 比較表 */}
          <div className="reveal" style={{ overflowX: 'auto', animationDelay: '0.1s' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
              <thead>
                <tr>
                  {['', '一般的な営業代行', 'インハウス採用', 'リートス'].map((h, i) => (
                    <th key={h || 'x'} style={{
                      textAlign: i === 0 ? 'left' : 'center', padding: '12px 10px', fontSize: 12.5, fontWeight: 800,
                      color: i === 3 ? '#fff' : 'var(--text-muted)', background: i === 3 ? 'var(--neutral-900)' : 'transparent',
                      borderRadius: i === 3 ? '12px 12px 0 0' : 0, borderBottom: '1px solid var(--color-border)',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map(([k, a, b, c], ri) => (
                  <tr key={k}>
                    <td style={{ padding: '14px 10px', fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', borderBottom: '1px solid var(--color-divider)' }}>{k}</td>
                    <td style={{ padding: '14px 10px', fontSize: 13.5, textAlign: 'center', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '1px solid var(--color-divider)' }}>{a}</td>
                    <td style={{ padding: '14px 10px', fontSize: 13.5, textAlign: 'center', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-secondary)', borderBottom: '1px solid var(--color-divider)' }}>{b}</td>
                    <td style={{
                      padding: '14px 10px', fontSize: 14, textAlign: 'center', fontFamily: 'var(--font-mono)', fontWeight: 800,
                      color: '#fff', background: 'var(--neutral-900)', borderBottom: '1px solid rgba(255,255,255,0.12)',
                      ...(ri === compare.length - 1 ? { borderRadius: '0 0 12px 12px', borderBottom: 'none' } : {}),
                    }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Flow — 導入の流れ + CTA。
   ================================================================ */
function LtFlow() {
  const { Button } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Arrow } = window;
  const ref = useReveal();
  const steps = ['お問い合わせ / DM', 'Zoomで30分ヒアリング', '電子契約 + NDA', 'キックオフ', '商談供給スタート'];
  return (
    <section id="lt-flow" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Get Started" title="商談獲得から成約まで、よりスマートに。" lead="すべてオンラインで完結。最短数日で商談供給が立ち上がります。" />
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 'clamp(12px, 1.6vw, 18px)', marginTop: 'clamp(40px, 5vw, 60px)', counterReset: 'lt' }}>
          {steps.map((t, i) => (
            <li key={t} className="reveal" style={{
              background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)', padding: 'clamp(18px, 2vw, 26px)', animationDelay: `${i * 0.06}s`,
              display: 'flex', flexDirection: 'column', gap: 10, position: 'relative',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontWeight: 800, fontSize: 14.5, lineHeight: 1.6 }}>{t}</span>
            </li>
          ))}
        </ol>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(44px, 5vw, 64px)' }}>
          <a href="/contact"><Button size="lg" iconRight={<Arrow />}>無料で相談する</Button></a>
        </div>
      </div>
    </section>
  );
}

/* ページ合成 */
function LeadtossPage() {
  return (
    <React.Fragment>
      <LtHero />
      <LtChallenge />
      <LtSolution />
      <LtWhyLinkedin />
      <LtHow />
      <LtPricing />
      <LtFlow />
    </React.Fragment>
  );
}

Object.assign(window, { LeadtossPage });
