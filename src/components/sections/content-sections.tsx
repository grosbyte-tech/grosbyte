"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/site-data";
import { useTranslation } from "@/contexts/language-context";

const serviceKeys: Record<string, string> = {
  "Custom Software Development": "customSoftware",
  "Web Platforms and E-commerce": "webPlatforms",
  "Mobile Application Development": "mobileApp",
  "AI Automation and Data Analysis": "aiAutomation",
  "UI/UX and Product Design": "uiuxDesign",
  "Digital Marketing and Brand Growth": "digitalMarketing",
};

export function AboutSection() {
  const { t } = useTranslation();
  const statistics = [
    { value: "6", label: t("about.stats.services") },
    { value: "7", label: t("about.stats.stages") },
    { value: "18+", label: t("about.stats.technologies") },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2>{t("about.title")}</h2>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-image">
            <Image
              src="/about.png"
              alt={t("about.imageAlt")}
              width={1254}
              height={1254}
              sizes="(max-width: 820px) calc(100vw - 48px), 430px"
            />
          </Reveal>
          <Reveal className="about-copy" delay={0.06}>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
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
  const { t } = useTranslation();

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <h2>{t("services.title")}</h2>
          <p>{t("services.description")}</p>
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const key = serviceKeys[service.title];
            const translatedTitle = t(`services.list.${key}.title`);
            const translatedDescription = t(`services.list.${key}.description`);
            const translatedKeywords = t(`services.list.${key}.keywords`) as string[];

            return (
              <Reveal
                className="service-card"
                delay={index * 0.05}
                key={service.title}
              >
                <Icon aria-hidden="true" />
                <h3>{translatedTitle}</h3>
                <p>{translatedDescription}</p>
                <div className="service-keywords">
                  {translatedKeywords.map((keyword) => (
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
