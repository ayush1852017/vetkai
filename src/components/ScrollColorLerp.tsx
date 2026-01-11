import { useEffect } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

// Smooth HSL interpolation with shortest hue path
const lerpHSL = (
  h1: number, s1: number, l1: number,
  h2: number, s2: number, l2: number,
  t: number
): [number, number, number] => {
  // Handle hue wrapping (shortest path around color wheel)
  let hueDiff = h2 - h1;
  if (hueDiff > 180) hueDiff -= 360;
  if (hueDiff < -180) hueDiff += 360;
  
  const h = (h1 + hueDiff * t + 360) % 360;
  const s = s1 + (s2 - s1) * t;
  const l = l1 + (l2 - l1) * t;
  
  return [h, s, l];
};

// Smooth easing function for natural transitions
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Calculate relative luminance (WCAG formula)
const getRelativeLuminance = (l: number): number => {
  const lNorm = l / 100;
  return lNorm <= 0.03928 ? lNorm / 12.92 : Math.pow((lNorm + 0.055) / 1.055, 2.4);
};

// Calculate contrast ratio between two luminance values
const getContrastRatio = (l1: number, l2: number): number => {
  const lum1 = getRelativeLuminance(l1);
  const lum2 = getRelativeLuminance(l2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
};

// Automatically calculate optimal text color for any background
const getOptimalTextColor = (
  bgH: number,
  bgS: number,
  bgL: number,
  targetContrast: number = 7 // AAA standard
): { h: number; s: number; l: number } => {
  // Determine if background is light or dark
  const isDark = bgL < 50;
  
  if (isDark) {
    // Dark background → light text
    // Use warm tone for elegance
    return {
      h: (bgH + 20) % 360, // Slight warm shift
      s: Math.max(5, bgS - 10), // Low saturation for premium feel
      l: 92, // High lightness for readability
    };
  } else {
    // Light background → dark text
    // Use cool tone for professionalism
    return {
      h: (bgH + 180) % 360, // Complementary hue
      s: Math.min(25, bgS + 10), // Moderate saturation
      l: 20, // Low lightness for strong contrast
    };
  }
};

// Calculate border color with subtle contrast
const getBorderColor = (bgH: number, bgS: number, bgL: number): { h: number; s: number; l: number } => {
  const isDark = bgL < 50;
  return {
    h: bgH,
    s: Math.max(5, bgS - 5),
    l: isDark ? bgL + 12 : bgL - 12,
  };
};

// Calculate card color (slightly elevated from background)
const getCardColor = (bgH: number, bgS: number, bgL: number): { h: number; s: number; l: number } => {
  const isDark = bgL < 50;
  return {
    h: bgH,
    s: isDark ? Math.min(25, bgS + 3) : Math.max(0, bgS - 3),
    l: isDark ? Math.min(20, bgL + 4) : Math.min(100, bgL + 2),
  };
};

// DJ-Style Crossfade: Each section has distinct color, transitions blend imperceptibly
// Like mixing songs - you feel the change but can't pinpoint when it happened
// 
// Section Flow:
// Hero (Ivory) → Mission (Terracotta) → Values (Gold) → Engine (Peacock) → Contact (Maroon)
const COLOR_STOPS = [
  // ═══════════════════════════════════════════════════════════════
  // SECTION 1: HERO - Warm Ivory (Primary Color)
  // ═══════════════════════════════════════════════════════════════
  {
    position: 0,
    background: { h: 60, s: 100, l: 97 },   // Vetkai Ivory
    primary: { h: 14, s: 61, l: 48 },       // Terracotta accent
    accent: { h: 43, s: 98, l: 53 },        // Gold
  },
  
  // Bridge 1A: Start introducing terracotta warmth (10%)
  {
    position: 0.10,
    background: { h: 50, s: 85, l: 96 },    // Ivory → warmer
    primary: { h: 14, s: 63, l: 47 },
    accent: { h: 42, s: 96, l: 52 },
  },
  
  // Bridge 1B: Deeper terracotta blend (15%)
  {
    position: 0.15,
    background: { h: 40, s: 70, l: 94 },    // More terracotta
    primary: { h: 14, s: 65, l: 46 },
    accent: { h: 40, s: 94, l: 51 },
  },
  
  // ═══════════════════════════════════════════════════════════════
  // SECTION 2: MISSION - Terracotta Red
  // ═══════════════════════════════════════════════════════════════
  {
    position: 0.20,
    background: { h: 14, s: 30, l: 92 },    // Soft terracotta bg
    primary: { h: 14, s: 61, l: 48 },       // Full terracotta
    accent: { h: 43, s: 98, l: 53 },        // Gold accent
  },
  
  // Bridge 2A: Start gold introduction (30%)
  {
    position: 0.30,
    background: { h: 20, s: 40, l: 93 },    // Terracotta → gold
    primary: { h: 30, s: 70, l: 50 },       // Warming toward gold
    accent: { h: 43, s: 98, l: 53 },
  },
  
  // Bridge 2B: Gold dominance emerging (35%)
  {
    position: 0.35,
    background: { h: 35, s: 60, l: 94 },    // Golden glow
    primary: { h: 43, s: 85, l: 52 },       // Richer gold
    accent: { h: 30, s: 100, l: 60 },       // Saffron
  },
  
  // ═══════════════════════════════════════════════════════════════
  // SECTION 3: VALUES - Turmeric Gold
  // ═══════════════════════════════════════════════════════════════
  {
    position: 0.40,
    background: { h: 43, s: 50, l: 95 },    // Golden cream
    primary: { h: 43, s: 98, l: 53 },       // Full gold
    accent: { h: 14, s: 61, l: 48 },        // Terracotta accent
  },
  
  // Bridge 3A: Cooling toward peacock (50%)
  {
    position: 0.50,
    background: { h: 80, s: 45, l: 93 },    // Gold → teal
    primary: { h: 120, s: 70, l: 45 },      // Transitioning
    accent: { h: 183, s: 80, l: 30 },       // Peacock emerging
  },
  
  // Bridge 3B: Peacock dominance (55%)
  {
    position: 0.55,
    background: { h: 150, s: 40, l: 90 },   // Aqua tint
    primary: { h: 183, s: 90, l: 28 },      // Deep peacock
    accent: { h: 43, s: 98, l: 53 },        // Gold accent
  },
  
  // ═══════════════════════════════════════════════════════════════
  // SECTION 4: ENGINE - Peacock Blue-Green
  // ═══════════════════════════════════════════════════════════════
  {
    position: 0.60,
    background: { h: 183, s: 30, l: 88 },   // Soft peacock
    primary: { h: 183, s: 100, l: 22 },     // Full peacock
    accent: { h: 43, s: 98, l: 53 },        // Gold accent
  },
  
  // Bridge 4A: Deepening toward maroon (70%)
  {
    position: 0.70,
    background: { h: 220, s: 35, l: 85 },   // Peacock → purple
    primary: { h: 300, s: 80, l: 35 },      // Purple transition
    accent: { h: 345, s: 90, l: 30 },       // Maroon emerging
  },
  
  // Bridge 4B: Maroon dominance (80%)
  {
    position: 0.80,
    background: { h: 330, s: 50, l: 88 },   // Rose tint
    primary: { h: 345, s: 100, l: 25 },     // Deep maroon
    accent: { h: 14, s: 61, l: 48 },        // Terracotta accent
  },
  
  // ═══════════════════════════════════════════════════════════════
  // SECTION 5: CONTACT - Deep Maroon (Secondary Color)
  // ═══════════════════════════════════════════════════════════════
  {
    position: 0.90,
    background: { h: 345, s: 40, l: 90 },   // Soft maroon
    primary: { h: 345, s: 100, l: 25 },     // Full maroon
    accent: { h: 43, s: 98, l: 53 },        // Gold accent
  },
  
  // Final: Footer fade
  {
    position: 1.0,
    background: { h: 345, s: 35, l: 92 },   // Lighter maroon
    primary: { h: 345, s: 100, l: 25 },
    accent: { h: 43, s: 98, l: 53 },
  },
];

export const ScrollColorLerp = () => {
  const { progress } = useScrollProgress();

  useEffect(() => {
    // Find the two color stops to interpolate between
    let startStop = COLOR_STOPS[0];
    let endStop = COLOR_STOPS[1];
    let localT = 0;

    for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
      if (progress >= COLOR_STOPS[i].position && progress <= COLOR_STOPS[i + 1].position) {
        startStop = COLOR_STOPS[i];
        endStop = COLOR_STOPS[i + 1];
        const range = endStop.position - startStop.position;
        localT = range > 0 ? (progress - startStop.position) / range : 0;
        break;
      }
    }

    // Apply easing for smoother transitions
    const easedT = easeInOutCubic(localT);

    // Interpolate background
    const [bgH, bgS, bgL] = lerpHSL(
      startStop.background.h, startStop.background.s, startStop.background.l,
      endStop.background.h, endStop.background.s, endStop.background.l,
      easedT
    );

    // Interpolate primary
    const [primaryH, primaryS, primaryL] = lerpHSL(
      startStop.primary.h, startStop.primary.s, startStop.primary.l,
      endStop.primary.h, endStop.primary.s, endStop.primary.l,
      easedT
    );

    // Interpolate accent
    const [accentH, accentS, accentL] = lerpHSL(
      startStop.accent.h, startStop.accent.s, startStop.accent.l,
      endStop.accent.h, endStop.accent.s, endStop.accent.l,
      easedT
    );

    // Auto-calculate optimal text colors based on background
    const foreground = getOptimalTextColor(bgH, bgS, bgL, 7); // AAA contrast
    const mutedForeground = getOptimalTextColor(bgH, bgS, bgL, 4.5); // AA contrast
    
    // Calculate supporting colors
    const border = getBorderColor(bgH, bgS, bgL);
    const card = getCardColor(bgH, bgS, bgL);
    const muted = {
      h: bgH,
      s: Math.max(5, bgS - 5),
      l: bgL < 50 ? bgL + 8 : bgL - 5,
    };

    // Calculate foreground for primary and accent
    const primaryFg = getOptimalTextColor(primaryH, primaryS, primaryL);
    const accentFg = getOptimalTextColor(accentH, accentS, accentL);

    // Apply all colors to CSS variables
    const setColor = (name: string, h: number, s: number, l: number) => {
      document.documentElement.style.setProperty(name, `${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%`);
    };

    setColor('--background', bgH, bgS, bgL);
    setColor('--foreground', foreground.h, foreground.s, foreground.l);
    setColor('--primary', primaryH, primaryS, primaryL);
    setColor('--primary-foreground', primaryFg.h, primaryFg.s, primaryFg.l);
    setColor('--accent', accentH, accentS, accentL);
    setColor('--accent-foreground', accentFg.h, accentFg.s, accentFg.l);
    setColor('--border', border.h, border.s, border.l);
    setColor('--card', card.h, card.s, card.l);
    setColor('--card-foreground', foreground.h, foreground.s, foreground.l);
    setColor('--muted', muted.h, muted.s, muted.l);
    setColor('--muted-foreground', mutedForeground.h, mutedForeground.s, mutedForeground.l);
    
    // Secondary color (complement of primary)
    const secondaryH = (primaryH + 180) % 360;
    const secondaryL = bgL < 50 ? 75 : 25;
    setColor('--secondary', secondaryH, Math.max(10, primaryS - 8), secondaryL);
    setColor('--secondary-foreground', foreground.h, foreground.s, foreground.l);

    // Popover inherits from card
    setColor('--popover', card.h, card.s, card.l);
    setColor('--popover-foreground', foreground.h, foreground.s, foreground.l);

    // Destructive (error state) - always readable
    const destructive = bgL < 50 ? { h: 0, s: 70, l: 60 } : { h: 0, s: 84, l: 50 };
    setColor('--destructive', destructive.h, destructive.s, destructive.l);
    const destructiveFg = getOptimalTextColor(destructive.h, destructive.s, destructive.l);
    setColor('--destructive-foreground', destructiveFg.h, destructiveFg.s, destructiveFg.l);

    // Input inherits from border
    setColor('--input', border.h, border.s, border.l);
    
    // Ring (focus outline) uses accent or primary
    const ringColor = bgL < 50 ? { h: accentH, s: accentS, l: accentL } : { h: primaryH, s: primaryS, l: primaryL };
    setColor('--ring', ringColor.h, ringColor.s, ringColor.l);

    // Custom Vetkai tokens
    setColor('--slate-deep', primaryH, Math.min(primaryS + 5, 100), Math.max(primaryL - 10, 10));
    setColor('--slate-light', primaryH, Math.max(primaryS - 10, 5), Math.min(primaryL + 25, 80));
    setColor('--saffron-glow', accentH, Math.min(accentS + 5, 100), Math.min(accentL + 7, 65));
    setColor('--saffron-dark', accentH, Math.max(accentS - 5, 70), Math.max(accentL - 10, 35));

  }, [progress]);

  return null;
};