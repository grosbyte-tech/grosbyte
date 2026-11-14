"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { FoldingText } from "@/components/ui/folding-text";
import { AnimatedParagraph } from "@/components/motion/animated-paragraph";
import { AnimatedCounter } from "@/components/motion/counter";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";
import { useTranslation } from "@/contexts/language-context";

const serviceKeys: Record<string, string> = {
  "Custom Software Development": "customSoftware",
  "Web, Mobile Application Development": "webMobileApp",
  "Digital Marketing and Brand Growth": "digitalMarketing",
};

const serviceRoutes: Record<string, string> = {
  "Custom Software Development": "/custom-software-development",
  "Web, Mobile Application Development": "/web-mobile-applications",
  "Digital Marketing and Brand Growth": "/digital-marketing",
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
    { value: "3", label: t("about.stats.services") },
    { value: "7", label: t("about.stats.stages") },
    { value: "18+", label: t("about.stats.technologies") },
  ];

  const highlightWords =
    (t("about.highlightWords") as unknown as string[]) || [
      "technology",
      "partner",
      "outcomes",
    ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <FoldingText
            as="h2"
            text={t("about.title")}
            highlightWords={highlightWords}
          />
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-image">
            <div className="about-image-glow" aria-hidden="true" />
            <Image
              src="/career-tech.png"
              alt={t("about.imageAlt")}
              width={720}
              height={463}
              sizes="(max-width: 820px) calc(100vw - 48px), 500px"
            />
          </Reveal>
          <Reveal className="about-copy" delay={0.06}>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <div className="about-cta-row">
              <Button
                href="/about"
                variant="outline"
                size="default"
                className="rounded-full px-6 py-2.5 inline-flex items-center gap-2 group font-semibold text-sm border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
              >
                <span>{t("phase1.learnAbout") || "Get to know Grosbyte"}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <Reveal className="statistics-grid" delay={0.08}>
              {statistics.map((statistic, idx) => (
                <div className="statistic" key={statistic.label}>
                  <strong className="statistic-value">
                    <AnimatedCounter
                      value={statistic.value}
                      delay={idx * 0.12}
                    />
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
}: {
  service: (typeof services)[number];
  index: number;
  translatedTitle: string;
  translatedDescription: string;
}) {
  const { t } = useTranslation();
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
      },
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
      <div className="service-card-header">
        <span className="service-card-num" aria-hidden="true">
          0{index + 1}
        </span>
        <div className="service-card-icon" aria-hidden="true">
          <Icon />
        </div>
      </div>

      <h3 className="service-card-title">
        <Link
          href={serviceRoutes[service.title]}
          className="service-card-title-link"
        >
          {translatedTitle}
        </Link>
      </h3>
      <p className="service-card-desc">{translatedDescription}</p>

      <div className="service-card-footer">
        <Link
          href={serviceRoutes[service.title]}
          className="service-card-cta"
        >
          <span>
            {t("services.explore") !== "services.explore"
              ? t("services.explore")
              : "Explore service"}
          </span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const { t } = useTranslation();

  const highlightWords =
    (t("services.highlightWords") as unknown as string[]) || [
      "expertise",
      "digital",
      "business",
    ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <FoldingText
            as="h2"
            text={t("services.title")}
            highlightWords={highlightWords}
          />
          <AnimatedParagraph text={t("services.description")} delay={0.25} />
        </Reveal>
        <div className="services-grid-wrapper">
          <div className="services-grid">
            {services.map((service, index) => {
              const key = serviceKeys[service.title];
              const translatedTitle = t(`services.list.${key}.title`);
              const translatedDescription = t(
                `services.list.${key}.description`,
              );

              return (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  translatedTitle={translatedTitle}
                  translatedDescription={translatedDescription}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
