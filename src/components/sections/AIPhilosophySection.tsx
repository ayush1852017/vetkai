import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import TextReveal from '@/components/TextReveal';

const BLOCKS = [
  { id: 'intent',  label: 'Intent',    subtitle: 'Purposeful use',        shape: 'square'  },
  { id: 'ai',      label: 'AI',        subtitle: 'Agentic Intelligence',  shape: 'circle'  },
  { id: 'outcome', label: 'Outcome',   subtitle: 'Meaningful result',     shape: 'rounded' },
];

export const AIPhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="ai"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#6f6f9b' }}
    >
      {/* Animated background rings — same as old Engine */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: 100 + i * 80,
              height: 100 + i * 80,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.02, 1],
            }}
            transition={{
              rotate: { duration: 30 + i * 5, repeat: Infinity, ease: 'linear' },
              scale:  { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="aiPhilosophyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aiPhilosophyGrid)" />
        </svg>
        {/* Synapse node ring — static clinical pathway markers */}
        <svg
          viewBox="0 0 1000 560"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          fill="none"
          aria-hidden="true"
        >
          {[
            { label: 'INPUT',    angle: 90  },
            { label: 'ANALYZE',  angle: 162 },
            { label: 'VALIDATE', angle: 234 },
            { label: 'OUTPUT',   angle: 306 },
            { label: 'VERIFY',   angle: 18  },
          ].map(({ label, angle }) => {
            const rad  = ((angle - 90) * Math.PI) / 180;
            const r    = 245;
            const cx   = 500;
            const cy   = 280;
            const nx   = cx + r * Math.cos(rad);
            const ny   = cy + r * Math.sin(rad);
            const lx   = cx + (r + 22) * Math.cos(rad);
            const ly   = cy + (r + 22) * Math.sin(rad);
            const sx   = cx + (r - 18) * Math.cos(rad);
            const sy   = cy + (r - 18) * Math.sin(rad);
            return (
              <g key={label} opacity="0.35">
                <line x1={sx} y1={sy} x2={nx} y2={ny} stroke="#F5A623" strokeWidth="0.75" />
                <circle cx={nx} cy={ny} r="3.5" fill="#F5A623" />
                <text
                  x={lx} y={ly + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="Space Grotesk, monospace"
                  letterSpacing="1.5"
                  fill="#F5A623"
                >{label}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="vetkai-container relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              className="font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
              style={{ color: '#F5A623' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              On the use of AI
            </motion.span>

            <TextReveal delay={0.2}>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: 'white' }}
              >
                Technology assists.
                <br />
                <span style={{ color: '#F5A623' }}>Judgment leads.</span>
              </h2>
            </TextReveal>

            <motion.div
              className="h-1 rounded-full mx-auto my-10"
              style={{ backgroundColor: '#F5A623' }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {/* Body copy */}
          <motion.div
            className="text-center mb-16 space-y-5 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.9)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
            >
              AI is part of how we build — but not what we rely on blindly.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
            >
              We use it with intent: to accelerate creation, to improve consistency, and to scale thoughtful systems.{' '}
              <span style={{ color: 'white', fontWeight: 500 }}>
                Every output is shaped, reviewed, and refined by human expertise.
              </span>
            </p>
          </motion.div>

          {/* Process flow: Intent → AI → Outcome */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {BLOCKS.map((block, index) => (
              <div key={block.id} className="flex items-center">
                <motion.div
                  className="relative group cursor-pointer"
                  onHoverStart={() => setHovered(block.id)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Block */}
                  <motion.div
                    className={`relative w-36 h-36 flex flex-col items-center justify-center transition-all duration-500 ${
                      block.shape === 'circle'  ? 'rounded-full'  :
                      block.shape === 'rounded' ? 'rounded-2xl'   : 'rounded-sm'
                    }`}
                    style={{
                      backgroundColor: block.id === 'outcome' ? '#F5A623' : 'rgba(107,122,158,0.3)',
                      border: block.id === 'outcome' ? 'none' : '2px solid #F5A623',
                    }}
                    animate={block.id === 'ai' ? {
                      boxShadow: [
                        '0 0 20px 0px rgba(245,166,35,0.3)',
                        '0 0 40px 10px rgba(245,166,35,0.4)',
                        '0 0 20px 0px rgba(245,166,35,0.3)',
                      ],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {/* AI pulse rings */}
                    {block.id === 'ai' && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full border"
                          style={{ borderColor: 'rgba(245,166,35,0.5)' }}
                          animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border"
                          style={{ borderColor: 'rgba(245,166,35,0.5)' }}
                          animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </>
                    )}

                    <span
                      className="font-display font-bold text-2xl"
                      style={{ color: block.id === 'outcome' ? '#000000' : '#F5A623' }}
                    >
                      {block.label}
                    </span>

                    {/* Hover subtitle */}
                    <AnimatePresence>
                      {hovered === block.id && (
                        <motion.span
                          className="absolute -bottom-8 text-xs whitespace-nowrap"
                          style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Space Grotesk', sans-serif" }}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {block.subtitle}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Intent corner accent */}
                  {block.id === 'intent' && (
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-5 h-5"
                      style={{ backgroundColor: '#F5A623' }}
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>

                {/* Animated connectors */}
                {index < BLOCKS.length - 1 && (
                  <div className="hidden lg:flex items-center mx-4">
                    <motion.div
                      className="relative w-20 h-1 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    >
                      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: 'rgba(245,166,35,0.3)' }} />
                      <motion.div
                        className="absolute inset-y-0 left-0 w-1/2 rounded-full"
                        style={{ background: 'linear-gradient(to right, transparent, #F5A623, transparent)' }}
                        animate={{ x: ['-50%', '150%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3, ease: 'easeInOut' }}
                      />
                    </motion.div>
                    <motion.svg
                      className="w-4 h-4 ml-1"
                      style={{ color: '#F5A623' }}
                      viewBox="0 0 16 16"
                      fill="none"
                      initial={{ x: -5, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                    >
                      <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Closing tagline */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.p
              className="text-2xl md:text-3xl font-display font-semibold"
              style={{ color: 'white' }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              It is about making the difficult...{' '}
              <motion.span
                className="inline-block"
                style={{ color: '#F5A623' }}
                whileHover={{ scale: 1.1 }}
              >
                intentional.
              </motion.span>
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
