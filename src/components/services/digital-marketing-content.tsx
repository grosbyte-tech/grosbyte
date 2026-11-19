"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Share2,
  FileText,
  Megaphone,
  Compass,
  BarChart3,
  Check,
  TrendingUp,
  ShoppingCart,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/language-context";

const capabilityMeta = [
  { key: "seo", icon: Search, fallbackTitle: "SEO", fallbackDesc: "Rank higher, get more organic traffic." },
  { key: "social", icon: Share2, fallbackTitle: "Social Media Marketing", fallbackDesc: "Build your presence and engage your audience." },
  { key: "content", icon: FileText, fallbackTitle: "Content Marketing", fallbackDesc: "Create content that converts." },
  { key: "paidAds", icon: Megaphone, fallbackTitle: "Paid Advertising", fallbackDesc: "Run targeted ads for better ROI." },
  { key: "branding", icon: Compass, fallbackTitle: "Brand Strategy", fallbackDesc: "Build a strong and memorable brand." },
  { key: "analytics", icon: BarChart3, fallbackTitle: "Analytics & Reporting", fallbackDesc: "Track performance, measure growth." },
];

const defaultChecklist = [
  "Data-Driven Strategies",
  "Transparent Reporting",
  "Creative & Result-Oriented Campaigns",
  "Dedicated Support",
  "Affordable Plans",
];

const caseStudyIcons = [TrendingUp, ShoppingCart, Users];

const defaultCaseStudies = [
  { stat: "+250%", label: "Organic Traffic", sub: "E-Commerce Store" },
  { stat: "+180%", label: "Sales Growth", sub: "Online Marketplace" },
  { stat: "+300%", label: "Engagement", sub: "Tech Startup" },
];

const defaultFaqs = [
  {
    question: "Can you help with SEO and content marketing?",
    answer:
      "Yes! We deliver end-to-end SEO including on-page optimization, technical site audits, high-intent keyword strategy, and quality content creation designed to rank and convert.",
  },
  {
    question: "Do you run ads on Google and social media?",
    answer:
      "Yes. We manage high-converting ad campaigns across Google Search, Meta (Facebook & Instagram), LinkedIn, and YouTube, continually optimizing for lower CPA and maximum ROI.",
  },
  {
    question: "Will you provide reports?",
    answer:
      "Always. You receive clear weekly and monthly performance reports with real-time analytics dashboard access, actionable insights, and transparent KPI tracking.",
  },
  {
    question: "Can you work with small businesses?",
    answer:
      "Definitely. We partner with ambitious startups and small businesses to craft cost-effective, high-impact growth campaigns tailored to your specific budget and timeline.",
  },
];

export function DigitalMarketingContent() {
  const { t } = useTranslation();

  const checklist = (t<string[]>("digitalMarketingPage.checklist") as string[]) || defaultChecklist;
  const caseStudies = (t<Array<{ stat: string; label: string; sub: string }>>("digitalMarketingPage.caseStudies") as Array<{ stat: string; label: string; sub: string }>) || defaultCaseStudies;
  const faqs = (t<Array<{ question: string; answer: string }>>("digitalMarketingPage.faqs") as Array<{ question: string; answer: string }>) || defaultFaqs;

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
                  {t("digitalMarketingPage.heroPill") || "Digital Marketing Services"}
                </span>
              </div>

              <h1 className="cs-hero-title">
                {t("digitalMarketingPage.heroTitleLead") || "Digital Marketing"}
                <br />
                <span className="cs-gradient-text">
                  {t("digitalMarketingPage.heroTitleGradient") || "Brand Growth"}
                </span>
              </h1>

              <p className="cs-hero-subtitle">
                {t("digitalMarketingPage.heroSubtitle") ||
                  "Grow your brand, reach the right audience, and turn clicks into loyal customers."}
              </p>

              <div className="cs-hero-actions">
                <Button
                  href="/contact?service=digital-marketing"
                  variant="glowing"
                  size="lg"
                  className="gap-2 shadow-lg"
                >
                  <span>{t("digitalMarketingPage.startCampaign") || "Start a Campaign"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Button>

                <Link
                  href="/contact?service=digital-marketing"
                  className="cs-secondary-link"
                >
                  <span>{t("digitalMarketingPage.viewWork") || "View Our Work"}</span>
                </Link>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="cs-hero-media-wrap">
              <div className="cs-hero-bg-glow" aria-hidden="true" />
              <div className="cs-hero-img-box">
                <Image
                  src="/digital.png"
                  alt="Digital Marketing and Brand Growth Dashboard"
                  width={1812}
                  height={868}
                  priority
                  className="cs-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Do */}
      <section className="cs-build-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-build-grid">
            <div>
              <span className="cs-eyebrow">
                {t("digitalMarketingPage.whatWeDoEyebrow") || "What We Do"}
              </span>
              <h2 className="cs-section-heading">
                {t("digitalMarketingPage.whatWeDoTitle") || "Complete Digital"}
                <br />
                <span className="cs-gradient-text">
                  {t("digitalMarketingPage.whatWeDoTitleGradient") || "Marketing Solutions."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("digitalMarketingPage.whatWeDoSubtitle") ||
                  "From strategy to performance, we help your business grow online."}
              </p>
            </div>

            <div className="cs-capabilities-grid">
              {capabilityMeta.map((item) => {
                const IconComponent = item.icon;
                const title = t(`digitalMarketingPage.capabilities.${item.key}.title`) || item.fallbackTitle;
                const desc = t(`digitalMarketingPage.capabilities.${item.key}.description`) || item.fallbackDesc;
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

      {/* 3. Why Choose Us (Target Bullseye Graphic) */}
      <section className="cs-why-section bg-white dark:bg-[#0d1527]">
        <div className="cs-container">
          <div className="cs-why-grid">
            {/* Left 3D Target Graphic */}
            <div className="cs-rocket-visual">
              <Image
                src="/Glossy_3D.png"
                alt="3D Target Bullseye Marketing Graphic"
                width={1580}
                height={995}
                className="w-full max-w-[460px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Copy & Checklist */}
            <div>
              <span className="cs-eyebrow">
                {t("digitalMarketingPage.whyChooseEyebrow") || "Why Choose Us"}
              </span>
              <h2 className="cs-section-heading">
                {t("digitalMarketingPage.whyChooseTitle") || "A Growth-Focused"}
                <br />
                <span className="cs-gradient-text">
                  {t("digitalMarketingPage.whyChooseTitleGradient") || "Marketing Partner."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("digitalMarketingPage.whyChooseSubtitle") ||
                  "We don't just market — we help you grow with smart strategies and real results."}
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

      {/* 4. Our Case Studies */}
      <section className="cs-case-section bg-white dark:bg-[#0d1527]">
        <div className="cs-container">
          <div className="cs-case-grid">
            <div>
              <span className="cs-eyebrow">
                {t("digitalMarketingPage.caseStudiesEyebrow") || "Our Case Studies"}
              </span>
              <h2 className="cs-section-heading">
                {t("digitalMarketingPage.caseStudiesTitle") || "Real Growth."}
                <br />
                <span className="cs-gradient-text">
                  {t("digitalMarketingPage.caseStudiesTitleGradient") || "Real Results."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("digitalMarketingPage.caseStudiesSubtitle") ||
                  "See how we've helped businesses achieve their goals."}
              </p>
            </div>

            <div>
              <div className="cs-case-cards-row">
                {caseStudies.map((item, idx) => {
                  const IconComp = caseStudyIcons[idx % caseStudyIcons.length];
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
                <Link href="/blogs" className="cs-case-view-more">
                  <span>{t("digitalMarketingPage.viewMore") || "View More"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Our Clients Say (Testimonials) */}
      <section className="cs-testimonial-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-testimonial-grid">
            <div>
              <span className="cs-eyebrow">
                {t("digitalMarketingPage.testimonialsEyebrow") || "What Our Clients Say"}
              </span>
              <h2 className="cs-section-heading">
                {t("digitalMarketingPage.testimonialsTitle") || "Trusted by"}
                <br />
                <span className="cs-gradient-text">
                  {t("digitalMarketingPage.testimonialsTitleGradient") || "Growing Brands."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("digitalMarketingPage.testimonialsSubtitle") ||
                  "Real feedback from our amazing clients."}
              </p>
            </div>

            <div className="cs-testimonial-card">
              <div className="cs-quote-symbol" aria-hidden="true">
                “
              </div>
              <p className="cs-testimonial-quote">
                &ldquo;
                {t("digitalMarketingPage.testimonialQuote") ||
                  "Grosbyte helped us grow our online presence with smart strategies and creative campaigns. Our traffic and sales have never been better!"}
                &rdquo;
              </p>

              <div className="cs-testimonial-footer">
                <div className="cs-author-info">
                  <div className="cs-author-avatar" aria-hidden="true">
                    AS
                  </div>
                  <div>
                    <h4 className="cs-author-name">
                      {t("digitalMarketingPage.testimonialAuthor") || "Aarav Sharma"}
                    </h4>
                    <p className="cs-author-role">
                      {t("digitalMarketingPage.testimonialRole") || "Founder, SmartCart"}
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

      {/* 6. FAQs */}
      <section className="cs-faq-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-faq-grid">
            <div>
              <span className="cs-eyebrow">
                {t("digitalMarketingPage.faqEyebrow") || "FAQs"}
              </span>
              <h2 className="cs-section-heading">
                {t("digitalMarketingPage.faqTitle") || "Frequently Asked"}
                <br />
                <span className="cs-gradient-text">
                  {t("digitalMarketingPage.faqTitleGradient") || "Questions."}
                </span>
              </h2>
              <p className="cs-section-subtitle">
                {t("digitalMarketingPage.faqSubtitle") ||
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

      {/* 7. Bottom CTA Banner */}
      <section className="cs-cta-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-cta-banner">
            <div>
              <h2 className="cs-cta-title">
                {t("digitalMarketingPage.ctaTitle") || "Ready to Grow Your Brand?"}
              </h2>
              <p className="cs-cta-sub">
                {t("digitalMarketingPage.ctaSubtitle") ||
                  "Let's create a winning digital marketing strategy for your business."}
              </p>
            </div>
            <Link
              href="/contact?service=digital-marketing"
              className="cs-cta-btn"
            >
              <span>{t("digitalMarketingPage.getInTouch") || "Get in Touch"}</span>
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
