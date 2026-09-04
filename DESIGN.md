# DESIGN.md - Orbitra Tech product pages

## Context (from discovery)

- Artifact type: portfolio and brand site with product detail pages
- Positioning: creative and practical
- Audience: non-technical visitors evaluating Orbitra's owned products | Primary action: understand a product and contact Orbitra
- Adjectives: grounded, human, practical, specific
- Visual word translations: grounded -> quiet surfaces and restrained effects; human -> direct copy and visible real-world roles; practical -> strong left alignment and useful labels; specific -> product diagrams tied to each product's actual workflow
- Aesthetic essence (3 words): editorial, tactile, useful
- Single-minded proposition: Orbitra builds focused digital products around real work, real communities, and the details generic software misses.
- Archetype (optional): Creator
- References: admire Stripe and Linear for hierarchy and product-first explanation; avoid generic SaaS hero templates, stock imagery, and decorative dashboards
- Mode: light | Density: airy with balanced detail
- Constraints: Next.js App Router, RSC-first pages, client animation only in leaf components, WCAG 2.2 AA, no fabricated metrics or product claims

## Aesthetic

- Direction: editorial utility
- Defining trait: each page explains one product through its users and working sequence before listing capabilities
- Signature move: a product-specific operating diagram in the hero, showing the people, records, or handoffs that product organizes

## Typography

- Display: Poppins | source: Google Fonts | license: OFL
- Body: Inter | source: Google Fonts | license: OFL
- Mono (if used): none
- Scale: ratio Major Third, base 16px. Existing project tokens define the display, heading, body, and caption steps.
- Weights: 500/600/700 | Measure: 65-75ch | Tracking notes: tighten display headings only; keep body copy open and left aligned

## Color

- Strategy: keep Orbitra's cool blue identity, with paper whites and dark ink doing most of the work. The accent is reserved for action, focus, and product-specific diagram signals.
- Distribution: 60 neutral / 30 brand / 10 accent
- Palette (role -> OKLCH | hex fallback):
  - bg: oklch(99.2% 0.006 240) | #f8fafc
  - surface: oklch(100% 0 0) | #ffffff
  - fg: oklch(24% 0.04 260) | #172033
  - muted: oklch(35% 0.02 260) | #3f4654
  - border: oklch(91% 0.012 240) | #dfe5ed
  - accent: oklch(52% 0.16 240) | #2878c8
  - accent-fg: oklch(45% 0.17 240) | #1762ac
  - success / warning / error: oklch(52% 0.14 155) / oklch(72% 0.14 85) / oklch(55% 0.18 28)
- Dark mode overrides (if both): not in scope for these pages

## Spacing, radius, shadow

- Spacing base: 4px, using the existing 0.25rem to 6rem rhythm
- Radius: 12px for cards and 9999px for pills and buttons
- Shadow approach: soft elevation for primary cards; use defined borders for secondary grouping and never stack both heavily

## Layout and composition

- Grid: wide 12-column-inspired editorial rail, implemented with responsive CSS grids and a `max-w-7xl` container
- Spacing rhythm: tight within a copy group, generous between narrative sections
- Signature layout move: the hero pairs a left-aligned product argument with a concrete diagram of the product's working world
- Density: airy | Scanning: F-shaped for copy, Z-shaped for the hero action
- Responsive: mobile-first | breakpoints: 640px, 768px, 1024px, 1280px

## Components and states

- Button hierarchy: primary filled, secondary outlined, tertiary text; hover, active, focus, and disabled states come from the existing CTA system
- Inputs: none on these pages
- Tables: none on these pages
- Overlays: none on these pages
- Empty / loading / error: static product pages do not fetch data; the existing app error boundary handles runtime failures
- Focus ring: visible accent outline with offset, preserved on all links and buttons

## Motion

- Duration scale: fast 150ms, normal 280ms, slow 520ms
- Easing: existing `--ease-out` and `--ease-in-out` tokens
- What animates: transform and opacity only | reduced-motion: CSS motion stops and content remains visible
- Signature motion: diagram nodes drift or connect slowly to explain relationships, not to decorate empty space

## Iconography

- Set: Lucide, used as a restrained supporting language | grid: 24px | stroke: default consistent stroke | caps/joins: library defaults | radius match: icons sit inside 12px surfaces only when the icon carries a real label

## Imagery and illustration

- Mode: product logos plus hand-built CSS diagrams based on each product's real audience and workflow
- Rules: use real local assets, keep diagrams legible without color, and give decorative elements `aria-hidden`
- Avoid: stock people, generic floating orbs, glassmorphism, abstract gradient blobs, and one diagram reused for every product
- Text-over-image contrast: copy sits on paper or ink surfaces with AA contrast

## Dark mode (if in scope)

- Base bg: not in scope
- Accent: not in scope
- Border: not in scope

## Accessibility

- Contrast: preserve existing AA token relationships
- Focus: every link has a visible focus state
- Keyboard: pages use native links and no pointer-only controls
- Targets: buttons and links meet the existing CTA sizing, 44px preferred
- Color independence: labels and text explain every product status and diagram relationship
- Reduced motion: CSS motion is disabled by `prefers-reduced-motion`; scroll reveals keep content visible on the server

## Tokens (source of truth)

```css
:root {
  --font-display: var(--font-poppins), system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
  --color-paper: oklch(99.2% 0.006 240);
  --color-paper-2: oklch(100% 0 0);
  --color-ink: oklch(24% 0.04 260);
  --color-ink-muted: oklch(35% 0.02 260);
  --color-rule: oklch(91% 0.012 240);
  --color-accent: oklch(52% 0.16 240);
  --dur-fast: 150ms;
  --dur-base: 280ms;
  --dur-slow: 520ms;
}
```

- Adapter: Tailwind v4 with CSS custom properties and `@theme`

## Cards and surfaces

- Cards/surfaces: use a paper surface with either a quiet border or soft elevation, 12px radius, and 24px to 32px internal padding
- Nesting: avoid cards inside cards; diagrams may use one enclosing frame with flat internal labels

## Slop audit

- Date: 2026-09-04 | Result: fixed the generic product-page hero and navigation pattern
- Notes: removed the redundant hero kicker and logo lockup, widened the reading rail, replaced the shared orbit illustration with product-specific diagrams, kept headings sentence case, removed decorative-only glow treatment, and kept motion subordinate to meaning. Static routes remain RSC-first with client behavior confined to leaf animation components. A rendered browser audit is still required for final responsive and contrast verification.

## Changelog

- 2026-09-04: established the editorial utility direction for Worknet, GemFort, and Hermade detail pages and documented the product-specific diagram rule.
