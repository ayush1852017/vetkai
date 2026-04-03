import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/TextReveal';

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="products" ref={ref} className="relative py-28 md:py-36 bg-background overflow-hidden">
      {/* Background dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--vetkai-gold))_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="vetkai-container relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            className="text-xs font-bold tracking-[0.35em] uppercase text-vetkai-terracotta block mb-4"
            initial={{ opacity: 0, y: -12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our work
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We build focused systems<br />across education and healthcare.
          </motion.h2>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">

          {/* 31Gauge — Primary product card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative"
          >
            {/* Shadow accent */}
            <div className="absolute inset-0 bg-vetkai-terracotta/8 rotate-1 group-hover:rotate-2 transition-transform duration-300 rounded-2xl pointer-events-none" />

            <div className="relative bg-card border border-border p-8 rounded-2xl hover:border-vetkai-terracotta/50 hover:shadow-lg hover:shadow-vetkai-terracotta/10 [transition:border-color_150ms_ease,box-shadow_150ms_ease]">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary rounded-br-2xl" />

              {/* Badge row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-vetkai-terracotta/10 text-vetkai-terracotta rounded-full border border-vetkai-terracotta/20">
                  Education · Nursing
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-vetkai-peacock rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-vetkai-peacock">
                    Active
                  </span>
                </div>
              </div>

              {/* Product name */}
              <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-vetkai-terracotta">
                31Gauge
              </h3>

              {/* Description */}
              <p className="text-base text-foreground/70 font-serif leading-relaxed mb-8">
                Structured learning and exam preparation for nursing students.
              </p>

              {/* Progress bar */}
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-xs text-foreground/50">
                  <span className="font-mono">Development progress</span>
                  <span className="font-mono">65%</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-vetkai-terracotta to-vetkai-gold"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '65%' } : {}}
                    transition={{ duration: 1.0, delay: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://31gauge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-vetkai-terracotta"
              >
                <span>Learn more</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-150 group-hover/cta:translate-x-1.5">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Placeholder card — More in development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <div className="relative h-full min-h-[280px] border-2 border-dashed border-vetkai-terracotta/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-vetkai-terracotta/3 hover:border-vetkai-terracotta/35 transition-colors duration-300">
              {/* Rotating icon */}
              <motion.div
                className="w-12 h-12 mb-6 border border-vetkai-gold/30 rounded-full flex items-center justify-center text-vetkai-gold/50 text-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                ◎
              </motion.div>
              <p className="text-lg font-serif text-foreground/40 italic leading-relaxed">
                More systems<br />in development.
              </p>
              <p className="mt-4 text-xs font-mono tracking-widest text-foreground/30 uppercase">
                Coming soon
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer note */}
        <TextReveal delay={0.6}>
          <p className="mt-12 text-sm text-foreground/45 font-serif max-w-md">
            Each system is built to solve a specific, real problem — not to fill a category.
          </p>
        </TextReveal>
      </div>
    </section>
  );
};
