"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";
import { RollingText } from "@/components/motion/rolling-text";
import { AnimatedParagraph } from "@/components/motion/animated-paragraph";
import { Button } from "@/components/ui/button";
import { HeroLightBeams } from "@/components/ui/hero-light-beams";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <HeroLightBeams />
      <motion.div
        className="container hero-content"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">{t("hero.eyebrow")}</p>
        <RollingText as="h1" text={t("hero.title")} delay={0.1} />
        <AnimatedParagraph
          className="hero-copy"
          text={t("hero.copy")}
          delay={0.35}
        />
        <div className="hero-actions">
          <Button
            variant="glowing"
            size="lg"
            className="h-12 text-sm font-bold"
            onClick={() => (window.location.href = "#contact")}
          >
            {t("hero.ctaPrimary")}{" "}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 text-sm font-bold"
            onClick={() => (window.location.href = "#services")}
          >
            {t("hero.ctaSecondary")}{" "}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
