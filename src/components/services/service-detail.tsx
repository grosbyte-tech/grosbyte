import {
  type ServiceDetail,
  type ServiceCategory,
  serviceDetails,
} from "@/lib/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceHero } from "./service-hero";
import { ServiceCapabilities } from "./service-capabilities";
import { ServiceTechStack } from "./service-tech-stack";
import { ServiceProcess } from "./service-process";
import { ServiceEngagementModels } from "./service-engagement-models";
import { ServiceValueProp } from "./service-value-prop";
import { ServiceFAQ } from "./service-faq";
import { ServiceCTABanner } from "./service-cta-banner";
import type { HeroImageItem } from "./hero-image-grid";

export function ServiceDetailPage({
  service,
  category,
  heroImages,
}: {
  service: ServiceDetail;
  category: ServiceCategory;
  heroImages?: HeroImageItem[];
}) {
  const related = serviceDetails.filter(
    (item) => item.category === service.category && item.slug !== service.slug,
  );

  return (
    <div className="service-detail-wrapper">
      {/* 1. Hero with Impact Metrics */}
      <ServiceHero service={service} category={category} images={heroImages} />

      {/* 2. Core Capabilities & Deliverables Grid */}
      <ServiceCapabilities deliverables={service.deliverables} />

      {/* 3. Tech Stack Matrix */}
      <ServiceTechStack techStack={service.techStack} />

      {/* 4. 4-Phase Engineering Lifecycle */}
      <ServiceProcess processSteps={service.processSteps} />

      {/* 5. Flexible Engagement Models */}
      <ServiceEngagementModels
        engagementModels={service.engagementModels}
        serviceSlug={service.slug}
      />

      {/* 6. Why Grosbyte & Audience Fit */}
      <ServiceValueProp
        audience={service.audience}
        benefits={service.benefits}
        overview={service.overview}
      />

      {/* 7. Frequently Asked Questions Accordion */}
      <ServiceFAQ faq={service.faq} />

      {/* Related Services in Category */}
      {related.length > 0 && (
        <section
          className="service-section service-related-section"
          aria-labelledby="related-title"
        >
          <div className="container">
            <h2 id="related-title" className="service-related-title">
              Other Services in {category.title}
            </h2>
            <div className="service-related-grid">
              {related.map((item) => {
                const href =
                  item.slug === "custom-software-development"
                    ? "/custom-software-development"
                    : `/services/${item.slug}`;
                return (
                  <Link
                    key={item.slug}
                    href={href}
                    className="service-related-card"
                  >
                    <span className="service-related-name">{item.title}</span>
                    <span className="service-related-arrow">
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. Conversion Closing CTA */}
      <ServiceCTABanner
        serviceTitle={service.title}
        serviceSlug={service.slug}
      />
    </div>
  );
}
