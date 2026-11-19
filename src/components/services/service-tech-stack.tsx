"use client";

import type { TechCategory } from "@/lib/services";
import { Cpu } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function ServiceTechStack({
  techStack,
  title,
  subtitle,
}: {
  techStack?: TechCategory[];
  title?: string;
  subtitle?: string;
}) {
  const { t } = useTranslation();

  if (!techStack || techStack.length === 0) return null;

  const displayTitle =
    title ||
    t("servicesDetail.techStack") ||
    "Enterprise-Grade Technologies & Tooling";

  const displaySubtitle =
    subtitle ||
    t("servicesDetail.techStackSub") ||
    "We select modern, battle-tested technologies that ensure lightning-fast performance, type-safe security, and effortless maintainability.";

  return (
    <section
      className="service-section service-tech-section"
      id="tech-stack"
      aria-labelledby="tech-stack-title"
    >
      <div className="container">
        <div className="service-section-header">
          <div className="service-eyebrow-pill">
            <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 id="tech-stack-title" className="service-section-title">
            {displayTitle}
          </h2>
          <p className="service-section-subtitle">{displaySubtitle}</p>
        </div>

        <div className="service-tech-grid">
          {techStack.map((group) => (
            <div key={group.category} className="service-tech-group-card">
              <h3 className="service-tech-group-title">{group.category}</h3>
              <div className="service-tech-pill-list">
                {group.technologies.map((tech) => (
                  <div key={tech.name} className="service-tech-pill">
                    <span className="service-tech-name">{tech.name}</span>
                    {tech.tag && (
                      <span className="service-tech-tag">{tech.tag}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
