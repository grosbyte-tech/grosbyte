"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  const { t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);

  return (
    <section
      className="about-closing-cta-section"
      aria-labelledby="about-cta-title"
    >
      <div className="container">
        <div className="about-cta-card">
          <div className="about-cta-content">
            <div className="about-cta-eyebrow">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Let’s Build Something Meaningful</span>
            </div>
            <h2 id="about-cta-title" className="about-cta-title">
              {copy("ctaTitle")}
            </h2>
            <p className="about-cta-desc">{copy("ctaCopy")}</p>
            <div className="about-cta-actions">
              <Button
                href="/contact"
                size="lg"
                className="about-cta-btn-primary"
              >
                <span>{t("nav.cta")}</span>
                <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <Link href="/services" className="about-cta-link-secondary">
                Explore all services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
