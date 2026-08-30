"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("product"),
      links: [
        { label: t("links.features"), href: "#features" },
        { label: t("links.demo"), href: "#cta" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("links.about"), href: "#" },
        { label: t("links.contact"), href: "#cta" },
      ],
    },
    {
      title: t("resources"),
      links: [
        { label: t("links.docs"), href: "#" },
        { label: t("links.support"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/Avocado_SenseL_logo_transparent.png"
              alt="Avocado SenseL"
              width={120}
              height={36}
              className="h-7 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] brightness-125"
            />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {t("tagline")}
            </p>
            <p className="mt-2 max-w-xs text-xs text-muted-foreground/70">
              {t("address")}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {t("companyName")}{" "}
            {t("rights")}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
