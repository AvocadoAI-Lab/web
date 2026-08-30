import type { MetadataRoute } from "next";
import { locales, routePaths } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.avocadolab.ai";
  return locales.flatMap((locale) => routePaths.map((path) => ({ url: `${base}/${locale}${path}`, changeFrequency: "monthly" as const })));
}
