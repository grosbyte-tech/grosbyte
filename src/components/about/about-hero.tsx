"use client";

import { useTranslation } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { NamasteAnimation } from "./namaste-animation";

export function AboutHero() {
  const { t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);

  return (
    <section className="about-hero-section" aria-labelledby="about-hero-title">
      {/* Subtle modern background grid mesh */}
      <div className="about-hero-mesh" aria-hidden="true" />

      <div className="container about-hero-container">
        <div className="about-hero-grid">
          {/* Left Column: Namaste in Nepali with ARAP007 font & forming motion */}
          <div className="about-hero-left">
            <NamasteAnimation />
          </div>

          {/* Right Column: Editorial Tech Narrative & Value Actions */}
          <div className="about-hero-right">
            <h1 id="about-hero-title" className="about-hero-headline">
              {copy("heroTitleLead")}{" "}
              <span className="highlight-blue">{copy("heroTitleHighlight")}</span>
            </h1>

            <p className="about-hero-lead">{copy("intro")}</p>

            <div className="about-hero-actions">
              <Button href="/contact" size="lg" className="about-primary-btn">
                <span>{t("nav.cta")}</span>
              </Button>
              <a href="#who-we-are" className="about-secondary-btn">
                <span>{copy("storyBtn") || "Our Story"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
