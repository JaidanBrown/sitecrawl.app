# SiteCrawl — Landing Page Style Guide

This document describes the visual language of the SiteCrawl dashboard so a landing page can be built that feels like a seamless extension of the product. Follow it strictly — the brand's identity comes from restraint and consistency, not decoration.

## 1. Product context

SiteCrawl is a site crawl monitoring dashboard for SEO/technical teams. Crawl servers push reports via an ingest API, and the dashboard visualizes indexability, response codes, site structure, on-page issues, PageSpeed/Core Web Vitals, security, hreflang, and sitemaps. The tone is technical, precise, and data-first. The landing page should feel like a developer tool (think Vercel, Linear, Resend) — not a colorful marketing site.

## 2. Design principles

1. **Dark only.** There is no light mode. `color-scheme: dark`.
2. **Sharp corners.** Border radius is `0` on every container, button, input, card, and modal. The ONLY rounded elements are tiny circular dot indicators (`rounded-full`, ~8px).
3. **Borders over shadows.** Structure is communicated with 1px borders, not elevation. Shadows are reserved for modals only.
4. **Monochrome UI, colorful data.** The interface itself is entirely neutral gray. Color appears only in data visualizations, status dots, and small accents — never as large painted surfaces, gradients, or colored buttons.
5. **Small, dense typography.** Most UI text is 12–14px. Big type is reserved for headline numbers and (on the landing page) the hero heading.
6. **Numbers are the hero.** Stats use `font-semibold` + `tabular-nums` and are formatted with thousands separators (`12,847` not `12847`).

## 3. Color palette

### Neutrals (the entire UI)

Tailwind's `neutral` scale. Exact values used in the app:

| Role | Tailwind | Hex |
|---|---|---|
| Page background | `neutral-950` | `#0a0a0a` |
| Card / input background | `neutral-900` (often at 50%: `bg-neutral-900/50`) | `#171717` |
| Borders (default) | `neutral-800` | `#262626` |
| Borders (hover) | `neutral-700` | `#404040` |
| Focus ring | `neutral-600` | `#525252` |
| Icon / disabled / hint text | `neutral-500`–`neutral-600` | `#737373` / `#525252` |
| Secondary / body text | `neutral-400` | `#a3a3a3` |
| Emphasized secondary text | `neutral-300` | `#d4d4d4` |
| Primary text | `neutral-100` | `#ededed` |
| Primary button background | `neutral-100`, hover `white` | `#ededed` → `#ffffff` |
| Modal backdrop | `black/60` | `rgba(0,0,0,0.6)` |

### Accent colors (data & status only)

Used for chart series, status dots, and small highlights — never for buttons or backgrounds:

- Blue `#3b82f6`, Violet `#8b5cf6`, Green `#22c55e`, Amber `#f59e0b`, Red `#ef4444`, Cyan `#06b6d4`, Pink `#ec4899`, Lime `#84cc16`, Orange `#f97316`, Gray `#a3a3a3`
- Project/status dots cycle through: `emerald-500`, `sky-500`, `violet-500`, `amber-500`, `rose-500`
- Danger/error: `red-500` (`#ef4444`)

On the landing page, use these for: chart mockups, status indicators, feature icon tints (sparingly), and success/error states in a product screenshot. Never use them for CTAs.

## 4. Typography

- **Sans:** Geist (`next/font/google`, variable `--font-geist-sans`), fallback `Arial, Helvetica, sans-serif`
- **Mono:** Geist Mono (`--font-geist-mono`) — for code, API snippets, domains, and metric values where appropriate
- Body is antialiased (`antialiased` on `<html>`)

Scale used in the product (reuse these exact combinations):

| Use | Classes |
|---|---|
| Eyebrow / section label | `text-[11px] font-medium uppercase tracking-wider text-neutral-500` |
| Fine print, keyboard hints | `text-[10px]` – `text-[11px] text-neutral-500` |
| Labels, secondary UI | `text-xs text-neutral-400` or `text-neutral-500` |
| Body / nav / buttons | `text-sm`, `font-medium` for emphasis |
| Card titles | `text-sm font-medium` |
| Modal / section headings | `text-lg font-semibold` |
| Stat values | `text-2xl font-semibold tabular-nums` |

Landing-page additions (extrapolate the scale, keep it tight):

- Hero H1: `text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-100`
- Section H2: `text-2xl sm:text-3xl font-semibold tracking-tight`
- Hero subcopy: `text-base sm:text-lg text-neutral-400`, max-width ~`max-w-xl`
- Always precede section H2s with an eyebrow label (the 11px uppercase style above)

## 5. Spacing, layout & borders

- Compact spacing: cards use `p-3`/`p-4` in the app; landing sections may breathe more (`py-20`–`py-32`) but internal components stay dense.
- Content container: centered, `max-w-6xl` (or `max-w-5xl`) with `px-4 sm:px-6`.
- Dividers between page regions: `border-b border-neutral-800` (the app separates topbar/sidebar this way). Full-bleed horizontal rules between landing sections are on-brand.
- Grids of cards sit flush with `gap-3`/`gap-4`; consider `divide-x divide-y divide-neutral-800` grids with no gap for a more technical look.
- **Never use `rounded-*` on anything except dot indicators.**

## 6. Component recipes

### Primary button (CTA)

Light-on-dark, small, sharp:

```html
<button class="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white">
  Start monitoring
</button>
```

(The app uses `px-2 py-1 text-xs`; scale up to `px-4 py-2 text-sm` or `px-5 py-2.5` for hero CTAs, but keep it rectangular and understated.)

### Secondary / ghost button

```html
<button class="border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-400 hover:border-neutral-700 hover:text-neutral-200">
  View docs
</button>
```

### Card

```html
<div class="border border-neutral-800 bg-neutral-900/50 p-4">
  <h3 class="text-sm font-medium text-neutral-100">Card title</h3>
  <p class="mt-0.5 text-xs text-neutral-500">Supporting description.</p>
</div>
```

### Stat card (great for a "numbers" strip on the landing page)

```html
<div class="border border-neutral-800 bg-neutral-900/50 p-3">
  <p class="text-xs text-neutral-400">URLs crawled</p>
  <p class="mt-2 text-2xl font-semibold tabular-nums text-neutral-100">128,431</p>
</div>
```

### Eyebrow + heading pattern

```html
<p class="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Features</p>
<h2 class="mt-2 text-3xl font-semibold tracking-tight text-neutral-100">Everything your crawler reports, visualized</h2>
```

### Status dot

```html
<span class="size-2 rounded-full bg-emerald-500"></span>
```

### Keyboard hint (used in search: "⌘K")

```html
<span class="border border-neutral-700 px-1 text-[10px] text-neutral-500">⌘K</span>
```

### Nav link states

- Inactive: `text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200`
- Active: `bg-neutral-800/70 text-neutral-100`

### Modal / overlay

Backdrop `bg-black/60`; panel `border border-neutral-800 bg-neutral-950 p-6 shadow-2xl` (the only place shadows are allowed).

### Tooltips / floating panels

Background `#171717`, `1px solid #404040`, `border-radius: 0`, 12px text.

## 7. Iconography

- Library: **lucide-react**, stroke icons only. No emoji, no filled icon sets, no custom illustrations.
- Sizes: `size-3.5` (14px) or `size-4` (16px) in dense UI; up to `size-5` for landing feature icons.
- Color: `text-neutral-500` default, `text-neutral-600` for decorative. An accent-tinted icon (e.g. `text-emerald-500`) is acceptable inside feature cards, one color per card.
- Relevant icons already used by the product: `LayoutDashboard`, `Network`, `Link2`, `SearchCheck`, `FolderTree`, `FileText`, `FileWarning`, `Gauge`, `Shield`, `Languages`, `Map`, `Search`, `Bell`, `Calendar`.

## 8. Charts & product imagery

If the landing page shows charts or a dashboard mockup:

- Use the accent palette in Section 3, in order (blue first).
- Donut charts: thick ring (inner radius ~68%), `paddingAngle` 2, no stroke, centered total in `text-xl font-semibold tabular-nums` with a tiny `text-[11px] text-neutral-500` label beneath.
- Legends: 8px round color dot + `text-xs text-neutral-400` name + right-aligned `tabular-nums text-neutral-300` value.
- Frame screenshots/mockups in a plain `border border-neutral-800` — no browser chrome, no rounded corners, no glow.

## 9. Motion

The product has essentially no animation. On the landing page keep motion minimal and functional:

- Hover states are instant color/border changes (as specified per component) — no scale, no lift.
- At most: subtle fade/slide-in on scroll (opacity + ≤8px translate, 150–300ms ease-out), and only once.
- No parallax, no gradient animations, no floating blobs.

## 10. Voice & copy

- Technical, direct, lowercase-calm. Short sentences. No exclamation marks, no hype words ("revolutionary", "supercharge").
- Lead with concrete capability: "Push crawl reports via the ingest API. See indexability, response codes, and Core Web Vitals in one place."
- Real numbers with `tabular-nums` beat adjectives.
- Product name is **SiteCrawl** (one word, capital S and C).

## 11. Hard don'ts

- No light mode, no white sections.
- No border radius (except dots), no pill buttons.
- No gradients, glassmorphism, glows, or colored shadows.
- No colored or gradient CTAs — the primary button is always near-white on dark.
- No stock photos or 3D illustrations; product UI itself is the imagery.
- No fonts other than Geist / Geist Mono.
- No large blocks of saturated color; accents stay small (dots, chart slices, single icons).

## 12. Tech notes for implementation

- Stack: Next.js (App Router) + Tailwind CSS v4 (`@import "tailwindcss"` — theme tokens via `@theme inline`), Geist fonts loaded through `next/font/google`, icons from `lucide-react`, charts (if live) from `recharts`.
- Root CSS variables already defined in the app: `--background: #0a0a0a`, `--foreground: #ededed`.
- Body baseline: `min-h-full bg-neutral-950 text-neutral-100 antialiased`.
