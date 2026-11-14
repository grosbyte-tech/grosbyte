import { notFound, redirect } from "next/navigation";
import { getService, serviceCategories, serviceDetails } from "@/lib/services";
import { ServiceDetailPage } from "@/components/services/service-detail";
import { serviceMetadata } from "@/components/services/service-ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getServiceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return serviceDetails
    .filter(
      (service) =>
        service.slug !== "custom-software-development" &&
        service.slug !== "web-mobile-applications" &&
        service.slug !== "digital-marketing",
    )
    .map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (slug === "custom-software-development") {
    redirect("/custom-software-development");
  }
  if (slug === "web-mobile-applications") {
    redirect("/web-mobile-applications");
  }
  if (slug === "digital-marketing") {
    redirect("/digital-marketing");
  }
  const service = getService(slug);
  if (!service) notFound();
  return serviceMetadata(
    service.title,
    service.summary,
    `/services/${service.slug}`,
  );
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (slug === "custom-software-development") {
    redirect("/custom-software-development");
  }
  if (slug === "web-mobile-applications") {
    redirect("/web-mobile-applications");
  }
  if (slug === "digital-marketing") {
    redirect("/digital-marketing");
  }
  const service = getService(slug);
  if (!service) notFound();
  const category = serviceCategories.find(
    (item) => item.id === service.category,
  );
  if (!category) notFound();
  return (
    <>
      <JsonLd data={getServiceSchema(service)} />
      <ServiceDetailPage service={service} category={category} />
    </>
  );
}
