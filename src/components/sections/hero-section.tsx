"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";
import { RollingText } from "@/components/motion/rolling-text";
import { AnimatedParagraph } from "@/components/motion/animated-paragraph";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
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
            className="h-12 text-sm font-bold"
            onClick={() => (window.location.href = "#contact")}
          >
            {t("hero.ctaPrimary")}{" "}
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-full px-6 border-slate-700 hover:bg-white/5 text-sm font-bold"
            onClick={() => (window.location.href = "#services")}
          >
            {t("hero.ctaSecondary")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
