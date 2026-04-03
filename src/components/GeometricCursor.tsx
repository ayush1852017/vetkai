import { useEffect, useState, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

type CursorDomain = 'default' | 'interactive' | 'research' | 'navigation';

interface GeometricCursorProps {
  domain?: CursorDomain;
}

export const GeometricCursor = ({ domain = 'default' }: GeometricCursorProps) => {
  const mousePosition = useMousePosition();
  const [currentDomain, setCurrentDomain] = useState<CursorDomain>('default');
  // Only show after the mouse has actually moved — prevents a flash at (0,0) on load
  const [hasMoved, setHasMoved] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Hide native cursor on pointer devices; restore on unmount
  useEffect(() => {
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasPointer) return;
    document.documentElement.style.cursor = 'none';
    return () => {
      document.documentElement.style.cursor = '';
    };
  }, []);

  // Track first mouse movement so we don't render at (0,0) on load
  useEffect(() => {
    if (hasMoved) return;
    const onMove = () => setHasMoved(true);
    window.addEventListener('mousemove', onMove, { once: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [hasMoved]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest('button, a, [role="button"]')) {
        setCurrentDomain('interactive');
      } else if (target.closest('[data-domain="research"]')) {
        setCurrentDomain('research');
      } else if (target.closest('nav, header')) {
        setCurrentDomain('navigation');
      } else {
        setCurrentDomain('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const getCursorShape = () => {
    switch (currentDomain) {
      case 'interactive':
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <polygon
              points="24,4 44,16 44,32 24,44 4,32 4,16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-pulse"
            />
            <circle cx="24" cy="24" r="3" fill="currentColor" />
          </svg>
        );
      case 'research':
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="24" y1="4" x2="24" y2="16" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="32" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" />
            <line x1="4" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <line x1="32" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
          </svg>
        );
      case 'navigation':
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <polygon
              points="24,8 40,40 8,40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="28" r="2" fill="currentColor" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <polygon
              points="24,4 44,24 24,44 4,24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
          </svg>
        );
    }
  };

  const getSize = () => {
    switch (currentDomain) {
      case 'interactive': return 56;
      case 'research': return 48;
      case 'navigation': return 32;
      default: return 24;
    }
  };

  const size = getSize();

  return (
    <div
      ref={cursorRef}
      // Use a static brand color — text-foreground is driven by ScrollColorLerp
      // and would flicker as CSS vars update at 60fps
      className="text-vetkai-terracotta"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        left: mousePosition.x,
        top: mousePosition.y,
        width: size,
        height: size,
        // Center the shape on the actual mouse hotspot
        transform: 'translate(-50%, -50%)',
        opacity: hasMoved ? 1 : 0,
        // Transition only size — position must follow the mouse instantly
        transition: 'width 0.2s cubic-bezier(0.23, 1, 0.32, 1), height 0.2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.15s ease',
      }}
    >
      {getCursorShape()}
    </div>
  );
};
