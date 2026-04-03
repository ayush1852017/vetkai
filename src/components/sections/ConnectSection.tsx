import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ScrambleText';
import TextReveal from '@/components/TextReveal';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const AREA_OPTIONS = ['Education', 'Healthcare', 'Other'];

export const ConnectSection = () => {
  const { toast } = useToast();
  const [intent, setIntent] = useState<'build' | 'invest'>('build');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    problem: '',
    why: '',
    organisation: '',
    interest: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (intent === 'build') {
      if (!formData.name || !formData.email || !formData.area || !formData.problem || !formData.why) {
        toast({ title: 'Missing information', description: 'Please fill out all fields.', variant: 'destructive' });
        return;
      }
    } else {
      if (!formData.name || !formData.email || !formData.interest) {
        toast({ title: 'Missing information', description: 'Please fill Name, Email, and Area of interest.', variant: 'destructive' });
        return;
      }
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);

    setFormData({
      name: '',
      email: '',
      area: '',
      problem: '',
      why: '',
      organisation: '',
      interest: '',
    });

    if (intent === 'build') {
       toast({ title: 'Submission received', description: 'We review every submission carefully. Thank you.' });
    } else {
       toast({ title: 'Message received', description: "We'll be in touch as appropriate. Thank you." });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-vetkai-terracotta focus:outline-none transition-colors disabled:opacity-50 placeholder:text-foreground/30';
  const labelClass = 'block text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2';

  return (
    <section id="connect" className="relative py-28 md:py-36 bg-background overflow-hidden flex flex-col items-center">
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-vetkai-gold/25" />

      {/* Intent Toggle */}
      <div className="relative z-10 mb-16 px-6">
        <div className="inline-flex items-center p-1 bg-card/50 border border-border rounded-full backdrop-blur-sm">
          <button
            onClick={() => setIntent('build')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
              intent === 'build'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
            }`}
          >
            Build with us
          </button>
          <button
            onClick={() => setIntent('invest')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
              intent === 'invest'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
            }`}
          >
            Follow our journey
          </button>
        </div>
      </div>

      <div className="vetkai-container max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            key={intent} // re-animate on intent change
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {intent === 'build' ? (
              <>
                <ScrambleText
                  text="BUILD WITH US"
                  as="h2"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
                />
                <h3 className="text-xl md:text-2xl font-serif text-foreground/80 mb-8 leading-snug">
                  Have you seen a problem worth solving?
                </h3>
                <div className="space-y-5 text-base text-foreground/70 font-serif leading-relaxed">
                  <p>Some of the most meaningful systems begin with real problems.</p>
                  <p>If you've experienced something in education or healthcare that feels broken, unclear, or inefficient — we'd like to hear it.</p>
                  <p>We review submissions carefully, and where aligned, explore building solutions.</p>
                </div>
                {/* Decorative valli */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="w-32 h-px mt-10 bg-gradient-to-r from-vetkai-terracotta to-transparent origin-left"
                />
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 bg-vetkai-terracotta" />
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-vetkai-terracotta">
                    Investor interest
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-8">
                  For those who wish to<br />follow our journey.
                </h2>
                <div className="space-y-5 text-base text-foreground/65 font-serif leading-relaxed">
                  <TextReveal delay={0.1}>
                    <p>We are currently focused on building with discipline and intent.</p>
                  </TextReveal>
                  <TextReveal delay={0.25}>
                    <p>For individuals or institutions interested in understanding our work — or staying connected as we grow — we welcome you to reach out.</p>
                  </TextReveal>
                </div>
                {/* Subtle note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="mt-10 text-xs text-foreground/35 font-serif italic"
                >
                  We are selective about who we grow with.
                </motion.p>
              </>
            )}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            key={`form-${intent}`} // subtle re-render flash
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-card/50 p-8 border border-border backdrop-blur-sm"
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary transition-colors" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary transition-colors" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary transition-colors" />

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className={labelClass}>Name</label>
                <input name="name" type="text" value={formData.name} onChange={handleChange}
                  disabled={isSubmitting} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange}
                  disabled={isSubmitting} className={inputClass} placeholder="Your email" />
              </div>

              {intent === 'build' ? (
                <>
                  <div>
                    <label className={labelClass}>Area</label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select an area</option>
                      {AREA_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Describe the problem</label>
                    <textarea name="problem" rows={3} value={formData.problem} onChange={handleChange}
                      disabled={isSubmitting} className={inputClass}
                      placeholder="What is the problem you've encountered?" />
                  </div>
                  <div>
                    <label className={labelClass}>Why it matters</label>
                    <textarea name="why" rows={2} value={formData.why} onChange={handleChange}
                      disabled={isSubmitting} className={inputClass}
                      placeholder="Why does this problem need to be solved?" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className={labelClass}>Organisation <span className="normal-case tracking-normal font-normal opacity-60">(optional)</span></label>
                    <input name="organisation" type="text" value={formData.organisation} onChange={handleChange}
                      disabled={isSubmitting} className={inputClass} placeholder="Where you're based" />
                  </div>
                  <div>
                    <label className={labelClass}>Area of interest</label>
                    <textarea name="interest" rows={3} value={formData.interest} onChange={handleChange}
                      disabled={isSubmitting} className={inputClass}
                      placeholder="What draws you to Vetkai's work?" />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> {intent === 'build' ? 'Submitting...' : 'Sending...'}</>
                ) : (
                  intent === 'build' ? 'Submit a problem' : 'Get in touch'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
