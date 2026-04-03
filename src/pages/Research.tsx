import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrambleText } from '@/components/ScrambleText';
import TextReveal from '@/components/TextReveal';
import { WarpGrid } from '@/components/WarpGrid';
import { GeometricCursor } from '@/components/GeometricCursor';

const AREAS = [
  {
    id: 'learning',
    number: '01',
    title: 'Learning systems and retention',
    description:
      'How information is encoded, retained, and recalled. The conditions that allow complex knowledge to become durable understanding — particularly in high-stakes disciplines like nursing and medicine.',
  },
  {
    id: 'clinical',
    number: '02',
    title: 'Clinical thinking and decision-making',
    description:
      'The structure of clinical reasoning — how practitioners move from observation to diagnosis to action. How education systems can better prepare individuals for the uncertainty of real clinical environments.',
  },
  {
    id: 'ai-collab',
    number: '03',
    title: 'Human–AI collaboration',
    description:
      'How AI systems should be designed to support human judgment rather than replace it. The boundaries of appropriate automation in high-stakes, human-facing contexts.',
  },
  {
    id: 'content',
    number: '04',
    title: 'Structured content design',
    description:
      'How information is organised, sequenced, and presented to reduce cognitive load and improve usability. The principles behind content that teaches effectively across varying levels of prior knowledge.',
  },
];

const Research = () => {
  return (
    <div className="relative min-h-screen bg-[hsl(60,100%,97%)]">
      <WarpGrid />
      <GeometricCursor />
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="vetkai-container max-w-4xl" data-domain="research">

          {/* Header */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <Link
                to="/"
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-vetkai-terracotta/60 hover:text-vetkai-terracotta flex items-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M5 9L2 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vetkai
              </Link>
              <span className="text-foreground/20">/</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-vetkai-terracotta">
                Research
              </span>
            </motion.div>

            <ScrambleText
              text="RESEARCH & THINKING"
              as="h1"
              className="text-5xl md:text-6xl font-bold tracking-tight text-vetkai-terracotta mb-6"
              delay={300}
              duration={40}
            />

            {/* Gold divider */}
            <motion.div
              className="h-0.5 bg-vetkai-gold rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <TextReveal delay={0.3}>
              <p className="text-xl text-foreground/70 font-serif leading-relaxed max-w-2xl">
                We document the ideas, frameworks, and principles that guide how we build.
                Our research is ongoing and evolving — shaped by both study and real-world use.
              </p>
            </TextReveal>
          </div>

          {/* Areas of focus */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs font-bold tracking-[0.35em] uppercase text-foreground/40 mb-10"
            >
              Areas of focus
            </motion.p>

            <div className="space-y-0">
              {AREAS.map((area, i) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                  className="group relative py-10 border-b border-border hover:border-vetkai-terracotta/30 transition-colors duration-300"
                >
                  <div className="flex gap-8 items-start">
                    {/* Ghost number */}
                    <span className="flex-shrink-0 text-5xl font-bold text-vetkai-gold/15 leading-none select-none group-hover:text-vetkai-gold/25 transition-colors duration-300">
                      {area.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-vetkai-terracotta transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-base text-foreground/60 font-serif leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status note */}
          <TextReveal delay={0.4}>
            <div className="border-l-2 border-vetkai-gold pl-6">
              <p className="text-base font-serif text-foreground/60 leading-relaxed italic">
                Our research is ongoing and evolving —
                shaped by both structured study and real-world use.
              </p>
            </div>
          </TextReveal>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
