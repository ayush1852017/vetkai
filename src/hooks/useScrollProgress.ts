import { useState, useEffect, useCallback, useRef } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [section, setSection] = useState<'hero' | 'transition' | 'dark' | 'footer'>('hero');
  const rafId = useRef<number | null>(null);
  const lastProgress = useRef(0);

  const handleScroll = useCallback(() => {
    // Cancel any pending animation frame
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    // Schedule update for next frame
    rafId.current = requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;

      // Avoid division by zero
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      const currentProgress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);

      // Only update if progress changed significantly (optimization)
      if (Math.abs(currentProgress - lastProgress.current) > 0.001) {
        lastProgress.current = currentProgress;
        setProgress(currentProgress);

        // Determine section based on scroll position
        if (currentProgress < 0.15) {
          setSection('hero');
        } else if (currentProgress < 0.35) {
          setSection('transition');
        } else if (currentProgress < 0.75) {
          setSection('dark');
        } else {
          setSection('footer');
        }
      }

      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    // Initial call
    handleScroll();

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also handle resize (changes scrollHeight)
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      // Cancel any pending animation frame on unmount
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  return { progress, section };
};