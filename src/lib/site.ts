import type { Locale } from "@/types/content";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.avocadolab.ai";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "REPLACE_WITH_APPROVED_EMAIL";

export function bookingUrl(locale: Locale): string {
  return process.env.NEXT_PUBLIC_BOOKING_URL || `/${locale}/contact`;
}

export function customerPortalUrl(locale: Locale): string {
  return process.env.NEXT_PUBLIC_CUSTOMER_PORTAL_URL || `/${locale}/contact`;
}
