import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ScrambleText';

const VALUES = [
  {
    id: 'trust',
    title: 'TRUST',
    description: 'Honesty & integrity in all practices, fostering trust from users & collaborators.',
    icon: '◈', // Could replace with SVGs later
  },
  {
    id: 'excellence',
    title: 'EXCELLENCE',
    description: 'World-class, result-oriented content with cutting-edge product performance.',
    icon: '❖',
  },
  {
    id: 'creedless',
    title: 'CREEDLESS',
    description: 'Ensure equity in access, distribution, cost, internal affairs & promote inclusivity.',
    icon: '◎',
  },
  {
    id: 'empowerment',
    title: 'EMPOWERMENT',
    description: 'Focus on the student, empower teachers & emphasise on diffusion of knowledge.',
    icon: '△',
  },
  {
    id: 'evidence',
    title: 'EVIDENCE-BASED',
    description: 'Base inferences on science & research; learn from industry best practices.',
    icon: '□',
  },
  {
    id: 'unity',
    title: 'ART IS UNITY',
    description: 'Build community capabilities to contribute and drive positive change.',
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
            text="CORE VALUES"
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
            To augment the current delivery systems of education, healthcare & practice in India 
            and positively impact global outcomes—through evidence, knowledge, awareness & application.
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
      </div>
    </section>
  );
};
