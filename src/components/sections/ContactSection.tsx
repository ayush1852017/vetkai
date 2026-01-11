import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ScrambleText';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    toast({
      title: "Inquiry Received",
      description: "Thank you for getting in touch. We will respond shortly.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative py-32 bg-background" id="contact">
      {/* Decorative Top Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-vetkai-gold/20" />
      
      <div className="vetkai-container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ScrambleText
              text="JOIN THE MISSION"
              as="h2"
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-tamil mb-6"
            />
            
            <p className="text-lg text-foreground/80 font-serif mb-8 leading-relaxed">
              We are always looking for passionate individuals and organizations to partner with. Whether you are an educator, a doctor, or a developer, there is a place for you in our ecosystem.
            </p>

            <div className="space-y-4">
               <div className="flex items-center gap-4 text-foreground">
                  <span className="w-12 h-px bg-vetkai-gold" />
                  <span className="text-sm font-bold tracking-widest uppercase">Contact Us</span>
               </div>
               <a href="mailto:hello@vetkai.com" className="block text-2xl font-medium text-vetkai-terracotta hover:text-vetkai-gold transition-colors">
                 hello@vetkai.com
               </a>
            </div>
          </motion.div>

          {/* Right Column: Simple Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 p-8 border border-border backdrop-blur-sm relative group"
          >
             {/* Corner Accents */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

             <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-vetkai-terracotta focus:outline-none transition-colors disabled:opacity-50" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Email</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-vetkai-terracotta focus:outline-none transition-colors disabled:opacity-50" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={3} 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-vetkai-terracotta focus:outline-none transition-colors disabled:opacity-50" 
                    placeholder="How can we help?" 
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
