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
    description: "Modern React framework for scalable web products.",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    description: "Component-based library for interactive interfaces.",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript for safer and maintainable applications.",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling for consistent responsive interfaces.",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for APIs and server-side applications.",
    icon: SiNodedotjs,
  },
  {
    name: "React Native",
    description: "Cross-platform framework for native mobile applications.",
    icon: SiReact,
  },
  {
    name: "Expo",
    description: "Tooling and platform for developing React Native apps.",
    icon: SiExpo,
  },
  {
    name: "Python",
    description:
      "Flexible language for applications, automation, and AI systems.",
    icon: SiPython,
  },
  {
    name: "Django",
    description: "Structured Python framework for secure web applications.",
    icon: SiDjango,
  },
  {
    name: "Go",
    description: "High-performance language for scalable backend services.",
    icon: SiGo,
  },
  {
    name: "Gin",
    description: "Lightweight Go framework for fast APIs and services.",
    icon: Network,
  },
  {
    name: "REST APIs",
    description: "Reliable communication between applications and services.",
    icon: DatabaseZap,
  },
  {
    name: "PostgreSQL",
    description: "Reliable relational database for production applications.",
    icon: SiPostgresql,
  },
  {
    name: "SQL",
    description: "Language for querying and managing structured business data.",
    icon: Database,
  },
  {
    name: "RAG",
    description: "Retrieval-augmented generation for grounded AI applications.",
    icon: Search,
  },
  {
    name: "Vector Databases",
    description: "Semantic storage for intelligent search and AI systems.",
    icon: DatabaseZap,
  },
  {
    name: "Git",
    description: "Version control for structured and reliable development.",
    icon: SiGit,
  },
  {
    name: "GitHub",
    description: "Collaboration, code review, and source management platform.",
    icon: SiGithub,
  },
  {
    name: "Docker",
    description:
      "Consistent containerised environments for development and deployment.",
    icon: SiDocker,
  },
  {
    name: "Resend",
    description: "Modern email infrastructure for application communication.",
    icon: SiResend,
  },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/grosbyte.tech/",
  facebook: "https://www.facebook.com/profile.php?id=61591801983966",
  linkedin:
    "https://www.linkedin.com/search/results/all/?keywords=Grosbyte%20Technologies&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A133457329&position=0",
} as const;
