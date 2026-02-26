"use client";

import { useTranslations } from "next-intl";
import {
  Database,
  HardDrive,
  Brain,
  BarChart3,
  ArrowDown,
  Monitor,
  Shield,
  Radio,
  Globe,
  Code,
  FileText,
} from "lucide-react";
import { FadeInView } from "../animations/FadeInView";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";

export function ArchitectureSection() {
  const t = useTranslations("architecture");

  const layers = [
    { key: "data", icon: Database, color: "from-blue-500/20 to-blue-600/10" },
    {
      key: "lake",
      icon: HardDrive,
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      key: "ai",
      icon: Brain,
      color: "from-violet-500/20 to-violet-600/10",
    },
    {
      key: "presentation",
      icon: BarChart3,
      color: "from-cyan-500/20 to-cyan-600/10",
    },
  ];

  const integrations = [
    { key: "edr", icon: Monitor },
    { key: "ndr", icon: Shield },
    { key: "syslog", icon: Radio },
    { key: "stix", icon: Globe },
    { key: "api", icon: Code },
    { key: "pdf", icon: FileText },
  ];

  return (
    <section id="architecture" className="relative py-24 lg:py-32">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.22_0.03_260)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView>
          <SectionHeading title={t("title")} />
        </FadeInView>

        {/* Architecture diagram */}
        <FadeInView delay={0.2}>
          <div className="mx-auto mt-16 max-w-3xl">
            {/* Core engine label */}
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Brain className="h-4 w-4" />
                {t("core")}
              </span>
            </div>

            {/* Layers */}
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <div key={layer.key}>
                  <div
                    className={`flex items-center gap-4 rounded-xl border border-border bg-gradient-to-r ${layer.color} p-4 backdrop-blur-sm`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/50">
                      <layer.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {t(`layers.${layer.key}`)}
                    </span>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Integration badges */}
        <FadeInView delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("integrations")}
            </h3>
            <StaggerContainer className="flex flex-wrap justify-center gap-3">
              {integrations.map((item) => (
                <motion.div
                  key={item.key}
                  variants={staggerItem}
                  className="flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {t(`integrationsList.${item.key}`)}
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
