import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Mission', href: '#mission' },
  { label: 'Values', href: '#values' },
  { label: 'Product', href: '#product' },
  { label: 'Contact', href: '#contact' },
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
        <a 
          href="#" 
          className="flex items-center gap-2 group"
        >
          <img src="/VL D.png" alt="Vetkai Logo" className="h-12 w-auto dark:hidden" />
          <img src="/VL W.png" alt="Vetkai Logo" className="h-12 w-auto hidden dark:block" />
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              <a
                href={item.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/70 hover:text-vetkai-terracotta transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vetkai-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Status Indicator / Mobile Menu */}
        <div className="flex items-center gap-3 border border-vetkai-gold/30 rounded-full px-3 py-1 bg-background">
          <span className="w-1.5 h-1.5 bg-vetkai-peacock rounded-full animate-pulse" />
          <span className="text-[10px] tracking-widest uppercase text-foreground">India</span>
        </div>
      </nav>
    </motion.header>
  );
};
