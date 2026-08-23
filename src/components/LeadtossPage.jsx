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
  const { useReveal, Arrow } = window;
  const ref = useReveal();

  const badges = ['対象企業を事前に確認', '商談条件をすり合わせ', '開始時期は個別にご案内'];

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
              リートスは、対象企業の整理、候補者の確認、文面作成、送信後の返信対応、日程調整までを支援します。アプローチ条件と商談の定義は、開始前にすり合わせます。
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
              <a href="/contact" className="cl-action-link cl-action-link--primary cl-action-link--lg">無料で相談する <Arrow /></a>
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
    { n: '採用難', t: '営業担当を確保しにくい', d: '採用・育成に時間がかかり、接点づくりを始めるまでの負担が大きい。' },
    { n: '属人化', t: '担当者ごとに進め方が違う', d: '対象企業の選び方や送信文面、追客の記録が個人に寄りやすい。' },
    { n: '接点不足', t: '決裁者まで届きにくい', d: '代表電話や一斉送信だけでは、確認してほしい相手へ情報が届きにくい。' },
    { n: '先行負担', t: '成果が出る前に費用がかかる', d: '採用や外注では、準備・教育・運用に先行して費用と工数が発生する。' },
  ];
  return (
    <section id="lt-challenge" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Challenge" title={<span>商品はいい。<br />でも、接点づくりに手が回らない。</span>}
          lead="営業担当の採用・育成には時間がかかります。対象企業の整理、文面作成、送信、返信確認、日程調整にも継続的な工数が必要です。" />
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
    { t: 'オンラインで進行', d: 'ヒアリング、対象企業の確認、契約、日程調整までオンラインで進めます。開始日は準備状況を確認してご案内します。', icon: 'M3 12h18M12 3v18' },
    { t: '対象と文面を設計', d: '候補企業を整理し、企業ごとの確認内容を踏まえて文面を作成します。送信条件は事前に合意します。', icon: null },
    { t: '条件に応じてお見積もり', d: '対象市場、利用チャネル、商談条件を確認し、対応範囲と費用をご提示します。', icon: null },
  ];
  const icons = [
    <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#ltg0)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="ltg0" x1="0" y1="0" x2="1" y2="0"><stop stopColor={LT_BLUE}/><stop offset="1" stopColor={LT_PURPLE}/></linearGradient></defs><rect x="2.5" y="5" width="19" height="13" rx="2.5"/><path d="M8 21h8"/><path d="M12 18v3"/></svg>,
    <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#ltg1)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="ltg1" x1="0" y1="0" x2="1" y2="0"><stop stopColor={LT_BLUE}/><stop offset="1" stopColor={LT_PURPLE}/></linearGradient></defs><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.4"/></svg>,
    <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#ltg2)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="ltg2" x1="0" y1="0" x2="1" y2="0"><stop stopColor={LT_BLUE}/><stop offset="1" stopColor={LT_PURPLE}/></linearGradient></defs><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.4 9.2c0-1 1.1-1.7 2.6-1.7s2.6.7 2.6 1.7c0 2.6-5.2 1.5-5.2 4.1 0 1 1.1 1.7 2.6 1.7s2.6-.7 2.6-1.7"/></svg>,
  ];
  return (
    <section id="lt-solution" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Solution" title={<span>商談条件に合う接点を、<span style={{ backgroundImage: LT_GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>日程調整まで</span>支援する。</span>}
          lead="リートスは契約・受注判断を代行するサービスではありません。合意した条件に沿って、候補整理から日程調整までを担当します。" />
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
              {['候補企業の整理', '企業別文面の作成', '返信内容の記録', '商談日程の調整'].map((x) => (
                <span key={x} style={{ fontSize: 12.5, fontWeight: 700, padding: '6px 12px', borderRadius: 999, background: '#fff', border: '1px solid var(--color-border)', color: 'var(--text-secondary)' }}>{x}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: 'clamp(24px, 3vw, 36px)', background: '#fff', borderLeft: '1px solid var(--color-border)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.14em', color: 'var(--text-muted)', fontWeight: 700 }}>YOU</div>
            <div style={{ fontSize: 'clamp(17px, 1.9vw, 21px)', fontWeight: 900, marginTop: 8 }}>商談で、提案と受注判断を行う。</div>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 14 }}>
              当日の提案内容、見積もり、契約条件、受注判断はお客様が担当します。
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
    { n: 'ROLE', t: '役職条件で候補を整理', d: '業種・企業・役職など、開始前に合意した条件で候補を確認します。' },
    { n: 'PROFILE', t: '公開情報を事前に確認', d: '候補者の公開プロフィールと企業情報を確認し、対象外を除きます。' },
    { n: 'RECORD', t: '接点と反応を記録', d: '送信内容、送信日、返信、次の対応を残し、月次の見直しに使います。' },
  ];
  const rows = [
    ['LinkedIn', '企業・役職条件', '公開プロフィール', '個別メッセージ'],
    ['メール', '保有・調査リスト', '企業情報', '個別メール'],
    ['問い合わせフォーム', '企業リスト', '企業サイト', '指定フォーム'],
    ['電話', '企業・電話番号', '会話時に確認', '代表・部署番号'],
  ];
  return (
    <section id="lt-linkedin" ref={ref} style={{ background: 'var(--neutral-900)', position: 'relative', overflow: 'hidden', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `radial-gradient(800px 400px at 80% -10%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(700px 380px at 10% 110%, rgba(62,123,250,0.18), transparent 60%)`, pointerEvents: 'none' }} />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>
        <LtHead en="Why LinkedIn" invert
          title={<span style={{ color: '#fff' }}>対象企業と役職を確認して、<br />接点をつくる。</span>}
          lead="LinkedInを中心に、必要に応じてメールや問い合わせフォームを利用します。使うチャネルと送信条件は事前に確認します。" />
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
                {['チャネル', '候補の絞り込み', '事前確認', '連絡方法'].map((h) => (
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
    { n: '01', t: '対象条件の確認', d: '業種・役職・地域・企業規模など、候補企業を整理する条件をすり合わせます。' },
    { n: '02', t: '候補・文面の下書き', d: '公開情報をもとに候補を整理し、企業ごとの確認内容を踏まえて文面を作成します。' },
    { n: '03', t: '送信・記録', d: '合意したチャネルと件数で送信し、対象・文面・送信日・反応を記録します。' },
    { n: '04', t: '返信・関係構築', d: 'いきなり売り込まず、相手の文脈に合わせて接点を温める。' },
    { n: '05', t: '商談日程の調整', d: '合意した商談条件を確認し、候補日を調整してお客様へ引き継ぎます。' },
  ];
  const funnel = [
    { label: '対象候補', n: '条件に合う企業', unit: '業種・役職・地域などで整理', w: '100%' },
    { label: '反応を確認', n: '返信・接続', unit: '文面と対象条件を見直す', w: '68%' },
    { label: '商談条件を確認', n: '日程調整', unit: '合意した条件を満たす接点', w: '38%' },
  ];
  return (
    <section id="lt-how" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="How It Works" title={<span>対象を決め、接点づくりを記録しながら進める。</span>}
          lead="対象企業と役職の条件をすり合わせ、候補整理から文面作成、送信、返信対応、日程調整までを一つの流れで支援します。" />

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
          <div style={{ fontWeight: 900, fontSize: 'clamp(18px, 2.2vw, 24px)' }}>運用状況を、段階ごとに確認。</div>
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
            → 反応率と商談数は、対象市場・商材・条件・利用チャネルによって変わります。月次実績を確認しながら対象と文面を見直します。
          </p>
          <p style={{ marginTop: 8, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.8 }}>
            ※月次レポートでアクション数・反応率・商談数を共有します。商談方法、契約方法、連絡チャネルは開始前に確認します。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Pricing — scope and conditions are agreed before work begins.
   ================================================================ */
function LtPricing() {
  const { useReveal } = window;
  const ref = useReveal();
  const compare = [
    ['初期費用', '会社・契約により異なる', '採用・教育費', '個別見積もり'],
    ['費用の決め方', '契約条件による', '人件費・採用費', '対応範囲に応じて提示'],
    ['開始時期', '契約内容による', '採用状況による', '準備確認後にご案内'],
    ['成果条件', '会社ごとに異なる', '社内で設定', '開始前に定義'],
  ];
  const fees = [
    ['対象企業の設計', '個別見積もり', '業種・役職・地域などを確認'],
    ['アプローチ運用', '個別見積もり', 'チャネル・件数・文面確認範囲を確認'],
    ['商談条件', '事前に定義', '対象者・課題・日程確定などをすり合わせ'],
    ['外部ツール費', '実費を事前提示', '利用する場合のみ'],
  ];
  return (
    <section id="lt-pricing" ref={ref} style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Pricing" title={<span>対象と対応範囲を確認して、<br />お見積もりします。</span>}
          lead="対象市場、利用チャネル、送信条件、商談の定義をすり合わせたうえで、対応範囲と費用をご提示します。" />

        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 3vw, 36px)', marginTop: 'clamp(40px, 5vw, 64px)', alignItems: 'start' }}>
          {/* 料金テーブル */}
          <div className="reveal" style={{ border: '2px solid transparent', borderRadius: 'var(--radius-lg)', background: `linear-gradient(#fff, #fff) padding-box, ${LT_GRAD} border-box`, boxShadow: 'var(--shadow-md)', padding: 'clamp(24px, 3vw, 36px)' }}>
            <div style={{ display: 'inline-flex', padding: '5px 14px', borderRadius: 999, background: LT_GRAD, color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em' }}>個別見積もり</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 18 }}>
              <span style={{ fontFamily: 'var(--font-jp)', fontWeight: 900, fontSize: 'clamp(27px, 3.4vw, 42px)', letterSpacing: '0.01em' }}>条件確認後にご提示</span>
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
            <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 14, lineHeight: 1.8 }}>※対象市場・商材・チャネル・対応範囲によって費用は異なります。</p>
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
  const { useReveal, Arrow } = window;
  const ref = useReveal();
  const steps = ['お問い合わせ / DM', 'Zoomで30分ヒアリング', '電子契約 + NDA', 'キックオフ', '商談供給スタート'];
  return (
    <section id="lt-flow" ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="cl-container">
        <LtHead en="Get Started" title="対象と商談条件を決めてから、運用を始めます。" lead="ヒアリング後に、対象企業・利用チャネル・文面確認・商談条件・開始時期をご案内します。" />
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
          <a href="/contact" className="cl-action-link cl-action-link--primary cl-action-link--lg">無料で相談する <Arrow /></a>
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
