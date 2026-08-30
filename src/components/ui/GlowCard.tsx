"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";
import type { LucideIcon } from "lucide-react";

interface GlowCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variants?: Variants;
}

export function GlowCard({
  icon: Icon,
  title,
  description,
  className,
  variants,
}: GlowCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative rounded-xl border border-border",
        "bg-[var(--surface-glass)] backdrop-blur-sm",
        "p-6 lg:p-8",
        "transition-all duration-300",
        "hover:border-primary/30",
        "hover:shadow-[0_0_40px_-8px_var(--glow-primary)]",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
