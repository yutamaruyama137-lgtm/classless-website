/* Classless — "色が組み合わさっていく" band.
   4つのブランドカラーがスクロールに連動して中央へ集まり、重なって
   Classless のマークが浮かび上がる。--p (0→1) は useScrollVar が駆動。 */
function ColorMerge() {
  const { useReveal, Eyebrow, useScrollVar, gatherChars } = window;
  const ref = useReveal();
  const stageRef = useScrollVar(0.5);

  const orbs = [
    { c: 'red',    ox: '-150px', oy: '-96px' },
    { c: 'orange', ox: '152px',  oy: '-72px' },
    { c: 'blue',   ox: '-128px', oy: '104px' },
    { c: 'green',  ox: '136px',  oy: '96px' },
  ];

  return (
    <section ref={ref} style={{ background: 'var(--color-bg-subtle)', paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)', overflow: 'hidden' }}>
      <div className="cl-container" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}><Eyebrow>Synergy</Eyebrow></div>

        <div ref={stageRef} className="merge-stage" style={{ position: 'relative', height: 'clamp(240px, 34vw, 380px)', margin: '12px auto 0' }}>
          {orbs.map((o) => (
            <span key={o.c} className="merge-orb" style={{
              '--ox': o.ox, '--oy': o.oy,
              background: `radial-gradient(circle at 50% 50%, var(--brand-${o.c}), transparent 68%)`,
            }} />
          ))}
          <img className="merge-mark" src="/assets/mark-classless.png" alt="" aria-hidden="true" />
        </div>

        <h2 className="gather-host" style={{ fontSize: 'clamp(24px, 3.4vw, 46px)', fontWeight: 900, lineHeight: 1.4, letterSpacing: '0.01em', marginTop: 'clamp(8px, 2vw, 24px)' }}>
          <span style={{ display: 'block' }}>{gatherChars('4つの領域が重なって、')}</span>
          <span style={{ display: 'block' }}>{gatherChars('ひとつのAI活用力になる。', { base: 0.12 })}</span>
        </h2>
        <p className="reveal" style={{ fontSize: 15.5, lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 500, maxWidth: '34em', margin: '20px auto 0', animationDelay: '0.1s' }}>
          AI BPO・システム開発・データベース最適化・AI教育。バラバラの点ではなく、重なり合う面で、御社のAI活用を支えます。
        </p>
      </div>
    </section>
  );
}
Object.assign(window, { ColorMerge });
