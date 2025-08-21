import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import HelpSection from '@/components/sections/help';
import HowToApplySection from '@/components/sections/how-to-apply';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowToApplySection />
      <AboutSection />
      <HelpSection />
    </>
  );
}
