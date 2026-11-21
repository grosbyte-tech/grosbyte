import { notFound } from "next/navigation";
import { getService } from "@/lib/services";
import { serviceMetadata } from "@/components/services/service-ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getServiceSchema } from "@/lib/seo/schema";
import { DigitalMarketingContent } from "@/components/services/digital-marketing-content";
import "./digital-marketing.css";

export const dynamic = "force-static";

export async function generateMetadata() {
  const service = getService("digital-marketing");
  if (!service) notFound();

  return serviceMetadata(
    "Digital Marketing and Brand Growth",
    "Grow your brand, reach the right audience, and turn clicks into loyal customers.",
    "/digital-marketing",
  );
}

export default async function DigitalMarketingPage() {
  const service = getService("digital-marketing");
  if (!service) notFound();

  return (
    <main className="cs-page" id="main-content">
      <JsonLd data={getServiceSchema(service)} />
      <DigitalMarketingContent />
    </main>
  );
}
