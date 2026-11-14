import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getService } from "@/lib/services";
import { serviceMetadata } from "@/components/services/service-ui";
import { Button } from "@/components/ui/button";
import "./custom-software.css";

export const dynamic = "force-static";

export async function generateMetadata() {
  const service = getService("custom-software-development");
  if (!service) notFound();

  return serviceMetadata(
    "Custom Software Development | Grosbyte",
    "Turn your ideas into powerful software. We build fast, scalable, and user-friendly applications that help you grow, automate, and stand out.",
    "/custom-software-development",
  );
}

const capabilities = [
  {
    icon: Code2,
    title: "Web Applications",
    description: "Modern, fast and scalable web apps.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS & Android apps with great UX.",
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    description: "Bring the power of AI to your product.",
  },
  {
    icon: Briefcase,
    title: "Business Software",
    description: "Automate and streamline your workflow.",
  },
  {
    icon: Database,
    title: "APIs & Backend",
    description: "Robust and secure backend systems.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Reliable solutions for growing businesses.",
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
  { name: "Node.js", icon: "/icons/tech/nodejs-icon.svg" },
  { name: "TypeScript", icon: "/icons/tech/typescript-icon.svg" },
  { name: "MongoDB", icon: "/icons/tech/mongodb-icon.svg" },
  { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
];

const faqs = [
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

export default function CustomSoftwareDevelopmentPage() {
  const service = getService("custom-software-development");
  if (!service) notFound();

  return (
    <main className="cs-page" id="main-content">
      {/* 1. Hero Section */}
      <section className="cs-hero-section bg-[#F1F5F9] dark:bg-[#0b1120]">
        <div className="cs-container">
          <div className="cs-hero-grid">
            {/* Left Copy */}
            <div>
              <div className="cs-hero-pill">
                <span className="cs-hero-pill-dot" aria-hidden="true" />
                <span>Custom Software Development</span>
              </div>

              <h1 className="cs-hero-title">
                Turn Your Ideas
                <br />
                Into <span className="cs-gradient-text">Powerful</span>
                <br />
                <span className="cs-gradient-text">Software</span>
              </h1>

              <p className="cs-hero-subtitle">
                We build fast, scalable and user-friendly applications that help
                you grow, automate and stand out.
              </p>

              <div className="cs-hero-actions">
                <Button
                  href="/contact?service=custom-software-development"
                  variant="glowing"
                  size="lg"
                  className="gap-2 shadow-lg"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Link href="/#projects" className="cs-secondary-link">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right Media (Software.png Hero Graphic) */}
            <div className="cs-hero-media-wrap">
              <div className="cs-hero-bg-glow" aria-hidden="true" />
              <div className="cs-hero-img-box">
                <Image
                  src="/Software.png"
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
              <span className="cs-eyebrow">What We Build</span>
              <h2 className="cs-section-heading">
                From simple websites
                <br />
                to <span className="cs-gradient-text">complex platforms.</span>
              </h2>
              <p className="cs-section-subtitle">
                We create digital solutions that fit your goals.
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

      {/* 3. Why Choose Us (With 3D Rocket) */}
      <section className="cs-why-section bg-white dark:bg-[#0d1527]">
        <div className="cs-container">
          <div className="cs-why-grid">
            {/* Left 3D Rocket Illustration */}
            <div className="cs-rocket-visual">
              <Image
                src="/Glossy_Rocket.png"
                alt="3D Rocket Launch Software Development"
                width={1536}
                height={1024}
                className="w-full max-w-[460px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Copy & Checklist */}
            <div>
              <span className="cs-eyebrow">Why Choose Us</span>
              <h2 className="cs-section-heading">
                A development partner
                <br />
                you can <span className="cs-gradient-text">count on.</span>
              </h2>
              <p className="cs-section-subtitle">
                We focus on quality, clear communication and long-term support —
                because your success matters to us.
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
                We use the latest technologies to build fast, scalable and reliable solutions.
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
                Have a project in mind? Let&apos;s discuss it and bring your idea to life.
              </p>
            </div>
            <Link
              href="/contact?service=custom-software-development"
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
