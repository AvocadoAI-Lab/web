import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import type { Metadata } from "next";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { SideOutline } from "../../components/layout/SideOutline";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "threat intelligence",
      "cybersecurity",
      "SOC",
      "endpoint protection",
      "threat hunting",
      "SIEM",
      "XDR",
      "security operations",
      "AI security",
      "network detection",
      "enterprise security",
      "AvocadoAI",
    ],
    authors: [{ name: "AvocadoAI CO., LTD." }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "Avocado SenseL",
      locale: locale === "zh-Hant" ? "zh_TW" : "en_US",
      type: "website",
    },
    alternates: {
      languages: {
        en: "/en",
        "zh-Hant": "/zh-Hant",
      },
    },
    icons: [{ rel: "icon", url: "/favicon.ico", sizes: "any" }],
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = (await import(`../../i18n/locales/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <SideOutline />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
