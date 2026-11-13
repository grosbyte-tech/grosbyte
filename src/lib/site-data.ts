import type { ComponentType } from "react";
import {
  Blocks,
  Megaphone,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: `#${string}` | "/about" | "/services" | "/blogs" | "/contact";
};
export type Service = {
  title: string;
  description: string;
  keywords: readonly string[];
  icon: LucideIcon;
};
export type ProcessStep = {
  title: string;
  description: string;
};
export type Technology = {
  name: string;
  description: string;
  icon: string | ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const navKeys: Record<string, string> = {
  "#home": "nav.home",
  "/about": "nav.about",
  "/services": "nav.services",
  "#how-we-work": "nav.process",
  "/contact": "nav.contact",
  "/blogs": "nav.blogs",
};

export const services = [
  {
    title: "Custom Software Development",
    description:
      "Purpose-built software that improves workflows, operations, reporting, and internal business processes.",
    keywords: [
      "Internal Systems",
      "Workflow Automation",
      "Dashboards",
      "API Integration",
      "Business Tools",
    ],
    icon: Blocks,
  },
  {
    title: "Web, Mobile Application Development",
    description:
      "High-performance web platforms and cross-platform mobile applications engineered for reliability, user engagement, and scale.",
    keywords: [
      "Web Platforms",
      "React Native",
      "Expo",
      "Mobile Commerce",
      "API Integration",
    ],
    icon: Smartphone,
  },
  {
    title: "Digital Marketing and Brand Growth",
    description:
      "Connected marketing and brand strategies that improve visibility, consistency, audience engagement, and long-term digital growth.",
    keywords: [
      "SEO",
      "Social Media",
      "Paid Campaigns",
      "Brand Identity",
      "Content Strategy",
    ],
    icon: Megaphone,
  },
] as const satisfies readonly Service[];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We begin by understanding your business, users, goals, challenges, and project context. This stage helps us identify the real problem, clarify expectations, and make sure the solution is based on genuine business needs rather than assumptions.",
  },
  {
    title: "Plan",
    description:
      "We define the project scope, priorities, requirements, timeline, and technical direction. This creates a clear roadmap for the work ahead and helps everyone understand what will be built, how it will be approached, and what success should look like.",
  },
  {
    title: "Design",
    description:
      "We shape the structure, user experience, visual direction, and key interactions of the product. Our focus is on making the solution clear, intuitive, accessible, and aligned with both the brand and the needs of the people who will use it.",
  },
  {
    title: "Develop",
    description:
      "We build the solution using technologies that are suitable, maintainable, secure, and scalable. The development process is organised carefully so features work together consistently and the final product remains reliable as the business grows.",
  },
  {
    title: "Test",
    description:
      "We review functionality, responsiveness, usability, accessibility, performance, and important edge cases. This helps us identify issues early, improve the overall experience, and make sure the product works properly across different devices and environments.",
  },
  {
    title: "Launch",
    description:
      "We prepare the production environment, complete final checks, and release the solution carefully. The launch is handled in a structured way to reduce risk, confirm everything is working correctly, and make the transition as smooth as possible.",
  },
  {
    title: "Improve",
    description:
      "After launch, we use feedback, performance insights, and future business requirements to continue improving the product. This stage supports long-term growth by helping the solution evolve as users, technology, and business priorities change.",
  },
];

export const technologies: readonly Technology[] = [
  {
    name: "Next.js",
    description: "Scalable React web products.",
    icon: "https://cdn.svgporn.com/logos/nextjs.svg",
  },
  {
    name: "React",
    description: "Interactive component-based interfaces.",
    icon: "https://cdn.svgporn.com/logos/react.svg",
  },
  {
    name: "TypeScript",
    description: "Safer, maintainable JavaScript.",
    icon: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  },
  {
    name: "Tailwind CSS",
    description: "Fast, responsive interface styling.",
    icon: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
  },
  {
    name: "Node.js",
    description: "APIs and server applications.",
    icon: "https://cdn.svgporn.com/logos/nodejs.svg",
  },
  {
    name: "React Native",
    description: "Cross-platform mobile applications.",
    icon: "https://cdn.svgporn.com/logos/react.svg",
  },
  {
    name: "Expo",
    description: "React Native app tooling.",
    icon: "https://cdn.svgporn.com/logos/expo-icon.svg",
  },
  {
    name: "Python",
    description: "Applications, automation, and AI.",
    icon: "https://cdn.svgporn.com/logos/python.svg",
  },
  {
    name: "Django",
    description: "Secure Python web applications.",
    icon: "https://cdn.svgporn.com/logos/django.svg",
  },
  {
    name: "Go",
    description: "Fast, scalable backend services.",
    icon: "https://cdn.svgporn.com/logos/go.svg",
  },
  {
    name: "Gin",
    description: "Lightweight Go APIs and services.",
    icon: "https://api.iconify.design/lucide/network.svg?color=%232a68e1",
  },
  {
    name: "REST APIs",
    description: "Reliable service communication.",
    icon: "https://api.iconify.design/lucide/database-zap.svg?color=%232a68e1",
  },
  {
    name: "PostgreSQL",
    description: "Production-ready relational data.",
    icon: "https://cdn.svgporn.com/logos/postgresql.svg",
  },
  {
    name: "SQL",
    description: "Structured data querying.",
    icon: "https://api.iconify.design/lucide/database.svg?color=%232a68e1",
  },
  {
    name: "RAG",
    description: "Grounded, context-aware AI.",
    icon: "https://api.iconify.design/lucide/brain-circuit.svg?color=%232a68e1",
  },
  {
    name: "Vector Databases",
    description: "Semantic search and AI storage.",
    icon: "https://api.iconify.design/lucide/database-zap.svg?color=%232a68e1",
  },
  {
    name: "Git",
    description: "Reliable source version control.",
    icon: "https://cdn.svgporn.com/logos/git-icon.svg",
  },
  {
    name: "GitHub",
    description: "Code collaboration and reviews.",
    icon: "https://cdn.svgporn.com/logos/github-icon.svg",
  },
  {
    name: "Docker",
    description: "Consistent development and deployment.",
    icon: "https://cdn.svgporn.com/logos/docker-icon.svg",
  },
  {
    name: "Resend",
    description: "Application email infrastructure.",
    icon: "https://cdn.svgporn.com/logos/resend-icon.svg",
  },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/grosbyte.tech/",
  facebook: "https://www.facebook.com/profile.php?id=61591801983966",
  linkedin: "https://www.linkedin.com/company/grosbyte-technologies",
  github: "https://github.com/grosbyte-tech",
} as const;
 