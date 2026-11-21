import {
  Globe,
  Smartphone,
  Zap,
  Layers,
  ShoppingCart,
  Building2,
} from "lucide-react";
import type { ServicePageConfig } from "@/components/services/service-template.types";

export const WEB_MOBILE_CONFIG: ServicePageConfig = {
  translationNamespace: "webMobilePage",
  hero: {
    pill: "Web & Mobile Applications",
    titleLead: "Build Modern",
    titleGradient: "Web & Mobile",
    titleSuffix: "Applications",
    subtitle:
      "From idea to launch, we build fast, reliable and user-friendly apps for web and mobile.",
    primaryBtn: {
      text: "Start a Project",
      href: "/contact?service=web-mobile-applications",
    },
    secondaryBtn: {
      text: "View Our Work",
      href: "/contact?service=web-mobile-applications",
    },
    image: {
      src: "/images/services/webandmobile.png",
      alt: "Modern Web and Mobile Applications Mockup",
      width: 1536,
      height: 1024,
    },
  },
  whatWeDo: {
    eyebrow: "What We Build",
    title: "High-performance apps",
    titleGradient: "built for scale.",
    subtitle: "We engineer smooth digital experiences across all devices.",
    capabilities: [
      {
        key: "webApps",
        icon: Globe,
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
        key: "progressiveApps",
        icon: Zap,
        fallbackTitle: "Progressive Apps",
        fallbackDesc: "Fast, reliable and offline-ready.",
      },
      {
        key: "saasProducts",
        icon: Layers,
        fallbackTitle: "SaaS Products",
        fallbackDesc: "Turn your idea into a powerful SaaS.",
      },
      {
        key: "ecommerceApps",
        icon: ShoppingCart,
        fallbackTitle: "E-commerce Apps",
        fallbackDesc: "Smooth shopping experiences.",
      },
      {
        key: "crossPlatform",
        icon: Building2,
        fallbackTitle: "Enterprise Solutions",
        fallbackDesc: "Custom apps for your business needs.",
      },
    ],
  },
  whyChoose: {
    image: {
      src: "/images/services/glossy-rocket.png",
      alt: "3D Rocket Launch Web and Mobile",
      width: 1536,
      height: 1024,
    },
    eyebrow: "Why Choose Us",
    title: "Engineered for",
    titleGradient: "exceptional experiences.",
    subtitle:
      "We focus on clean code, responsive performance and intuitive interfaces.",
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
    title: "Proven Frameworks.",
    titleGradient: "Peak Performance.",
    subtitle:
      "We select battle-tested tools and frameworks suited to your performance, scale, and time-to-market requirements.",
    techs: [
      { name: "React", icon: "/icons/tech/react.svg" },
      { name: "Next.js", icon: "/icons/tech/nextjs-icon.svg" },
      { name: "Flutter", icon: "/icons/tech/flutter.svg" },
      { name: "Node.js", icon: "/icons/tech/nodejs-icon.svg" },
      { name: "TypeScript", icon: "/icons/tech/typescript-icon.svg" },
      { name: "React Native", icon: "/icons/tech/react.svg" },
      { name: "MongoDB", icon: "/icons/tech/mongodb-icon.svg" },
      { name: "Firebase", icon: "/icons/tech/firebase.svg" },
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
    ],
  },
  cta: {
    title: "Ready to Build Your Next Application?",
    subtitle:
      "Whether it's a web platform, a mobile app, or both — let's make it happen.",
    btnText: "Get in Touch",
    btnHref: "/contact?service=web-mobile-applications",
  },
};
