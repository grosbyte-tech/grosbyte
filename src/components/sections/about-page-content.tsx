"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function AboutPageContent() {
  const { t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);
  const beliefs = t<{ title: string; description: string }[]>(
    "phase1.aboutPage.beliefs",
  );
  const work = t<
    {
      title: string;
      description: string;
    }[]
  >("phase1.aboutPage.work");
  return (
    <>
      <section
        className="page-hero about-page-hero"
        aria-labelledby="about-title"
      >
        <div className="container">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h1 id="about-title">{copy("title")}</h1>
          <p className="page-lead">{copy("intro")}</p>
          <div className="page-actions">
            <Button href="/contact" size="lg">
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      </section>
      <section className="section intro-section" aria-labelledby="who-title">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">{copy("whoLabel")}</p>
            <h2 id="who-title">{copy("whoTitle")}</h2>
          </div>
          <div className="editorial-copy">
            <p>{copy("whoCopy")}</p>
            <p>{copy("whoSecond")}</p>
          </div>
        </div>
      </section>
      <section
        className="section belief-section"
        aria-labelledby="belief-title"
      >
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">{copy("beliefLabel")}</p>
            <h2 id="belief-title">{copy("beliefTitle")}</h2>
          </div>
          <div className="principle-list">
            {beliefs.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="work-title">
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">{copy("workLabel")}</p>
            <h2 id="work-title">{copy("workTitle")}</h2>
            <p className="page-lead">{copy("workIntro")}</p>
            <Link className="text-link" href="/services">
              {copy("workLink")} <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="principle-list">
            {work.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section approach-section"
        aria-labelledby="approach-title"
      >
        <div className="container editorial-layout">
          <div className="editorial-heading">
            <p className="eyebrow">{copy("approachLabel")}</p>
            <h2 id="approach-title">{copy("approachTitle")}</h2>
          </div>
          <div className="editorial-copy">
            <p>{copy("approachCopy")}</p>
            <p>{copy("approachSecond")}</p>
            <Link className="text-link" href="/#how-we-work">
              {copy("approachLink")}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section closing-cta" aria-labelledby="cta-title">
        <div className="container cta-layout">
          <div className="editorial-heading">
            <h2 id="cta-title">{copy("ctaTitle")}</h2>
            <p>{copy("ctaCopy")}</p>
          </div>
          <Button href="/contact" size="lg">
            {t("nav.cta")}
          </Button>
        </div>
      </section>
    </>
  );
}
