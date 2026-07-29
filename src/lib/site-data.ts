import type { ComponentType } from "react";
import {
  SiDjango,
  SiDocker,
  SiExpo,
  SiGit,
  SiGithub,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiResend,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  Blocks,
  Bot,
  Database,
  DatabaseZap,
  Megaphone,
  Network,
  PanelsTopLeft,
  Search,
  Smartphone,
  SwatchBook,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = { label: string; href: `#${string}` };
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
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

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
    title: "Web Platforms and E-commerce",
    description:
      "Secure, scalable, and responsive web platforms designed around customers, teams, transactions, and business requirements.",
    keywords: [
      "E-commerce",
      "SaaS Platforms",
      "Customer Portals",
      "Booking Systems",
      "Admin Dashboards",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile applications built for customers, teams, services, and business-critical workflows.",
    keywords: [
      "React Native",
      "Expo",
      "Mobile Commerce",
      "Push Notifications",
      "API Integration",
    ],
    icon: Smartphone,
  },
  {
    title: "AI Automation and Data Analysis",
    description:
      "Practical AI integrations and automation systems that reduce repetitive work, improve access to information, and support better decisions.",
    keywords: [
      "AI Assistants",
      "RAG Systems",
      "Process Automation",
      "Data Preprocessing",
      "Model Training",
      "Document Processing",
    ],
    icon: Bot,
  },
  {
    title: "UI/UX and Product Design",
    description:
      "Clear, accessible, and user-focused interfaces designed around business goals, real users, and meaningful digital experiences.",
    keywords: [
      "UX Research",
      "Interface Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    icon: SwatchBook,
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
    icon: SiNextdotjs,
  },
  {
    name: "React",
    description: "Interactive component-based interfaces.",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    description: "Safer, maintainable JavaScript.",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    description: "Fast, responsive interface styling.",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    description: "APIs and server applications.",
    icon: SiNodedotjs,
  },
  {
    name: "React Native",
    description: "Cross-platform mobile applications.",
    icon: SiReact,
  },
  {
    name: "Expo",
    description: "React Native app tooling.",
    icon: SiExpo,
  },
  {
    name: "Python",
    description: "Applications, automation, and AI.",
    icon: SiPython,
  },
  {
    name: "Django",
    description: "Secure Python web applications.",
    icon: SiDjango,
  },
  {
    name: "Go",
    description: "Fast, scalable backend services.",
    icon: SiGo,
  },
  {
    name: "Gin",
    description: "Lightweight Go APIs and services.",
    icon: Network,
  },
  {
    name: "REST APIs",
    description: "Reliable service communication.",
    icon: DatabaseZap,
  },
  {
    name: "PostgreSQL",
    description: "Production-ready relational data.",
    icon: SiPostgresql,
  },
  {
    name: "SQL",
    description: "Structured data querying.",
    icon: Database,
  },
  {
    name: "RAG",
    description: "Grounded, context-aware AI.",
    icon: Search,
  },
  {
    name: "Vector Databases",
    description: "Semantic search and AI storage.",
    icon: DatabaseZap,
  },
  {
    name: "Git",
    description: "Reliable source version control.",
    icon: SiGit,
  },
  {
    name: "GitHub",
    description: "Code collaboration and reviews.",
    icon: SiGithub,
  },
  {
    name: "Docker",
    description: "Consistent development and deployment.",
    icon: SiDocker,
  },
  {
    name: "Resend",
    description: "Application email infrastructure.",
    icon: SiResend,
  },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/grosbyte.tech/",
  facebook: "https://www.facebook.com/profile.php?id=61591801983966",
  linkedin:
    "https://www.linkedin.com/search/results/all/?keywords=Grosbyte%20Technologies&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A133457329&position=0",
  github: "https://github.com/grosbyte-tech",
} as const;
