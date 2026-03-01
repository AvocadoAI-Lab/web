"use client";

import { useTranslations } from "next-intl";
import {
  Brain,
  Layers,
  Monitor,
  Network,
  BarChart3,
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
  ] as const;

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <StaggerContainer
          className="mt-16 flex flex-wrap justify-center gap-6"
          staggerDelay={0.08}
        >
          {features.map(({ key, icon }) => (
            <GlowCard
              key={key}
              icon={icon}
              title={t(`${key}.title`)}
              description={t(`${key}.description`)}
              variants={staggerItem}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
