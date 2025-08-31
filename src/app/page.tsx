import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import MissionSection from '@/components/sections/mission-section';
import ValuesSection from '@/components/sections/values-section';
import ServicesSection from '@/components/sections/services-section';
import TeamsSection from '@/components/sections/teams-section';
import FaqSection from '@/components/sections/faq-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ValuesSection />
      <ServicesSection />
      <TeamsSection />
      <FaqSection />
    </>
  );
}
