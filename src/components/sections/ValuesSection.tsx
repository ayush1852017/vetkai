import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ScrambleText';

const VALUES = [
  {
    id: 'useful',
    title: 'USEFUL IN PRACTICE',
    description: 'Real environments, not demos. Every system is built for the conditions people actually work in.',
    icon: '◈',
  },
  {
    id: 'science',
    title: 'GROUNDED IN SCIENCE',
    description: 'Every decision has a reason. We base inferences on research and learn from evidence.',
    icon: '❖',
  },
  {
    id: 'design',
    title: 'THOUGHTFUL IN DESIGN',
    description: 'Clarity before aesthetics. Good design removes friction before users encounter it.',
    icon: '◎',
  },
  {
    id: 'lasting',
    title: 'BUILT TO LAST',
    description: 'Durable systems, not fast features. We invest in foundations, not shortcuts.',
    icon: '△',
  },
  {
    id: 'depth',
    title: 'DEPTH OVER NOISE',
    description: 'We choose less, and do it well. Quality of understanding over volume of output.',
    icon: '□',
  },
  {
    id: 'meaning',
    title: 'MEANING OVER VOLUME',
    description: 'Impact measured in outcomes, not outputs. We prioritise what actually moves people forward.',
    icon: '○',
  },
];

export const ValuesSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden" id="values">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-[radial-gradient(#C84630_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.05]" />

      <div className="vetkai-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
             <div className="px-4 py-1 border-t border-b border-vetkai-gold text-xs font-bold tracking-[0.3em] uppercase text-foreground">
               Our Foundation
             </div>
          </motion.div>

          <ScrambleText
            text="OUR PHILOSOPHY"
            as="h2"
            className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-vetkai-terracotta font-tamil"
            delay={200}
            duration={50}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-foreground/80 leading-relaxed font-serif"
          >
            What we choose to build — and how we choose to build it.
            Six principles that govern every decision we make.
          </motion.p>
        </div>

        {/* Values Grid - Octagonal Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((value, index) => (
            <motion.article
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-vetkai-terracotta/5 transform rotate-3 group-hover:rotate-6 transition-transform duration-500 rounded-2xl" />
              
              <div className="relative bg-card border border-border p-8 h-full rounded-2xl hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center text-2xl text-vetkai-terracotta border border-vetkai-terracotta/20 rounded-full group-hover:bg-vetkai-terracotta group-hover:text-white transition-colors duration-300">
                   {value.icon}
                </div>

                <h3 className="text-lg font-bold tracking-wide text-foreground mb-3 group-hover:text-vetkai-terracotta transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed font-serif">
                  {value.description}
                </p>
                
                {/* Decorative Corner */}
                 <div className="absolute top-4 right-4 text-vetkai-gold/20 group-hover:text-vetkai-gold/40 transition-colors">
                   ✿
                 </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-serif text-foreground/60 italic">
            "We prioritise depth over noise,
          </p>
          <p className="text-xl md:text-2xl font-serif text-foreground/80 italic">
            and meaning over volume."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
