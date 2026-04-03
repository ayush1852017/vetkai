import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrambleText } from '@/components/ScrambleText';
import { Link } from 'react-router-dom';

const PILLARS = [
  { id: 'learning', label: 'The science of learning' },
  { id: 'decision', label: 'The science of decision-making' },
  { id: 'clinical', label: 'The science of clinical reasoning' },
  { id: 'system', label: 'The science of system design' },
];

export const ScienceOfSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="science"
      ref={ref}
      data-domain="research"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#1a1a2e' }}
    >
      {/* Animated background rings — reuse Engine pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/5"
            style={{
              width: 150 + i * 120,
              height: 150 + i * 120,
              left: `${-10 + i * 5}%`,
              top: '50%',
              translateY: '-50%',
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 50 + i * 10, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <defs>
            <pattern id="scienceGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scienceGrid)" />
        </svg>
      </div>

      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#FDB813]/20" />

      <div className="vetkai-container relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <ScrambleText
                text="THE SCIENCE OF WHAT WE BUILD"
                as="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                delay={200}
                duration={35}
              />
            </motion.div>

            {/* Gold divider */}
            <motion.div
              className="h-0.5 rounded-full"
              style={{ backgroundColor: '#FDB813' }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {/* Body */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mb-16"
            style={{ color: 'rgba(255,255,255,0.8)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Behind every system we create lies a foundation of
            structured thinking and scientific grounding.
            <br /><br />
            We continuously explore and document:
          </motion.p>

          {/* Research pillars with timeline */}
          <div className="relative pl-6 md:pl-8">
            {/* Vertical timeline line */}
            <motion.div
              className="absolute left-0 top-3 w-px rounded-full"
              style={{ backgroundColor: '#FDB813' }}
              initial={{ height: 0 }}
              animate={isInView ? { height: 'calc(100% - 12px)' } : {}}
              transition={{ duration: 1.0, delay: 0.5 }}
            />

            <div className="space-y-8">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.id}
                  className="relative group flex items-center gap-6 cursor-default"
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-[27px] md:-left-[31px] w-3 h-3 rounded-full border-2 flex-shrink-0"
                    style={{ borderColor: '#FDB813', backgroundColor: '#1a1a2e' }}
                    animate={isInView ? { backgroundColor: ['#1a1a2e', '#FDB813', '#1a1a2e'] } : {}}
                    transition={{ duration: 2, delay: 0.8 + i * 0.12, repeat: Infinity, repeatDelay: 3 }}
                  />

                  {/* Arrow + text */}
                  <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
                    <motion.span
                      className="text-lg font-bold flex-shrink-0"
                      style={{ color: '#FDB813' }}
                    >
                      →
                    </motion.span>
                    <span className="text-xl md:text-2xl font-serif" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {pillar.label}
                    </span>
                  </div>

                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-6 h-px rounded-full"
                    style={{ backgroundColor: '#FDB813' }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer line */}
          <motion.p
            className="mt-14 text-base font-serif italic"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            These are not features — they are the principles that shape our work.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Link
              to="/research"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#FDB813] text-[#FDB813] font-semibold tracking-wide hover:bg-[#FDB813] hover:text-[#1a1a2e] transition-all duration-300 group"
            >
              <span>Explore our research</span>
              <svg
                width="18" height="18" viewBox="0 0 18 18" fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M1 9h16M10 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-[#FDB813]/20" />
    </section>
  );
};
