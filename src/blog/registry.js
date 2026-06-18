/* Classless blog — article registry.
   Every file under ./articles/*.js exports `const article = {...}`.
   We eager-glob them so the bundle stays a single SPA (no async route code).
   The aggregated, date-sorted list is exposed on window.BLOG_ARTICLES for the
   window-scoped Blog components to read. */
const mods = import.meta.glob('./articles/*.js', { eager: true })

const ARTICLES = Object.values(mods)
  .map((m) => m.article)
  .filter(Boolean)
  // newest first (date string is YYYY.MM.DD, lexicographically sortable)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)))

// Category order + display tone for the index page sections.
export const BLOG_CATEGORIES = [
  { key: 'AI BPO比較', tone: 'blue' },
  { key: '業務おすすめAI', tone: 'orange' },
  { key: 'AI導入・活用', tone: 'green' },
  { key: '生成AI基礎', tone: 'red' },
]

if (typeof window !== 'undefined') {
  window.BLOG_ARTICLES = ARTICLES
  window.BLOG_CATEGORIES = BLOG_CATEGORIES
}

export default ARTICLES
