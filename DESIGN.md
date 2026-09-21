---
name: Obsidian Utility
colors:
  surface: '#0f131b'
  surface-dim: '#0f131b'
  surface-bright: '#353941'
  surface-container-lowest: '#0a0e15'
  surface-container-low: '#181c23'
  surface-container: '#1c2027'
  surface-container-high: '#262a32'
  surface-container-highest: '#31353d'
  on-surface: '#dfe2ed'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dfe2ed'
  inverse-on-surface: '#2d3038'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131b'
  on-background: '#dfe2ed'
  surface-variant: '#31353d'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-code-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance, luxury-utility storefront aesthetic tailored for technical apparel, premium hardware, and precision equipment. It bridges architectural discipline with tactical utility: dense with specification data yet visually expansive, silent, and refined.

The emotional target is uncompromising confidence and technical mastery. Customers experience an editorial environment free of visual fluff, pairing raw specification tables and structural framing with cinematic product showcases. The design style combines dark technical minimalism with precision borders, subtle glass layers, and sharp micro-accents.

## Colors

The palette leverages a deep zinc void to allow product photography and high-contrast typography to cut through immediately. 

- **Background Canvas (`#090D14`):** Deep abyssal zinc grounding the base viewport.
- **Surface Elevation 1 (`#0F172A`):** Dark slate-zinc for cards, drawers, and panels.
- **Surface Elevation 2 (`#1E293B`):** Elevated utility components, hover states, and input tracks.
- **Primary Cobalt (`#2563EB`):** High-energy electric cobalt reserved for conversion actions, active selection rings, and checkout flows.
- **Secondary Safety Amber (`#F59E0B`):** High-visibility technical warning accent used for stock scarcity (`Low Stock`), urgency micro-copy, and limited-edition badges.
- **Tertiary Field Green (`#10B981`):** Precision confirmation color for in-stock statuses, verified checkmarks, and order successes.
- **Border Structural (`rgba(255, 255, 255, 0.08)`):** Razor-sharp, low-light dividing lines providing grid definition without competing with photography.

## Typography

The typographic hierarchy pairs clean neutral neo-grotesque sans-serif forms with monospaced technical labelling. 

Editorial titles and product identifiers utilize tight negative tracking to compress letterforms into confident silhouettes. Monospaced tokens (`JetBrains Mono`) drive all technical specifications, serial numbers, SKU codes, stock counts, and price matrices, evoking industrial instruments and precision manufacturing.

## Layout & Spacing

A 12-column dynamic fluid grid underpins all responsive layouts. 

- **Desktop (1280px+):** 12 columns with 32px gutters and 48px outer safety margins. Product grids default to 3-column or 4-column balanced layouts.
- **Tablet (768px - 1279px):** 8 columns with 24px gutters and 32px margins. Product grids reflow to 2 columns.
- **Mobile (<768px):** 4 columns with 20px gutters and 16px margins. Product feeds support single-column precision viewcards or a dense 2-column tactical browser with edge-to-edge swiping panels.

Spacing adheres strictly to a baseline 4px metric rhythm, optimizing content density while preserving dramatic breathing room around hero imagery and spec breakdowns.

## Elevation & Depth

Visual depth is achieved through translucent background layers, structural hairline borders, and targeted directional illumination rather than heavy drop shadows:

- **Base Layer:** Pure solid `#090D14`.
- **Card Surfaces:** Semi-translucent `#0F172A` with a micro-border `1px solid rgba(255, 255, 255, 0.08)`.
- **Overlays and Modals:** `#0F172A` at 92% opacity paired with `backdrop-filter: blur(16px)` and a crisp outer stroke `1px solid rgba(255, 255, 255, 0.12)`.
- **Hover Transitions:** On cursor interaction, card borders shift from `rgba(255, 255, 255, 0.08)` to `rgba(37, 99, 235, 0.45)`, accompanied by a hyper-subtle cobalt perimeter glow (`0 0 24px -6px rgba(37, 99, 235, 0.25)`).

## Shapes

The design uses balanced rounded geometry calibrated to modern device standards. Cards and focal containers utilize standard `rounded-xl` (1.5rem / 24px) corners to frame rich media smoothly against the dark canvas. Interactive micro-components such as badges, inputs, and buttons utilize `rounded-md` to `rounded-lg` (8px to 12px) to preserve architectural crispness.

## Components

### Buttons
- **Primary Action (Add to Cart / Buy Now):** Solid `#2563EB` fill with stark white typography (`Inter` semi-bold). Zero drop shadow; instantaneous hover illumination to `#3B82F6` and a micro-scale compression of `0.99` on active click.
- **Secondary (Spec Toggle / Wishlist):** `#1E293B` background with `1px solid rgba(255, 255, 255, 0.1)` border. Text in `#F8FAFC`.
- **Ghost Utility:** Borderless with monospaced icon/text pairs in `#94A3B8`, shifting to pure white on hover.

### Badges & Micro-Labels
- **Best Seller:** Monospaced pill, `#1E293B` background with cobalt accent ring `1px solid #2563EB`, text in `#60A5FA`.
- **Low Stock:** Safety Amber container (`rgba(245, 158, 11, 0.12)`), bordered by `1px solid rgba(245, 158, 11, 0.35)`, featuring an illuminated pulsating indicator dot (`#F59E0B`).
- **Sale / Archive Edition:** Slate-zinc badge with bold pure white text and striking high-contrast discount percentages.

### Product & Spec Cards
- Features a dual-zone anatomy: an upper visual pane with neutral `#0B111E` backing for high-contrast product assets, and a lower specification panel rendered in `#0F172A`.
- Specification matrices display technical key-value pairs (e.g., `WEIGHT // 340G`, `WATERPROOF // 20K`) separated by dotted micro-dividers.

### Inputs & Quantity Selectors
- Dark slate fill (`#0B111E`) encased in `1px solid rgba(255, 255, 255, 0.1)`. Focus state snaps instantly to `1px solid #2563EB` with an unblurred `2px` concentric offset ring.

### Checkboxes & Segmented Selectors
- Segmented switches (Size, Capacity) use technical box controls. Active state highlights with a full cobalt border and inner high-contrast white label; disabled states display an industrial diagonal strike-through.