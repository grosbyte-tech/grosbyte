import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getService } from "@/lib/services";
import { serviceMetadata } from "@/components/services/service-ui";
import { Button } from "@/components/ui/button";
import "./web-mobile.css";

export const dynamic = "force-static";

export async function generateMetadata() {
  const service = getService("web-mobile-applications");
  if (!service) notFound();

  return serviceMetadata(
    "Web & Mobile Application Development | Grosbyte",
    "From idea to launch, we build fast, reliable and user-friendly apps for web and mobile.",
    "/web-mobile-applications",
  );
}

const capabilities = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, fast and scalable web apps.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS & Android apps with great UX.",
  },
  {
    icon: Zap,
    title: "Progressive Apps",
    description: "Fast, reliable and offline-ready.",
  },
  {
    icon: Layers,
    title: "SaaS Products",
    description: "Turn your idea into a powerful SaaS.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Apps",
    description: "Smooth shopping experiences.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Custom apps for your business needs.",
  },
];

const checklist = [
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

const faqs = [
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

export default async function WebAndMobileDevelopmentPage() {
  const service = getService("web-mobile-applications");
  if (!service) notFound();

  return (
    <main className="cs-page">
      {/* 1. Hero Section */}
      <section className="cs-hero-section">
        <div className="cs-container">
          <div className="cs-hero-grid">
            {/* Left Copy Column */}
            <div>
              <div className="cs-hero-pill">
                <span className="cs-hero-pill-dot" aria-hidden="true" />
                <span>Web &amp; Mobile Applications</span>
              </div>

              <h1 className="cs-hero-title">
                Build Modern
                <br />
                <span className="cs-gradient-text">Web &amp; Mobile</span>
                <br />
                Applications
              </h1>

              <p className="cs-hero-subtitle">
                From idea to launch, we build fast, reliable and user-friendly apps for web and mobile.
              </p>

              <div className="cs-hero-actions">
                <Button
                  href="/contact?service=web-mobile-applications"
                  variant="glowing"
                  size="lg"
                  className="gap-2 shadow-lg"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Button>

                <Link
                  href="/contact?service=web-mobile-applications"
                  className="cs-secondary-link"
                >
                  <span>View Our Work</span>
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
              <span className="cs-eyebrow">What We Build</span>
              <h2 className="cs-section-heading">
                Apps that solve
                <br />
                <span className="cs-gradient-text">real problems.</span>
              </h2>
              <p className="cs-section-subtitle">
                We create scalable web and mobile applications that people love to use.
              </p>
            </div>

            <div className="cs-capabilities-grid">
              {capabilities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="cs-capability-card">
                    <div className="cs-capability-icon">
                      <IconComponent className="w-6 h-6 text-[#0966fa]" aria-hidden="true" />
                    </div>
                    <h3 className="cs-capability-title">{item.title}</h3>
                    <p className="cs-capability-desc">{item.description}</p>
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
            {/* Left Multi-device Illustration */}
            <div className="cs-rocket-visual">
              <Image
                src="/Glossy_Cloud.png"
                alt="Cloud Devices Application Architecture"
                width={1536}
                height={1024}
                className="w-full max-w-[460px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Copy & Checklist */}
            <div>
              <span className="cs-eyebrow">Why Choose Us</span>
              <h2 className="cs-section-heading">
                A trusted partner
                <br />
                for your <span className="cs-gradient-text">app journey.</span>
              </h2>
              <p className="cs-section-subtitle">
                We focus on quality, performance and long-term support — because your success matters to us.
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
              <span className="cs-eyebrow">Our Tech Stack</span>
              <h2 className="cs-section-heading">
                Modern Tools.
                <br />
                <span className="cs-gradient-text">Future Ready.</span>
              </h2>
              <p className="cs-section-subtitle">
                We use the latest technologies to build fast, scalable and reliable applications.
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
                <span className="cs-tech-name">+ More</span>
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
              <span className="cs-eyebrow">FAQs</span>
              <h2 className="cs-section-heading">
                Frequently Asked
                <br />
                <span className="cs-gradient-text">Questions</span>
              </h2>
              <p className="cs-section-subtitle">
                Find quick answers to common questions.
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
              <h2 className="cs-cta-title">Let&apos;s Build Something Great Together</h2>
              <p className="cs-cta-sub">
                Have an idea? Let&apos;s turn it into a powerful web or mobile app.
              </p>
            </div>
            <Link
              href="/contact?service=web-mobile-applications"
              className="cs-cta-btn"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#0966fa]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
