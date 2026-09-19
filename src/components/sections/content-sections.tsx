"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { RollingText } from "@/components/motion/rolling-text";
import { AnimatedParagraph } from "@/components/motion/animated-paragraph";
import { AnimatedCounter } from "@/components/motion/counter";
import { services } from "@/lib/site-data";
import { useTranslation } from "@/contexts/language-context";
import { ServicesGridBeams } from "@/components/ui/services-grid-beams";

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
          <RollingText as="h2" text={t("about.title")} />
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
              {statistics.map((statistic, idx) => (
                <div className="statistic" key={statistic.label}>
                  <strong className="statistic-value">
                    <AnimatedCounter value={statistic.value} delay={idx * 0.12} />
                  </strong>
                  <span className="statistic-label">{statistic.label}</span>
                </div>
              ))}
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  translatedTitle,
  translatedDescription,
  translatedKeywords,
}: {
  service: (typeof services)[number];
  index: number;
  translatedTitle: string;
  translatedDescription: string;
  translatedKeywords: string[];
}) {
  const [isMobile, setIsMobile] = useState(false);
  const reduce = useReducedMotion();
  const Icon = service.icon;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 820);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className="service-card"
      key={service.title}
      initial={
        reduce
          ? false
          : isMobile
            ? { opacity: 0, y: 50, rotateX: 28, scale: 0.94 }
            : { opacity: 0, y: 24 }
      }
      whileInView={
        reduce
          ? undefined
          : isMobile
            ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
            : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: isMobile ? 0.75 : 0.7,
        delay: isMobile ? 0.05 : index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
        transformOrigin: "center bottom",
        willChange: "transform, opacity",
      }}
    >
      <Icon aria-hidden="true" />
      <h3>{translatedTitle}</h3>
      <p>{translatedDescription}</p>
      <div className="service-keywords">
        {translatedKeywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <RollingText as="h2" text={t("services.title")} />
          <AnimatedParagraph text={t("services.description")} delay={0.25} />
        </Reveal>
        <div className="services-grid-wrapper">
          <ServicesGridBeams />
          <div className="services-grid">
            {services.map((service, index) => {
              const key = serviceKeys[service.title];
              const translatedTitle = t(`services.list.${key}.title`);
              const translatedDescription = t(`services.list.${key}.description`);
              const translatedKeywords = t(
                `services.list.${key}.keywords`,
              ) as string[];

              return (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  translatedTitle={translatedTitle}
                  translatedDescription={translatedDescription}
                  translatedKeywords={translatedKeywords}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
