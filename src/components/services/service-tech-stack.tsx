import type { TechCategory } from "@/lib/services";
import { Cpu } from "lucide-react";

export function ServiceTechStack({
  techStack,
  title = "Enterprise-Grade Technologies & Tooling",
  subtitle = "We select modern, battle-tested technologies that ensure lightning-fast performance, type-safe security, and effortless maintainability.",
}: {
  techStack?: TechCategory[];
  title?: string;
  subtitle?: string;
}) {
  if (!techStack || techStack.length === 0) return null;

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
            {title}
          </h2>
          <p className="service-section-subtitle">{subtitle}</p>
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
