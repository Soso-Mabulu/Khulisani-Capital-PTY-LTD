import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import MissionSection from '@/components/sections/mission-section';
import ValuesSection from '@/components/sections/values-section';
import ServicesSection from '@/components/sections/services-section';
import TeamsSection from '@/components/sections/teams-section';
import FaqSection from '@/components/sections/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <div className="animate-fade-in-up animation-delay-200">
        <AboutSection />
      </div>
      <div className="animate-fade-in-up animation-delay-400">
        <MissionSection />
      </div>
      <div className="animate-fade-in-up animation-delay-600">
        <ValuesSection />
      </div>
      <div className="animate-fade-in-up animation-delay-800">
        <ServicesSection />
      </div>
      <div className="animate-fade-in-up animation-delay-1000">
        <TeamsSection />
      </div>
      <div className="animate-fade-in-up animation-delay-1200">
        <FaqSection />
      </div>
    </div>
  );
}
