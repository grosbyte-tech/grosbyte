"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/language-context";
import type {
  ServicePageConfig,
  FaqItem,
  CaseStudyItem,
} from "./service-template.types";

const defaultCaseStudyIcons = [TrendingUp, ShoppingCart, Users];

export function ServiceTemplate({ config }: { config: ServicePageConfig }) {
  const { t } = useTranslation();
  const ns = config.translationNamespace;

  // 1. Translations & Fallbacks
  const checklist =
    (t<string[]>(`${ns}.checklist`) as string[]) ||
    config.whyChoose.defaultChecklist;

  const faqs =
    (t<FaqItem[]>(`${ns}.faqs`) as FaqItem[]) || config.faq.defaultFaqs;

  const caseStudies = config.caseStudies
    ? (t<CaseStudyItem[]>(`${ns}.caseStudies`) as CaseStudyItem[]) ||
      config.caseStudies.defaultItems
    : [];

  return (
    <>
      {/* 1. Hero Section */}
      <section className={config.heroSectionClass || "cs-hero-section"}>
        <div className="cs-container">
          <div className="cs-hero-grid">
            {/* Left Copy Column */}
            <div>
              <div className="cs-hero-pill">
                <span className="cs-hero-pill-dot" aria-hidden="true" />
                <span>{t(`${ns}.heroPill`) || config.hero.pill}</span>
              </div>

              <h1 className="cs-hero-title">
                {t(`${ns}.heroTitleLead`) || config.hero.titleLead}
                <br />
                {config.hero.titleGradient1 ? (
                  <>
                    <span className="cs-gradient-text">
                      {t(`${ns}.heroTitleGradient1`) ||
                        config.hero.titleGradient1}
                    </span>{" "}
                    <br />
                    <span className="cs-gradient-text">
                      {t(`${ns}.heroTitleGradient2`) ||
                        config.hero.titleGradient2}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="cs-gradient-text">
                      {t(`${ns}.heroTitleGradient`) ||
                        config.hero.titleGradient}
                    </span>
                    {config.hero.titleSuffix && (
                      <>
                        <br />
                        {t(`${ns}.heroTitleSuffix`) || config.hero.titleSuffix}
                      </>
                    )}
                  </>
                )}
              </h1>

              <p className="cs-hero-subtitle">
                {t(`${ns}.heroSubtitle`) || config.hero.subtitle}
              </p>

              <div className="cs-hero-actions">
                <Button
                  href={config.hero.primaryBtn.href}
                  variant="glowing"
                  size="lg"
                  className={
                    ns === "digitalMarketingPage"
                      ? "gap-2 shadow-lg"
                      : "gap-2 shadow-lg"
                  }
                >
                  <span>
                    {ns === "digitalMarketingPage"
                      ? t(`${ns}.startCampaign`) || config.hero.primaryBtn.text
                      : t(`${ns}.startProject`) || config.hero.primaryBtn.text}
                  </span>
                  <ArrowRight
                    className={
                      ns === "digitalMarketingPage"
                        ? "w-4 h-4 ml-1"
                        : "w-4 h-4"
                    }
                    aria-hidden="true"
                  />
                </Button>
                <Link
                  href={config.hero.secondaryBtn.href}
                  className="cs-secondary-link"
                >
                  <span>
                    {t(`${ns}.viewWork`) || config.hero.secondaryBtn.text}
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className="cs-hero-media-wrap">
              <div className="cs-hero-bg-glow" aria-hidden="true" />
              <div className="cs-hero-img-box">
                <Image
                  src={config.hero.image.src}
                  alt={config.hero.image.alt}
                  width={config.hero.image.width}
                  height={config.hero.image.height}
                  priority
                  className="cs-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Build / What We Do */}
      <section className="cs-build-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-build-grid">
            <div>
              <span className="cs-eyebrow">
                {ns === "digitalMarketingPage"
                  ? t(`${ns}.whatWeDoEyebrow`) || config.whatWeDo.eyebrow
                  : t(`${ns}.whatWeBuildEyebrow`) || config.whatWeDo.eyebrow}
              </span>
              <h2 className="cs-section-heading">
                {ns === "digitalMarketingPage"
                  ? t(`${ns}.whatWeDoTitle`) || config.whatWeDo.title
                  : t(`${ns}.whatWeBuildTitle`) || config.whatWeDo.title}
                <br />
                <span className="cs-gradient-text">
                  {ns === "digitalMarketingPage"
                    ? t(`${ns}.whatWeDoTitleGradient`) ||
                      config.whatWeDo.titleGradient
                    : t(`${ns}.whatWeBuildTitleGradient`) ||
                      config.whatWeDo.titleGradient}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {ns === "digitalMarketingPage"
                  ? t(`${ns}.whatWeDoSubtitle`) || config.whatWeDo.subtitle
                  : t(`${ns}.whatWeBuildSubtitle`) || config.whatWeDo.subtitle}
              </p>
            </div>

            <div className="cs-capabilities-grid">
              {config.whatWeDo.capabilities.map((item) => {
                const IconComponent = item.icon;
                const title =
                  t(`${ns}.capabilities.${item.key}.title`) ||
                  item.fallbackTitle;
                const desc =
                  t(`${ns}.capabilities.${item.key}.description`) ||
                  item.fallbackDesc;
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

      {/* 3. Why Choose Us */}
      <section className="cs-why-section bg-white dark:bg-[#0d1527]">
        <div className="cs-container">
          <div className="cs-why-grid">
            {/* Left Visual Illustration */}
            <div className="cs-rocket-visual">
              <Image
                src={config.whyChoose.image.src}
                alt={config.whyChoose.image.alt}
                width={config.whyChoose.image.width}
                height={config.whyChoose.image.height}
                className="w-full max-w-[460px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Copy & Checklist */}
            <div>
              <span className="cs-eyebrow">
                {t(`${ns}.whyChooseEyebrow`) || config.whyChoose.eyebrow}
              </span>
              <h2 className="cs-section-heading">
                {t(`${ns}.whyChooseTitle`) || config.whyChoose.title}
                <br />
                <span className="cs-gradient-text">
                  {t(`${ns}.whyChooseTitleGradient`) ||
                    config.whyChoose.titleGradient}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t(`${ns}.whyChooseSubtitle`) || config.whyChoose.subtitle}
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

      {/* 4A. Tech Stack Section (if present) */}
      {config.techStack && (
        <section className="cs-tech-section bg-white dark:bg-[#0d1527]">
          <div className="cs-container">
            <div className="cs-tech-grid-layout">
              <div>
                <span className="cs-eyebrow">
                  {t(`${ns}.techStackEyebrow`) || config.techStack.eyebrow}
                </span>
                <h2 className="cs-section-heading">
                  {t(`${ns}.techStackTitle`) || config.techStack.title}
                  <br />
                  <span className="cs-gradient-text">
                    {t(`${ns}.techStackTitleGradient`) ||
                      config.techStack.titleGradient}
                  </span>
                </h2>
                <p className="cs-section-subtitle">
                  {t(`${ns}.techStackSubtitle`) || config.techStack.subtitle}
                </p>
              </div>

              <div className="cs-tech-logos-row">
                {config.techStack.techs.map((tech) => (
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
                    {t(`${ns}.techMore`) || config.techStack.moreText || "+ More"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4B. Case Studies Section (if present) */}
      {config.caseStudies && (
        <section className="cs-case-section bg-white dark:bg-[#0d1527]">
          <div className="cs-container">
            <div className="cs-case-grid">
              <div>
                <span className="cs-eyebrow">
                  {t(`${ns}.caseStudiesEyebrow`) || config.caseStudies.eyebrow}
                </span>
                <h2 className="cs-section-heading">
                  {t(`${ns}.caseStudiesTitle`) || config.caseStudies.title}
                  <br />
                  <span className="cs-gradient-text">
                    {t(`${ns}.caseStudiesTitleGradient`) ||
                      config.caseStudies.titleGradient}
                  </span>
                </h2>
                <p className="cs-section-subtitle">
                  {t(`${ns}.caseStudiesSubtitle`) ||
                    config.caseStudies.subtitle}
                </p>
              </div>

              <div>
                <div className="cs-case-cards-row">
                  {caseStudies.map((item, idx) => {
                    const IconComp =
                      defaultCaseStudyIcons[idx % defaultCaseStudyIcons.length];
                    return (
                      <div key={item.label} className="cs-stat-card">
                        <div className="cs-stat-icon-wrap">
                          <IconComp
                            className="w-5 h-5 text-[#0966fa]"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="cs-stat-number">{item.stat}</span>
                        <span className="cs-stat-label">{item.label}</span>
                        <span className="cs-stat-sub">{item.sub}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="text-right">
                  <Link
                    href={config.caseStudies.viewMoreHref}
                    className="cs-case-view-more"
                  >
                    <span>
                      {t(`${ns}.viewMore`) || config.caseStudies.viewMoreText}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4C. Testimonials Section (if present) */}
      {config.testimonials && (
        <section className="cs-testimonial-section bg-[#F1F5F9] dark:bg-[#0b1120]">
          <div className="cs-container">
            <div className="cs-testimonial-grid">
              <div>
                <span className="cs-eyebrow">
                  {t(`${ns}.testimonialsEyebrow`) ||
                    config.testimonials.eyebrow}
                </span>
                <h2 className="cs-section-heading">
                  {t(`${ns}.testimonialsTitle`) || config.testimonials.title}
                  <br />
                  <span className="cs-gradient-text">
                    {t(`${ns}.testimonialsTitleGradient`) ||
                      config.testimonials.titleGradient}
                  </span>
                </h2>
                <p className="cs-section-subtitle">
                  {t(`${ns}.testimonialsSubtitle`) ||
                    config.testimonials.subtitle}
                </p>
              </div>

              <div className="cs-testimonial-card">
                <div className="cs-quote-symbol" aria-hidden="true">
                  “
                </div>
                <p className="cs-testimonial-quote">
                  &ldquo;
                  {t(`${ns}.testimonialQuote`) || config.testimonials.quote}
                  &rdquo;
                </p>

                <div className="cs-testimonial-footer">
                  <div className="cs-author-info">
                    <div className="cs-author-avatar" aria-hidden="true">
                      {config.testimonials.avatarInitials}
                    </div>
                    <div>
                      <h4 className="cs-author-name">
                        {t(`${ns}.testimonialAuthor`) ||
                          config.testimonials.author}
                      </h4>
                      <p className="cs-author-role">
                        {t(`${ns}.testimonialRole`) || config.testimonials.role}
                      </p>
                    </div>
                  </div>

                  <div className="cs-testimonial-arrows" aria-hidden="true">
                    <button
                      type="button"
                      className="cs-arrow-btn"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="cs-arrow-btn"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQs */}
      <section className="cs-faq-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-faq-grid">
            <div>
              <span className="cs-eyebrow">
                {t(`${ns}.faqEyebrow`) || config.faq.eyebrow}
              </span>
              <h2 className="cs-section-heading">
                {t(`${ns}.faqTitle`) || config.faq.title}
                <br />
                <span className="cs-gradient-text">
                  {t(`${ns}.faqTitleGradient`) || config.faq.titleGradient}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t(`${ns}.faqSubtitle`) || config.faq.subtitle}
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
                {t(`${ns}.ctaTitle`) || config.cta.title}
              </h2>
              <p className="cs-cta-sub">
                {t(`${ns}.ctaSubtitle`) || config.cta.subtitle}
              </p>
            </div>
            <Link href={config.cta.btnHref} className="cs-cta-btn">
              <span>{t(`${ns}.getInTouch`) || config.cta.btnText}</span>
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
