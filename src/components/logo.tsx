import Link from "next/link";
import type { Locale } from "@/types/content";

export function Logo({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  return (
    <Link aria-label="Avocado.ai home" className="inline-flex items-center gap-3" href={`/${locale}`}>
      <span className={`grid h-9 w-9 place-items-center rounded-xl border text-xs font-black tracking-tight ${inverse ? "border-white/20 bg-white/8 text-avocado" : "border-black/10 bg-graphite text-avocado"}`}>AI</span>
      <span className={`text-lg font-black tracking-[-0.035em] ${inverse ? "text-warm-white" : "text-graphite"}`}>avocado.ai</span>
    </Link>
  );
}
