# Vetkai Portfolio — Complete Replication Prompt

> Paste this entire document into Lovable, v0, or any AI code builder to produce a pixel-accurate replica of the Vetkai portfolio. Every design decision, animation system, component spec, content string, and hook implementation is documented below.

---

## 1. PROJECT OVERVIEW

Build a single-page portfolio website for **Vetkai** (வேட்கை) — a Private Limited company building Agentic AI solutions for Healthcare and Education in India. The site is a narrative experience, not a brochure. As the user scrolls, the atmosphere continuously transforms from warm ivory to deep maroon, mirroring the journey from a "welcoming beach" into the "depth of the ocean."

**Core philosophy**: In the Tamil tongue, *Vetkai* means a deep, unyielding passion. The design must honor that. Every element is purposeful. Nothing is decorative without meaning. The site bridges the organic, human nature of Health/Education with the sharp, structured efficiency of Agentic AI.

---

## 2. TECH STACK

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion (`motion`, `useInView`, `AnimatePresence`) |
| UI Primitives | shadcn/ui (Toast, Toaster, Sonner, TooltipProvider) |
| Routing | React Router DOM v6 (`BrowserRouter`, `Routes`, `Route`) |
| State | React Query (`QueryClient`, `QueryClientProvider`) |
| Icons | Lucide React (only `Loader2` is used) |
| Fonts | Google Fonts — `Noto Sans Tamil` (300–800) + `Space Grotesk` (300–700) |
| Deployment | Cloudflare Pages (SPA routing via `_redirects` → `/* /index.html 200`) |

---

## 3. DESIGN LANGUAGE — "NEO-BAUHAUS MEETS TAMIL TEMPLE ART"

The visual identity is a deliberate collision of two worlds:

**Neo-Bauhaus** — strict 12-column geometric grid, function over form, vast white space (the "beach") that makes complex information (the "ocean") accessible. Components snap into place like building blocks. Animations have a deliberate "thinking delay" that mimics the processing cadence of an AI agent.

**Tamil Cultural Heritage** — Kolam dot-matrix floor art, temple terracotta pigments, turmeric gold, peacock blue-green, sandalwood cream. These ground the tech in something deeply human.

**The result**: A site that feels "new-school" but carries the weight of a serious organization. Geometric precision in structure, cultural warmth in color and texture.

---

## 4. DESIGN TOKENS

### 4.1 Font Import

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

### 4.2 CSS Custom Properties — `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Base — Off-white ivory */
    --background: 60 100% 97%;
    /* Deep Maroon for text */
    --foreground: 345 100% 25%;

    /* Sandalwood Cream */
    --card: 39 77% 83%;
    --card-foreground: 345 100% 25%;

    --popover: 60 100% 97%;
    --popover-foreground: 345 100% 25%;

    /* Temple Terracotta Red */
    --primary: 14 61% 48%;
    --primary-foreground: 60 100% 97%;

    /* Peacock Blue-Green */
    --secondary: 183 100% 22%;
    --secondary-foreground: 60 100% 97%;

    /* Sandalwood Cream (muted) */
    --muted: 39 77% 90%;
    --muted-foreground: 14 61% 48%;

    /* Turmeric Gold */
    --accent: 43 98% 53%;
    --accent-foreground: 345 100% 25%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 60 100% 97%;

    /* Sacred Saffron */
    --border: 30 100% 60%;
    --input: 39 77% 90%;
    --ring: 14 61% 48%;

    --radius: 0.5rem;

    /* Vetkai Brand Tokens */
    --vetkai-terracotta: 14 61% 48%;
    --vetkai-gold: 43 98% 53%;
    --vetkai-peacock: 183 100% 22%;
    --vetkai-saffron: 30 100% 60%;
    --vetkai-sandalwood: 39 77% 83%;
    --vetkai-maroon: 345 100% 25%;
    --vetkai-ivory: 60 100% 97%;

    /* Geometric System */
    --cursor-size: 24px;
    --grid-gap: 40px;
    --node-radius: 8px;

    /* Sidebar (required by shadcn) */
    --sidebar-background: 60 100% 97%;
    --sidebar-foreground: 345 100% 25%;
    --sidebar-primary: 14 61% 48%;
    --sidebar-primary-foreground: 60 100% 97%;
    --sidebar-accent: 39 77% 83%;
    --sidebar-accent-foreground: 345 100% 25%;
    --sidebar-border: 30 100% 60%;
    --sidebar-ring: 14 61% 48%;
  }

  .dark {
    --background: 345 100% 15%;
    --foreground: 43 98% 53%;
    --card: 345 100% 20%;
    --card-foreground: 43 98% 53%;
    --popover: 345 100% 15%;
    --popover-foreground: 43 98% 53%;
    --primary: 43 98% 53%;
    --primary-foreground: 345 100% 15%;
    --secondary: 183 100% 22%;
    --secondary-foreground: 60 100% 97%;
    --muted: 345 100% 20%;
    --muted-foreground: 39 77% 83%;
    --accent: 14 61% 48%;
    --accent-foreground: 60 100% 97%;
    --destructive: 0 62% 30%;
    --destructive-foreground: 60 100% 97%;
    --border: 14 61% 48%;
    --input: 345 100% 20%;
    --ring: 43 98% 53%;
    --sidebar-background: 345 100% 15%;
    --sidebar-foreground: 43 98% 53%;
    --sidebar-primary: 43 98% 53%;
    --sidebar-primary-foreground: 345 100% 15%;
    --sidebar-accent: 345 100% 20%;
    --sidebar-accent-foreground: 43 98% 53%;
    --sidebar-border: 14 61% 48%;
    --sidebar-ring: 43 98% 53%;
  }
}
```

### 4.3 Global Base Styles

```css
@layer base {
  * {
    @apply border-border;
    /* Ultra-smooth transitions for imperceptible scroll color changes */
    transition: color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
      fill 0.6s cubic-bezier(0.4, 0, 0.2, 1),
      stroke 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  html { scroll-behavior: smooth; }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Noto Sans Tamil', 'Space Grotesk', system-ui, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Sans Tamil', sans-serif;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
}
```

### 4.4 Component Utilities

```css
@layer components {
  .vetkai-container {
    @apply mx-auto w-full max-w-7xl px-6 md:px-8;
  }

  .kolam-border {
    position: relative;
    border: 3px solid transparent;
    border-image: linear-gradient(
      to right,
      hsl(var(--vetkai-terracotta)),
      hsl(var(--vetkai-gold))
    ) 1;
  }

  .tamil-card {
    background-color: hsl(var(--vetkai-ivory));
    border: 1px solid hsl(var(--vetkai-saffron));
    box-shadow: 4px 4px 0 hsl(var(--vetkai-terracotta));
    transition: all 0.3s ease;
  }
  .tamil-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 hsl(var(--vetkai-peacock));
  }

  .bg-mandala {
    background-image:
      radial-gradient(circle at center, hsla(var(--vetkai-gold), 0.1) 0%, transparent 70%),
      repeating-linear-gradient(45deg,
        hsla(var(--vetkai-terracotta), 0.05) 0px,
        hsla(var(--vetkai-terracotta), 0.05) 2px,
        transparent 2px, transparent 10px),
      repeating-linear-gradient(-45deg,
        hsla(var(--vetkai-terracotta), 0.05) 0px,
        hsla(var(--vetkai-terracotta), 0.05) 2px,
        transparent 2px, transparent 10px);
  }

  .text-gradient-tamil {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary;
  }

  /* Padi Kolam loading animation */
  @keyframes draw-kolam {
    0%   { stroke-dashoffset: 1000; }
    100% { stroke-dashoffset: 0; }
  }
  .animate-draw-kolam {
    stroke-dasharray: 1000;
    animation: draw-kolam 3s ease-in-out forwards;
  }

  /* Cursor reticle — positioned via JS */
  .cursor-reticle {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
}
```

### 4.5 Add to `tailwind.config.ts`

Extend the theme with Vetkai color aliases so `text-vetkai-terracotta`, `bg-vetkai-gold`, etc. work as utility classes:

```js
extend: {
  colors: {
    'vetkai-terracotta': 'hsl(var(--vetkai-terracotta))',
    'vetkai-gold':       'hsl(var(--vetkai-gold))',
    'vetkai-peacock':    'hsl(var(--vetkai-peacock))',
    'vetkai-saffron':    'hsl(var(--vetkai-saffron))',
    'vetkai-sandalwood': 'hsl(var(--vetkai-sandalwood))',
    'vetkai-maroon':     'hsl(var(--vetkai-maroon))',
    'vetkai-ivory':      'hsl(var(--vetkai-ivory))',
  },
  fontFamily: {
    tamil: ['Noto Sans Tamil', 'sans-serif'],
    display: ['Space Grotesk', 'sans-serif'],
  },
}
```

---

## 5. CUSTOM HOOKS

### 5.1 `src/hooks/useMousePosition.ts`

Tracks raw and normalized cursor coordinates globally.

```ts
import { useState, useEffect, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0, y: 0, normalizedX: 0.5, normalizedY: 0.5,
  });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
      normalizedX: event.clientX / window.innerWidth,
      normalizedY: event.clientY / window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return mousePosition;
};
```

### 5.2 `src/hooks/useScrollProgress.ts`

Tracks global scroll `0.0 → 1.0` using `requestAnimationFrame` with `passive` listener. Only updates state when progress changes by `> 0.001` (performance guard). Also resolves a named section bucket.

```ts
import { useState, useEffect, useCallback, useRef } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [section, setSection] = useState<'hero' | 'transition' | 'dark' | 'footer'>('hero');
  const rafId = useRef<number | null>(null);
  const lastProgress = useRef(0);

  const handleScroll = useCallback(() => {
    if (rafId.current !== null) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      if (scrollHeight <= 0) { setProgress(0); return; }

      const currentProgress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);

      if (Math.abs(currentProgress - lastProgress.current) > 0.001) {
        lastProgress.current = currentProgress;
        setProgress(currentProgress);

        if (currentProgress < 0.15)      setSection('hero');
        else if (currentProgress < 0.35) setSection('transition');
        else if (currentProgress < 0.75) setSection('dark');
        else                             setSection('footer');
      }

      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return { progress, section };
};
```

---

## 6. SCROLL COLOR SYSTEM — "DJ-Style Crossfade"

**File**: `src/components/ScrollColorLerp.tsx`

This component renders **no visible DOM**. It is a pure controller that continuously rewrites CSS Custom Properties on `document.documentElement` at 60fps during scroll. The result: the entire page palette transforms seamlessly as the user scrolls — no hard section "switches," ever.

### 6.1 Section Color Map

| Section | Scroll Range | Hue | Sat | Light | Mood |
|---|---|---|---|---|---|
| Hero | 0% – 15% | 60 | 100% | 97% | Warm Ivory — welcoming |
| Mission | 20% – 35% | 14 | 61% | 48% | Terracotta — grounded |
| Values | 40% – 50% | 43 | 98% | 53% | Turmeric Gold — bright |
| Engine | 60% – 75% | 183 | 100% | 22% | Peacock Blue — technical |
| Contact/Footer | 80% – 100% | 345 | 100% | 25% | Deep Maroon — impactful |

### 6.2 Interpolation Algorithm

```
1. Track scroll progress p (0.0–1.0) from useScrollProgress
2. Define color stops: [{ position, h, s, l }]
3. Find the active segment: startStop and endStop
4. Compute local t = (p - startStop.position) / (endStop.position - startStop.position)
5. Apply easeInOutCubic:
     eased = t < 0.5 ? 4t³ : 1 - (-2t+2)³/2
6. Interpolate Hue via shortest-path:
     delta = ((endH - startH + 540) % 360) - 180
     currentH = (startH + delta * eased + 360) % 360
7. Interpolate S and L linearly:
     currentS = startS + (endS - startS) * eased
     currentL = startL + (endL - startL) * eased
8. Compute foreground (text) color from background luminance (WCAG):
   - If currentL < 50: textL=92, textH=currentH+20, textS=30
   - If currentL ≥ 50: textL=20, textH=(currentH+180)%360, textS=currentS
9. Set CSS vars:
     document.documentElement.style.setProperty('--background', `${currentH} ${currentS}% ${currentL}%`)
     document.documentElement.style.setProperty('--foreground', `${textH} ${textS}% ${textL}%`)
     // Also derive and set --card, --muted, --border from these values
```

**Note**: The Engine section (`id="product"`) overrides this with a hard background color `#6f6f9b` on its own element, creating one intentional break in the flow for dramatic effect.

---

## 7. INTERACTIVE BACKGROUND — `WarpGrid`

**File**: `src/components/WarpGrid.tsx`

A `<canvas>` element fixed to the full viewport (`position: fixed; inset: 0; z-index: 0; pointer-events: none`). DPR-aware (`devicePixelRatio`).

### Grid Setup (on mount + resize)
- Grid spacing: `60px`
- Calculate `cols = ceil(innerWidth / 60) + 2`, `rows = ceil(innerHeight / 60) + 2`
- Store points as `{ x, y, originX, originY }[]`

### Animation Loop (rAF, runs each frame)
For each point:
- Compute `distance` to `mousePosition`
- If `distance < 250`: pull toward cursor with `force = (1 - distance/250) * 20`; displace along `atan2(dy, dx)` angle
- Else: lerp back to origin at rate `0.1`: `point.x += (originX - point.x) * 0.1`
- Draw as `arc(x, y, 1.5, 0, Math.PI*2)` filled `hsla(43, 98%, 53%, α)` where:
  - `α = 0.1` at rest
  - `α = 0.3 + (1 - dist/250) * 0.4` near cursor

For each pair of points within `90px` of each other:
- Only draw line if cursor is within `200px` of the first point
- `α = (1 - dist/90) * (1 - cursorDist/200) * 0.4`
- Line style: `hsla(14, 61%, 48%, α)` (Terracotta), `lineWidth: 0.5`

This creates a living Kolam-inspired constellation that breathes with cursor presence.

---

## 8. CUSTOM CURSOR — `GeometricCursor`

**File**: `src/components/GeometricCursor.tsx`

Hides native cursor via `body { cursor: none }`. A `div.cursor-reticle` is positioned at `mousePosition.x / y` (translate-50% center). Renders SVG shapes that morph based on what the cursor is hovering.

### Domain Detection (via `mouseover`)
| Domain | Trigger Selector | Shape | Size |
|---|---|---|---|
| `default` | Everything else | Diamond `polygon(24,4 44,24 24,44 4,24)` + center dot | 24px |
| `interactive` | `button, a, [role=button]` | Hexagon `polygon(24,4 44,16 44,32 24,44 4,32 4,16)` + dot, pulsing | 56px |
| `research` | `[data-domain="research"]` | Crosshair: dashed `circle r=16` + 4 cardinal lines + dot | 48px |
| `navigation` | `nav, header` | Triangle `polygon(24,8 40,40 8,40)` + dot | 32px |

Size transition: `width/height 0.2s cubic-bezier(0.23, 1, 0.32, 1)`. Color: `currentColor` (inherits `--foreground`).

---

## 9. KOLAM PATTERN — `KolamPattern`

**File**: `src/components/KolamPattern.tsx`

An SVG mandala used as a background watermark in the Hero section.

- Container: `absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none`
- SVG: `800×800 viewBox="0 0 100 100"`, rotates `360deg / 120s / linear / infinite`
- Color: inherits `text-vetkai-terracotta` (uses `currentColor`)

### SVG Contents
```
• Central dot (cx=50 cy=50 r=2, filled)
• 4 cardinal dots (r=1.5 filled) at cy=30, cy=70, cx=30, cx=70
• Vertical oval: path d="M50 20 C60 20 70 30 70 50 C70 70 60 80 50 80 C40 80 30 70 30 50 C30 30 40 20 50 20 Z" stroke, sw=0.5
• Horizontal oval: path d="M20 50 C20 40 30 30 50 30 C70 30 80 40 80 50 C80 60 70 70 50 70 C30 70 20 60 20 50 Z" stroke, sw=0.5
• Outer ring: circle r=40 stroke sw=0.5 strokeDasharray="2 1"
• Inner ring: circle r=35 stroke sw=0.2
• 8× petal groups (rotate i*45 around 50,50):
    - Diamond petal: path d="M50 10 L55 20 L50 25 L45 20 Z" filled
    - Spike: path d="M50 5 L52 15 L50 18 L48 15 Z" stroke sw=0.2
```

---

## 10. SCRAMBLE TEXT — `ScrambleText`

**File**: `src/components/ScrambleText.tsx`

A text animation that scrambles characters on entry into the viewport, then resolves them one-by-one from left to right — mimicking a decryption or AI "thinking" sequence.

### Props
| Prop | Type | Default | Purpose |
|---|---|---|---|
| `text` | `string` | — | Final resolved text |
| `as` | `h1\|h2\|h3\|p\|span` | `span` | HTML element |
| `className` | `string` | `''` | Tailwind classes |
| `delay` | `number` | `0` | ms before animation starts |
| `duration` | `number` | `50` | ms per interval tick |

### Character Pool
`'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'`

### Behavior
1. `IntersectionObserver` at `threshold: 0.3` — triggers once on entry
2. Waits `delay` ms
3. Sets `interval` at `duration` ms:
   - Each char at index `< iteration` shows its final value
   - Each char at index `≥ iteration` shows a random pool char in `text-primary/60`
   - `iteration += 0.5` per tick
   - Stops when `iteration ≥ text.length`
4. Spaces are always rendered as `&nbsp;`
5. Root element always has `font-mono`

**Usage in this site:**
- `"CORE VALUES"` — `text-5xl md:text-6xl text-vetkai-terracotta delay:200 duration:50`
- `"JOIN THE MISSION"` — `text-4xl md:text-5xl text-foreground`
- `"EXPERIMENTATION"` — (ResearchSection, not in main page but component exists)

---

## 11. TEXT REVEAL — `TextReveal`

**File**: `src/components/TextReveal.tsx`

Minimal wrapper. `useInView(ref, { once: true, margin: "-100px" })`. Animates children from `opacity: 0, y: 20` → `opacity: 1, y: 0` over `0.6s` with optional `delay`.

```tsx
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

const TextReveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
export default TextReveal;
```

---

## 12. APP ENTRY — `src/App.tsx`

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

---

## 13. PAGE ASSEMBLY — `src/pages/Index.tsx`

```tsx
const Index = () => (
  <div className="relative min-h-screen scroll-lerp">
    <WarpGrid />          {/* Fixed canvas — z-index: 0 */}
    <ScrollColorLerp />   {/* Invisible scroll palette controller */}
    <GeometricCursor />   {/* Replaces native cursor */}
    <Navigation />        {/* Fixed top bar */}
    <main>
      <HeroSection />
      <div id="mission"><MissionSection /></div>
      <div id="values"><ValuesSection /></div>
      <div id="product"><EngineSection /></div>
      <div id="contact"><ContactSection /></div>
    </main>
    <Footer />
  </div>
);
```

---

## 14. SECTION — NAVIGATION

**File**: `src/components/Navigation.tsx`

**Container**: `motion.header` — `fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-vetkai-gold/20`

**Entrance**: `opacity: 0, y: -20` → `opacity: 1, y: 0`, `delay: 0.5s, duration: 0.6s`

**Inner nav**: `vetkai-container py-5 flex items-center justify-between`

### Logo (left)
```
Light mode: <img src="/logo-transparent.png" class="h-12 w-auto dark:hidden">
Dark mode:  <img src="/logo.png" class="h-12 w-auto hidden dark:block">
```

### Nav Links (center-right, `hidden md:flex gap-8`)
Staggered: `delay: 0.6 + index * 0.1, duration: 0.4`

| Label | href |
|---|---|
| Mission | `#mission` |
| Values | `#values` |
| Product | `#product` |
| Contact | `#contact` |

Link style: `text-xs font-medium tracking-[0.2em] uppercase text-foreground/70`
Hover state: `text-vetkai-terracotta`
Underline: `absolute -bottom-1 left-0 h-0.5 bg-vetkai-gold w-0 → w-full on hover (group-hover)`

### Status Badge (right)
`flex items-center gap-3 border border-vetkai-gold/30 rounded-full px-3 py-1 bg-background`
- Pulsing dot: `w-1.5 h-1.5 bg-vetkai-peacock rounded-full animate-pulse`
- Label: `text-[10px] tracking-widest uppercase text-foreground` — `"India"`

---

## 15. SECTION — HERO

**File**: `src/components/sections/HeroSection.tsx`

**Wrapper**: `section.relative.min-h-screen.flex.items-center.justify-center.overflow-hidden.bg-background`

**Background**: `<KolamPattern className="opacity-10 text-vetkai-terracotta" />`

**Content column** (`vetkai-container relative z-10 text-center flex flex-col items-center`):

### 1. Top Valli Line
`motion.div, scaleX: 0→1, duration: 1.5s, ease: easeOut`
`w-full max-w-lg h-1 mb-12 bg-gradient-to-r from-transparent via-vetkai-terracotta to-transparent`

### 2. Domain Badge (`delay: 0.2s, y: -20→0`)
```
rounded-full border border-vetkai-gold/50 bg-vetkai-terracotta/5
text-sm font-medium tracking-wider uppercase text-foreground
```
Inner: pulsing `w-2 h-2 bg-vetkai-gold rounded-full shadow-[0_0_8px_hsl(var(--vetkai-gold))]`
Text: `"Healthcare × Education × India"`

### 3. Logo (`delay: 0.5s, scale: 0.9→1`)
```
Light: <img src="/logo-transparent.png" class="w-full max-w-3xl h-auto dark:hidden">
Dark:  <img src="/logo.png" class="w-full max-w-3xl h-auto hidden dark:block">
```

### 4. Subheading (`delay: 0.8s`)
`"BUILDING FOR CHANGE"`
`text-xl md:text-2xl text-vetkai-peacock font-medium tracking-wide mb-8 mt-6`

### 5. Vision Statement (`delay: 1.2s, y: 20→0`)
```
"Building communities and products for change in healthcare & education in India—
 by doing the right things and challenging the status quo."
```
`text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-12 font-serif`

### 6. Focus Tiles (`delay: 1.4s`), 4 items staggered at `1.6 + index*0.1`
Labels: `Students` `Teachers` `Practitioners` `Patients`

Each tile:
```
<div class="group relative">
  <div class="absolute inset-0 bg-vetkai-terracotta/10 rotate-3 group-hover:rotate-6 transition-transform" />
  <div class="relative px-6 py-3 border border-vetkai-gold bg-background
              text-foreground font-serif font-medium text-lg
              hover:bg-vetkai-gold hover:text-white transition-colors">
    {label}
  </div>
</div>
```

### 7. Bottom Valli Line
Same as top valli, `delay: 1s mt-16`

### 8. Scroll Indicator (`delay: 2s`, `absolute bottom-12 left-1/2 -translate-x-1/2`)
```
flex flex-col items-center gap-4
├── w-1.5 h-1.5 rounded-full bg-vetkai-terracotta (mb-2)
├── motion.div: height 0→40→0, opacity 0→1→0, duration 2s repeat Infinity easeInOut
│   (w-px bg-vetkai-terracotta)
├── w-1.5 h-1.5 rounded-full bg-vetkai-terracotta (mt-2)
└── "SCROLL" — text-[10px] tracking-[0.3em] uppercase text-foreground font-medium
```

---

## 16. SECTION — MISSION (Vision & Mission)

**File**: `src/components/sections/MissionSection.tsx`

**Wrapper**: `section.relative.py-24.md:py-32.overflow-hidden.bg-background`

### Background Layers
- Top-right blob: `absolute top-1/4 -right-48 w-96 h-96 bg-vetkai-terracotta/5 rounded-full blur-3xl`
- Bottom-left blob: `absolute bottom-1/4 -left-48 w-96 h-96 bg-vetkai-peacock/5 rounded-full blur-3xl`
- Grid overlay: `absolute inset-0 opacity-[0.03]`, `backgroundImage: linear-gradient(foreground 1px, transparent 1px), linear-gradient(90deg, foreground 1px, transparent 1px)`, `backgroundSize: 50px 50px`

### Section Header (`whileInView, once: true, y: 30→0, duration: 0.6s`)
- Flanking line + label: `h-px w-12 bg-vetkai-terracotta` | `"OUR PURPOSE"` in `text-sm font-bold tracking-[0.3em] uppercase text-vetkai-terracotta`
- Title: `"Vision & Mission"` — `text-3xl md:text-4xl lg:text-5xl font-bold text-foreground`
- Subtitle: `"Driving systemic change in India's education and healthcare sectors"` — `text-lg text-muted-foreground`

### Two Cards (`lg:grid-cols-2 gap-8 max-w-7xl`)
Each: `motion.div whileInView y:50→0 delay: index*0.2 duration:0.6`. `onMouseEnter/Leave` tracks `expandedCard`.

**Shared card shell** (`rounded-3xl border-2 p-8 md:p-10 transition-all duration-500`):
- Default: `border-border bg-card/50`
- Hover: `bg-card shadow-2xl scale-[1.02]`, border color = `themeColor`, box-shadow = `0 25px 50px -12px hsla(theme, 0.1)`
- Top-right radial gradient accent: `absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full`
- Bottom accent bar: `absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl`, gradient `transparent→themeColor→transparent`, `scaleX: 0→1` on hover

**Card header**:
- Small line `h-px w-8` + badge text in `themeColor tracking-[0.3em]`
- Title: `text-3xl md:text-4xl font-bold text-foreground leading-tight`
- Description with left gradient bar: `pl-5`, `absolute left-0 w-1 rounded-full bg-gradient-to-b from-themeColor to-transparent`

**Card items** (4 per card, staggered `x: -20→0`):
- Dot: `w-3 h-3 rounded-full` in `themeColor`, glows on hover `boxShadow: 0 0 12px themeColor`
- Item shifts `translate-x-2 bg-muted/50` when card is hovered
- Arrow `chevron-right SVG`: `x: -8, opacity:0 → x:0, opacity:1` on hover

**Card 1 — VISION** (`themeColor: hsl(var(--vetkai-terracotta))`)
- Subtitle badge: `"VISION"`
- Title: `"Change Makers"`
- Description: `"To build communities and products for change in healthcare & education in India, by doing the right things and challenging the status quo."`
- Items:
  - `Healthcare` / `Revolutionary care delivery`
  - `Education` / `Transform learning outcomes`
  - `Practice` / `Evidence-based excellence`
  - `Community` / `Empowered ecosystems`

**Card 2 — MISSION** (`themeColor: hsl(var(--vetkai-peacock))`)
- Subtitle badge: `"MISSION"`
- Title: `"Better Outcomes"`
- Description: `"To improve outcomes for students, teachers, practitioners & patients through continuous innovation in our experiences, products and services."`
- Items:
  - `Students` / `Learning outcomes & career readiness`
  - `Teachers` / `Empowerment & pedagogical tools`
  - `Practitioners` / `Evidence-based clinical excellence`
  - `Patients` / `Accessible, quality healthcare`

### CTA Button (`delay: 0.6s, whileInView`)
`"Learn More About Our Impact"` + chevron-right SVG that `translate-x-1` on group hover
`rounded-full px-8 py-4 bg-vetkai-terracotta text-white font-semibold tracking-wide`
`whileHover: scale:1.05 whileTap: scale:0.95`

---

## 17. SECTION — VALUES (Core Values)

**File**: `src/components/sections/ValuesSection.tsx`

**Wrapper**: `section.relative.py-32.bg-background.overflow-hidden id="values"`

**Background**: `absolute inset-0 bg-[radial-gradient(#C84630_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.05]`

### Section Header
- Border-top/bottom badge (`whileInView y:-20→0 duration:0.8`): `px-4 py-1 border-t border-b border-vetkai-gold text-xs font-bold tracking-[0.3em] uppercase text-foreground` — `"Our Foundation"`
- `<ScrambleText text="CORE VALUES" as="h2" className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-vetkai-terracotta" delay={200} duration={50} />`
- Body (`delay: 0.4, y:20→0`): `"To augment the current delivery systems of education, healthcare & practice in India and positively impact global outcomes—through evidence, knowledge, awareness & application."` — `text-lg text-foreground/80 leading-relaxed font-serif`

### 6 Value Tiles (`md:grid-cols-2 lg:grid-cols-3 gap-8`)
Each: `motion.article whileInView y:30→0 delay: index*0.1 duration:0.6 viewport: once margin:-50px`

**Anatomy**:
```
<article class="group relative">
  <!-- Rotated accent shadow -->
  <div class="absolute inset-0 bg-vetkai-terracotta/5 rotate-3
              group-hover:rotate-6 transition-transform duration-500 rounded-2xl" />
  <!-- Card face -->
  <div class="relative bg-card border border-border p-8 h-full rounded-2xl
              hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
    <!-- Icon circle -->
    <div class="w-12 h-12 mb-6 flex items-center justify-center text-2xl
                text-vetkai-terracotta border border-vetkai-terracotta/20 rounded-full
                group-hover:bg-vetkai-terracotta group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <!-- Title -->
    <h3 class="text-lg font-bold tracking-wide text-foreground mb-3
               group-hover:text-vetkai-terracotta transition-colors">
      {title}
    </h3>
    <!-- Description -->
    <p class="text-sm text-foreground/70 leading-relaxed font-serif">{description}</p>
    <!-- Decorative corner -->
    <div class="absolute top-4 right-4 text-vetkai-gold/20 group-hover:text-vetkai-gold/40 transition-colors">✿</div>
  </div>
</article>
```

### Values Data

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | `◈` | TRUST | Honesty & integrity in all practices, fostering trust from users & collaborators. |
| 2 | `❖` | EXCELLENCE | World-class, result-oriented content with cutting-edge product performance. |
| 3 | `◎` | CREEDLESS | Ensure equity in access, distribution, cost, internal affairs & promote inclusivity. |
| 4 | `△` | EMPOWERMENT | Focus on the student, empower teachers & emphasise on diffusion of knowledge. |
| 5 | `□` | EVIDENCE-BASED | Base inferences on science & research; learn from industry best practices. |
| 6 | `○` | ART IS UNITY | Build community capabilities to contribute and drive positive change. |

---

## 18. SECTION — ENGINE (Agentic AI & R&D)

**File**: `src/components/sections/EngineSection.tsx`

> **This is the only section that breaks the scroll color system.** It uses an explicit hard background color to create a dramatic tonal shift — like stepping from warm sunlight into a focused control room.

**Wrapper**: `section id="engine" py-24 lg:py-32 relative overflow-hidden`
**Background color**: `#6f6f9b` (muted slate-purple — set via `style={{ backgroundColor: '#6f6f9b' }}`)

### Animated Background Layers

**Layer 1 — 5 Concentric rotating rings**
```
For i in 0..4:
  size = 100 + i * 80   (100px, 180px, 260px, 340px, 420px)
  position: left: (10 + i*15)%, top: (20 + i*10)%
  style: rounded-full border border-white/10
  animate:
    rotate: i%2===0 ? 360 : -360 (duration: 30+i*5s, repeat Infinity, linear)
    scale: [1, 1.02, 1] (duration: 4s, repeat Infinity, easeInOut)
```

**Layer 2 — SVG Grid**
`absolute inset-0 w-full h-full opacity-10`
Pattern `id="engineGrid"` `60×60`: `path d="M 60 0 L 0 0 0 60" fill=none stroke=currentColor.text-white sw=0.5`
`<rect width="100%" height="100%" fill="url(#engineGrid)" />`

### Content (container `max-w-5xl mx-auto`)

**Eyebrow** (`isInView animate, y:20→0, duration:0.6`):
`"THE ENGINE"` — `color: #F5A623, text-sm uppercase tracking-[0.2em] font-semibold`

**`TextReveal` heading**:
`"Agentic AI & R&D"` — `color: white, text-3xl md:text-4xl lg:text-5xl font-bold leading-tight`

**Gold divider bar**:
`h-1 rounded-full bg-[#F5A623] mx-auto my-10`
Animates `width: 0→100px, duration: 0.8s, delay: 0.4s, ease: [0.25, 0.46, 0.45, 0.94]`

**Body copy** (two paragraphs, `opacity: 0→1, delay: 0.5, max-w-3xl`):
- Para 1: `"I don't believe in superficial layers. Every solution I present is "` **`backend-heavy`** `" (#F5A623 fw-600), built on a foundation of rigorous Research and Development."`
- Para 2: `"By utilizing "` **`Agentic AI`** `" (white fw-600), I move beyond simple automation. I build systems that understand intent, anticipate needs, and act as a tireless partner for those in the medical and educational fields."`

### Process Flow — 3 Blocks + Connectors

**Block data**:
| id | Label | Subtitle | Shape class | Fill/Border |
|---|---|---|---|---|
| `rd` | R&D | Research & Development | `rounded-sm` | transparent fill, `2px solid #F5A623` |
| `ai` | AI | Agentic Intelligence | `rounded-full` | transparent fill, `2px solid #F5A623` |
| `simple` | Simple | Accessible Solutions | `rounded-2xl` | `bg-[#F5A623]`, no border |

All blocks: `w-36 h-36 flex flex-col items-center justify-center`
Label color: `rd` and `ai` → `#F5A623`; `simple` → `#000000`
`whileHover: scale:1.05, whileTap: scale:0.98`
Subtitle: appears on hover via `AnimatePresence` (`opacity/y 0→1` below block at `-bottom-8`)

**R&D corner accent**: `absolute -bottom-2 -right-2 w-5 h-5 bg-[#F5A623]`, `rotate: [0, 90, 0] / 4s Infinity easeInOut`

**AI pulse rings** (2× overlapping):
```
motion.div absolute inset-0 rounded-full border border-[rgba(245,166,35,0.5)]
animate: scale [1, 1.3, 1.3], opacity [0.5, 0, 0]
duration: 2s, repeat Infinity, second ring delay: 0.5s
```
**AI box-shadow pulse**:
```
boxShadow: ["0 0 20px 0px rgba(245,166,35,0.3)",
             "0 0 40px 10px rgba(245,166,35,0.4)",
             "0 0 20px 0px rgba(245,166,35,0.3)"]
duration: 2s, repeat Infinity, easeInOut
```

**Connectors** (desktop `hidden lg:flex`, between `rd→ai` and `ai→simple`):
```
├── Base line: w-20 h-1 bg-[rgba(245,166,35,0.3)] rounded-full (overflow-hidden)
│     └── Animated flow: w-1/2 rounded-full
│         bg: linear-gradient(to right, transparent, #F5A623, transparent)
│         animate: x ["-50%", "150%"], duration 1.5s, repeat Inf, easeInOut
│         delay: index * 0.3
└── Arrow SVG (w-4 h-4 color:#F5A623):
    path d="M1 8h14M9 2l6 6-6 6" stroke currentColor sw=2 linecap=round linejoin=round
    initial: x:-5 opacity:0 → animate isInView: x:0 opacity:1
```

### Closing Tagline (`delay: 1.2s, y:20→0, text-center`)
`motion.p` — `text-2xl md:text-3xl font-semibold color:white animate opacity [0.8,1,0.8] duration:3 Infinity`
```
"It is about making the difficult... "
<motion.span style={{color:'#F5A623'}} whileHover={{scale:1.1}}>
  simple.
</motion.span>
```

---

## 19. SECTION — CONTACT

**File**: `src/components/sections/ContactSection.tsx`

**Wrapper**: `section.relative.py-32.bg-background id="contact"`
**Top border**: `absolute top-0 inset-x-0 h-px bg-vetkai-gold/20`

**Inner grid**: `vetkai-container max-w-4xl` → `grid md:grid-cols-2 gap-16 items-center`

### Left Column (`x: -20→0`)

**Heading**: `<ScrambleText text="JOIN THE MISSION" as="h2" className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6" />`

**Body**: `"We are always looking for passionate individuals and organizations to partner with. Whether you are an educator, a doctor, or a developer, there is a place for you in our ecosystem."` — `text-lg text-foreground/80 font-serif mb-8 leading-relaxed`

**Contact row**:
```
<div class="flex items-center gap-4 text-foreground">
  <span class="w-12 h-px bg-vetkai-gold" />
  <span class="text-sm font-bold tracking-widest uppercase">Contact Us</span>
</div>
<a href="mailto:hello@vetkai.com"
   class="block text-2xl font-medium text-vetkai-terracotta hover:text-vetkai-gold transition-colors">
  hello@vetkai.com
</a>
```

### Right Column — Contact Form (`delay: 0.2s, x: 20→0`)

**Shell**: `bg-card/50 p-8 border border-border backdrop-blur-sm relative group`

**4 corner bracket accents** (all `absolute w-4 h-4 border-2 border-primary`):
```
top-left:     border-t-2 border-l-2 (absolute top-0 left-0)
top-right:    border-t-2 border-r-2 (absolute top-0 right-0)
bottom-left:  border-b-2 border-l-2 (absolute bottom-0 left-0)
bottom-right: border-b-2 border-r-2 (absolute bottom-0 right-0)
```

**Form fields** (`space-y-6`):

Each field:
```
<label class="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">
  {Name|Email|Message}
</label>
<input/textarea
  class="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground
         focus:border-vetkai-terracotta focus:outline-none transition-colors
         disabled:opacity-50"
  placeholder="..."
/>
```
- Name: `type="text"` placeholder `"Enter your name"`
- Email: `type="email"` placeholder `"Enter your email"`
- Message: `<textarea rows={3}>` placeholder `"How can we help?"`

**Submit button**:
```
w-full py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase
hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed
flex items-center justify-center gap-2
```
Loading state: `<Loader2 class="w-4 h-4 animate-spin" />` + `"Sending..."`
Default: `"Send Message"`

**Form logic**:
- State: `{ name: '', email: '', message: '' }` + `isSubmitting: boolean`
- Validation: if any field empty → `useToast()` with `variant: "destructive"`, title `"Missing Information"`
- Submit: 1500ms simulated delay → reset form → toast `"Inquiry Received"` / `"Thank you for getting in touch. We will respond shortly."`

---

## 20. FOOTER

**File**: `src/components/Footer.tsx`

**Wrapper**: `footer.relative.bg-background.pt-24.pb-8.overflow-hidden`

### Top Border — Padi Kolam Style
`absolute top-0 left-0 right-0 h-4` with inline base64 SVG background:
A sinusoidal wave pattern SVG encoded as base64. The SVG draws `path d="M0 5 C5 0 15 0 20 5 C25 10 35 10 40 5"` in stroke `#C84630` at `width=40 height=10`. Opacity: `0.5`.

### Grid (`vetkai-container relative z-10 grid md:grid-cols-4 gap-12 mb-16`)

**Column 1 + 2 (spans `md:col-span-2`)**:
- Logo: same light/dark img swap as navigation, `h-12`
- Body: `"Building communities and products for change in healthcare & education in India, by doing the right things and challenging the status quo."` — `text-foreground/70 text-base leading-relaxed max-w-sm mb-8 font-serif`
- Value chain: `flex gap-4 text-xs font-medium tracking-wide text-vetkai-peacock uppercase`
  - `Trust` · `Excellence` · `Empowerment` (dots in `text-vetkai-gold`)

**Column 3 — Initiatives**:
Header: `"Initiatives"` — `text-sm font-bold uppercase tracking-widest text-vetkai-terracotta mb-6`
Links (`hover:text-vetkai-gold`):
- `Education` · `Healthcare` · `Community`
Each link has a `w-1 h-1 bg-vetkai-gold rounded-full` dot that fades in on `group-hover`

**Column 4 — Connect**:
Header: `"Connect"` — same header style
Links: `About Us` · `Careers` · `Contact` (plain hover color)

### Bottom Bar
`pt-8 border-t border-vetkai-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/60`
- Left: `© {new Date().getFullYear()} VETKAI. Transforming Healthcare & Education.`
- Right: peacock dot `w-1.5 h-1.5 bg-vetkai-peacock rounded-full` + `"Made with Tradition & Tech"` in `tracking-[0.2em] uppercase`

### Background Texture
`absolute inset-0 bg-[radial-gradient(#FDB813_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none`

---

## 21. BRAND CONTENT — COMPLETE COPY

### Hero
- Badge: `Healthcare × Education × India`
- Sub-headline: `BUILDING FOR CHANGE`
- Vision: `Building communities and products for change in healthcare & education in India— by doing the right things and challenging the status quo.`
- Focus tiles: `Students` · `Teachers` · `Practitioners` · `Patients`

### Mission Section Header
- Label: `Our Purpose`
- H2: `Vision & Mission`
- Sub: `Driving systemic change in India's education and healthcare sectors`

### Values Section Header
- Label: `Our Foundation`
- H2: `CORE VALUES`
- Sub: `To augment the current delivery systems of education, healthcare & practice in India and positively impact global outcomes—through evidence, knowledge, awareness & application.`

### Engine Section
- Label: `THE ENGINE`
- H2: `Agentic AI & R&D`
- Para 1: `I don't believe in superficial layers. Every solution I present is backend-heavy, built on a foundation of rigorous Research and Development.`
- Para 2: `By utilizing Agentic AI, I move beyond simple automation. I build systems that understand intent, anticipate needs, and act as a tireless partner for those in the medical and educational fields.`
- Tagline: `It is about making the difficult... simple.`

### Contact Section
- H2: `JOIN THE MISSION`
- Para: `We are always looking for passionate individuals and organizations to partner with. Whether you are an educator, a doctor, or a developer, there is a place for you in our ecosystem.`
- Email: `hello@vetkai.com`

### Footer
- Tagline: `Building communities and products for change in healthcare & education in India, by doing the right things and challenging the status quo.`
- Copyright: `© {year} VETKAI. Transforming Healthcare & Education.`
- Badge: `Made with Tradition & Tech`

---

## 22. ANIMATION SYSTEM SUMMARY

| Pattern | How | Where |
|---|---|---|
| Page entrance | `initial: opacity:0 y:-20` → `animate: opacity:1 y:0` on mount | Navigation |
| Scroll reveal | `whileInView once:true margin:"-100px"` | All sections |
| Stagger | `delay: index * 0.1` or `index * 0.2` | Tiles, nav links, cards |
| Scramble | `IntersectionObserver` + random char interval | Section headings |
| Text reveal | `useInView` + `y:20→0` | EngineSection headings |
| Hover expand | `onMouseEnter/Leave` state + scale/shadow transitions | Mission cards |
| Cursor morph | `mouseover` domain detection + SVG swap | Global cursor |
| Canvas flow | `rAF` mouse-gravity on dot grid | WarpGrid background |
| Palette lerp | `rAF` HSL interpolation on CSS vars | ScrollColorLerp |
| Infinite loops | `repeat: Infinity` on scroll indicator, AI rings, tagline opacity, ring rotation | Various |
| Path draw | `strokeDashoffset 1000→0` over 3s | Kolam animation utility |

---

## 23. FILE STRUCTURE

```
src/
├── App.tsx
├── App.css                         (legacy Vite defaults, not used)
├── main.tsx
├── index.css                       (all tokens, base, components, utilities)
├── pages/
│   ├── Index.tsx                   (page assembly)
│   └── NotFound.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── WarpGrid.tsx
│   ├── GeometricCursor.tsx
│   ├── KolamPattern.tsx
│   ├── ScrambleText.tsx
│   ├── TextReveal.tsx
│   ├── ScrollColorLerp.tsx
│   ├── NavLink.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── MissionSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── EngineSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ResearchSection.tsx     (exists but not in main page)
│   └── ui/                         (full shadcn/ui library)
└── hooks/
    ├── useMousePosition.ts
    ├── useScrollProgress.ts
    ├── use-mobile.tsx
    └── use-toast.ts
```

### Public assets required
```
public/
├── logo-transparent.png   (Vetkai logo — used in light mode, transparent background)
├── logo.png               (Vetkai logo — used in dark mode, solid background)
└── robots.txt             (disallows SemrushBot)
```

---

## 24. DEPLOYMENT CONFIG (Cloudflare Pages)

**`public/_redirects`** — SPA routing:
```
/* /index.html 200
```

**`wrangler.toml`** or Cloudflare Pages build settings:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

---

## 25. DESIGN PHILOSOPHY — FOR THE AI BUILDER

When building this site, hold these principles:

1. **No instant appearances.** Every element enters with motion. The minimum entrance delay is `0.2s`. The maximum entrance stagger across a group should not exceed `1.8s` total.

2. **Color is the storytelling medium.** The scroll palette is not a feature — it is the narrative. Warm ivory at the top says "welcome." Deep maroon at the bottom says "we are serious. join us."

3. **The grid is sacred.** All major elements align to a 12-column max-w-7xl container. The grid-gap is 40px. Nothing floats outside a rational grid boundary.

4. **Cultural specificity over generic "tech."** Dot patterns reference Kolam floor art. Terracotta references temple pigments. The word "Vetkai" is Tamil. This is not decorative — it is identity.

5. **Two audiences, one site.** "Aspirants" (students, patients) need warmth and legibility. "Partners" (investors, collaborators) need credibility and precision. The design serves both by being structured AND warm — never cold, never chaotic.

6. **The Engine section is the pivot point.** When the user reaches `#product`, the world changes to slate-purple. This is intentional disruption — it signals: *this is the machine behind the mission.* The gold accent (`#F5A623`) in that section is the bridge back to warmth.

7. **The cursor is a character.** It changes shape based on context. When the user hovers a button, the diamond grows into a hexagon. This is not a flourish — it says: *this site is aware of you.*
