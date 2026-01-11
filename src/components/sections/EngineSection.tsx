import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import TextReveal from "../TextReveal";

const EngineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  const blocks = [
    { id: "rd", label: "R&D", subtitle: "Research & Development", shape: "square" },
    { id: "ai", label: "AI", subtitle: "Agentic Intelligence", shape: "circle" },
    { id: "simple", label: "Simple", subtitle: "Accessible Solutions", shape: "rounded" },
  ];

  return (
    <section id="engine" className="py-24 lg:py-32 relative overflow-hidden bg-primary" style={{ backgroundColor: '#6f6f9b' }} ref={ref}>
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {/* Floating circles */}
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
              rotate: { duration: 30 + i * 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
        
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="engineGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#engineGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              className="font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
              style={{ color: '#F5A623' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              THE ENGINE
            </motion.span>
            
            <TextReveal delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'white' }}>
                Agentic AI & R&D
              </h2>
            </TextReveal>

            <motion.div
              className="h-1 rounded-full mx-auto my-10"
              style={{ backgroundColor: '#F5A623' }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 100 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          <motion.div
            className="text-center mb-16 space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              I don't believe in superficial layers. Every solution I present is <span style={{ color: '#F5A623', fontWeight: 600 }}>backend-heavy</span>, built on a foundation of rigorous Research and Development.
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              By utilizing <span style={{ color: 'white', fontWeight: 600 }}>Agentic AI</span>, I move beyond simple automation. I build systems that understand intent, anticipate needs, and act as a tireless partner for those in the medical and educational fields.
            </p>
          </motion.div>

          {/* Process Flow - Enhanced */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {blocks.map((block, index) => (
              <div key={block.id} className="flex items-center">
                <motion.div
                  className="relative group cursor-pointer"
                  onHoverStart={() => setHoveredBlock(block.id)}
                  onHoverEnd={() => setHoveredBlock(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Block container */}
                  <motion.div
                    className={`relative w-36 h-36 flex flex-col items-center justify-center transition-all duration-500 ${
                      block.shape === "circle" 
                        ? "rounded-full" 
                        : block.shape === "rounded" 
                          ? "rounded-2xl" 
                          : "rounded-sm"
                    }`}
                    style={{
                      backgroundColor: block.id === "simple" ? '#F5A623' : 'rgba(107, 122, 158, 0.3)',
                      border: block.id === "simple" ? 'none' : '2px solid #F5A623'
                    }}
                    animate={block.id === "ai" ? { 
                      boxShadow: [
                        "0 0 20px 0px rgba(245, 166, 35, 0.3)",
                        "0 0 40px 10px rgba(245, 166, 35, 0.4)",
                        "0 0 20px 0px rgba(245, 166, 35, 0.3)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Pulse rings for AI */}
                    {block.id === "ai" && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full border"
                          style={{ borderColor: 'rgba(245, 166, 35, 0.5)' }}
                          animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border"
                          style={{ borderColor: 'rgba(245, 166, 35, 0.5)' }}
                          animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </>
                    )}
                    
                    <span 
                      className="font-display font-bold text-2xl"
                      style={{ color: block.id === "simple" ? '#000000' : '#F5A623' }}
                    >
                      {block.label}
                    </span>
                    
                    {/* Subtitle on hover */}
                    <AnimatePresence>
                      {hoveredBlock === block.id && (
                        <motion.span
                          className="absolute -bottom-8 text-xs whitespace-nowrap"
                          style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {block.subtitle}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Corner accent for R&D */}
                  {block.id === "rd" && (
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-5 h-5"
                      style={{ backgroundColor: '#F5A623' }}
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>

                {/* Connectors */}
                {index < blocks.length - 1 && (
                  <div className="hidden lg:flex items-center mx-4">
                    <motion.div
                      className="relative w-20 h-1 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    >
                      {/* Base line */}
                      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: 'rgba(245, 166, 35, 0.3)' }} />
                      
                      {/* Animated flow */}
                      <motion.div
                        className="absolute inset-y-0 left-0 w-1/2 rounded-full"
                        style={{ background: 'linear-gradient(to right, transparent, #F5A623, transparent)' }}
                        animate={{ x: ["-50%", "150%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }}
                      />
                    </motion.div>
                    
                    {/* Arrow */}
                    <motion.svg 
                      className="w-4 h-4 ml-1"
                      style={{ color: '#F5A623' }} 
                      viewBox="0 0 16 16" 
                      fill="none"
                      initial={{ x: -5, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                    >
                      <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Tagline - Enhanced */}
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
              It is about making the difficult... <motion.span 
                className="inline-block"
                style={{ color: '#F5A623' }}
                whileHover={{ scale: 1.1 }}
              >simple.</motion.span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineSection;
