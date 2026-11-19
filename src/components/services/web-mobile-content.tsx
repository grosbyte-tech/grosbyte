"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Zap,
  Layers,
  ShoppingCart,
  Building2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/language-context";

const capabilityMeta = [
  { key: "webApps", icon: Globe, fallbackTitle: "Web Applications", fallbackDesc: "Modern, fast and scalable web apps." },
  { key: "mobileApps", icon: Smartphone, fallbackTitle: "Mobile Apps", fallbackDesc: "iOS & Android apps with great UX." },
  { key: "progressiveApps", icon: Zap, fallbackTitle: "Progressive Apps", fallbackDesc: "Fast, reliable and offline-ready." },
  { key: "saasProducts", icon: Layers, fallbackTitle: "SaaS Products", fallbackDesc: "Turn your idea into a powerful SaaS." },
  { key: "ecommerceApps", icon: ShoppingCart, fallbackTitle: "E-commerce Apps", fallbackDesc: "Smooth shopping experiences." },
  { key: "crossPlatform", icon: Building2, fallbackTitle: "Enterprise Solutions", fallbackDesc: "Custom apps for your business needs." },
];

const defaultChecklist = [
  "Clean & Maintainable Code",
  "On-Time Delivery",
  "Clear Communication",
  "Flexible Engagement Models",
  "Post-Launch Support",
];

const techStack = [
  { name: "React", icon: "/icons/tech/react.svg" },
  { name: "Next.js", icon: "/icons/tech/nextjs-icon.svg" },
  { name: "Flutter", icon: "/icons/tech/flutter.svg" },
  { name: "Node.js", icon: "/icons/tech/nodejs-icon.svg" },
  { name: "TypeScript", icon: "/icons/tech/typescript-icon.svg" },
  { name: "React Native", icon: "/icons/tech/react.svg" },
  { name: "MongoDB", icon: "/icons/tech/mongodb-icon.svg" },
  { name: "Firebase", icon: "/icons/tech/firebase.svg" },
];

const defaultFaqs = [
  {
    question: "Do you build both web and mobile apps?",
    answer:
      "Yes! We build high-performance web applications using React/Next.js as well as native and cross-platform mobile apps for iOS and Android using Flutter and React Native.",
  },
  {
    question: "Can you help with app maintenance?",
    answer:
      "Yes. We offer continuous maintenance and support packages, including OS compatibility updates, performance optimization, security monitoring, and regular feature updates.",
  },
  {
    question: "What's your development process?",
    answer:
      "We follow an agile, sprint-based approach. You will have regular progress reviews, live staging demos, clear milestones, and direct communication with our engineering team.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Every project includes post-launch warranty support to ensure your application runs smoothly in production, along with tailored SLA options for long-term growth.",
  },
];

export function WebMobileContent() {
  const { t } = useTranslation();

  const checklist = (t<string[]>("webMobilePage.checklist") as string[]) || defaultChecklist;
  const faqs = (t<Array<{ question: string; answer: string }>>("webMobilePage.faqs") as Array<{ question: string; answer: string }>) || defaultFaqs;

  return (
    <>
      {/* 1. Hero Section */}
      <section className="cs-hero-section">
        <div className="cs-container">
          <div className="cs-hero-grid">
            {/* Left Copy Column */}
            <div>
              <div className="cs-hero-pill">
                <span className="cs-hero-pill-dot" aria-hidden="true" />
                <span>
                  {t("webMobilePage.heroPill") || "Web & Mobile Applications"}
                </span>
              </div>

              <h1 className="cs-hero-title">
                {t("webMobilePage.heroTitleLead") || "Build Modern"}
                <br />
                <span className="cs-gradient-text">
                  {t("webMobilePage.heroTitleGradient") || "Web & Mobile"}
                </span>
                <br />
                {t("webMobilePage.heroTitleSuffix") || "Applications"}
              </h1>

              <p className="cs-hero-subtitle">
                {t("webMobilePage.heroSubtitle") ||
                  "From idea to launch, we build fast, reliable and user-friendly apps for web and mobile."}
              </p>

              <div className="cs-hero-actions">
                <Button
                  href="/contact?service=web-mobile-applications"
                  variant="glowing"
                  size="lg"
                  className="gap-2 shadow-lg"
                >
                  <span>{t("webMobilePage.startProject") || "Start a Project"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Button>

                <Link
                  href="/contact?service=web-mobile-applications"
                  className="cs-secondary-link"
                >
                  <span>{t("webMobilePage.viewWork") || "View Our Work"}</span>
                </Link>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="cs-hero-media-wrap">
              <div className="cs-hero-bg-glow" aria-hidden="true" />
              <div className="cs-hero-img-box">
                <Image
                  src="/webandmobile.png"
                  alt="Modern Web and Mobile Applications Mockup"
                  width={1536}
                  height={1024}
                  priority
                  className="cs-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Build */}
      <section className="cs-build-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-build-grid">
            <div>
              <span className="cs-eyebrow">
                {t("webMobilePage.whatWeBuildEyebrow") || "What We Build"}
              </span>
              <h2 className="cs-section-heading">
                {t("webMobilePage.whatWeBuildTitle") || "High-performance apps"}
                <br />
                <span className="cs-gradient-text">
                  {t("webMobilePage.whatWeBuildTitleGradient") || "built for scale."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("webMobilePage.whatWeBuildSubtitle") ||
                  "We engineer smooth digital experiences across all devices."}
              </p>
            </div>

            <div className="cs-capabilities-grid">
              {capabilityMeta.map((item) => {
                const IconComponent = item.icon;
                const title = t(`webMobilePage.capabilities.${item.key}.title`) || item.fallbackTitle;
                const desc = t(`webMobilePage.capabilities.${item.key}.description`) || item.fallbackDesc;
                return (
                  <div key={item.key} className="cs-capability-card">
                    <div className="cs-capability-icon">
                      <IconComponent
                        className="w-6 h-6 text-[#0966fa]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="cs-capability-title">{title}</h3>
                    <p className="cs-capability-desc">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (With 3D Rocket) */}
      <section className="cs-why-section bg-white dark:bg-[#0d1527]">
        <div className="cs-container">
          <div className="cs-why-grid">
            {/* Left 3D Rocket Illustration */}
            <div className="cs-rocket-visual">
              <Image
                src="/Glossy_Rocket.png"
                alt="3D Rocket Launch Web and Mobile"
                width={1536}
                height={1024}
                className="w-full max-w-[460px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Copy & Checklist */}
            <div>
              <span className="cs-eyebrow">
                {t("webMobilePage.whyChooseEyebrow") || "Why Choose Us"}
              </span>
              <h2 className="cs-section-heading">
                {t("webMobilePage.whyChooseTitle") || "Engineered for"}
                <br />
                <span className="cs-gradient-text">
                  {t("webMobilePage.whyChooseTitleGradient") || "exceptional experiences."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("webMobilePage.whyChooseSubtitle") ||
                  "We focus on clean code, responsive performance and intuitive interfaces."}
              </p>

              <div className="cs-checklist">
                {checklist.map((item) => (
                  <div key={item} className="cs-checklist-item">
                    <span className="cs-check-icon">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Tech Stack */}
      <section className="cs-tech-section bg-white dark:bg-[#0d1527]">
        <div className="cs-container">
          <div className="cs-tech-grid-layout">
            <div>
              <span className="cs-eyebrow">
                {t("webMobilePage.techStackEyebrow") || "Our Tech Stack"}
              </span>
              <h2 className="cs-section-heading">
                {t("webMobilePage.techStackTitle") || "Proven Frameworks."}
                <br />
                <span className="cs-gradient-text">
                  {t("webMobilePage.techStackTitleGradient") || "Peak Performance."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("webMobilePage.techStackSubtitle") ||
                  "We select battle-tested tools and frameworks suited to your performance, scale, and time-to-market requirements."}
              </p>
            </div>

            <div className="cs-tech-logos-row">
              {techStack.map((tech) => (
                <div key={tech.name} className="cs-tech-item">
                  <div className="cs-tech-icon-box">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <span className="cs-tech-name">{tech.name}</span>
                </div>
              ))}
              <div className="cs-tech-more">
                <div className="cs-tech-more-dot" aria-hidden="true">
                  •••
                </div>
                <span className="cs-tech-name">
                  {t("webMobilePage.techMore") || "+ More"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="cs-faq-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-faq-grid">
            <div>
              <span className="cs-eyebrow">
                {t("webMobilePage.faqEyebrow") || "FAQs"}
              </span>
              <h2 className="cs-section-heading">
                {t("webMobilePage.faqTitle") || "Frequently Asked"}
                <br />
                <span className="cs-gradient-text">
                  {t("webMobilePage.faqTitleGradient") || "Questions"}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("webMobilePage.faqSubtitle") ||
                  "Find quick answers to common questions."}
              </p>
            </div>

            <div className="cs-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="cs-faq-card">
                  <summary className="cs-faq-summary">
                    <span>{faq.question}</span>
                    <span className="cs-faq-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="cs-faq-body">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className="cs-cta-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-cta-banner">
            <div>
              <h2 className="cs-cta-title">
                {t("webMobilePage.ctaTitle") ||
                  "Ready to Build Your Next Application?"}
              </h2>
              <p className="cs-cta-sub">
                {t("webMobilePage.ctaSubtitle") ||
                  "Whether it's a web platform, a mobile app, or both — let's make it happen."}
              </p>
            </div>
            <Link
              href="/contact?service=web-mobile-applications"
              className="cs-cta-btn"
            >
              <span>{t("webMobilePage.getInTouch") || "Get in Touch"}</span>
              <ArrowRight
                className="w-4 h-4 text-[#0966fa]"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
