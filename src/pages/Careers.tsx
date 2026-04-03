import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrambleText } from '@/components/ScrambleText';
import TextReveal from '@/components/TextReveal';
import { WarpGrid } from '@/components/WarpGrid';
import { GeometricCursor } from '@/components/GeometricCursor';

const VALUES = [
  { icon: '◈', title: 'Clarity of thought', description: 'Clear thinking leads to clear systems. We value precision in reasoning above speed.' },
  { icon: '❖', title: 'Depth over speed', description: 'We favour building things properly over building them fast. Thoroughness is a skill.' },
  { icon: '◎', title: 'Responsibility in what we build', description: 'We are aware that our systems touch real people in real situations. That carries weight.' },
  { icon: '△', title: 'Meaningful outcomes', description: 'We measure success by what actually changes for the people using our systems — not by metrics alone.' },
];

const Careers = () => {
  return (
    <div className="relative min-h-screen bg-[hsl(60,100%,97%)]">
      <WarpGrid />
      <GeometricCursor />
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="vetkai-container max-w-4xl">

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
                Careers
              </span>
            </motion.div>

            <ScrambleText
              text="WORK AT VETKAI"
              as="h1"
              className="text-5xl md:text-6xl font-bold tracking-tight text-vetkai-terracotta mb-6"
              delay={300}
              duration={40}
            />

            <motion.div
              className="h-0.5 bg-vetkai-gold rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <TextReveal delay={0.3}>
              <p className="text-xl text-foreground/70 font-serif leading-relaxed max-w-2xl">
                We are building with intent — and we look for people
                who think the same way.
              </p>
            </TextReveal>
          </div>

          {/* Body */}
          <div className="mb-20">
            <TextReveal delay={0.2}>
              <p className="text-lg text-foreground/65 font-serif leading-relaxed max-w-2xl mb-6">
                Whether in medicine, design, engineering, or operations —
                we look for individuals who care about meaningful outcomes
                and are willing to do the difficult work of understanding
                problems before building solutions.
              </p>
            </TextReveal>
          </div>

          {/* Values we look for */}
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xs font-bold tracking-[0.35em] uppercase text-foreground/40 mb-10"
            >
              What we value
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-vetkai-terracotta/5 rotate-1 group-hover:rotate-2 transition-transform duration-300 rounded-xl" />
                  <div className="relative bg-card border border-border p-6 rounded-xl hover:border-vetkai-terracotta/40 transition-colors duration-300">
                    <div className="w-10 h-10 mb-4 flex items-center justify-center text-xl text-vetkai-terracotta border border-vetkai-terracotta/20 rounded-full group-hover:bg-vetkai-terracotta group-hover:text-white transition-colors duration-300">
                      {val.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-vetkai-terracotta transition-colors duration-300">
                      {val.title}
                    </h3>
                    <p className="text-sm text-foreground/60 font-serif leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current state */}
          <TextReveal delay={0.3}>
            <div className="border-l-2 border-vetkai-terracotta pl-6 mb-12">
              <p className="text-base font-serif text-foreground/60 leading-relaxed mb-4">
                We do not currently have formal open roles listed.
                If you believe your work aligns with ours, we encourage you
                to reach out directly.
              </p>
              <p className="text-base font-serif text-foreground/60 leading-relaxed">
                Include what you do, what you care about, and why Vetkai
                feels like the right place to do it.
              </p>
            </div>
          </TextReveal>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="mailto:hello@vetkai.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-vetkai-terracotta text-white font-semibold tracking-wide hover:bg-vetkai-terracotta/90 transition-colors group"
            >
              <span>Reach out</span>
              <svg
                width="18" height="18" viewBox="0 0 18 18" fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M1 9h16M10 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
