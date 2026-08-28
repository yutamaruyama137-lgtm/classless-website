/* Classless — AI相談への導線（外部AIのプリフィルURLを利用するベータ機能） */

const ASK_AI_SERVICES = [
  { id: 'chatgpt', label: 'ChatGPT', color: '#14a989', url: 'https://chatgpt.com/?q=' },
  { id: 'claude', label: 'Claude', color: '#c52228', url: 'https://claude.ai/new?q=' },
  { id: 'perplexity', label: 'Perplexity', color: '#37abd9', url: 'https://www.perplexity.ai/search?q=' },
]

function buildAskAiPrompt(route, canonicalUrl) {
  const preface = `次のClasslessのページを確認してください：${canonicalUrl}`
  const sourceNote = 'ページを取得できない場合は、推測せず取得できない旨を最初に伝えてください。'

  if (route === 'article') {
    return `${preface}\nこの記事の手法を自分の業務に合わせたいです。私の職種と、時間を取られている作業を質問してから提案してください。${sourceNote}`
  }
  if (route === 'axel' || route === 'leadtoss' || route === 'business') {
    return `${preface}\nこのサービスが自社に合うか判断したいです。業種・会社規模・現在の課題を質問してから整理してください。${sourceNote}`
  }
  return `${preface}\n内容を要約し、私に関係する点を確認するための質問をしてから説明してください。${sourceNote}`
}

function copyText(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text)

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()
  return copied ? Promise.resolve() : Promise.reject(new Error('copy failed'))
}

function AskAi({ route }) {
  const [open, setOpen] = React.useState(false)
  const [copyState, setCopyState] = React.useState('idle')
  const rootRef = React.useRef(null)
  const triggerRef = React.useRef(null)
  const firstLinkRef = React.useRef(null)
  const panelId = 'ask-ai-panel'

  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href
    || `https://www.classless.jp${window.location.pathname}`
  const prompt = buildAskAiPrompt(route, canonicalUrl)

  React.useEffect(() => {
    if (!open) return undefined
    firstLinkRef.current?.focus()

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = [...rootRef.current.querySelectorAll('a[href], button:not([disabled])')]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  React.useEffect(() => {
    if (!open) setCopyState('idle')
  }, [open])

  const trackClick = (service) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'ask_ai_click', { service, page_path: window.location.pathname })
    }
  }

  const handleCopy = async () => {
    try {
      await copyText(prompt)
      setCopyState('copied')
      trackClick('copy')
    } catch {
      setCopyState('failed')
    }
  }

  return (
    <aside className={`ask-ai${open ? ' is-open' : ''}`} ref={rootRef} aria-label="AIに相談">
      {open && (
        <div className="ask-ai__panel" id={panelId} role="dialog" aria-label="AIサービスを選ぶ">
          <div className="ask-ai__head">
            <div>
              <span className="ask-ai__eyebrow">ASK AI</span>
              <h2>このページについて聞く</h2>
            </div>
            <span className="ask-ai__beta">ベータ</span>
          </div>
          <p className="ask-ai__note">選んだAIに、このページのURLと質問文を渡します。</p>
          <div className="ask-ai__services">
            {ASK_AI_SERVICES.map((service, index) => (
              <a
                className="ask-ai__service"
                href={`${service.url}${encodeURIComponent(prompt)}`}
                key={service.id}
                onClick={() => trackClick(service.id)}
                ref={index === 0 ? firstLinkRef : undefined}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i style={{ '--ask-ai-service-color': service.color }} aria-hidden="true" />
                <span>{service.label}で聞く</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <button className="ask-ai__copy" type="button" onClick={handleCopy}>
            {copyState === 'copied' ? '質問文をコピーしました' : copyState === 'failed' ? 'コピーできませんでした' : 'リンクが開かない場合は質問文をコピー'}
          </button>
          <p className="ask-ai__caution">外部AIの非公式な入力リンクを利用しています。</p>
        </div>
      )}
      <button
        className="ask-ai__trigger"
        type="button"
        aria-controls={panelId}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
        ref={triggerRef}
      >
        <span className="ask-ai__mark" aria-hidden="true"><i /><i /><i /><i /></span>
        <span>AIに聞く</span>
      </button>
    </aside>
  )
}

Object.assign(window, { AskAi })
