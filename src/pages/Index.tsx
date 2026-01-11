import { WarpGrid } from '@/components/WarpGrid';
import { GeometricCursor } from '@/components/GeometricCursor';
import { ScrollColorLerp } from '@/components/ScrollColorLerp';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import EngineSection from '@/components/sections/EngineSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen scroll-lerp">
      {/* Background Effects */}
      <WarpGrid />
      <ScrollColorLerp />
      
      {/* Custom Cursor */}
      <GeometricCursor />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        
        <div id="mission">
          <MissionSection />
        </div>

        <div id="values">
          <ValuesSection />
        </div>
        
        <div id="product">
          <EngineSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
