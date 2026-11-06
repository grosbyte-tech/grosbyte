import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceCTABanner({
  serviceTitle,
  serviceSlug,
}: {
  serviceTitle: string;
  serviceSlug: string;
}) {
  const contactHref = `/contact?service=${serviceSlug}`;

  return (
    <section
      className="service-cta-enterprise"
      aria-labelledby="cta-banner-title"
    >
      <div className="container">
        <div className="service-cta-card">
          <div className="service-cta-content">
            <div className="service-cta-eyebrow">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Let’s Build Something Remarkable</span>
            </div>
            <h2 id="cta-banner-title" className="service-cta-headline">
              Ready to engineer your {serviceTitle.toLowerCase()}?
            </h2>
            <p className="service-cta-description">
              Schedule an architecture discovery session with our senior
              engineers. We’ll review your workflow, discuss technical
              feasibility, and map out a practical MVP roadmap.
            </p>
            <div className="service-cta-actions">
              <Button
                href={contactHref}
                size="lg"
                className="service-cta-btn-primary"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <Link href="/about" className="service-cta-link-secondary">
                Learn more about our team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
