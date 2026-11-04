import { notFound } from "next/navigation";
import { getService, serviceCategories, serviceDetails } from "@/lib/services";
import { ServiceDetailPage } from "@/components/services/service-detail";
import { serviceMetadata } from "@/components/services/service-ui";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
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
  const service = getService(slug);
  if (!service) notFound();
  const category = serviceCategories.find(
    (item) => item.id === service.category,
  );
  if (!category) notFound();
  return <ServiceDetailPage service={service} category={category} />;
}
