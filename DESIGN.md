# DESIGN.md - Orbitra Tech

## Context

- Artifact type: studio marketing site with service pages and product detail pages
- Audience: owners and managers of growing businesses in Sri Lanka and abroad, mostly non-technical | Primary action: start a conversation (contact form, WhatsApp)
- Adjectives: clear, practical, friendly, specific
- Single-minded proposition: Orbitra builds websites, apps, online stores and business tools that win customers and save hours, at a price agreed first.
- Constraints: Next.js App Router, RSC-first pages, client code only in leaf components, WCAG 2.2 AA, no fabricated metrics, quotes or logos

## Direction

- Name: orbit diagrams
- Idea: every service and product explains itself with a picture of how it works. Each picture is a labelled diagram built from real interface pieces (a search result, a checkout, an order list, a product screen), joined by a numbered step legend, and animated with GSAP to play the story once a loop.
- Signature: the homepage orbit. The visitor's business sits at the centre and the four services circle it, a nod to the Orbitra name.
- One idea per screen, set large. Copy is plain English: no jargon a business owner would need to look up.

## Typography

- Display: Funnel Display 600 (Google Fonts, OFL)
- Body: Onest 400 and 600 (Google Fonts, OFL)
- Roles (globals.css): `.t-display`, `.t-h2`, `.t-h3`, `.t-statement`, `.t-lead`, `.t-body`, `.t-note`, `.t-label`
- Body text is 17 to 19px. Labels are sentence case, never tracked capitals. No eyebrow labels above headings.

## Colour

- Brand accent kept from the logo: `--color-accent` oklch(52% 0.16 240), used for the one primary action and diagram signals
- Ground `--color-paper`, tone steps `--color-paper-2` to `--color-paper-4`, ink `--color-ink`
- One deep field `--color-field` for full-bleed bands (how we work, footer)
- Product pages retune the scene palette from each logo: `.product-callnet` (graphite and call green), `.product-worknet` (blue and mint), `.product-gemfort` (sapphire on steel), `.product-hermade` (coral, plum and gold). Raw values live in `tokens.css`.
- Surfaces are separated by tone steps, not hairlines or shadows. Shadows are reserved for the sticky nav edge, the mobile menu and the floating interface pieces inside scenes.

## Layout

- One container: `.shell` (78rem, fluid gutter). Sections use `.section` (fluid 88 to 160px padding) and alternate `band-white`, `band-tint` and `band-field`.
- Section heads are left-aligned: heading on the left, one-line lead on the right from `lg`.
- Homepage order: hero (orbit), services switcher, client work, products, how we work and pricing, connected tools, about and founders, questions, contact.
- Service page order: hero with the service scene, problems beside what changes, what you get (one diagram per deliverable), how we work (step route), fixed price with the brief builder, proof, questions, close.
- Product page order: hero with the looping product screens and an honest status note, the promise and who it is for, the pinned screen story (one screen per benefit), the journey route, close, other products.

## Components

- Buttons: pills. `.btn-brand` is the one primary; `.btn-soft` is the filled secondary; `.btn-whatsapp` keeps WhatsApp green; `.btn-product` uses the product's own colour; `.btn-on-field` sits on dark bands.
- Scenes: `components/scenes`. `SceneShell` plays a looping GSAP timeline only while on screen, starts on the finished frame, and shows a pause button. `StatefulScene` and `ProductFrame` crossfade between product screens (loop, controlled or still).
- `StepPath`: an ordered list drawn as a route that draws itself once.
- `BriefBuilder`: price factors as toggles that turn into a WhatsApp or email brief.
- `FaqList`: native `<details>` disclosures.

## Motion

- GSAP with ScrollTrigger, DrawSVG and MotionPath. Transform and opacity only.
- Scenes loop only while visible, pause on request, and render their finished frame with no motion under `prefers-reduced-motion`.
- One scroll-linked pattern per page at most: the pinned screen story on product pages. Everything else is a one-time reveal.

## Imagery

- Real material only: client screenshots (no fake browser frames), founder photos, product logos and real platform and payment logos.
- Scenes use sample names and prices that read as samples. Product screens are labelled as illustrations next to each product's real status.

## Accessibility

- Visible focus on every control; tabs support arrow keys; every animation has a pause control and a reduced-motion still.
- Each scene is a `<figure>` with a screen-reader caption describing what it shows.

## Changelog

- 2026-10-22: full redesign. Replaced Poppins and Inter with Funnel Display and Onest, removed eyebrow labels and card grids, cut the homepage from 13 sections to 9, rewrote service and product copy in plain English, and added animated SVG scenes for every service and product.
- 2026-09-04: established the editorial utility direction for Worknet, GemFort, and Hermade detail pages.
