"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "../ui/Button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function HeroSection() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stats.s1Value"), label: t("stats.s1Label") },
    { value: t("stats.s2Value"), label: t("stats.s2Label") },
    { value: t("stats.s3Value"), label: t("stats.s3Label") },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,oklch(0.20_0.025_260),oklch(0.24_0.07_270)_50%,oklch(0.20_0.02_260))]">
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-20" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[oklch(0.50_0.18_270_/_0.15)] blur-[120px]" />
      <div className="pointer-events-none absolute right-[20%] top-1/3 h-[300px] w-[300px] rounded-full bg-[oklch(0.55_0.14_250_/_0.10)] blur-[80px] glow-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          {t("badge")}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {t("title.line1")}
          <br />
          <span className="bg-gradient-to-r from-[oklch(0.65_0.18_250)] via-[oklch(0.60_0.20_280)] to-[oklch(0.55_0.25_290)] bg-clip-text text-transparent">
            {t("title.line2")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#cta">
            <Button size="lg">{t("cta.demo")}</Button>
          </a>
          <a href="#features">
            <Button variant="outline" size="lg">
              {t("cta.learn")}
            </Button>
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          {...fadeUp(0.5)}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
