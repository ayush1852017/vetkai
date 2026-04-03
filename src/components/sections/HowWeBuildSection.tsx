import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/TextReveal';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Outcome-focused',
    detail: 'Designed around what actually needs to happen.',
  },
  {
    number: '02',
    title: 'Built to reduce friction',
    detail: 'Complexity is removed before users ever see it.',
  },
  {
    number: '03',
    title: 'Structured for real use',
    detail: 'Not demos. Not MVPs. Systems people rely on.',
  },
];

export const HowWeBuildSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-we-build" className="relative py-28 md:py-36 bg-background overflow-hidden" ref={ref}>
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vetkai-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="vetkai-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Manifesto list */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              <span className="text-xs font-bold tracking-[0.35em] uppercase text-vetkai-terracotta">
                How we build
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-14 leading-tight"
            >
              Systems,<br />not features.
            </motion.h2>

            {/* Numbered principles */}
            <div className="space-y-0">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="relative flex items-start gap-5 py-7 border-b border-border/60 group hover:border-vetkai-terracotta/30 transition-colors duration-300"
                >
                  {/* Number badge */}
                  <span
                    className="flex-shrink-0 mt-0.5 text-xs font-bold tracking-widest text-vetkai-terracotta/60 group-hover:text-vetkai-terracotta transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {p.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-vetkai-terracotta transition-colors duration-300"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 300,
                        color: 'hsl(var(--foreground) / 0.7)',
                      }}
                    >
                      {p.detail}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <motion.span
                    className="flex-shrink-0 mt-1 text-vetkai-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontSize: '0.75rem' }}
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Closing statement + geometric diagram */}
          <div className="lg:pt-20">
            {/* SVG — 3 nested rectangles representing Outcome / Structure / Necessary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 flex justify-center"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-64 h-64 text-vetkai-terracotta"
                fill="none"
              >
                {/* Outer rect — Outcome */}
                <motion.rect
                  x="10" y="10" width="180" height="180"
                  stroke="currentColor" strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
                {/* Mid rect — Structure */}
                <motion.rect
                  x="35" y="35" width="130" height="130"
                  stroke="currentColor" strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.8 } : {}}
                  transition={{ duration: 1.0, delay: 0.9 }}
                />
                {/* Inner rect — Necessary */}
                <motion.rect
                  x="62" y="62" width="76" height="76"
                  stroke="hsl(var(--vetkai-gold))" strokeWidth="2.5"
                  fill="hsl(var(--vetkai-gold) / 0.06)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
                {/* Center dot */}
                <motion.circle
                  cx="100" cy="100" r="5"
                  fill="hsl(var(--vetkai-gold))"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.6 }}
                />
                {/* Labels — placed inside each band for readability */}
                <motion.text
                  x="14" y="26"
                  fontSize="9" fill="currentColor"
                  style={{ letterSpacing: '0.12em' }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.7 } : {}}
                  transition={{ delay: 1.3 }}
                >
                  OUTCOME
                </motion.text>
                <motion.text
                  x="39" y="52"
                  fontSize="9" fill="currentColor"
                  style={{ letterSpacing: '0.12em' }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.9 } : {}}
                  transition={{ delay: 1.5 }}
                >
                  STRUCTURE
                </motion.text>
                <motion.text
                  x="68" y="78"
                  fontSize="8" fill="hsl(var(--vetkai-gold))"
                  style={{ letterSpacing: '0.1em' }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.7 }}
                >
                  NECESSARY
                </motion.text>
              </svg>
            </motion.div>

            <TextReveal delay={0.8}>
              <blockquote className="border-l-4 border-vetkai-terracotta pl-7">
                <p
                  className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
                >
                  "We do not build everything that is possible.
                </p>
                <p
                  className="text-xl md:text-2xl text-vetkai-terracotta"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  We build what is necessary — and build it well."
                </p>
              </blockquote>
            </TextReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
