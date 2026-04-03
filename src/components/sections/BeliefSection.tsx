import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ScrambleText';
import TextReveal from '@/components/TextReveal';

const BELIEFS = [
  { id: 'clear', icon: '◈', word: 'Clear' },
  { id: 'accessible', icon: '◎', word: 'Accessible' },
  { id: 'meaningful', icon: '△', word: 'Meaningful' },
];

export const BeliefSection = () => {
  return (
    <section id="beliefs" className="relative py-28 md:py-36 bg-background overflow-hidden">
      {/* Background faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="vetkai-container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <ScrambleText
            text="OUR BELIEFS"
            as="h2"
            className="text-5xl md:text-6xl font-bold tracking-tight text-vetkai-terracotta"
            delay={150}
            duration={45}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto">

          {/* Left — The problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pr-0 md:pr-12 pb-12 md:pb-0 md:border-r border-border"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/40 mb-6">
              The reality
            </p>
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/70">
              Many systems in education and healthcare are:
            </p>
            <div className="mt-6 space-y-3">
              {['fragmented,', 'overwhelming,', 'and difficult to trust.'].map((word, i) => (
                <motion.p
                  key={word}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold text-foreground/50 font-serif"
                >
                  {word}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right — The belief */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pl-0 md:pl-12 pt-12 md:pt-0"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-vetkai-terracotta mb-6">
              We believe they should be
            </p>

            <div className="space-y-4 mb-10">
              {BELIEFS.map((belief, i) => (
                <motion.div
                  key={belief.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="group relative"
                >
                  {/* Rotated shadow accent */}
                  <div className="absolute inset-0 bg-vetkai-terracotta/5 rotate-1 group-hover:rotate-2 transition-transform duration-300 rounded-xl" />
                  <div className="relative flex items-center gap-4 bg-card border border-border px-6 py-4 rounded-xl hover:border-vetkai-terracotta/50 transition-colors duration-300">
                    <span className="text-xl text-vetkai-terracotta">{belief.icon}</span>
                    <ScrambleText
                      text={belief.word}
                      as="span"
                      className="text-2xl font-bold text-foreground"
                      delay={600 + i * 150}
                      duration={40}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <TextReveal delay={1.0}>
              <p className="text-base md:text-lg font-serif text-foreground/70 leading-relaxed border-l-2 border-vetkai-gold pl-4">
                Because when clarity improves, decisions improve —
                <br />and outcomes follow.
              </p>
            </TextReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
