"use client";

import { useTranslations } from "next-intl";
import {
  Brain,
  Layers,
  Monitor,
  Network,
  BarChart3,
  ShieldOff,
} from "lucide-react";
import { FadeInView } from "../animations/FadeInView";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { GlowCard } from "../ui/GlowCard";

export function FeaturesSection() {
  const t = useTranslations("features");

  const features = [
    { key: "narrative", icon: Brain },
    { key: "xdr", icon: Layers },
    { key: "edr", icon: Monitor },
    { key: "ndr", icon: Network },
    { key: "dashboard", icon: BarChart3 },
    { key: "nocap", icon: ShieldOff },
  ] as const;

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {features.map(({ key, icon }) => (
            <GlowCard
              key={key}
              icon={icon}
              title={t(`${key}.title`)}
              description={t(`${key}.description`)}
              variants={staggerItem}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
