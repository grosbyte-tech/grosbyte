import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories, serviceDetails } from "@/lib/services";
import {
  ServiceBreadcrumbs,
  ServiceCTA,
  serviceMetadata,
} from "@/components/services/service-ui";

export const metadata = serviceMetadata(
  "Software, Business & Digital Marketing Services",
  "Explore Grosbyte’s software and application development, CRM/ERP, automation, AI, digital marketing, SEO, social media, and design services.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <ServiceBreadcrumbs current="Services" />
          <p className="eyebrow">Services</p>
          <h1>
            Practical <span className="text-brand-gradient">services</span> for your next{" "}
            <span className="text-brand-gradient">business challenge.</span>
          </h1>
          <p className="service-lead">
            Build a digital product, improve the way your team works, or
            strengthen your online presence. Explore the expertise that fits
            what you need to do next.
          </p>
          <div className="service-actions">
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
            <a className="service-text-link" href="#service-categories">
              Explore our services <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      <nav
        className="category-navigation container"
        aria-label="Service categories"
        id="service-categories"
      >
        {serviceCategories.map((category, index) => (
          <a href={`#${category.id}`} key={category.id}>
            <span className="service-number" aria-hidden="true">
              0{index + 1}
            </span>
            <span>{category.title}</span>
            <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className="service-category"
          aria-labelledby={`${category.id}-title`}
        >
          <div className="container service-category-layout">
            <div className="category-heading">
              <p className="eyebrow">0{index + 1} / Our expertise</p>
              <h2 id={`${category.id}-title`}>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <div className="service-catalogue">
              {serviceDetails
                .filter((service) => service.category === category.id)
                .map((service) => (
                  <article key={service.slug}>
                    <h3>
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                        <ArrowUpRight size={21} aria-hidden="true" />
                      </Link>
                    </h3>
                    <p>{service.summary}</p>
                    <Link
                      className="service-text-link"
                      href={`/services/${service.slug}`}
                      aria-label={`Explore ${service.title}`}
                    >
                      Explore this service <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}
      <ServiceCTA />
    </>
  );
}
