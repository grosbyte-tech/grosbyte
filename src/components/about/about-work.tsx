"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function AboutWork() {
  const { t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);
  const rawWork = t<unknown>("phase1.aboutPage.work");
  const work = Array.isArray(rawWork)
    ? (rawWork as { title: string; description: string }[])
    : [];

  return (
    <section
      className="about-section about-work-section"
      id="working-together"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="about-two-col-grid">
          {/* Left Column: Heading, Intro & Supporting Imagery */}
          <div className="about-col-copy">
            <h2 id="work-title" className="about-section-title">
              {copy("workTitle")}
            </h2>

            <p className="about-section-lead">{copy("workIntro")}</p>

            <div className="about-inline-image-card">
              <div className="about-image-wrap aspect-16-10">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                  alt="Engineering team and client stakeholders aligning on project scope and deliverables"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="about-section-image"
                />
                <div className="about-image-overlay" aria-hidden="true" />
              </div>
            </div>

            <Link href="/custom-software-development" className="about-text-link">
              <span>{copy("workLink")}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Right Column: 3 Partnership Pillars */}
          <div className="about-col-pillars">
            <div className="about-pillars-list">
              {work.map((item, idx) => (
                <div key={item.title} className="about-pillar-card">
                  <div className="about-pillar-num" aria-hidden="true">
                    0{idx + 1}
                  </div>
                  <div className="about-pillar-content">
                    <h3 className="about-pillar-title">{item.title}</h3>
                    <p className="about-pillar-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
