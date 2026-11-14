import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { getBreadcrumbListSchema } from "@/lib/schema";

export function serviceMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
): Metadata {
  const ogTitle = `${title} | Grosbyte Technologies`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      type: "website",
      siteName: "Grosbyte Technologies",
      images: [
        {
          url: image || "/images/og-default.png",
          width: 1200,
          height: 630,
          alt: ogTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image || "/images/og-default.png"],
    },
  };
}

export function ServiceBreadcrumbs({
  current,
  category,
}: {
  current: string;
  category?: { id: string; title: string };
}) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...(category
      ? [
          { name: "Services", url: "/custom-software-development" },
          { name: category.title },
        ]
      : []),
    { name: current },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbListSchema(breadcrumbItems)} />
      <nav className="service-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          {category && (
            <>
              <li>
                <Link href="/custom-software-development">Services</Link>
              </li>
              <li>
                <span>{category.title}</span>
              </li>
            </>
          )}
          <li aria-current="page">{current}</li>
        </ol>
      </nav>
    </>
  );
}

export function ServiceCTA({
  title = "Let’s find a practical way forward.",
  description = "Tell us what your business needs, what you already have, and what you would like to improve. We can explore a suitable next step together.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="service-cta" aria-labelledby="service-cta-title">
      <div className="container service-cta-layout">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 id="service-cta-title">{title}</h2>
          <p>{description}</p>
        </div>
        <Button href="/contact" size="lg">
          Start a Project
        </Button>
      </div>
    </section>
  );
}
