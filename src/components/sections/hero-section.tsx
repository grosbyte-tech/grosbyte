"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { HeroIllustration } from "./hero-illustration";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  const ctaButtons = [
    {
      href: "/contact",
      variant: "glowing" as const,
      label: t("hero.ctaPrimary"),
    },
    {
      href: "/services",
      variant: "outline" as const,
      label: t("hero.ctaSecondary"),
    },
  ];

  return (
    <section className="hero relative overflow-hidden bg-[#F1F5F9]" id="home">
      <div className="container relative z-10 pt-4 sm:pt-6 lg:pt-8 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* ========================================================
              LEFT COLUMN: Editorial Content & Value Proposition
              ======================================================== */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow Label */}
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--brand-blue)] font-mono mb-4 sm:mb-5">
              {t("hero.eyebrow")}
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.65rem] xl:text-[4.15rem] font-extrabold text-slate-900 tracking-[-0.035em] leading-[1.06] text-balance">
              {t("hero.titlePrefix")}
              <GradientText variant="brand" className="inline-block">
                {t("hero.titleHighlight")}
              </GradientText>
              {t("hero.titleSuffix")}
            </h1>

            {/* Supporting Description */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-[1.125rem] text-slate-600 leading-relaxed max-w-xl font-normal">
              {t("hero.copy")}
            </p>

            {/* Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              {ctaButtons.map((btn) => (
                <Button
                  key={btn.href}
                  href={btn.href}
                  variant={btn.variant}
                  size="lg"
                  className="h-12 min-h-[48px] px-8 text-sm font-bold"
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: Technical Isometric Illustration
              ======================================================== */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
