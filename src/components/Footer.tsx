import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative bg-background pt-24 pb-8 overflow-hidden">
      {/* Top Border - Padi Kolam Style */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDQwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9IiNDODQ2MzAiPjxwYXRoIGQ9Ik0wIDUgQzUgMCAxNSAwIDIwIDUgQzI1IDEwIDM1IDEwIDQwIDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="vetkai-container relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img src="/logo-transparent.png" alt="Vetkai" className="h-12 w-auto dark:hidden" />
              <img src="/logo.png" alt="Vetkai" className="h-12 w-auto hidden dark:block" />
            </motion.div>

            <p className="text-foreground/70 text-base leading-relaxed max-w-sm mb-8 font-serif">
              Meaningful systems for education and healthcare —
              built with intent, guided by science, and designed for the people we serve.
            </p>

            <div className="flex gap-4 text-xs font-medium tracking-wide text-vetkai-peacock uppercase">
              <span>Clarity</span>
              <span className="text-vetkai-gold">•</span>
              <span>Science</span>
              <span className="text-vetkai-gold">•</span>
              <span>Intent</span>
            </div>
          </div>

          {/* Links — Work */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-vetkai-terracotta mb-6">Work</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <Link to="/#products" className="hover:text-vetkai-gold flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-vetkai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  31Gauge
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-vetkai-gold flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-vetkai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Research
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-vetkai-gold flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-vetkai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Links — Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-vetkai-terracotta mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link to="/#meaning" className="hover:text-vetkai-gold">About</Link></li>
              <li><Link to="/#connect" className="hover:text-vetkai-gold">Connect</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-vetkai-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/60">
          <p className="tracking-wide">
            © {new Date().getFullYear()} Vetkai Private Limited.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-vetkai-peacock rounded-full" />
            <span className="tracking-[0.2em] uppercase">Vetkai — built with intent.</span>
          </div>
        </div>
      </div>

      {/* Background Texture — gold dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#FDB813_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
      {/* Sparse cross motifs — clinical + Kolam reference */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 38v24M38 50h24' stroke='%23C84630' strokeWidth='1.2' strokeLinecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />
    </footer>
  );
};
