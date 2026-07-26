import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/site-data";

export function AboutSection() {
  const statistics = [
    { value: "6", label: "Core Services" },
    { value: "7", label: "Delivery Stages" },
    { value: "18+", label: "Modern Technologies" },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">About Us</p>
          <h2>A technology partner focused on practical business outcomes.</h2>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-image">
            <Image
              src="/about.png"
              alt="Two professionals reviewing a digital product plan"
              width={1254}
              height={1254}
              sizes="(max-width: 820px) calc(100vw - 48px), 430px"
            />
          </Reveal>
          <Reveal className="about-copy" delay={0.06}>
            <p>
              Grosbyte Technologies helps businesses plan, design, build, and
              improve their digital presence. We combine software engineering,
              product design, intelligent automation, and digital growth
              strategies to create solutions that support real business goals.
            </p>
            <p>
              From a company&apos;s first digital product to custom software
              supporting daily operations, we focus on usability,
              maintainability, clear communication, and long-term value.
            </p>
            <Reveal className="statistics-grid" delay={0.08}>
              {statistics.map((statistic) => (
                <div className="statistic" key={statistic.label}>
                  <strong>{statistic.value}</strong>
                  <span>{statistic.label}</span>
                </div>
              ))}
            </Reveal>
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
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">Services</p>
          <h2>Practical expertise for your digital business.</h2>
          <p>
            Focused services that connect product development, automation, user
            experience, and digital growth without unnecessary complexity.
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
                <div className="service-keywords">
                  {service.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
