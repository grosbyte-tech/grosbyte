import { notFound } from "next/navigation";
import { getService, serviceCategories } from "@/lib/services";
import { ServiceDetailPage } from "@/components/services/service-detail";
import { serviceMetadata } from "@/components/services/service-ui";
import type { HeroImageItem } from "@/components/services/hero-image-grid";
import "../services/services.css";

export const dynamic = "force-static";

export const customSoftwareHeroImages: HeroImageItem[] = [
  {
    id: "software-engineering-code",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    alt: "Clean modern software code and backend syntax on a high-resolution development monitor",
  },
  {
    id: "software-team-collaboration",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Cross-functional engineering team collaborating on software product architecture",
  },
  {
    id: "analytics-cloud-dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "Interactive data analytics dashboard and business performance metrics",
  },
  {
    id: "product-ui-devices",
    src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    alt: "Modern digital product design, application interfaces, and responsive user experience layouts",
  },
];

export async function generateMetadata() {
  const service = getService("custom-software-development");
  if (!service) notFound();

  return serviceMetadata(
    service.title,
    service.summary,
    "/custom-software-development",
  );
}

export default function CustomSoftwareDevelopmentPage() {
  const service = getService("custom-software-development");
  if (!service) notFound();

  const category = serviceCategories.find(
    (item) => item.id === service.category,
  );
  if (!category) notFound();

  return (
    <main className="services-page" id="main-content" tabIndex={-1}>
      <ServiceDetailPage
        service={service}
        category={category}
        heroImages={customSoftwareHeroImages}
      />
    </main>
  );
}
