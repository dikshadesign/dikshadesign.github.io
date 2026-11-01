# Portfolio Design System & Component Library (Version 2.0)

> **Design Philosophy**: Modern, minimalist, interaction-focused design system built for premier digital and industrial design portfolios. Structured like a Framer token library where any global change to typography, colors, layout, or controls updates all pages instantly.
> 
> **Core Architectural Constraints**:
> 1. **1200px Maximum Page Width**: Preserves optimal readability and disciplined grid boundaries.
> 2. **Strict 0px Corners**: All content containers, cards, images, tiles, and schematic frames use sharp, brutalist/modern 0px radiuses (`--radius-none: 0px`).
> 3. **Pill-Shaped Controls**: All interactive touchpoints (buttons, badges, tags, pills) use organic, tactile pill curves (`--radius-pill: 9999px`).

---

## 1. Directory Structure

All design system rules, tokens, and components reside in [`design-system/`](file:///d:/framer%20portfolio/design-system):

```
d:/framer portfolio/design-system/
├── tokens.css           # Global tokens: colors, 1200px max-width, 0px radius & pill tokens, buttons
├── typography.css       # Inter font imports, heading hierarchy, typographic utilities & link animations
├── layout.css           # 1200px containers, 12-col grid, multi-column/row presets, spacing/padding utilities
├── components.css       # Pill-shaped buttons, sharp 0px tiles, schematic frames, badges, hover physics
├── design-system.css    # Master stylesheet (aggregates all 4 modules)
├── index.html           # Living Component Specimen & Interactive Style Guide
└── DESIGN_SYSTEM.md     # This comprehensive design manual and rulebook
```

To use the design system on any page, include the master stylesheet:
```html
<link rel="stylesheet" href="design-system/design-system.css">
```

---

## 2. Layout, Containers & 1200px Max-Width (`layout.css`)

### A. 1200px Bounding Container
All pages use the optical container:
```css
.wrap, .container {
  width: min(var(--container-max), calc(100vw - (var(--container-padding) * 2)));
  margin-left: auto;
  margin-right: auto;
}
```
*Token in `tokens.css`: `--container-max: 1200px;`*

### B. 12-Column Grid Foundation (`.grid-12`)
```html
<div class="grid-12">
  <div class="col-4">33.3% span</div>
  <div class="col-8">66.6% span</div>
</div>
```
Supports column spans from `.col-1` to `.col-12` and offsets `.col-start-1` to `.col-start-7`.

### C. Multi-Column Presets
- `.cols-1`: Single column narrative flow
- `.cols-2` / `.split`: 1:1 equal split (2 columns)
- `.cols-3` / `.grid-3`: Equal thirds (3 columns)
- `.cols-4` / `.grid-4`: Quarter columns (4 columns)
- `.cols-5`: 5-column item grid
- `.cols-6`: 6-column item grid

### D. Multi-Row Presets & Spanning
- `.rows-2`, `.rows-3`: Multi-row grid declarations
- `.row-span-1`, `.row-span-2`, `.row-span-3`, `.row-span-4`: Span items across vertical rows (e.g., hero renders paired with stacked thumbnail rows)

### E. Asymmetric & Sidebar Presets
- `.split-golden`: `0.72fr : 1.28fr` (Standard IxD section title layout)
- `.split-golden-reverse`: `1.28fr : 0.72fr`
- `.split-sidebar-left`: `280px : 1fr`
- `.split-sidebar-right`: `1fr : 280px`
- `.split-one-third`: `1fr : 2fr`
- `.split-two-thirds`: `2fr : 1fr`

### F. Padding & Spacing Utility Classes
- **Padding All**: `.p-0`, `.p-xs` (8px), `.p-sm` (16px), `.p-md` (24px), `.p-lg` (32px), `.p-xl` (48px)
- **Padding X**: `.px-0`, `.px-xs`, `.px-sm`, `.px-md`, `.px-lg`
- **Padding Y**: `.py-0`, `.py-xs`, `.py-sm`, `.py-md`, `.py-lg`, `.py-xl`
- **Gaps**: `.gap-xs` (8px), `.gap-sm` (12px), `.gap-md` (16px), `.gap-lg` (24px), `.gap-xl` (32px), `.gap-2xl` (48px)

---

## 3. Strict Radius Philosophy (`tokens.css`)

| Element Category | Radius Token | Visual Result | Description |
| :--- | :--- | :--- | :--- |
| **Containers & Canvas** | `--radius-none: 0px` | Sharp corners | Cards, tiles, screens, hero visual, schematic frames |
| **Images & Media** | `--radius-img: 0px` | Sharp corners | All photos, CAD renders, blueprints |
| **Interactive Controls**| `--radius-pill: 9999px`| Pill shape | Buttons (`.btn`), badges (`.badge`), tags, status pills |

---

## 4. Button System (`components.css`)

All buttons are strictly pill-shaped (`border-radius: var(--radius-pill)`):

### A. Visual Variants
1. **Primary (`.btn-primary`)**: High-contrast dark background (`#151a24`), crisp white text, hover lift & ambient shadow.
2. **Accent (`.btn-accent`)**: Signature AERA Indigo background (`#455ea9`), hover glow.
3. **Secondary (`.btn-secondary`)**: Neutral canvas wash background (`#f3f6fa`), subtle hairline border (`#dbe1ea`).
4. **Outline (`.btn-outline`)**: Transparent background, 1px border (`#b8c4d4`), hover ink transition.
5. **Ghost (`.btn-ghost`)**: Border-free text button with hover pill tint.

### B. Button Sizing
| Class | Height | Padding (Y / X) | Font Size | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| `.btn-sm` | 32px | `6px 16px` | 12px | Card action pills, filter tags |
| `.btn-md` | 42px | `10px 22px` | 13.5px | Default call-to-action button |
| `.btn-lg` | 50px | `14px 30px` | 15px | Hero CTA, prominent navigation |

### C. Directional Arrow Micro-Animation
Add `<span class="arrow">↗</span>` inside any button. On hover, the arrow glides diagonally (`transform: translate(3px, -3px)`) using spring physics:
```html
<a href="aera.html" class="btn btn-accent btn-md">
  Explore Case Study <span class="arrow">↗</span>
</a>
```

---

## 5. On-Hover Effects & Motion System

### A. Framer Bezier Curves
- `--ease-framer`: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy Apple / Framer decelerate)
- `--ease-spring`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bouncy icon glide)
- `--ease-smooth`: `cubic-bezier(0.2, 0.7, 0.2, 1)` (progressive reveal)

### B. Interactive Physics Tokens
- `--hover-lift-sm`: `translateY(-2px)` with shadow elevation
- `--hover-lift-md`: `translateY(-4px)`
- `--hover-scale-subtle`: `scale(1.02)` / `scale(1.03)` with strict 0px overflow clipping

### C. Technical Blueprint Frames (`.ph`)
Features concentric dashed and solid technical drafting circles. On hover, the inner and outer rings spin in opposite directions (`rotate(45deg)` / `rotate(-45deg)`) while the center pill badge elevates.

### D. Animated Links (`typography.css`)
- `.link-animated`: Underline expands smoothly from center/left on hover.
- `.link-arrow`: Arrow glyph shifts trajectory on hover.

---

## 6. Color Tokens (`tokens.css`)

| Token | Default Hex | Description |
| :--- | :--- | :--- |
| `--color-canvas` | `#ffffff` | Primary background canvas |
| `--color-canvas-subtle` | `#f8fafc` | Subtle card background |
| `--color-canvas-wash` | `#f3f6fa` | Image container wash / neutral fill |
| `--color-ink-primary` | `#151a24` | Primary high-contrast text |
| `--color-ink-secondary` | `#485363` | Body copy and narrative text |
| `--color-ink-muted` | `#6f7c90` | Captions, metadata, and annotations |
| `--color-accent-primary` | `#455ea9` | Signature atmospheric accent (AERA Blue) |
| `--color-accent-hover` | `#354a8b` | Interactive hover state |
| `--color-accent-soft` | `#edf2ff` | Soft tinted card fill (Impact cards) |
| `--color-border-hairline`| `#e6ebf2` | Fine section dividing rules |
| `--color-border-subtle`  | `#dbe1ea` | Card, screen, and schematic borders |

---

## 7. How to Create a New Case Study Page

1. Create a new HTML file (e.g. `glide.html`).
2. Link the design system:
   ```html
   <link rel="stylesheet" href="design-system/design-system.css">
   ```
3. Use the `.wrap` container (automatically locked to 1200px max width).
4. Maintain the strict radius rule: all media and structural boxes are 0px sharp corners; use `.btn` and `.badge` for pill-shaped controls.
5. In the next phase, the universal header and footer will be automatically injected into the `<header id="global-header">` and `<footer id="global-footer">` slots!
