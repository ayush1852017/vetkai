# Vetkai Design Language

A living reference for the visual and interaction system used across the Vetkai portfolio.

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing](#4-spacing)
5. [Border Radius](#5-border-radius)
6. [Shadows & Elevation](#6-shadows--elevation)
7. [Layout & Grid](#7-layout--grid)
8. [Components](#8-components)
9. [Animation & Motion](#9-animation--motion)
10. [Special Effects](#10-special-effects)
11. [CSS Custom Properties](#11-css-custom-properties)

---

## 1. Design Principles

| Principle | Description |
|---|---|
| **Cultural Integration** | Tamil/Indian aesthetic — Kolam patterns, warm traditional colors, Vetkai etymology woven into visuals |
| **Spatial Hierarchy** | Layered backgrounds with decorative elements; clear z-index management |
| **Motion Clarity** | Smooth, meaningful transitions with no jarring changes |
| **Accessibility** | WCAG AAA contrast ratios, semantic HTML, keyboard navigation |
| **Responsive First** | Mobile-first, scales through `md` → `lg` → `2xl` breakpoints |
| **Thematic Coherence** | Color, type, and motion all reinforce brand identity |

---

## 2. Color Palette

### Brand Colors

| Token | Name | HSL | Use |
|---|---|---|---|
| `--vetkai-ivory` | Ivory | `60 100% 97%` | Primary background |
| `--vetkai-terracotta` | Terracotta | `14 61% 48%` | Primary action, CTA |
| `--vetkai-gold` | Gold | `43 98% 53%` | Accent, highlights |
| `--vetkai-peacock` | Peacock | `183 100% 22%` | Secondary, cool contrast |
| `--vetkai-saffron` | Saffron | `30 100% 60%` | Borders, decorative lines |
| `--vetkai-sandalwood` | Sandalwood | `39 77% 83%` | Card backgrounds, muted areas |
| `--vetkai-maroon` | Maroon | `345 100% 25%` | Deep sections, footer |

### Semantic Mappings (Light Mode)

| Semantic Token | Resolves To |
|---|---|
| `--background` | Ivory |
| `--foreground` | Maroon |
| `--primary` | Terracotta |
| `--primary-foreground` | Ivory |
| `--secondary` | Peacock |
| `--secondary-foreground` | Ivory |
| `--accent` | Gold |
| `--accent-foreground` | Maroon |
| `--muted` | Sandalwood (90% L) |
| `--muted-foreground` | Peacock (muted) |
| `--border` | Saffron |
| `--input` | Saffron |
| `--ring` | Terracotta |
| `--card` | Sandalwood |
| `--destructive` | `0 84% 60%` (Red) |

### Dark Mode Overrides

| Token | Dark Value |
|---|---|
| `--background` | `345 100% 15%` (Deep Maroon) |
| `--foreground` | Gold |
| `--primary` | Gold |
| `--accent` | Terracotta |

### Scroll-based Color System

The `ScrollColorLerp` component smoothly crossfades between 11 color stops as the user scrolls. Foreground color is auto-calculated to maintain WCAG AAA (7:1) contrast.

| Stop | Section | Background |
|---|---|---|
| 1 | Hero | Ivory |
| 2 | Vetkai Meaning | Sandalwood |
| 3 | Belief | Terracotta |
| 4 | How We Build | Gold |
| 5 | AI Philosophy | Peacock |
| 6 | Products | Sandalwood |
| 7 | Science Of | Custom override |
| 8 | Philosophy | Ivory |
| 9 | Build With Us | Gold |
| 10 | Investor | Terracotta |
| 11 | Vision | Maroon |

Interpolation uses HSL channel lerping with `easeInOutCubic` easing.

---

## 3. Typography

### Font Families

| Role | Stack |
|---|---|
| Body / UI | `'Noto Sans Tamil'`, `'Space Grotesk'`, `system-ui`, `sans-serif` |
| Monospace | `'JetBrains Mono'`, `monospace` |
| Headings | `'Noto Sans Tamil'` (700) |

Google Fonts imports: Noto Sans Tamil (300–800), Space Grotesk (300–700).

### Weights

| Weight | Value |
|---|---|
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |
| Extra Bold | 800 |

### Scale

| Role | Size | Tracking | Line Height |
|---|---|---|---|
| Hero heading | `text-4xl` → `text-6xl` | `-0.01em` | `leading-tight` |
| Section heading | `text-3xl` → `text-5xl` | `-0.01em` | `leading-tight` |
| Card title | `text-2xl` | tight | `leading-none` |
| Body | `text-base` → `text-lg` | default | `leading-relaxed` |
| Label | `text-sm` | default | `leading-none` |
| Navigation | `text-xs` | `0.2em`–`0.3em` | — |
| Badge | `text-xs` | — | — |

---

## 4. Spacing

### Section Spacing

| Use | Value |
|---|---|
| Vertical section padding | `py-24` (96px) → `py-32` (128px) |
| Container horizontal padding | `px-6` (24px) → `px-8` (32px) at `md` |

### Component Spacing

| Use | Value |
|---|---|
| Card padding | `p-6` (24px) |
| Button padding (default) | `px-4 py-2` |
| Button padding (lg) | `px-8 py-4` |
| Badge padding | `px-2.5 py-0.5` |
| Grid gap (values) | `gap-8` (32px) |
| Grid gap (geometric canvas) | `60px` |
| Card stack spacing | `space-y-1.5` |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius` | `0.5rem` (8px) | Base radius |
| `rounded-sm` | 4px | Small elements |
| `rounded-md` | 6px | Buttons, inputs |
| `rounded-lg` | 8px | Standard cards |
| `rounded-2xl` | 16px | Section cards |
| `rounded-3xl` | 24px | Large feature cards |
| `rounded-full` | 50% | Badges, avatars, pills |

---

## 6. Shadows & Elevation

| Level | Value | Usage |
|---|---|---|
| Subtle | `shadow-sm` | Default cards |
| Raised | `shadow-lg` | Hover state |
| Hero | `shadow-2xl` | Mission card hover |
| Offset (Tamil Card) | `4px 4px 0 hsl(--vetkai-terracotta)` | Custom card default |
| Offset hover | `6px 6px 0 hsl(--vetkai-peacock)` | Custom card hover |
| Section expand | `0 25px 50px -12px hsl(...)` | Expanded panel |
| Glow | `0 0 12px hsl(...)` | Status indicators |

---

## 7. Layout & Grid

### Container

```css
.vetkai-container {
  margin: auto;
  width: 100%;
  max-width: 80rem; /* 1280px */
  padding: 0 1.5rem; /* px-6 */
}

@media (min-width: 768px) {
  .vetkai-container { padding: 0 2rem; } /* px-8 */
}
```

### Section Structure

```html
<section class="relative min-h-screen overflow-hidden py-24 md:py-32">
  <!-- Decorative layer (absolute, z-0) -->
  <!-- Grid overlay opacity-[0.03] -->
  <!-- Content (relative z-10) -->
  <div class="vetkai-container">...</div>
</section>
```

### Grid Patterns

| Pattern | Classes |
|---|---|
| Values / Features | `grid md:grid-cols-2 lg:grid-cols-3 gap-8` |
| Mission Cards | `grid lg:grid-cols-2 gap-8 max-w-7xl` |
| Focus Areas | `flex flex-wrap justify-center gap-6` |

### Background Grid Overlay

```css
background-image:
  linear-gradient(to right, var(--border) 1px, transparent 1px),
  linear-gradient(to bottom, var(--border) 1px, transparent 1px);
background-size: 50px 50px;
opacity: 0.03;
```

### Breakpoints

| Name | Width |
|---|---|
| `md` | 768px |
| `lg` | 1024px |
| `2xl` | 1400px |

---

## 8. Components

### Button

Variants via CVA:

| Variant | Appearance |
|---|---|
| `default` | Terracotta bg, Ivory text, hover 90% opacity |
| `secondary` | Peacock bg, Ivory text, hover 80% opacity |
| `destructive` | Red bg, Ivory text |
| `outline` | Border + input bg, hover to accent bg |
| `ghost` | No bg, hover to accent bg |
| `link` | Text-only, underline offset |

Sizes:

| Size | Classes |
|---|---|
| `sm` | `h-9 px-3 rounded-md` |
| `default` | `h-10 px-4 py-2 rounded-md` |
| `lg` | `h-11 px-8 rounded-md` |
| `icon` | `h-10 w-10` |

All buttons include: `gap-2`, focus ring (`ring-2 ring-ring ring-offset-2`), `disabled:opacity-50 disabled:pointer-events-none`.

### Card

```
Base:      rounded-lg border bg-card text-card-foreground shadow-sm
Header:    flex flex-col space-y-1.5 p-6
Title:     text-2xl font-semibold leading-none tracking-tight
Desc:      text-sm text-muted-foreground
Content:   p-6 pt-0
Footer:    flex items-center p-6 pt-0
```

### Tamil Card (Custom)

```css
.tamil-card {
  background: hsl(var(--vetkai-ivory));
  border: 1px solid hsl(var(--vetkai-saffron));
  box-shadow: 4px 4px 0 hsl(var(--vetkai-terracotta));
  transition: all 0.3s ease;
}
.tamil-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 hsl(var(--vetkai-peacock));
}
```

### Badge

```
Pill shape (rounded-full), px-2.5 py-0.5, text-xs font-semibold
Variants: default (primary bg), secondary, destructive, outline
```

### Input / Label

```
Input:  h-10 border border-input rounded-md px-3 py-2, focus ring
Label:  text-sm font-medium leading-none, disabled:opacity-70
```

---

## 9. Animation & Motion

### Keyframes

| Name | Description | Duration |
|---|---|---|
| `accordion-down` | Height 0 → full | 0.2s ease-out |
| `accordion-up` | Full → 0 | 0.2s ease-out |
| `draw-kolam` | SVG stroke-dashoffset 1000 → 0 | 3s ease-in-out |
| `mandala-spin` | 360° rotation | 60s linear infinite |

### Global Transition (CSS Layer)

Applied to all `a`, `button`, `[role="button"]`:

```css
transition-property: color, opacity, background-color, border-color, transform, box-shadow;
transition-duration: 150ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### Framer Motion Patterns

| Pattern | Values |
|---|---|
| Text reveal | `opacity: 0→1`, `y: 20→0`, 0.6s |
| Scale in | `scale: 0.8→1` + opacity fade |
| Stagger | `delay: index × 0.1s` or `× 0.2s` |
| Scroll trigger | `whileInView`, `once: true`, margin `-50px` to `-100px` |
| Hover scale | `whileHover={{ scale: 1.05 }}` |
| Tap scale | `whileTap={{ scale: 0.95 }}` |

### Scramble Text

- Character-by-character reveal with random char substitution
- Unsettled opacity: `0.35` → settled: `1.0`
- Interval: 50ms per character (configurable)
- Trigger: IntersectionObserver (threshold: 0)

### Cursor Animation

- Shape changes per interaction domain (interactive / research / navigation / default)
- Size transition: `0.2s cubic-bezier(0.23, 1, 0.32, 1)`
- Position: follows mouse instantly (no transition delay)
- Load-in: opacity fade `0→1` on first mouse movement

---

## 10. Special Effects

### Kolam Border

```css
.kolam-border {
  border: 3px solid;
  border-image: linear-gradient(
    hsl(var(--vetkai-terracotta)),
    hsl(var(--vetkai-gold))
  ) 1;
}
```

### Gradient Text

```css
.text-gradient-tamil {
  background: linear-gradient(
    to right,
    hsl(var(--primary)),
    hsl(var(--accent)),
    hsl(var(--primary))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Mandala Background

```css
.bg-mandala {
  background:
    radial-gradient(...),
    repeating-linear-gradient(0deg, ...),
    repeating-linear-gradient(90deg, ...);
}
```

### Section Divider (Valli)

```css
.section-divider-valli {
  border-top: 2px dotted hsl(var(--vetkai-saffron));
}
```

### WarpGrid Canvas

An interactive HTML5 Canvas grid where nodes react to cursor proximity:

| Property | Value |
|---|---|
| Grid gap | 60px |
| Gravity radius | 250px |
| Gravity strength | 20px max displacement |
| Connection distance | 90px |
| Cursor influence | 200px |
| Refresh rate | 60fps via `requestAnimationFrame` |

---

## 11. CSS Custom Properties

### Geometric / Layout

```css
--cursor-size: 24px;
--grid-gap: 40px;
--node-radius: 8px;
--radius: 0.5rem;
```

### Section Depth Levels

```css
--section-hero: hsl(var(--vetkai-ivory));
--section-deep: hsl(var(--vetkai-maroon));
--section-mid:  hsl(var(--vetkai-sandalwood));
```

### Sidebar Tokens

```
--sidebar-background, --sidebar-foreground
--sidebar-primary, --sidebar-primary-foreground
--sidebar-accent, --sidebar-accent-foreground
--sidebar-border, --sidebar-ring
```

---

*Generated from source — last synced April 2026.*
