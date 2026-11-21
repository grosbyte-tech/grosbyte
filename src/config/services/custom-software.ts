import {
  Code2,
  Smartphone,
  Sparkles,
  Briefcase,
  Database,
  Building2,
} from "lucide-react";
import type { ServicePageConfig } from "@/components/services/service-template.types";

export const CUSTOM_SOFTWARE_CONFIG: ServicePageConfig = {
  translationNamespace: "customSoftwarePage",
  heroSectionClass: "cs-hero-section bg-[#F1F5F9] dark:bg-[#0b1120]",
  hero: {
    pill: "Custom Software Development",
    titleLead: "Turn Your Ideas",
    titleGradient1: "Into Powerful",
    titleGradient2: "Software",
    subtitle:
      "We build fast, scalable and user-friendly applications that help you grow, automate and stand out.",
    primaryBtn: {
      text: "Start a Project",
      href: "/contact?service=custom-software-development",
    },
    secondaryBtn: {
      text: "View Our Work",
      href: "/#projects",
    },
    image: {
      src: "/images/services/software.png",
      alt: "Turn Your Ideas Into Powerful Software",
      width: 1658,
      height: 949,
    },
  },
  whatWeDo: {
    eyebrow: "What We Build",
    title: "From simple websites",
    titleGradient: "to complex platforms.",
    subtitle: "We create digital solutions that fit your goals.",
    capabilities: [
      {
        key: "webApps",
        icon: Code2,
        fallbackTitle: "Web Applications",
        fallbackDesc: "Modern, fast and scalable web apps.",
      },
      {
        key: "mobileApps",
        icon: Smartphone,
        fallbackTitle: "Mobile Apps",
        fallbackDesc: "iOS & Android apps with great UX.",
      },
      {
        key: "aiIntegrations",
        icon: Sparkles,
        fallbackTitle: "AI Integrations",
        fallbackDesc: "Bring the power of AI to your product.",
      },
      {
        key: "businessSoftware",
        icon: Briefcase,
        fallbackTitle: "Business Software",
        fallbackDesc: "Automate and streamline your workflow.",
      },
      {
        key: "apisBackend",
        icon: Database,
        fallbackTitle: "APIs & Backend",
        fallbackDesc: "Robust and secure backend systems.",
      },
      {
        key: "enterpriseSolutions",
        icon: Building2,
        fallbackTitle: "Enterprise Solutions",
        fallbackDesc: "Reliable solutions for growing businesses.",
      },
    ],
  },
  whyChoose: {
    image: {
      src: "/images/services/glossy-rocket.png",
      alt: "3D Rocket Launch Software Development",
      width: 1536,
      height: 1024,
    },
    eyebrow: "Why Choose Us",
    title: "A development partner",
    titleGradient: "you can count on.",
    subtitle:
      "We focus on quality, clear communication and long-term support — because your success matters to us.",
    defaultChecklist: [
      "Clean & Maintainable Code",
      "On-Time Delivery",
      "Clear Communication",
      "Flexible Engagement Models",
      "Post-Launch Support",
    ],
  },
  techStack: {
    eyebrow: "Our Tech Stack",
    title: "Modern Tools.",
    titleGradient: "Future Ready.",
    subtitle:
      "We use the latest technologies to build fast, scalable and reliable solutions.",
    techs: [
      { name: "React", icon: "/icons/tech/react.svg" },
      { name: "Next.js", icon: "/icons/tech/nextjs-icon.svg" },
      { name: "Node.js", icon: "/icons/tech/nodejs-icon.svg" },
      { name: "TypeScript", icon: "/icons/tech/typescript-icon.svg" },
      { name: "MongoDB", icon: "/icons/tech/mongodb-icon.svg" },
      { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
    ],
    moreText: "+ More",
  },
  faq: {
    eyebrow: "FAQs",
    title: "Frequently Asked",
    titleGradient: "Questions",
    subtitle: "Find quick answers to common questions.",
    defaultFaqs: [
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
    ],
  },
  cta: {
    title: "Let's Build Something Great Together",
    subtitle:
      "Have a project in mind? Let's discuss it and bring your idea to life.",
    btnText: "Get in Touch",
    btnHref: "/contact?service=custom-software-development",
  },
};
