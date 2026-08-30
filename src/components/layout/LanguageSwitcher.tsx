"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { cn } from "../../lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "zh-Hant" : "en";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={switchLocale}
      className={cn(
        "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer",
        className
      )}
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span>{locale === "en" ? t("zh-Hant") : t("en")}</span>
    </button>
  );
}
