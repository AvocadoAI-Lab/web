"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FadeInView } from "../animations/FadeInView";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";

const cesImages = [
  { src: "/images/CES/S__20742346_0.jpg", alt: "CES 2025 - Avocado SenseL Booth" },
  { src: "/images/CES/S__3252228_0.jpg", alt: "CES 2025 - Product Demo" },
  { src: "/images/CES/S__4669447.jpg", alt: "CES 2025 - Team Exhibition" },
  { src: "/images/CES/S__4677641.jpg", alt: "CES 2025 - Live Showcase" },
];

export function CESSection() {
  const t = useTranslations("ces");

  return (
    <section id="ces" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2"
          staggerDelay={0.1}
        >
          {cesImages.map((image) => (
            <motion.div
              key={image.src}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-[var(--surface-glass)] backdrop-blur-sm transition-all duration-300 hover:border-primary/20"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
