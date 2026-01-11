import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  duration?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

export const ScrambleText = ({ 
  text, 
  className = '', 
  as: Component = 'span',
  delay = 0,
  duration = 50
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text.split('').map(() => ' '));
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hasAnimated, text]);

  const startAnimation = () => {
    let iteration = 0;
    const textArray = text.split('');
    
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        const newText = textArray.map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        });

        setDisplayText(newText);
        
        if (iteration >= textArray.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setDisplayText(textArray);
        }
        
        iteration += 0.5;
      }, duration);
    }, delay);
  };

  return (
    <Component
      ref={elementRef as any}
      className={`${className} font-mono`}
    >
      {displayText.map((char, index) => (
        <span
          key={index}
          className={`inline-block ${char !== text[index] ? 'text-primary/60' : ''}`}
          style={{
            transition: 'color 0.15s ease',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};
