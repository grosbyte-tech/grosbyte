import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  type ServiceDetail,
  type ServiceCategory,
  serviceDetails,
} from "@/lib/services";
import { ServiceBreadcrumbs, ServiceCTA } from "./service-ui";

export function ServiceDetailPage({
  service,
  category,
}: {
  service: ServiceDetail;
  category: ServiceCategory;
}) {
  const related = serviceDetails.filter(
    (item) => item.category === service.category && item.slug !== service.slug,
  );
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <ServiceBreadcrumbs current={service.title} category={category} />
          <p className="eyebrow">{category.title}</p>
          <h1>{service.title}</h1>
          <p className="service-tagline">{service.headline}</p>
          <p className="service-lead">{service.summary}</p>
          <div className="service-actions">
            <Button href="/#contact" size="lg">
              Discuss your project
            </Button>
            <a href="#deliverables" className="service-text-link">
              What we can deliver <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="container service-overview-layout">
          <div>
            <p className="eyebrow">The service</p>
            <h2>What it involves</h2>
            <p className="service-overview-copy">{service.overview}</p>
          </div>
          <aside className="service-audience" aria-labelledby="audience-title">
            <h2 id="audience-title">Who it’s for</h2>
            <ul>
              {service.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section
        className="service-section service-tinted"
        id="deliverables"
        aria-labelledby="deliverables-title"
      >
        <div className="container service-category-layout">
          <div className="category-heading">
            <p className="eyebrow">Scope & deliverables</p>
            <h2 id="deliverables-title">What Grosbyte can deliver</h2>
            <p>
              We agree on the deliverables, responsibilities, and priorities
              before implementation. The scope can include:
            </p>
          </div>
          <dl className="service-deliverables">
            {service.deliverables.map((item, index) => (
              <div key={item.title}>
                <dt>
                  <span className="service-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {item.title}
                </dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="service-section" aria-labelledby="benefits-title">
        <div className="container">
          <p className="eyebrow">Business value</p>
          <h2 id="benefits-title">How this can help</h2>
          <div className="service-benefits">
            {service.benefits.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="service-section service-tinted"
        aria-labelledby="starting-title"
      >
        <div className="container service-category-layout">
          <div>
            <p className="eyebrow">Getting started</p>
            <h2 id="starting-title">Start with your business context.</h2>
          </div>
          <div className="service-starting-copy">
            <p>{service.preparation}</p>
            <p>
              From there, we clarify requirements, agree on a suitable approach,
              and review the work against the agreed scope. Launch, handover,
              and support are planned to suit the project.
            </p>
            <Link href="/#how-we-work" className="service-text-link">
              See how we work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="service-section" aria-labelledby="questions-title">
        <div className="container service-category-layout">
          <div>
            <p className="eyebrow">Useful details</p>
            <h2 id="questions-title">Before we begin</h2>
          </div>
          <div className="service-faq">
            {service.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section
        className="service-related container"
        aria-labelledby="related-title"
      >
        <h2 id="related-title">Related services</h2>
        <ul>
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={`/services/${item.slug}`}>
                {item.title} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="service-text-link" href="/services">
          View all services <span aria-hidden="true">→</span>
        </Link>
      </section>
      <ServiceCTA
        title="Ready to discuss what you need?"
        description={`Tell us about your goals and requirements for ${service.title.toLowerCase()}. We’ll help you explore a practical scope and next step.`}
      />
    </>
  );
}
