import { WarpGrid } from '@/components/WarpGrid';
import { GeometricCursor } from '@/components/GeometricCursor';
import { ScrollColorLerp } from '@/components/ScrollColorLerp';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { VetkaiMeaningSection } from '@/components/sections/VetkaiMeaningSection';
import { BeliefSection } from '@/components/sections/BeliefSection';
import { HowWeBuildSection } from '@/components/sections/HowWeBuildSection';
import { AIPhilosophySection } from '@/components/sections/AIPhilosophySection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ScienceOfSection } from '@/components/sections/ScienceOfSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { ConnectSection } from '@/components/sections/ConnectSection';
import { LongTermVisionSection } from '@/components/sections/LongTermVisionSection';
import { Footer } from '@/components/Footer';

/** Thin full-width heartbeat divider — one PQRST blip centred in the line */
const EKGDivider = () => (
  <div className="relative overflow-hidden pointer-events-none" aria-hidden="true">
    <svg viewBox="0 0 1440 20" className="w-full h-5" preserveAspectRatio="none" fill="none">
      <polyline
        points="0,10 675,10 685,7 690,10 696,2 703,18 709,10 720,10 1440,10"
        stroke="hsl(var(--vetkai-terracotta))"
        strokeWidth="1"
        opacity="0.18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

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

        <div id="meaning">
          <VetkaiMeaningSection />
        </div>

        <div id="beliefs">
          <BeliefSection />
        </div>

        <EKGDivider />

        <div id="how-we-build">
          <HowWeBuildSection />
        </div>

        <div id="ai">
          <AIPhilosophySection />
        </div>

        <div id="products">
          <ProductsSection />
        </div>

        <div id="science">
          <ScienceOfSection />
        </div>

        <EKGDivider />

        <div id="philosophy">
          <ValuesSection />
        </div>

        <ConnectSection />

        <div id="vision">
          <LongTermVisionSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
