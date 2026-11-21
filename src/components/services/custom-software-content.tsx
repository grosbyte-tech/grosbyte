"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Sparkles,
  Briefcase,
  Database,
  Building2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/language-context";

const capabilityMeta = [
  { key: "webApps", icon: Code2, fallbackTitle: "Web Applications", fallbackDesc: "Modern, fast and scalable web apps." },
  { key: "mobileApps", icon: Smartphone, fallbackTitle: "Mobile Apps", fallbackDesc: "iOS & Android apps with great UX." },
  { key: "aiIntegrations", icon: Sparkles, fallbackTitle: "AI Integrations", fallbackDesc: "Bring the power of AI to your product." },
  { key: "businessSoftware", icon: Briefcase, fallbackTitle: "Business Software", fallbackDesc: "Automate and streamline your workflow." },
  { key: "apisBackend", icon: Database, fallbackTitle: "APIs & Backend", fallbackDesc: "Robust and secure backend systems." },
  { key: "enterpriseSolutions", icon: Building2, fallbackTitle: "Enterprise Solutions", fallbackDesc: "Reliable solutions for growing businesses." },
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
  { name: "Node.js", icon: "/icons/tech/nodejs-icon.svg" },
  { name: "TypeScript", icon: "/icons/tech/typescript-icon.svg" },
  { name: "MongoDB", icon: "/icons/tech/mongodb-icon.svg" },
  { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
];

const defaultFaqs = [
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We collaborate with early-stage and funded startups to rapidly architect, develop, and launch high-performance MVPs without technical debt.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Absolutely. We conduct full codebase and infrastructure audits to identify bottlenecks, refactor legacy code, and build new feature modules cleanly.",
  },
  {
    question: "What's your development process?",
    answer:
      "We operate in transparent 2-week agile sprints. You receive regular video demos, access to live preview staging environments, and direct Slack communication.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Every build comes with a comprehensive handover warranty, followed by flexible ongoing maintenance, performance monitoring, and SLA agreements.",
  },
];

export function CustomSoftwareContent() {
  const { t } = useTranslation();

  const checklist = (t<string[]>("customSoftwarePage.checklist") as string[]) || defaultChecklist;
  const faqs = (t<Array<{ question: string; answer: string }>>("customSoftwarePage.faqs") as Array<{ question: string; answer: string }>) || defaultFaqs;

  return (
    <>
      {/* 1. Hero Section */}
      <section className="cs-hero-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-hero-grid">
            {/* Left Copy */}
            <div>
              <div className="cs-hero-pill">
                <span className="cs-hero-pill-dot" aria-hidden="true" />
                <span>
                  {t("customSoftwarePage.heroPill") || "Custom Software Development"}
                </span>
              </div>

              <h1 className="cs-hero-title">
                {t("customSoftwarePage.heroTitleLead") || "Turn Your Ideas"}
                <br />
                <span className="cs-gradient-text">
                  {t("customSoftwarePage.heroTitleGradient1") || "Into Powerful"}
                </span>{" "}
                <br />
                <span className="cs-gradient-text">
                  {t("customSoftwarePage.heroTitleGradient2") || "Software"}
                </span>
              </h1>

              <p className="cs-hero-subtitle">
                {t("customSoftwarePage.heroSubtitle") ||
                  "We build fast, scalable and user-friendly applications that help you grow, automate and stand out."}
              </p>

              <div className="cs-hero-actions">
                <Button
                  href="/contact?service=custom-software-development"
                  variant="glowing"
                  size="lg"
                  className="gap-2 shadow-lg"
                >
                  <span>{t("customSoftwarePage.startProject") || "Start a Project"}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Link href="/#projects" className="cs-secondary-link">
                  {t("customSoftwarePage.viewWork") || "View Our Work"}
                </Link>
              </div>
            </div>

            {/* Right Media (Software.png Hero Graphic) */}
            <div className="cs-hero-media-wrap">
              <div className="cs-hero-bg-glow" aria-hidden="true" />
              <div className="cs-hero-img-box">
                <Image
                  src="/images/services/software.png"
                  alt="Turn Your Ideas Into Powerful Software"
                  width={1658}
                  height={949}
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
                {t("customSoftwarePage.whatWeBuildEyebrow") || "What We Build"}
              </span>
              <h2 className="cs-section-heading">
                {t("customSoftwarePage.whatWeBuildTitle") || "From simple websites"}
                <br />
                <span className="cs-gradient-text">
                  {t("customSoftwarePage.whatWeBuildTitleGradient") || "to complex platforms."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("customSoftwarePage.whatWeBuildSubtitle") ||
                  "We create digital solutions that fit your goals."}
              </p>
            </div>

            <div className="cs-capabilities-grid">
              {capabilityMeta.map((item) => {
                const IconComponent = item.icon;
                const title = t(`customSoftwarePage.capabilities.${item.key}.title`) || item.fallbackTitle;
                const desc = t(`customSoftwarePage.capabilities.${item.key}.description`) || item.fallbackDesc;
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
                src="/images/services/glossy-rocket.png"
                alt="3D Rocket Launch Software Development"
                width={1536}
                height={1024}
                className="w-full max-w-[460px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Copy & Checklist */}
            <div>
              <span className="cs-eyebrow">
                {t("customSoftwarePage.whyChooseEyebrow") || "Why Choose Us"}
              </span>
              <h2 className="cs-section-heading">
                {t("customSoftwarePage.whyChooseTitle") || "A development partner"}
                <br />
                <span className="cs-gradient-text">
                  {t("customSoftwarePage.whyChooseTitleGradient") || "you can count on."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("customSoftwarePage.whyChooseSubtitle") ||
                  "We focus on quality, clear communication and long-term support — because your success matters to us."}
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
                {t("customSoftwarePage.techStackEyebrow") || "Our Tech Stack"}
              </span>
              <h2 className="cs-section-heading">
                {t("customSoftwarePage.techStackTitle") || "Modern Tools."}
                <br />
                <span className="cs-gradient-text">
                  {t("customSoftwarePage.techStackTitleGradient") || "Future Ready."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("customSoftwarePage.techStackSubtitle") ||
                  "We use the latest technologies to build fast, scalable and reliable solutions."}
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
                  {t("customSoftwarePage.techMore") || "+ More"}
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
                {t("customSoftwarePage.faqEyebrow") || "FAQs"}
              </span>
              <h2 className="cs-section-heading">
                {t("customSoftwarePage.faqTitle") || "Frequently Asked"}
                <br />
                <span className="cs-gradient-text">
                  {t("customSoftwarePage.faqTitleGradient") || "Questions"}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("customSoftwarePage.faqSubtitle") ||
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
                {t("customSoftwarePage.ctaTitle") ||
                  "Let's Build Something Great Together"}
              </h2>
              <p className="cs-cta-sub">
                {t("customSoftwarePage.ctaSubtitle") ||
                  "Have a project in mind? Let's discuss it and bring your idea to life."}
              </p>
            </div>
            <Link
              href="/contact?service=custom-software-development"
              className="cs-cta-btn"
            >
              <span>{t("customSoftwarePage.getInTouch") || "Get in Touch"}</span>
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
