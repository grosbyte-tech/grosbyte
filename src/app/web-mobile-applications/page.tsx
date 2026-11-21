import { notFound } from "next/navigation";
import { getService } from "@/lib/services";
import { serviceMetadata } from "@/components/services/service-ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getServiceSchema } from "@/lib/seo/schema";
import { WebMobileContent } from "@/components/services/web-mobile-content";
import "./web-mobile.css";

export const dynamic = "force-static";

export async function generateMetadata() {
  const service = getService("web-mobile-applications");
  if (!service) notFound();

  return serviceMetadata(
    "Web & Mobile Application Development",
    "From idea to launch, we build fast, reliable and user-friendly apps for web and mobile.",
    "/web-mobile-applications",
  );
}

export default async function WebAndMobileDevelopmentPage() {
  const service = getService("web-mobile-applications");
  if (!service) notFound();

  return (
    <main className="cs-page page-web-mobile" id="main-content">
      <JsonLd data={getServiceSchema(service)} />
      <WebMobileContent />
    </main>
  );
}
