"use client";

import Image from "next/image";
import { useTranslation } from "@/contexts/language-context";
import { GradientText } from "@/components/ui/gradient-text";

export function AboutWho() {
  const { t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);

  return (
    <section
      className="about-section about-who-section"
      id="who-we-are"
      aria-labelledby="who-title"
    >
      <div className="container">
        <div className="about-two-col-grid">
          {/* Left Column: Story Content */}
          <div className="about-col-copy">
            <h2 id="who-title" className="about-section-title">
              {copy("whoTitle")}
            </h2>

            <div className="about-body-text">
              <p>{copy("whoCopy")}</p>
              <p>{copy("whoSecond")}</p>
            </div>

            <div className="about-stat-strip">
              <div className="about-stat-box">
                <GradientText className="about-stat-num">10+</GradientText>
                <span className="about-stat-label">Core Capabilities</span>
              </div>
              <div className="about-stat-box">
                <GradientText className="about-stat-num">100%</GradientText>
                <span className="about-stat-label">Client Code Ownership</span>
              </div>
              <div className="about-stat-box">
                <GradientText className="about-stat-num">2-Week</GradientText>
                <span className="about-stat-label">Agile Sprints</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="about-col-media">
            <div className="about-image-card">
              <div className="about-image-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Product designers and developers mapping out digital solutions and software workflows"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                  className="about-section-image"
                />
                <div className="about-image-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
