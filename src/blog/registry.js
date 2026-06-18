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

// ── Real stock photography (Unsplash) ──────────────────────────────────
// Article files carry no image URLs; the renderer picks a real photo from the
// pool for the article's category, deterministically by a seed string, so the
// same article always shows the same images. All IDs verified to return 200.
const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`
const PHOTO_POOLS = {
  'AI BPO比較': [
    '1552664730-d307ca884978', '1556761175-5973dc0f32e7', '1521737604893-d14cc237f11d',
    '1519389950473-47ba0277781c', '1497366754035-f200968a6e72', '1556157382-97eda2d62296',
    '1454165804606-c3d57bc86b40',
  ],
  '業務おすすめAI': [
    '1486312338219-ce68d2c6f44d', '1517245386807-bb43f82c33c4', '1504384308090-c894fdcc538d',
    '1531297484001-80022131f5a1', '1542744173-8e7e53415bb0', '1460925895917-afdab827c52f',
    '1551288049-bebda4e38f71', '1488590528505-98d2b5aba04b',
  ],
  'AI導入・活用': [
    '1454165804606-c3d57bc86b40', '1521737604893-d14cc237f11d', '1573164713988-8665fc963095',
    '1581091226825-a6a2a5aee158', '1526628953301-3e589a6a8b74', '1526374965328-7f61d4dc18c5',
    '1450101499163-c8848c66ca85', '1554224155-6726b3ff858f',
  ],
  '生成AI基礎': [
    '1518770660439-4636190af475', '1639762681485-074b7f938ba0', '1620712943543-bcc4688e7485',
    '1677442136019-21780ecad995', '1633265486064-086b219458ec', '1611974789855-9c2a0a7236a3',
    '1573497019940-1c28c88b4f3e', '1591696205602-2f950c417cb9',
  ],
}
const FALLBACK_POOL = PHOTO_POOLS['業務おすすめAI']
function hashSeed(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0 } return Math.abs(h) }
// pickBlogImage(category, seed) → a stable Unsplash URL from the category pool.
function pickBlogImage(category, seed) {
  const pool = PHOTO_POOLS[category] || FALLBACK_POOL
  return U(pool[hashSeed(String(seed)) % pool.length])
}

if (typeof window !== 'undefined') {
  window.BLOG_ARTICLES = ARTICLES
  window.BLOG_CATEGORIES = BLOG_CATEGORIES
  window.pickBlogImage = pickBlogImage
}

export default ARTICLES
