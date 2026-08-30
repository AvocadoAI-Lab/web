import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ContactPage, FoundersPage, ResourcesPage, TrustPage } from "@/components/company-pages";
import { Home } from "@/components/home";
import { PlatformPage, SolutionPage } from "@/components/platform-solution";
import { Footer, Header } from "@/components/portal-ui";
import { content, isLocale, locales, routePaths, type RoutePath, type Site, type Solution } from "@/lib/content";

type Props = { params: Promise<{ locale: string; slug?: string[] }> };

// Permit the runtime fallback needed by Next.js optional catch-all routes.
// Unknown locales and paths are still rejected explicitly below with notFound().
export const dynamicParams = true;

export function generateStaticParams() {
  return locales.flatMap((locale) => routePaths.map((path) => ({
    locale,
    slug: path.split("/").filter(Boolean),
  })));
}

function routeFrom(slug?: string[]): RoutePath | null {
  const path = slug?.length ? `/${slug.join("/")}` : "";
  return (routePaths as readonly string[]).includes(path) ? path as RoutePath : null;
}

function titleFor(site: Site, route: RoutePath): string {
  if (route === "") return site.meta.title;
  if (route === "/platform") return site.pages.platform[0];
  if (route === "/company/founders") return site.pages.founders[0];
  if (route === "/trust") return site.pages.trust[0];
  if (route === "/resources") return site.pages.resources[0];
  if (route === "/contact") return site.pages.contact[0];
  const slug = route.split("/").at(-1);
  return (site.solutions as readonly Solution[]).find((item) => item.slug === slug)?.title || site.meta.title;
}

function descriptionFor(site: Site, route: RoutePath): string {
  if (route === "") return site.meta.description;
  if (route === "/platform") return site.pages.platform[2];
  if (route === "/company/founders") return site.pages.founders[2];
  if (route === "/trust") return site.pages.trust[2];
  if (route === "/resources") return site.pages.resources[2];
  if (route === "/contact") return site.pages.contact[2];
  const slug = route.split("/").at(-1);
  return (site.solutions as readonly Solution[]).find((item) => item.slug === slug)?.summary || site.meta.description;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const route = routeFrom(slug);
  if (route === null) return {};
  const site = content[locale];
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.avocadolab.ai";
  const canonical = `${base}/${locale}${route}`;
  return {
    title: titleFor(site, route), description: descriptionFor(site, route),
    alternates: { canonical, languages: { "zh-Hant": `${base}/zh-Hant${route}`, en: `${base}/en${route}` } },
    openGraph: { type: "website", siteName: "Avocado.ai", title: titleFor(site, route), description: descriptionFor(site, route), url: canonical, locale: locale === "zh-Hant" ? "zh_TW" : "en_US" },
  };
}

export default async function PortalPage({ params }: Props) {
  const { locale: value, slug } = await params;
  if (!isLocale(value)) notFound();
  const route = routeFrom(slug);
  if (route === null) notFound();
  const locale = value;
  const site = content[locale];
  let page: ReactNode;
  if (route === "") page = <Home locale={locale} site={site} />;
  else if (route === "/platform") page = <PlatformPage locale={locale} site={site} />;
  else if (route.startsWith("/solutions/")) page = <SolutionPage locale={locale} site={site} slug={route.split("/").at(-1) || ""} />;
  else if (route === "/company/founders") page = <FoundersPage locale={locale} site={site} />;
  else if (route === "/trust") page = <TrustPage locale={locale} site={site} />;
  else if (route === "/resources") page = <ResourcesPage locale={locale} site={site} />;
  else page = <ContactPage locale={locale} site={site} />;
  return <div lang={locale}><Header locale={locale} route={route} site={site} /><main id="main">{page}</main><Footer locale={locale} site={site} /></div>;
}
