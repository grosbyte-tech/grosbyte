import { MapPin, MonitorCog, Workflow } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/site-data";

export function AboutSection() {
  const facts = [
    { value: "Kathmandu, Nepal", label: "Our base", icon: MapPin },
    { value: "Remote Collaboration", label: "How we work", icon: Workflow },
    { value: "Software to Growth", label: "What we support", icon: MonitorCog },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">About Grosbyte</p>
          <h2>A technology partner focused on practical business outcomes.</h2>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-copy">
            <p>
              Grosbyte Technologies helps businesses plan, design, build, and
              improve their digital presence. We combine software engineering,
              modern design, branding, and digital marketing to create solutions
              that support real business goals.
            </p>
            <p>
              From a company&apos;s first professional website to custom
              software supporting daily operations, we focus on usability,
              maintainability, clear communication, and long-term value.
            </p>
          </Reveal>
          <Reveal className="facts" delay={0.08}>
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div className="fact" key={fact.value}>
                  <Icon aria-hidden="true" />
                  <div>
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Practical expertise for your digital business.</h2>
          <p>
            Focused services that connect product, presence, and growth without
            adding unnecessary complexity.
          </p>
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                className="service-card"
                delay={index * 0.05}
                key={service.title}
              >
                <Icon aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
