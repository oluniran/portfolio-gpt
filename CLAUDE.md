@AGENTS.md

# Project state (updated as work progresses)

Portfolio site for Niran Olutimayin (performance marketing manager). Three case studies:
Laserglow Technologies, Alerzo, Landmark Africa, each rendered by the shared
`src/components/case-study.tsx` off data in `src/content/site-content.ts`.

## Site structure
- `/` — hero (formal portrait `/niran-about.jpg` in the circular window), Services
  (scroll-linked chips), Career timeline (zigzag, moved here from /work), Core
  competencies (logo marquee), Education (open logo rows — no boxes; school name +
  degree as separate headings), Credentials (logo grid), Leadership & Impact
  (alternating image/content rows), closing CTA.
- `/work` — big stacked feature cards only (`.work-feature`: image beside teaser, one
  card per row). Timeline no longer lives here. Nav is just Home + Work (Work has a
  hover dropdown to the 3 individual case studies).
- `/work/laserglow`, `/work/alerzo`, `/work/landmark-africa` — individual case studies.
  Case-study heroes start with the company name (no "Selected work" eyebrow); dates are
  appended to the role line.
- There is no `/about` route and no About section anymore — the bio was removed from
  the homepage on 2026-07-16 (data still in `about.bio`, currently unrendered).
- Body font is self-hosted **Public Sans** (`--font-body`), headings **Asul**
  (`--font-heading`); both loaded via `@font-face` from `/design/fonts/`.
- Laserglow's case-study library grid: 3 linked cards (Corning, Veoneer, Gordon Food
  Service) using a transparent placeholder image (`case-study-placeholder.png`) awaiting
  real photos from the user; no quote card, no proof pills, no logo cards.

## Design conventions established this session
- **Alternating checkerboard metric tiles**: each case study's "Measurable outcomes"
  section alternates two solid colors per brand (Landmark: black/orange, Alerzo:
  black/white with blue numerals, Laserglow: red/white) via `nth-child(odd)` CSS. This
  only reads as a true checkerboard when the metrics grid uses an **odd** column count
  (3) — even column counts break the checkerboard once items wrap to a second row. All
  three case studies are kept at exactly 6 metrics so this divides evenly.
- **Logo-strip marquee** (`.logo-strip`): grayscale-to-color-on-hover scrolling logo
  strip, used for client logos per case study and the homepage's Core competencies tools.
- **Full-bleed hero** (`.case-hero-bg`): used only for Landmark's case-study hero
  (background photo + dark overlay + white text); Alerzo/Laserglow keep the simpler
  side-by-side `.case-hero` layout.
- **Testimonial grid** (`.testimonial-grid`, Laserglow only): mixes image cards (real
  photos only — never a stock/unrelated photo standing in for a specific named client),
  plain color cards (when no verified photo exists for that client), a real quote card
  (sourced from laserglow.com's own published testimonials, never fabricated), and client
  logo cards.
- **Brand voice**: case-study copy (callouts, headings, tactic ordering) should be
  sourced from real source material (the person's own strategy docs, the actual company
  website) — never invented. When in doubt, browse the real company site before writing
  copy attributed to it.
- Content-accuracy rule established this session: never present a stock/generic photo as
  if it depicts a specific real client's facility; never fabricate quotes, reviewer
  names, or ratings.
