"use client";

import { useTranslations } from "next-intl";
import { FadeInView } from "../animations/FadeInView";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export function PartnersSection() {
  const t = useTranslations("partners");

  const partners = [
    { key: "coconut" },
    { key: "wnc" },
  ] as const;

  return (
    <section id="partners" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
          staggerDelay={0.12}
        >
          {partners.map(({ key }) => (
            <motion.div
              key={key}
              variants={staggerItem}
              className="flex items-start gap-5 rounded-2xl border border-border bg-[var(--surface-glass)] p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                <Handshake className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`${key}.name`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
