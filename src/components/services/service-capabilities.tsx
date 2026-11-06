import type { DeliverableItem } from "@/lib/services";
import { Layers } from "lucide-react";

export function ServiceCapabilities({
  deliverables,
  title = "Core Capabilities & Deliverables",
  subtitle = "Every system is engineered from the ground up to match your operational requirements, performance standards, and security benchmarks.",
}: {
  deliverables: DeliverableItem[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      className="service-section service-capabilities-section"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="container">
        <div className="service-section-header">
          <div className="service-eyebrow-pill">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Scope & Architecture</span>
          </div>
          <h2 id="capabilities-title" className="service-section-title">
            {title}
          </h2>
          <p className="service-section-subtitle">{subtitle}</p>
        </div>

        <div className="service-capabilities-grid">
          {deliverables.map((item, idx) => (
            <article key={item.title} className="service-capability-card">
              <div className="service-capability-header">
                <span className="service-card-index" aria-hidden="true">
                  0{idx + 1}
                </span>
                <h3 className="service-capability-title">{item.title}</h3>
              </div>
              <p className="service-capability-desc">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div
                  className="service-capability-tags"
                  aria-label="Key technologies"
                >
                  {item.tags.map((tag) => (
                    <span key={tag} className="service-capability-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
