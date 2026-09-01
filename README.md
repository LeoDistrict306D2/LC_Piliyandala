# Leo Club of Piliyandala — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Civic Modern*.** The oldest and largest club in this set, and
the design says so: a structured **bento grid**, navy and gold handled as an
institutional palette rather than a nostalgic one, and confidence in plain
rectangles. Cell size carries hierarchy — long-running programmes take the big
cells, one-year work takes the small ones.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## The design system

Tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#ffffff` | Page ground |
| `--color-panel` | `#f4f6f9` | Alternate bands, quiet cells |
| `--color-ink` | `#101a2e` | Text |
| `--color-accent` | `#14284b` | Navy — the institution. Buttons, filled cells |
| `--color-gold` | `#c79a2e` | The seal. **On navy or as a rule only** |

**Gold is never body text on white** — it fails contrast. It appears on navy
cells, as the `.seal` rule, and as the header/footer edge. Keep that rule if you
retune the palette.

Type: Manrope (headings) + Source Sans 3 (body), self-hosted via `next/font`.

### The bento

`.bento` is a six-column grid with `grid-auto-flow: row dense`, so larger cells
backfill gaps instead of leaving holes. Cells declare their own span:

- `.bento-2` / `.bento-3` / `.bento-4` / `.bento-6` — column spans
- `.bento-tall` — two rows
- `.cell` / `.cell-fill` / `.cell-quiet` — the three cell treatments

**Below `md` every span collapses to full width.** A six-column bento on a phone
is just six cramped columns; that override is in the stylesheet deliberately.

`components/ProjectBento.tsx` gives `featured: true` projects `bento-4
bento-tall` and everything else `bento-2` — that is how the grid communicates
which programmes are the club's spine, without needing a "featured" badge.

---

## Editing content

```ts
{
  id: 'town-library',
  slug: 'town-library',
  title: 'Town Library',
  summary: 'One sentence for the cell.',
  story: ['Paragraph one.'],
  category: 'education',
  year: '2025/26',
  date: '2026-03-14',
  location: 'Piliyandala',
  featured: true,          // takes a large cell — use for long-running programmes
  heroImage: { src: '/images/projects/town-library.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1067 },
  impact: [{ id: 'years', value: 3, label: 'Consecutive years' }],
}
```

`content/past-presidents.ts` publishes the **full** twenty-two-term succession
rather than a summary — institutional memory is this club's stated asset, and
that list is the evidence for the claim. Keep it complete.

Board members: `content/board.ts`, ordered automatically by `rank`.
Images: real `width`/`height` always; `.jpg`/`.webp` only — HEIC does not render
in browsers.

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical, OG tags.
- Every image via `next/image` in an aspect box, with `alt`.
- Keyboard-operable menu with `aria-expanded`/`aria-controls`, Escape, focus
  return, visible focus ring, skip link.
- `prefers-reduced-motion` respected; content readable with JavaScript off.
- `typedRoutes` on — a dead internal link fails the build.
- `images.remotePatterns` deliberately empty.
- Membership form composes a real pre-filled email and asks which programme.

## Deploying

Set `siteUrl` in `content/club.ts`, then `npm run build && npm start`.

## Outstanding content

Everything marked `TODO(content)` needs real values — **including the phone
number** in `content/club.ts`, which is a placeholder and is published in the
footer. Images in `public/images/` are generated solid-colour placeholders.
