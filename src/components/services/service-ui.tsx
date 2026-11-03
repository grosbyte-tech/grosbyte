import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export function serviceMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const pageTitle = `${title} | Grosbyte Technologies`;
  return {
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      type: "website",
      siteName: "Grosbyte Technologies",
      images: [
        {
          url: "/icons/logo-removebg.png",
          width: 1280,
          height: 1280,
          alt: "Grosbyte Technologies",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/icons/logo-removebg.png"],
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
  return (
    <nav className="service-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {category && (
          <>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href={`/services#${category.id}`}>{category.title}</Link>
            </li>
          </>
        )}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
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
        <Button href="/#contact" size="lg">
          Start a Project
        </Button>
      </div>
    </section>
  );
}
