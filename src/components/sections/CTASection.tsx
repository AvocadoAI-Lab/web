"use client";

import { useTranslations } from "next-intl";
import { FadeInView } from "../animations/FadeInView";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { Button } from "../ui/Button";
import { MessageCircleQuestion, Settings, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  const t = useTranslations("cta");

  const steps = [
    { key: "s1", icon: MessageCircleQuestion, number: "1" },
    { key: "s2", icon: Settings, number: "2" },
    { key: "s3", icon: ShieldCheck, number: "3" },
  ];

  return (
    <section id="cta" className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.24_0.05_260)] to-background" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.16_250_/_0.12)] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <FadeInView>
          <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t("title")}
          </h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </FadeInView>

        {/* 3-Step Flow */}
        <StaggerContainer
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          staggerDelay={0.12}
        >
          {steps.map((step) => (
            <motion.div
              key={step.key}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-[var(--surface-glass)] p-6 backdrop-blur-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {t(`steps.${step.key}title`)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`steps.${step.key}desc`)}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA buttons */}
        <FadeInView delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`mailto:${t("email")}`}>
              <Button
                size="lg"
                className="px-8 shadow-[0_0_30px_var(--glow-primary)]"
              >
                {t("demo")}
              </Button>
            </a>
            <a href={`mailto:${t("email")}`}>
              <Button variant="outline" size="lg" className="px-8">
                {t("contact")}
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {t("email")}
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
