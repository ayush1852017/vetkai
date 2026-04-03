import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { KolamPattern } from '@/components/KolamPattern';

const VISION_LINES = [
  { id: 'v1', text: 'Meaningful systems.', delay: 0.2 },
  { id: 'v2', text: 'Precise execution.', delay: 0.5 },
  { id: 'v3', text: 'Thoughtful design.', delay: 0.8 },
];

const CLOSING_LINES = [
  { id: 'c1', text: 'Built with care.', delay: 1.2 },
  { id: 'c2', text: 'Used with trust.', delay: 1.45 },
  { id: 'c3', text: 'Remembered for their impact.', delay: 1.7 },
];

export const LongTermVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="vision"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-24 bg-background overflow-hidden"
    >
      {/* Kolam background watermark */}
      <KolamPattern className="opacity-[0.05] text-vetkai-terracotta" />

      {/* Subtle radial gradient center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--vetkai-terracotta)/0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="vetkai-container relative z-10 text-center max-w-4xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-vetkai-terracotta/50" />
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-vetkai-terracotta/70">
            Looking ahead
          </span>
          <div className="h-px w-12 bg-vetkai-terracotta/50" />
        </motion.div>

        {/* Three main vision statements */}
        <div className="space-y-4 mb-16">
          {VISION_LINES.map((line) => (
            <motion.p
              key={line.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: line.delay }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Gold divider */}
        <motion.div
          className="h-px mx-auto mb-12 bg-gradient-to-r from-transparent via-vetkai-gold to-transparent"
          initial={{ width: 0 }}
          animate={isInView ? { width: '50%' } : {}}
          transition={{ duration: 0.9, delay: 1.1 }}
        />

        {/* Closing three lines */}
        <div className="space-y-3 mb-16">
          {CLOSING_LINES.map((line) => (
            <motion.p
              key={line.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: line.delay }}
              className="text-xl md:text-2xl font-serif text-foreground/70 italic"
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Final quiet tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-xs tracking-[0.4em] uppercase text-foreground/30 font-medium"
        >
          Vetkai — built with intent.
        </motion.p>

        {/* Bottom valli */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 2.1, ease: 'easeOut' }}
          className="w-full max-w-xs h-px mt-12 mx-auto bg-gradient-to-r from-transparent via-vetkai-terracotta to-transparent"
        />
      </div>
    </section>
  );
};
