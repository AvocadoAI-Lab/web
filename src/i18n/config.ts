export const locales = ["en", "zh-Hant"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
