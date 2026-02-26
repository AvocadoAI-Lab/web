"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#features", key: "features" },
  { href: "#cases", key: "cases" },
  { href: "#audience", key: "audience" },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-16 z-50 border-b border-border bg-background/95 backdrop-blur-xl"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {navLinks.map(({ href, key }) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {t(key)}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
