"use client";

import { useTranslations } from "next-intl";
import { Factory, Building2, Hospital, CheckCircle } from "lucide-react";
import { FadeInView } from "../animations/FadeInView";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface PersonaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

function PersonaCard({ icon: Icon, title, description, points }: PersonaCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="rounded-2xl border border-border bg-[var(--surface-glass)] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/20"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-[oklch(0.55_0.20_290_/_0.15)] ring-1 ring-primary/20">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <ul className="mt-5 space-y-2.5 text-left">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-baseline gap-2 text-sm text-muted-foreground"
          >
            <CheckCircle className="h-4 w-4 shrink-0 translate-y-[2px] text-primary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function AudienceSection() {
  const t = useTranslations("audience");

  const personas = [
    {
      key: "manufacturing",
      icon: Factory,
    },
    {
      key: "enterprise",
      icon: Building2,
    },
    {
      key: "critical",
      icon: Hospital,
    },
  ] as const;

  return (
    <section id="audience" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          staggerDelay={0.12}
        >
          {personas.map(({ key, icon }) => (
            <PersonaCard
              key={key}
              icon={icon}
              title={t(`${key}.title`)}
              description={t(`${key}.description`)}
              points={[
                t(`${key}.points.p1`),
                t(`${key}.points.p2`),
                t(`${key}.points.p3`),
              ]}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
