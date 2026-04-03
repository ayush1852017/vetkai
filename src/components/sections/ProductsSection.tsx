import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/TextReveal';

const PILLARS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    label: 'Syllabus to bedside',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 7h8M5 10h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    label: 'Reference-text backed',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 9l3.5 3.5L14 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    label: 'Clinically reviewed',
  },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="products" ref={ref} className="relative py-28 md:py-36 bg-background overflow-hidden">
      <style>{`
        @keyframes needleDraw {
          from { stroke-dashoffset: 260; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes tipPulse {
          0%, 100% { opacity: 0.5; r: 2.5; }
          50%       { opacity: 1;   r: 4;   }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1;    transform: scale(1);    }
          50%       { opacity: 0.55; transform: scale(0.85); }
        }
        @keyframes progressGrow {
          from { width: 0; }
          to   { width: 65%; }
        }
        .needle-shaft {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
        }
        .needle-shaft.animated {
          animation: needleDraw 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
        }
        .needle-tip.animated {
          animation: tipPulse 2s ease-in-out 1.8s infinite;
        }
        .status-dot {
          animation: statusPulse 2.4s ease-in-out infinite;
        }
        .progress-bar-fill.animated {
          animation: progressGrow 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.9s forwards;
          width: 0;
        }
      `}</style>

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

            <div className="relative bg-card border border-border p-8 rounded-2xl hover:border-vetkai-terracotta/40 hover:shadow-xl hover:shadow-vetkai-terracotta/8 [transition:border-color_200ms_ease,box-shadow_200ms_ease]">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary rounded-br-2xl" />

              {/* Badge row */}
              <div className="flex items-center justify-between mb-7">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-vetkai-terracotta/10 text-vetkai-terracotta rounded-full border border-vetkai-terracotta/20">
                  Education · Nursing
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="status-dot w-1.5 h-1.5 bg-vetkai-peacock rounded-full inline-block"
                    style={{ transformOrigin: 'center' }}
                  />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-vetkai-peacock">
                    Active
                  </span>
                </div>
              </div>

              {/* Logo */}
              <div className="mb-7">
                <img src="/31Gauge_Primary.svg" alt="31Gauge" className="h-10 w-auto" />
              </div>

              {/* Needle illustration */}
              <div className="mb-7 flex justify-center">
                <svg
                  viewBox="0 0 340 90"
                  width="100%"
                  style={{ maxWidth: 340 }}
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Plunger flange */}
                  <rect x="4" y="32" width="6" height="26" rx="1.5" fill="#C84630" opacity="0.25" />
                  <rect x="2" y="30" width="10" height="4"  rx="1"   fill="#C84630" opacity="0.35" />
                  <rect x="2" y="56" width="10" height="4"  rx="1"   fill="#C84630" opacity="0.35" />

                  {/* Plunger rod */}
                  <line x1="10" y1="45" x2="36" y2="45" stroke="#C84630" strokeWidth="2" opacity="0.3" strokeLinecap="round" />

                  {/* Barrel */}
                  <rect x="36" y="34" width="188" height="22" rx="4" fill="#016293" opacity="0.08" />
                  <rect x="36" y="34" width="188" height="22" rx="4" stroke="#016293" strokeWidth="1.2" opacity="0.3" />

                  {/* Graduation marks inside barrel */}
                  {[60, 84, 108, 132, 156, 180].map((x, i) => (
                    <g key={x}>
                      <line
                        x1={x} y1="38" x2={x} y2={i % 2 === 0 ? 48 : 44}
                        stroke="#0095c8" strokeWidth="0.7" opacity="0.45"
                      />
                      {i % 2 === 0 && (
                        <text x={x} y="56" textAnchor="middle" fontSize="5.5"
                          fontFamily="Space Grotesk, monospace" fill="#0095c8" opacity="0.4">
                          {(i / 2 + 1) * 5}
                        </text>
                      )}
                    </g>
                  ))}

                  {/* Hub / luer lock */}
                  <path d="M224 34 L248 38 L248 52 L224 56 Z" fill="#016293" opacity="0.18" />
                  <path d="M224 34 L248 38 L248 52 L224 56 Z" stroke="#016293" strokeWidth="1" opacity="0.4" />

                  {/* Ultra-thin shaft */}
                  <line
                    x1="248" y1="45" x2="330" y2="45"
                    className={`needle-shaft${isInView ? ' animated' : ''}`}
                    stroke="#0095c8" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"
                  />

                  {/* Specular highlight on shaft */}
                  <line
                    x1="248" y1="43.5" x2="320" y2="43.5"
                    className={`needle-shaft${isInView ? ' animated' : ''}`}
                    stroke="white" strokeWidth="0.5" opacity="0.3" strokeLinecap="round"
                  />

                  {/* Bevel tip */}
                  <path
                    d="M328 43 L336 45 L328 47 Z"
                    fill="#0095c8" opacity="0.75"
                  />

                  {/* Tip pulse glow */}
                  <circle
                    cx="336" cy="45" r="2.5"
                    className={`needle-tip${isInView ? ' animated' : ''}`}
                    fill="#FDB813" opacity="0.5"
                  />

                  {/* 31G label on barrel */}
                  <text x="130" y="48" textAnchor="middle" fontSize="9"
                    fontFamily="Space Grotesk, monospace" fontWeight="700"
                    fill="#0095c8" opacity="0.55" letterSpacing="2">
                    31G
                  </text>
                </svg>
              </div>

              {/* Headline */}
              <div className="mb-7">
                <p className="text-lg font-serif leading-snug text-foreground/85">
                  Clarity for exams.{' '}
                  <em className="not-italic font-semibold" style={{ color: '#0095c8' }}>
                    Confidence for the ward.
                  </em>
                </p>
              </div>

              {/* Pillars grid */}
              <div className="grid grid-cols-3 gap-3 mb-7">
                {PILLARS.map((p) => (
                  <div
                    key={p.label}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl border border-vetkai-terracotta/12 bg-vetkai-terracotta/4 text-center"
                  >
                    <span className="text-vetkai-peacock">{p.icon}</span>
                    <span className="text-[10px] leading-tight font-medium text-foreground/65 tracking-wide">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="space-y-2 mb-7">
                <div className="flex justify-between text-xs text-foreground/50">
                  <span style={{ fontFamily: "'Space Grotesk', monospace" }}>Development progress</span>
                  <span style={{ fontFamily: "'Space Grotesk', monospace" }}>65%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full progress-bar-fill${isInView ? ' animated' : ''}`}
                    style={{
                      background: 'linear-gradient(to right, #C84630, #FDB813)',
                    }}
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
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="transition-transform duration-150 group-hover/cta:translate-x-1.5"
                >
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
              <p className="mt-4 text-xs tracking-widest text-foreground/30 uppercase" style={{ fontFamily: "'Space Grotesk', monospace" }}>
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
