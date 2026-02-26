"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "../../lib/utils";

const sections = [
  { id: "features", key: "features" },
  { id: "cases", key: "cases" },
  { id: "audience", key: "audience" },
] as const;

export function SideOutline() {
  const [activeSection, setActiveSection] = useState<string>("");
  const t = useTranslations("nav");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:flex">
      <ul className="flex flex-col gap-4">
        {sections.map(({ id, key }) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-3"
                aria-label={t(key)}
              >
                {/* Label */}
                <span
                  className={cn(
                    "text-xs font-medium transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                    isActive && "opacity-100 translate-x-0"
                  )}
                  style={{
                    color: isActive
                      ? "var(--foreground)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {t(key)}
                </span>

                {/* Dot */}
                <span
                  className={cn(
                    "block h-2 w-2 rounded-full transition-all duration-300",
                    isActive
                      ? "bg-primary scale-125 shadow-[0_0_8px_var(--glow-primary)]"
                      : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
