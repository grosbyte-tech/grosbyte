import Link from "next/link";
import { ArrowRight, Check, Users } from "lucide-react";
import type { EngagementModel } from "@/lib/services";

export function ServiceEngagementModels({
  engagementModels,
  serviceSlug,
  title = "Flexible Engagement Models",
  subtitle = "Whether you need a dedicated full-stack product team, turnkey project delivery, or senior staff augmentation, we adapt to your roadmap.",
}: {
  engagementModels?: EngagementModel[];
  serviceSlug: string;
  title?: string;
  subtitle?: string;
}) {
  if (!engagementModels || engagementModels.length === 0) return null;

  return (
    <section
      className="service-section service-models-section"
      id="engagement-models"
      aria-labelledby="models-title"
    >
      <div className="container">
        <div className="service-section-header">
          <div className="service-eyebrow-pill">
            <Users className="w-3.5 h-3.5" aria-hidden="true" />
            <span>How We Partner</span>
          </div>
          <h2 id="models-title" className="service-section-title">
            {title}
          </h2>
          <p className="service-section-subtitle">{subtitle}</p>
        </div>

        <div className="service-models-grid">
          {engagementModels.map((model, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={model.title}
                className={`service-model-card ${isFeatured ? "service-model-card-featured" : ""}`}
              >
                {isFeatured && (
                  <div className="service-model-badge">
                    Most Flexible & Popular
                  </div>
                )}
                <div className="service-model-header">
                  <h3 className="service-model-title">{model.title}</h3>
                  <p className="service-model-tagline">{model.tagline}</p>
                </div>

                <p className="service-model-desc">{model.description}</p>

                <div className="service-model-bestfor">
                  <span className="bestfor-label">Best for:</span>
                  <p className="bestfor-text">{model.bestFor}</p>
                </div>

                <ul className="service-model-features">
                  {model.features.map((feat) => (
                    <li key={feat}>
                      <Check
                        className="w-4 h-4 text-[var(--brand-blue)] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-model-footer">
                  <Link
                    href={`/contact?service=${serviceSlug}`}
                    className={`service-model-cta ${isFeatured ? "service-model-cta-primary" : ""}`}
                  >
                    <span>Choose this model</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
