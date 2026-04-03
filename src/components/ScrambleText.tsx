import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  duration?: number;
}

// Letters only — symbols and digits have dramatically different widths in
// proportional fonts (Noto Sans, Space Grotesk), causing text to reflow
// mid-animation and displace surrounding content.
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const ScrambleText = ({
  text,
  className = '',
  as: Component = 'span',
  delay = 0,
  duration = 50,
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState<string[]>(text.split(''));
  const [settled, setSettled] = useState<boolean[]>(() => text.split('').map(() => false));
  // Ref instead of state so toggling "has animated" never triggers a re-render
  // that re-creates the IntersectionObserver and risks a double-fire.
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    // threshold: 0 — fires the moment any pixel enters the viewport.
    // threshold: 0.3 fired too late on initial load, making cursor
    // movement look like the trigger.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            // Disconnect immediately — we only ever want one play-through
            observer.disconnect();
            startAnimation();
          }
        }
      },
      { threshold: 0 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
    // startAnimation is stable (never recreated); text is a prop that
    // doesn't change at runtime for these headings.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAnimation = () => {
    const chars = text.split('');

    timeoutRef.current = setTimeout(() => {
      let iteration = 0;

      intervalRef.current = setInterval(() => {
        const nextDisplay = chars.map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        });
        const nextSettled = chars.map((_, index) => index < iteration);

        setDisplayText(nextDisplay);
        setSettled(nextSettled);

        if (iteration >= chars.length) {
          clearInterval(intervalRef.current);
          // Guarantee the final state is exactly the original text
          setDisplayText(chars);
          setSettled(chars.map(() => true));
        }

        iteration += 0.5;
      }, duration);
    }, delay);
  };

  return (
    <Component ref={elementRef} className={className}>
      {displayText.map((char, index) => (
        // inline-block gives consistent glyph rendering across fonts and
        // ensures opacity changes don't affect surrounding inline flow.
        // No CSS transition here — the scramble itself provides motion.
        // Using opacity (not color) avoids any CSS-variable dependency.
        <span
          key={index}
          className="inline-block"
          style={{ opacity: settled[index] ? 1 : 0.35 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};
