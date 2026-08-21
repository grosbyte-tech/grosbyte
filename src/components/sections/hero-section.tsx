"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";
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
        <h1>{t("hero.title")}</h1>
        <p className="hero-copy">
          {t("hero.copy")}
        </p>
        <div className="hero-actions">
          <Button
            variant="glowing"
            className="h-12 text-sm font-bold"
            onClick={() => window.location.href = "#contact"}
          >
            {t("hero.ctaPrimary")}{" "}
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-full px-6 border-slate-700 hover:bg-white/5 text-sm font-bold"
            onClick={() => window.location.href = "#services"}
          >
            {t("hero.ctaSecondary")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
