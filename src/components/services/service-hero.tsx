import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServiceCategory, ServiceDetail } from "@/lib/services";
import { HeroImageGrid, type HeroImageItem } from "./hero-image-grid";

export function ServiceHero({
  service,
  images,
}: {
  service: ServiceDetail;
  category?: ServiceCategory;
  images?: HeroImageItem[];
}) {
  const contactUrl = `/contact?service=${service.slug}`;
  const hasImages = Boolean(images && images.length > 0);

  return (
    <header className="service-hero-enterprise">
      <div className="container">
        {/* Hero Grid */}
        <div
          className={`service-hero-main ${hasImages ? "has-hero-images" : ""}`}
        >
          <div className="service-hero-copy">
            <h1 className="service-hero-headline">
              {service.title.split(" ")[0]}{" "}
              <span className="service-gradient-text">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="service-hero-tagline">{service.headline}</p>

            <p className="service-hero-lead">{service.summary}</p>

            <div className="service-hero-actions">
              <Button
                href={contactUrl}
                size="lg"
                className="service-primary-btn"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <a href="#capabilities" className="service-secondary-btn">
                <span>Explore Capabilities</span>
                <ArrowDown
                  className="w-4 h-4 ml-1 text-[var(--brand-blue)]"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="service-hero-trust-badges">
              <div className="trust-badge-item">
                <ShieldCheck
                  className="w-4 h-4 text-[var(--brand-blue)]"
                  aria-hidden="true"
                />
                <span>100% IP & Code Ownership</span>
              </div>
              <div className="trust-badge-item">
                <CheckCircle2
                  className="w-4 h-4 text-[var(--brand-blue)]"
                  aria-hidden="true"
                />
                <span>Agile 2-Week Sprints</span>
              </div>
            </div>
          </div>

          {hasImages && (
            <div className="service-hero-media">
              <HeroImageGrid images={images!} />
            </div>
          )}
        </div>

        {/* Impact Metrics Strip */}
        {service.metrics && service.metrics.length > 0 && (
          <div
            className="service-metrics-grid"
            aria-label="Key delivery metrics"
          >
            {service.metrics.map((metric) => (
              <div key={metric.label} className="service-metric-card">
                <div className="service-metric-value">{metric.value}</div>
                <div className="service-metric-label">{metric.label}</div>
                {metric.description && (
                  <p className="service-metric-desc">{metric.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
