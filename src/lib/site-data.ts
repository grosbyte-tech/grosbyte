import {
  Blocks,
  Braces,
  Code2,
  Globe2,
  LifeBuoy,
  ListChecks,
  Megaphone,
  MessagesSquare,
  Palette,
  PanelsTopLeft,
  PenTool,
  RefreshCcw,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = { label: string; href: `#${string}` };
export type Service = {
  number: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  icon: LucideIcon;
};
export type ProcessStage = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

export const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "Business-focused software designed around your workflows, operations, and long-term goals.",
    capabilities: [
      "Internal systems",
      "Workflow automation",
      "Business dashboards",
      "API integrations",
      "Data-driven tools",
      "AI-assisted functionality",
    ],
    icon: Blocks,
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Secure, responsive, and scalable web platforms that turn complex processes into clear digital experiences.",
    capabilities: [
      "SaaS platforms",
      "Customer portals",
      "Booking systems",
      "Management apps",
      "Secure interfaces",
    ],
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile experiences built for customers, teams, and business-critical workflows.",
    capabilities: [
      "Expo",
      "React Native",
      "API-connected experiences",
      "Push workflows",
      "Mobile-first interfaces",
    ],
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Modern Website Development",
    description:
      "Custom-designed websites engineered around your brand, audience, content, and business goals.",
    capabilities: [
      "Custom interface design",
      "Next.js development",
      "Responsive implementation",
      "SEO-ready architecture",
      "Performance",
    ],
    icon: Globe2,
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Connected campaigns that help businesses improve visibility, reach the right audience, and create meaningful engagement.",
    capabilities: [
      "Social media",
      "SEO",
      "Content marketing",
      "Paid advertising",
      "Campaign reporting",
    ],
    icon: Megaphone,
  },
  {
    number: "06",
    title: "Digital Branding",
    description:
      "Clear and consistent digital identities that help businesses look credible, recognizable, and ready to grow.",
    capabilities: [
      "Brand strategy",
      "Visual identity",
      "Logo systems",
      "Social identity",
      "Digital guidelines",
    ],
    icon: Palette,
  },
] as const satisfies readonly Service[];

export const processStages = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about the business, audience, challenges, existing systems, and desired outcomes.",
    icon: Search,
  },
  {
    number: "02",
    title: "Define",
    description:
      "We translate the opportunity into clear requirements, priorities, scope, architecture, and delivery milestones.",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape user journeys, wireframes, interface systems, and interactive experiences before full production.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build in manageable iterations, sharing progress and collecting feedback throughout the process.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Test",
    description:
      "We validate functionality, responsiveness, accessibility, performance, reliability, and user experience.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We prepare the environment, deploy the solution, complete final checks, and make it ready for real users.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Improve",
    description:
      "We support, monitor, refine, and extend the solution as needs and opportunities evolve.",
    icon: RefreshCcw,
  },
] as const satisfies readonly ProcessStage[];

export const whyItems = [
  {
    title: "Solutions shaped around the business",
    text: "We begin by understanding what the business needs to achieve, not with a template or preferred answer.",
    icon: Target,
  },
  {
    title: "Engineering with purpose",
    text: "Technology choices are guided by reliability, maintainability, performance, and the value they create.",
    icon: Braces,
  },
  {
    title: "Clear, collaborative delivery",
    text: "Progress, priorities, and decisions remain visible throughout the work.",
    icon: MessagesSquare,
  },
  {
    title: "Support beyond launch",
    text: "Digital products and presence keep evolving, and our approach is designed with that reality in mind.",
    icon: LifeBuoy,
  },
] as const;

export const socialLinks = {
  instagram: "https://www.instagram.com/grosbyte.tech/",
  facebook: "https://www.facebook.com/profile.php?id=61591801983966",
  linkedin:
    "https://www.linkedin.com/search/results/all/?keywords=Grosbyte%20Technologies&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A133457329&position=0",
} as const;
