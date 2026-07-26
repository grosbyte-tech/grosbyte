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
  category: "Frontend" | "Backend" | "Data and AI" | "Development and delivery";
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
    title: "AI and Automation Solutions",
    description:
      "Practical AI integrations and automation systems that reduce repetitive work, improve access to information, and support better decisions.",
    keywords: [
      "AI Assistants",
      "RAG Systems",
      "Process Automation",
      "Intelligent Search",
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
      "We understand the business, users, objectives, challenges, and project context.",
  },
  {
    title: "Plan",
    description:
      "We define the scope, priorities, requirements, timeline, and technical direction.",
  },
  {
    title: "Design",
    description:
      "We create the structure, user experience, visual direction, and key interactions.",
  },
  {
    title: "Develop",
    description:
      "We build the solution using appropriate, maintainable, and scalable technologies.",
  },
  {
    title: "Test",
    description:
      "We review functionality, responsiveness, accessibility, usability, and performance.",
  },
  {
    title: "Launch",
    description:
      "We prepare the production environment and release the solution carefully.",
  },
  {
    title: "Improve",
    description:
      "We use feedback, data, and future requirements to continue improving the product.",
  },
] as const satisfies readonly ProcessStep[];

export const technologies: readonly Technology[] = [
  {
    name: "Next.js",
    description: "Modern React framework for scalable web products.",
    category: "Frontend",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    description: "Component-based library for interactive interfaces.",
    category: "Frontend",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript for safer and maintainable applications.",
    category: "Frontend",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling for consistent responsive interfaces.",
    category: "Frontend",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for APIs and server-side applications.",
    category: "Frontend",
    icon: SiNodedotjs,
  },
  {
    name: "React Native",
    description: "Cross-platform framework for native mobile applications.",
    category: "Frontend",
    icon: SiReact,
  },
  {
    name: "Expo",
    description: "Tooling and platform for developing React Native apps.",
    category: "Frontend",
    icon: SiExpo,
  },
  {
    name: "Python",
    description:
      "Flexible language for applications, automation, and AI systems.",
    category: "Backend",
    icon: SiPython,
  },
  {
    name: "Django",
    description: "Structured Python framework for secure web applications.",
    category: "Backend",
    icon: SiDjango,
  },
  {
    name: "Go",
    description: "High-performance language for scalable backend services.",
    category: "Backend",
    icon: SiGo,
  },
  {
    name: "Gin",
    description: "Lightweight Go framework for fast APIs and services.",
    category: "Backend",
    icon: Network,
  },
  {
    name: "REST APIs",
    description: "Reliable communication between applications and services.",
    category: "Backend",
    icon: DatabaseZap,
  },
  {
    name: "PostgreSQL",
    description: "Reliable relational database for production applications.",
    category: "Data and AI",
    icon: SiPostgresql,
  },
  {
    name: "SQL",
    description: "Language for querying and managing structured business data.",
    category: "Data and AI",
    icon: Database,
  },
  {
    name: "RAG",
    description: "Retrieval-augmented generation for grounded AI applications.",
    category: "Data and AI",
    icon: Search,
  },
  {
    name: "Vector Databases",
    description: "Semantic data storage for intelligent search and AI systems.",
    category: "Data and AI",
    icon: DatabaseZap,
  },
  {
    name: "Git",
    description: "Version control for structured and reliable development.",
    category: "Development and delivery",
    icon: SiGit,
  },
  {
    name: "GitHub",
    description: "Collaboration, code review, and source management platform.",
    category: "Development and delivery",
    icon: SiGithub,
  },
  {
    name: "Docker",
    description:
      "Consistent containerised environments for development and deployment.",
    category: "Development and delivery",
    icon: SiDocker,
  },
  {
    name: "Resend",
    description: "Modern email infrastructure for application communication.",
    category: "Development and delivery",
    icon: SiResend,
  },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/grosbyte.tech/",
  facebook: "https://www.facebook.com/profile.php?id=61591801983966",
  linkedin:
    "https://www.linkedin.com/search/results/all/?keywords=Grosbyte%20Technologies&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A133457329&position=0",
} as const;
