"use client";

import { Compass, ShieldCheck, Target, Users2 } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

const beliefIcons = [Target, Compass, ShieldCheck, Users2];

export function AboutBeliefs() {
  const { t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);
  const rawBeliefs = t<unknown>("phase1.aboutPage.beliefs");
  const beliefs = Array.isArray(rawBeliefs)
    ? (rawBeliefs as { title: string; description: string }[])
    : [];

  return (
    <section
      className="about-section about-beliefs-section"
      id="principles"
      aria-labelledby="belief-title"
    >
      <div className="container">
        <div className="about-section-header">
          <h2 id="belief-title" className="about-section-title">
            {copy("beliefTitle")}
          </h2>
          <p className="about-section-subtitle">
            {copy("beliefSubtitle") ||
              "These foundational standards guide how we engineer software, make architectural decisions, and communicate with partners every day."}
          </p>
        </div>

        <div className="about-beliefs-grid">
          {beliefs.map((item, idx) => {
            const Icon = beliefIcons[idx % beliefIcons.length];
            return (
              <article key={item.title} className="about-belief-card">
                <div className="about-belief-card-top">
                  <div className="about-belief-icon-box">
                    <Icon
                      className="w-6 h-6 text-[var(--brand-blue)]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="about-belief-card-title">{item.title}</h3>
                <p className="about-belief-card-desc">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
