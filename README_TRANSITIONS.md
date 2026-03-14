# Seamless Color Transitions in Vetkai

## Overview
This document outlines the technical mechanism behind the seamless, scroll-driven color transitions in the Vetkai application. The goal is to create a "DJ-Style Crossfade" experience where the user feels the atmosphere change between sections without ever pinpointing the exact moment the transition occurs.

## Design Philosophy
**"Invisible Transitions"**
Unlike traditional scroll effects that trigger abrupt class changes (e.g., when a section hits the viewport top), our system continuously interpolates colors. This ensures:
- **No Hard Edges**: There is never a single frame where the theme "switches".
- **Shortest Path Hue**: When transitioning from Blue to Red, we calculate the shortest path around the color wheel to avoid jarring rainbow effects.
- **Natural Easing**: We use `easeInOutCubic` curves so changes accelerate and decelerate naturally,  imitating physical motion.

## Technical Implementation

### Core Component: `ScrollColorLerp`
The entire logic is encapsulated in `src/components/ScrollColorLerp.tsx`. This component does not render any visible UI but acts as a controller that updates CSS Custom Properties (Variables) in real-time.

### 1. Scroll Monitoring
We track the global scroll progress (0.0 to 1.0) using the `useScrollProgress` hook.
- `0.0`: Top of the page (Hero)
- `1.0`: Bottom of the page (Footer)

### 2. Color Interpolation (The "Lerp")
We define **Color Stops** at specific scroll percentages. As the user scrolls, the system identifies the active segment (e.g., between 10% and 20%) and calculates a local progress value `t`.

We use **HSL (Hue, Saturation, Lightness)** interpolation instead of RGB:
- **Hue**: Interpolated using the shortest path (e.g., 350° to 10° is a 20° shift, not 340°).
- **Saturation & Lightness**: Linearly interpolated.

```typescript
// Example: Interpolating between Hero (Ivory) and Mission (Terracotta)
currentHue = (startHue + (endHue - startHue) * easing(t)) % 360;
```

### 3. Dynamic Text & Element Colors
To ensure text remains readable regardless of the background color, we **do not** hardcode text colors. Instead, we calculate them mathematically based on the current background luminance.

**Algorithm:**
1. Calculate background **Relative Luminance** (per WCAG standards).
2. If Background is **Dark** (< 50% Lightness):
   - Text becomes Light (92% lightness).
   - Hue shifts slightly warmer (+20°) for elegance.
   - Saturation drops to prevent neon/vibrating text effects.
3. If Background is **Light** (> 50% Lightness):
   - Text becomes Dark (20% lightness).
   - Hue shifts to complement the background (+180°).

This guarantees **WCAG AAA** contrast ratios at every single pixel of the scroll.

### 4. Supporting Elements
All UI elements derive their colors from the generated tokens:
- **Cards**: Slightly lighter/darker than background.
- **Borders**: Translucent version of the background hue.
- **Accents**: Interpolated separately to maintain brand consistency.

## Section Color Map
The transition flow routes through the following brand palettes:

| Section | Scroll Position | Dominant Color | Mood |
| :--- | :--- | :--- | :--- |
| **Hero** | 0% - 15% | **Warm Ivory** | Welcoming, Clean |
| **Mission** | 20% - 35% | **Terracotta** | Grounded, Human |
| **Values** | 40% - 50% | **Turmeric Gold** | Valuable, Bright |
| **Engine** | 60% - 75% | **Peacock Blue** | Technical, Deep |
| **Contact** | 80% - 100% | **Deep Maroon** | Final, Impactful |

## Usage
No manual intervention is needed for new components. Simply use the standard CSS variables:
- `bg-[var(--background)]`
- `text-[var(--foreground)]`
- `border-[var(--border)]`
- `bg-[var(--primary)]`

The `ScrollColorLerp` component will automatically repaint these variables 60 times per second during scroll.
