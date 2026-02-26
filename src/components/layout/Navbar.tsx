"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "../../lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        "backdrop-blur-xl border-b",
        scrolled
          ? "bg-background/80 border-border shadow-lg"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/Avocado_SenseL_logo_transparent.png"
            alt="Avocado SenseL"
            width={120}
            height={36}
            className="h-8 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] brightness-125"
            priority
          />
        </a>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 xl:flex">
          <LanguageSwitcher />
          <a href="#cta">
            <Button size="sm">{t("demo")}</Button>
          </a>
        </div>

        {/* Mobile: language switcher + CTA + hamburger */}
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <a href="#cta" className="hidden sm:block">
            <Button size="sm">{t("demo")}</Button>
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
