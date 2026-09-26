"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { RollingText } from "@/components/motion/rolling-text";
import { AnimatedParagraph } from "@/components/motion/animated-paragraph";
import { AnimatedCounter } from "@/components/motion/counter";
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

function subscribeToMobile(callback: () => void) {
  const mql = window.matchMedia("(max-width: 767.98px)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getMobileSnapshot() {
  return window.matchMedia("(max-width: 767.98px)").matches;
}

function getMobileServerSnapshot() {
  return false;
}

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
  const isMobile = useSyncExternalStore(
    subscribeToMobile,
    getMobileSnapshot,
    getMobileServerSnapshot,
  );
  const [isIntersected, setIsIntersected] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [desktopSettled, setDesktopSettled] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const Icon = service.icon;

  useEffect(() => {
    // Only apply Intersection Observer on mobile screens
    if (!isMobile || isIntersected) return;

    const node = cardRef.current;
    if (!node) return;

    // Trigger flip once as the card enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersected(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isMobile, isIntersected]);

  useEffect(() => {
    if (isIntersected && !animationDone) {
      const timer = setTimeout(() => {
        setAnimationDone(true);
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [isIntersected, animationDone]);

  const mobileStatusClass =
    !isMobile || reduce
      ? ""
      : animationDone
        ? "mobile-flip-settled"
        : isIntersected
          ? "mobile-flip-animating"
          : "mobile-flip-waiting";

  return (
    <motion.div
      ref={cardRef}
      className={`service-card ${mobileStatusClass}`.trim()}
      key={service.title}
      initial={reduce || isMobile ? false : { opacity: 0, y: 24 }}
      whileInView={reduce || isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        if (!isMobile) {
          setDesktopSettled(true);
        }
      }}
      onAnimationEnd={() => {
        if (isMobile) {
          setAnimationDone(true);
        }
      }}
      style={!isMobile && desktopSettled ? { transform: "none" } : undefined}
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
