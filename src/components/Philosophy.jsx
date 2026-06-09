/* Classless — 経営理念 (philosophy) page: Mission / Vision / Values */

function PhilosophyHero() {
  const { useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const h1Ref = useScrollVar(0.5, 0.92, 0.5);
  const s = makeSplit();
  const pTitle = s.chars('経営理念');
  const pTitleN = s.count();
  return (
    <section ref={ref} style={{ paddingTop: 'clamp(72px, 9vw, 128px)', paddingBottom: 'clamp(36px, 4vw, 56px)' }}>
      <div className="cl-container">
        <div className="reveal"><Eyebrow>Philosophy</Eyebrow></div>
        <h1 ref={h1Ref} className="split-host" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 900, marginTop: 18, letterSpacing: '0.02em', '--n': pTitleN, '--win': 4 }}>{pTitle}</h1>
        <p className="reveal" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, maxWidth: '34em', marginTop: 26, animationDelay: '0.12s' }}>
          私たちが何のために存在し、どんな未来を目指すのか。Classless の根っこにある考え方を、ミッションとビジョンにまとめました。
        </p>
      </div>
    </section>
  );
}

function Statement({ kind, tone, linesData, copy, bg, glow }) {
  const { ColorField, useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const rendered = linesData.map((segs) => segs.flatMap((seg) => s.chars(seg.t, seg.c)));
  const titleN = s.count();
  return (
    <section ref={ref} style={{ background: bg, position: 'relative', overflow: 'hidden', paddingTop: 'clamp(64px, 9vw, 144px)', paddingBottom: 'clamp(64px, 9vw, 144px)' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: glow }} />
      <div className="cl-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal"><Eyebrow tone={tone}>{kind}</Eyebrow></div>
        <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(30px, 5vw, 68px)', fontWeight: 900, lineHeight: 1.34, letterSpacing: '0.01em', marginTop: 26, maxWidth: '20em', '--n': titleN, '--win': 8 }}>
          {rendered.map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
        </h2>
        <p className="reveal" style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 2, color: 'var(--text-secondary)', fontWeight: 500, maxWidth: '38em', marginTop: 30, animationDelay: '0.16s' }}>{copy}</p>
      </div>
    </section>
  );
}

function Values() {
  const { Card } = window.ClasslessDesignSystem_225e16;
  const { useReveal, Eyebrow, useScrollVar, makeSplit } = window;
  const ref = useReveal();
  const titleRef = useScrollVar(0.5, 0.9, 0.46);
  const s = makeSplit();
  const vTitle = s.chars('大切にしている3つのこと');
  const vTitleN = s.count();
  const vals = [
    { tone: 'green', en: 'With the region', t: '地域とともに', d: '現場に深く入り、伴走する。地域の「できる」を一つずつ増やしていきます。', icon: 'M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z' },
    { tone: 'blue', en: 'People first', t: '人を主役に', d: 'AIはあくまで脇役。主役はいつも人。技術は人の可能性を広げるための道具です。', icon: 'M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z' },
    { tone: 'orange', en: 'Stay curious', t: 'おもしろがる', d: 'むずかしさも、変化も、まず楽しんでみる。前向きさが、いい仕事を生みます。', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2' },
  ];
  return (
    <section ref={ref} style={{ background: 'var(--color-bg)', paddingTop: 'clamp(56px, 8vw, 112px)', paddingBottom: 'clamp(56px, 8vw, 112px)' }}>
      <div className="cl-container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Eyebrow>Values</Eyebrow></div>
          <h2 ref={titleRef} className="split-host" style={{ fontSize: 'clamp(26px, 3.6vw, 46px)', fontWeight: 900, marginTop: 18, lineHeight: 1.3, '--n': vTitleN, '--win': 7 }}>{vTitle}</h2>
        </div>
        <div className="cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 'clamp(40px, 5vw, 64px)' }}>
          {vals.map((v, i) => (
            <div key={v.t} className="reveal" style={{ animationDelay: `${0.08 * i}s` }}>
              <Card accent={v.tone} interactive padding="34px" style={{ height: '100%' }}>
                <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `var(--${v.tone}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={`var(--brand-${v.tone})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={v.icon} /></svg>
                </span>
                <div style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: `var(--brand-${v.tone})`, marginTop: 22 }}>{v.en}</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, marginTop: 8 }}>{v.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 12 }}>{v.d}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <React.Fragment>
      <PhilosophyHero />
      <Statement
        kind="Mission" tone="green"
        bg="var(--color-bg)"
        glow="radial-gradient(620px 420px at 82% 12%, rgba(20,169,137,0.14), transparent 60%), radial-gradient(520px 360px at 70% 80%, rgba(55,171,217,0.10), transparent 62%)"
        linesData={[
          [{ t: 'AIで、人間を' }, { t: '面白く', c: 'green' }, { t: 'する。' }],
        ]}
        copy="テクノロジーは、人をラクにするだけのものじゃない。AIで一人ひとりの「やってみたい」を解き放ち、毎日の仕事や暮らしを、もっと面白くしていく。それが、Classless の存在意義です。"
      />
      <Statement
        kind="Vision" tone="blue"
        bg="var(--color-bg-subtle)"
        glow="radial-gradient(620px 420px at 18% 16%, rgba(55,171,217,0.16), transparent 60%), radial-gradient(520px 360px at 30% 84%, rgba(247,141,46,0.10), transparent 62%)"
        linesData={[
          [{ t: 'AIで、一人ひとりも、地方も、' }],
          [{ t: '社会も、もっと' }, { t: 'ワクワク', c: 'blue' }, { t: 'していく未来。' }],
        ]}
        copy="便利になった、その先にワクワクがある。AIによって一人ひとりの可能性が広がり、地方が元気になり、社会全体が前向きになっていく。地方から、その未来を実装します。"
      />
      <Values />
    </React.Fragment>
  );
}
Object.assign(window, { Philosophy });
