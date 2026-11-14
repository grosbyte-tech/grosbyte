"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { AboutCtaVisual } from "./about-cta-visual";

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
          <div className="about-cta-grid">
            {/* Left Column: Narrative Content */}
            <div className="about-cta-content">
              <div className="about-cta-eyebrow">
                <GradientText>
                  {copy("ctaEyebrow") || "Let’s Build Something Meaningful"}
                </GradientText>
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
                </Button>
                <Link href="/custom-software-development" className="about-cta-link-secondary">
                  {copy("ctaSecondary") || "Explore all services"}
                </Link>
              </div>
            </div>

            {/* Right Column: Minimalist Engagement Card */}
            <div className="about-cta-media">
              <AboutCtaVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
