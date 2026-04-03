import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'About', href: '/#meaning' },
  { label: 'Products', href: '/#products' },
  { label: 'Research', href: '/research' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/#connect' },
];

export const Navigation = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-vetkai-gold/20"
    >
      <nav className="vetkai-container py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <img src="/logo-transparent.png" alt="Vetkai Logo" className="h-12 w-auto dark:hidden" />
          <img src="/logo.png" alt="Vetkai Logo" className="h-12 w-auto hidden dark:block" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              <Link
                to={item.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/70 hover:text-vetkai-terracotta transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vetkai-gold transition-[width] duration-200 group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Status Indicator — vital-sign style */}
        <div className="flex items-center gap-2 border border-vetkai-gold/30 rounded-full px-3 py-1 bg-background">
          <span className="w-1.5 h-1.5 bg-vetkai-peacock rounded-full animate-pulse flex-shrink-0" />
          {/* EKG blip — single heartbeat drawn at ~60% opacity */}
          {/* <svg
            viewBox="0 0 52 14"
            className="w-[52px] h-[14px] text-vetkai-peacock flex-shrink-0"
            fill="none"
            aria-hidden
          >
            <polyline
              points="0,7 18,7 21,4 24,7 27,1 30,13 33,7 52,7"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.55"
            />
          </svg> */}
          <span className="text-[10px] tracking-widest uppercase text-foreground">India · Building</span>
        </div>
      </nav>
    </motion.header>
  );
};
