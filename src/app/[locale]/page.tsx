import { HeroSection } from "../../components/sections/HeroSection";
import { FeaturesSection } from "../../components/sections/FeaturesSection";
import { CasesSection } from "../../components/sections/CasesSection";
import { AudienceSection } from "../../components/sections/AudienceSection";
import { CTASection } from "../../components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CasesSection />
      <AudienceSection />
      <CTASection />
    </>
  );
}
