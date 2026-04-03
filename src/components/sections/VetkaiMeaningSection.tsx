import { motion } from 'framer-motion';
import TextReveal from '@/components/TextReveal';
import { ScrambleText } from '@/components/ScrambleText';

const PARAGRAPHS = [
  {
    id: 'p1',
    text: 'In Tamil, "Vetkai" speaks of growth, hunger,\nand the quiet desire to move forward.',
    delay: 0.2,
  },
  {
    id: 'p2',
    text: 'It reflects a way of building —\nwith intent, with discipline, and with respect\nfor the people we serve.',
    delay: 0.5,
  },
  {
    id: 'p3',
    text: 'Every system we create carries this forward:\nto enable progress that is steady, meaningful, and real.',
    delay: 0.8,
  },
];

export const VetkaiMeaningSection = () => {
  return (
    <section id="meaning" className="relative py-28 md:py-36 bg-background overflow-hidden">
      {/* Subtle dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--vetkai-terracotta))_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="vetkai-container relative z-10 max-w-4xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="h-px flex-1 max-w-[60px] bg-vetkai-terracotta" />
          <ScrambleText
            text="THE IDEA OF VETKAI"
            as="span"
            className="text-xs font-bold tracking-[0.35em] uppercase text-vetkai-terracotta"
            delay={200}
            duration={40}
          />
          <div className="h-px flex-1 max-w-[60px] bg-vetkai-terracotta" />
        </motion.div>

        {/* Prose block with left accent bar */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical terracotta bar */}
          <motion.div
            className="absolute left-0 top-0 w-0.5 bg-vetkai-terracotta rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
          />

          <div className="space-y-10">
            {PARAGRAPHS.map((para) => (
              <TextReveal key={para.id} delay={para.delay}>
                <p
                  className="text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.55] text-foreground/90 whitespace-pre-line"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, letterSpacing: '-0.01em' }}
                >
                  {para.text}
                </p>
              </TextReveal>
            ))}
          </div>
        </div>

        {/* Bottom valli */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 1 }}
          className="w-full max-w-md h-px mt-16 ml-8 md:ml-12 bg-gradient-to-r from-vetkai-terracotta via-vetkai-gold to-transparent"
        />
      </div>
    </section>
  );
};
