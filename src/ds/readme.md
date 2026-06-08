# Classless Design System

> 地方からAIで、人間の可能性を解放する。
> *From the regions, with AI — unleashing human potential.*

The design system for **Classless ("Beyond Classroom")** — a regional-Japan
(Sendai / Tohoku) AI company that helps local businesses, schools and civic
organizations put generative AI to work. The brand fuses **enterprise-grade
structural polish** with **bold, energetic, four-color personality**.

This project is the source of truth: brand assets, design tokens, reusable
React components, and full product UI kits. An automated compiler bundles the
components into a runtime library and indexes the tokens; consuming projects
link a single file, `styles.css`.

---

## 1. Brand context

- **Brand:** Classless — tagline *Beyond Classroom*. Education and AI enablement
  "beyond the classroom," rooted in regional Japan.
- **Audience:** enterprise partners — regional companies, schools, and
  municipalities adopting AI.
- **Voice:** bold & energetic, warm, plain-spoken. Japanese-first.
- **Flagship product:** 「雑談会議」(Zatsudan Kaigi) — an AI meeting-notes /
  knowledge workspace that turns conversations into searchable team knowledge.

### Design north stars (client-provided references)
- **LayerX** (layerx.co.jp) — *"目指しているところ"*. The structural and
  typographic discipline we emulate: enormous letter-spaced Japanese headlines
  paired with short English labels, very generous whitespace, clean structured
  sections (What We Do / Business / News / Join Us), restrained color, masonry
  imagery, a confident dark CTA band.
- **Digital Gorilla** (digital-gorilla.co.jp) — the *energetic, playful* end of
  the spectrum: Sendai-based AI×marketing, punchy copy, image-rich.
- Reference product site flagged by the client: zatsudankaigi.jp (JS app — no
  readable markup via fetch; informed the product UI kit's name & purpose).

> The synthesis we committed to: **LayerX polish × Classless color.** A white,
> spacious, editorial enterprise canvas, punctuated by the deliberate use of the
> four brand colors and the spectrum signature.

### Source assets supplied
- `Classless beyond classroom.png` — horizontal lockup (→ `assets/logo-classless-horizontal.png`)
- `Classless.png` — stacked lockup on dark (→ `assets/logo-classless-stacked-dark.png`)
- `Classless白.svg` — white version (filter-masked raster, no clean vector; not used)
- REQS logo files — **out of scope** (client confirmed REQS is no longer related).

---

## 2. Content fundamentals — how Classless writes

- **Language:** Japanese-first. English appears only as *section labels /
  eyebrows* (e.g. `What We Do`, `Latest News`, `Join Us`) — uppercase, wide
  letter-spacing, set in Jost. Never write body copy in English.
- **Tone:** bold and energetic, but never noisy. Confident, warm, human. We
  speak *with* the reader, not down to them.
- **Person:** address the partner directly and inclusively — 「一緒に」「ともに」
  「伴走する」. First-person plural for the company (私たち / Classless は…).
- **Headlines:** short, declarative, often with a hard stop 「。」. They state a
  belief or outcome, e.g. 「地方からAIで、人間の可能性を解放する。」「AIを、地域の
  現場の『あたりまえ』にする。」「地方の未来を、一緒に実装しよう。」 A single brand
  color may highlight one keyword (typically **AI**).
- **Body:** plain, concrete, jargon-light. Translate technology into everyday
  tools 「むずかしい技術を、誰もが使える道具に。」 Keep sentences breathy and
  readable (line-height 1.85).
- **Casing & punctuation:** Japanese full-width punctuation 「、。」; full-width
  brackets 「」for emphasis. English labels are UPPERCASE. Numbers, dates and
  metrics are set in mono (Space Mono): `2026.06.08`, `120+`, `94%`.
- **Emoji:** none. The four-color mark and spectrum bar carry the playfulness.
- **Microcopy examples:** CTAs 「無料で相談する」「資料をダウンロード」「お問い合わせ」;
  status 「要約済み」「AI処理中」; nav 「サービス / 導入事例 / 会社情報 / ニュース / 採用」.

---

## 3. Visual foundations

### Color
- **Source of truth = the four-color mark:** red `#C52228`, orange `#F78D2E`,
  blue `#37ABD9`, green `#14A989` (sampled from the logo). Each is expanded into
  a 50→900 scale in `tokens/colors.css`.
- **Usage model:** the canvas is **white** with **deep cool-charcoal ink**
  (`#1A1D22`). Color is an *accent*, applied deliberately — not a wash. Primary
  actions use a deepened brand **blue-600** (`#1E90C0`) for AA contrast; the
  other three hues tag categories, eyebrows, accent edges and status.
- **The spectrum signature:** `--gradient-spectrum` (4 hard quarters) and
  `--gradient-spectrum-smooth` (blended) — used as thin bars/rules under
  eyebrows, footers, and CTA bands. This is the brand's most recognizable device.
- **Status:** success = green, warning = orange, danger = red, info = blue, each
  with a soft tint (`*-50`).
- **Dark sections:** `--neutral-900` panels (login brand side, Join-Us CTA,
  footer) with subtle radial color glows — borrowed from LayerX's dark bands.

### Typography
- **JP face:** セザンヌ (Cézanne, Fontworks) is the brand face. It is commercial,
  so the system **ships the closest free substitute, `Zen Kaku Gothic New`**
  (humanist, warm, full weight range). ⚠️ *See "Substitutions" — supply licensed
  Cézanne for production.*
- **Latin/display:** `Jost` — a geometric grotesque that echoes the thin
  "Classless" wordmark and goes to 800 for energetic numerals and eyebrows.
- **Mono:** `Space Mono` — dates, metrics, version/IDs, token names.
- **Headlines** are heavy (900 / Black), tight tracking, with a hair of
  *positive* letter-spacing on long JP lines for the editorial LayerX feel.
- **Scale:** 11 → 80px (`--text-2xs` … `--text-6xl`); body 16px at line-height
  1.85; hero uses `clamp()`.

### Space, shape, elevation
- **4px grid** (`--space-*`). Section rhythm is generous: `--section-y`
  `clamp(64px, 9vw, 144px)`; container max 1200px.
- **Radii are soft** — echoing the mark's rounded squares. Cards `--radius-lg`
  (16px); pills for buttons & badges (`--radius-pill`).
- **Shadows are soft and neutral** (`--shadow-xs`…`xl`) so color does the
  talking; cards sit on a 1px `--color-border` + `--shadow-sm`, lifting on hover.

### Motion & interaction
- **Easing:** `--ease-out` for most transitions; `--ease-spring` (slight
  overshoot) for the playful moments — button hover-lift, switch knob, card lift.
- **Hover:** primary buttons darken + lift `-2px` + grow shadow; secondary/ghost
  fill with the tone's `*-50` tint; cards lift `-4px`; links underline/darken.
- **Press:** color deepens to `*-active`; lift returns to 0.
- **Focus:** 3px `rgba(55,171,217,.45)` ring (`--focus-ring`) — always visible.
- **Backgrounds:** flat white or `--color-bg-subtle`; *no* heavy gradients on
  content. The only gradients are the brand spectrum and soft radial color glows
  on dark panels. No textures, no grain.

---

## 4. Iconography

- **System:** **Lucide**-style line icons — 24×24, ~2px stroke, round caps and
  joins, `currentColor`. They are drawn inline as small SVGs inside components
  and kits (nav, service tiles, alerts, search, chevrons). This stroke weight
  pairs with Zen Kaku Gothic New without competing.
- **Why inline, not a font:** the source brand ships no icon font or sprite; a
  consistent line set keeps weight uniform and recolors via `currentColor`. If
  you need many icons, pull **Lucide** from CDN (`https://unpkg.com/lucide-static`)
  — it matches the in-house drawings. *(Flagged substitution — no proprietary
  icon set was provided.)*
- **Brand iconography:** the four-color mark (`assets/mark-classless.png`,
  transparent) is the hero glyph — used as the app/site logo and favicon. The
  spectrum bar is the secondary brand device.
- **Emoji / unicode icons:** not used.
- **Imagery:** brand-tinted `Placeholder` blocks stand in for real photography
  in the kits (duotone of a hue's 100→400). Replace with warm, human,
  on-the-ground regional photography for production.

---

## 5. Substitutions & open questions ⚠️

- **Font:** セザンヌ → **Zen Kaku Gothic New** (Google Fonts). Visually close
  (humanist gothic) but not identical. **Please supply licensed Cézanne `woff2`
  files** and I will swap the `@font-face` in `tokens/fonts.css`.
- **Icons:** no proprietary set provided → **Lucide**-style line icons.
- **Color shades:** only the four base hex values are official; all 50→900 tints
  are derived. Adjust if you have brand-defined shades.
- **Copy & company facts** (Sendai HQ, metrics, product details) are
  *representative* — supply canonical content to finalize.
- **Fonts shipping:** webfonts load via Google Fonts `@import` (sandbox can't
  fetch binaries to self-host). Self-host for production.

---

## 6. Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (import list only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible usage guide.

**`tokens/`** (each `@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` ·
  `elevation.css` · `base.css` (element defaults + `.cl-container`,
  `.cl-eyebrow`, `.cl-spectrum-bar`, `.cl-mark`).

**`components/`** (React primitives — `window.ClasslessDesignSystem_225e16`)
- `core/` — **Button**, **Badge**, **Card**, **Avatar**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `feedback/` — **Alert**
- `navigation/` — **Tabs**
- Each has `<Name>.jsx` + `.d.ts` + `.prompt.md`, and one `*.card.html` per group.

**`ui_kits/`**
- `marketing/` — Classless corporate site (Hero · What We Do · News · Join Us).
- `app/` — 「雑談会議」AI meeting workspace (Login · Dashboard · Meeting summary).

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand)
shown in the Design System tab.

**`assets/`** — `logo-classless-horizontal.png`, `logo-classless-stacked-dark.png`,
`mark-classless.png` (transparent).

**Starting points:** `Button`, `Card` (component starting points).
