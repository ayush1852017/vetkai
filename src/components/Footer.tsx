import { motion } from 'framer-motion';

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
              <img src="/VL D.png" alt="Vetkai" className="h-12 w-auto dark:hidden" />
              <img src="/VL W.png" alt="Vetkai" className="h-12 w-auto hidden dark:block" />
            </motion.div>
            
            <p className="text-foreground/70 text-base leading-relaxed max-w-sm mb-8 font-serif">
              Building communities and products for change in healthcare & education in India, 
              by doing the right things and challenging the status quo.
            </p>
            
            <div className="flex gap-4 text-xs font-medium tracking-wide text-vetkai-peacock uppercase">
              <span>Trust</span>
              <span className="text-vetkai-gold">•</span>
              <span>Excellence</span>
              <span className="text-vetkai-gold">•</span>
              <span>Empowerment</span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-vetkai-terracotta mb-6">Initiatives</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-vetkai-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-vetkai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"/> Education</a></li>
              <li><a href="#" className="hover:text-vetkai-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-vetkai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"/> Healthcare</a></li>
              <li><a href="#" className="hover:text-vetkai-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-vetkai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"/> Community</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-vetkai-terracotta mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-vetkai-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-vetkai-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-vetkai-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-vetkai-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/60">
          <p className="tracking-wide">
            © {new Date().getFullYear()} VETKAI. Transforming Healthcare & Education.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-vetkai-peacock rounded-full" />
            <span className="tracking-[0.2em] uppercase">Made with Tradition & Tech</span>
          </div>
        </div>
      </div>
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#FDB813_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
    </footer>
  );
};
