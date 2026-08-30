import { en } from "@/lib/content/en";
import { zh } from "@/lib/content/zh";

export const locales = ["zh-Hant", "en"] as const;
export type Locale = (typeof locales)[number];

export const routePaths = [
  "",
  "/platform",
  "/solutions/managed-security",
  "/solutions/fab-intelligence",
  "/solutions/healthcare-resilience",
  "/company/founders",
  "/trust",
  "/resources",
  "/contact",
] as const;
export type RoutePath = (typeof routePaths)[number];

export const content = { "zh-Hant": zh, en } as const;
export type Site = (typeof content)[Locale];
export type Pair = readonly [string, string];
export type Triple = readonly [string, string, string];
export type Proof = readonly [string, string, string, string];
export type Founder = readonly [string, string, string, string];
export type Solution = {
  readonly slug: string;
  readonly kicker: string;
  readonly title: string;
  readonly summary: string;
  readonly audience: readonly string[];
  readonly challenges: readonly string[];
  readonly capabilities: readonly string[];
  readonly outcomes: readonly string[];
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localized(locale: Locale, path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  if (path.startsWith("#")) return `/${locale}${path}`;
  return `/${locale}${path}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "zh-Hant" ? "en" : "zh-Hant";
}
