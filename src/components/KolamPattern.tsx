import { motion } from 'framer-motion';

export const KolamPattern = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none ${className}`}>
      <motion.svg
        width="800"
        height="800"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="w-[150vmax] h-[150vmax] md:w-[800px] md:h-[800px] text-vetkai-terracotta"
      >
        {/* Central Square/Dot Matrix Base */}
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <circle cx="50" cy="30" r="1.5" fill="currentColor" />
        <circle cx="50" cy="70" r="1.5" fill="currentColor" />
        <circle cx="30" cy="50" r="1.5" fill="currentColor" />
        <circle cx="70" cy="50" r="1.5" fill="currentColor" />
        
        {/* Rotating Petals/Loops - Simplified Kolam */}
        <path d="M50 20 C60 20 70 30 70 50 C70 70 60 80 50 80 C40 80 30 70 30 50 C30 30 40 20 50 20 Z" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20 50 C20 40 30 30 50 30 C70 30 80 40 80 50 C80 60 70 70 50 70 C30 70 20 60 20 50 Z" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Outer Decorative Ring */}
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.2" />
        
        {/* Mandala elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 50 50)`}>
             <path d="M50 10 L55 20 L50 25 L45 20 Z" fill="currentColor" />
             <path d="M50 5 L52 15 L50 18 L48 15 Z" stroke="currentColor" strokeWidth="0.2" />
          </g>
        ))}
      </motion.svg>
    </div>
  );
};
