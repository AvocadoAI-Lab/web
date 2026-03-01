import { HeroSection } from "../../components/sections/HeroSection";
import { FeaturesSection } from "../../components/sections/FeaturesSection";
import { CasesSection } from "../../components/sections/CasesSection";
import { AudienceSection } from "../../components/sections/AudienceSection";
import { CESSection } from "../../components/sections/CESSection";
import { PartnersSection } from "../../components/sections/PartnersSection";
import { CTASection } from "../../components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CasesSection />
      <AudienceSection />
      <CESSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
