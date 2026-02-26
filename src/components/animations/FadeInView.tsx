"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeInView({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const offsets = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
