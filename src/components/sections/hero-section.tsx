"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

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
        <h1>{t("hero.title")}</h1>
        <p className="hero-copy">
          {t("hero.copy")}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            {t("hero.ctaPrimary")} <ArrowRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#services">
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
