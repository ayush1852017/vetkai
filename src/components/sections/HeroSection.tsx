import { motion } from 'framer-motion';

import { KolamPattern } from '@/components/KolamPattern';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Mandala */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <KolamPattern className="opacity-10 text-vetkai-terracotta" />
      </div>

      <div className="vetkai-container relative z-10 text-center flex flex-col items-center">
        {/* Top Decorative Valli */}
        <motion.div 
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full max-w-lg h-1 mb-12 bg-gradient-to-r from-transparent via-vetkai-terracotta to-transparent"
        />

        {/* Data Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vetkai-gold/50 bg-vetkai-terracotta/5 text-foreground text-sm font-medium tracking-wider uppercase">
            <span className="w-2 h-2 bg-vetkai-gold rounded-full animate-pulse shadow-[0_0_8px_hsl(var(--vetkai-gold))]" />
            Healthcare × Education × India
          </span>
        </motion.div>

        {/* Main Heading - Vetkai / வேட்கை */}
        <div className="mb-4 relative">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center items-center px-4"
          >
            <img src="/logo-transparent.png" alt="Vetkai" className="w-full max-w-3xl h-auto dark:hidden" />
            <img src="/logo.png" alt="Vetkai" className="w-full max-w-3xl h-auto hidden dark:block" />
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl text-vetkai-peacock font-medium tracking-wide mb-8 mt-6">
            BUILDING FOR CHANGE
          </h2>
        </motion.div>

        {/* Vision Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-12 font-serif"
        >
          Building communities and products for change in healthcare & education in India—
          by doing the right things and challenging the status quo.
        </motion.p>

        {/* Focus Areas - Hexagonal/Octagonal Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {['Students', 'Teachers', 'Practitioners', 'Patients'].map((focus, index) => (
            <motion.div
              key={focus}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-vetkai-terracotta/10 rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="relative px-6 py-3 border border-vetkai-gold bg-background text-foreground font-serif font-medium text-lg hover:bg-vetkai-gold hover:text-white transition-colors cursor-default">
                  {focus}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Valli */}
        <motion.div 
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
           className="w-full max-w-lg h-1 mt-16 bg-gradient-to-r from-transparent via-vetkai-terracotta to-transparent"
        />

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
         <div className="w-1.5 h-1.5 rounded-full bg-vetkai-terracotta mb-2" />
         <motion.div
          animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-vetkai-terracotta"
        />
        <div className="w-1.5 h-1.5 rounded-full bg-vetkai-terracotta mt-2" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-medium">Scroll</span>
      </motion.div>
    </section>
  );
};
