import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Watches for hash changes in the URL and smoothly scrolls to the
 * matching element. Handles both:
 *  - Same-page hash navigation (/ → /#products)
 *  - Cross-page hash navigation (/careers → /#products)
 *
 * Must be rendered inside <BrowserRouter>.
 */
export const HashScrollHandler = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      // No hash — restore scroll to top on every route change
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const id = hash.replace('#', '');

    // Attempt 1: element already in DOM (same-page nav)
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Attempt 2: element not yet rendered (cross-page nav — wait for DOM)
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 120);

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
};
