import { notFound } from "next/navigation";
import { getService } from "@/lib/services";
import { serviceMetadata } from "@/components/services/service-ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getServiceSchema } from "@/lib/seo/schema";
import { CustomSoftwareContent } from "@/components/services/custom-software-content";
import "./custom-software.css";

export const dynamic = "force-static";

export async function generateMetadata() {
  const service = getService("custom-software-development");
  if (!service) notFound();

  return serviceMetadata(
    "Custom Software Development",
    "Turn your ideas into powerful software. We build fast, scalable, and user-friendly applications that help you grow, automate, and stand out.",
    "/custom-software-development",
  );
}

export default function CustomSoftwareDevelopmentPage() {
  const service = getService("custom-software-development");
  if (!service) notFound();

  return (
    <main className="cs-page" id="main-content">
      <JsonLd data={getServiceSchema(service)} />
      <CustomSoftwareContent />
    </main>
  );
}
