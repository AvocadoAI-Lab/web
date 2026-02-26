"use client";

import { useTranslations } from "next-intl";
import { FadeInView } from "../animations/FadeInView";
import { SectionHeading } from "../ui/SectionHeading";
import { Quote } from "lucide-react";

interface CaseCardProps {
  role: string;
  name: string;
  background: string;
  pain: string;
  expectation: string;
  painLabel: string;
  expectLabel: string;
}

function CaseCard({
  role,
  name,
  background,
  pain,
  expectation,
  painLabel,
  expectLabel,
}: CaseCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-[var(--surface-glass)] p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-start gap-3">
        <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary/60" />
        <div>
          <h3 className="text-base font-semibold text-foreground">{name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>
        </div>
      </div>

      {/* Background */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {background}
      </p>

      {/* Pain & Expectation */}
      <div className="mt-4 space-y-3">
        <div className="rounded-lg bg-background/50 p-3">
          <p className="text-xs font-medium text-primary">{painLabel}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {pain}
          </p>
        </div>
        <div className="rounded-lg bg-background/50 p-3">
          <p className="text-xs font-medium text-primary">{expectLabel}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {expectation}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CasesSection() {
  const t = useTranslations("cases");

  return (
    <section id="cases" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CaseCard
              name={t("case1.name")}
              role={t("case1.role")}
              background={t("case1.background")}
              pain={t("case1.pain")}
              expectation={t("case1.expectation")}
              painLabel={t("painLabel")}
              expectLabel={t("expectLabel")}
            />
            <CaseCard
              name={t("case2.name")}
              role={t("case2.role")}
              background={t("case2.background")}
              pain={t("case2.pain")}
              expectation={t("case2.expectation")}
              painLabel={t("painLabel")}
              expectLabel={t("expectLabel")}
            />
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
