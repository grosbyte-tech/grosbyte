import type { IconType } from "react-icons";
import {
  SiDjango,
  SiExpo,
  SiGit,
  SiGithub,
  SiGo,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiResend,
  SiTypescript,
} from "react-icons/si";
import {
  Blocks,
  Globe2,
  Megaphone,
  Palette,
  PanelsTopLeft,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = { label: string; href: `#${string}` };
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};
export type ProcessStep = {
  title: string;
  description: string;
};
export type Technology = {
  name: string;
  icon?: IconType;
  textMark?: string;
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
    icon: Blocks,
  },
  {
    title: "Web Application Development",
    description:
      "Secure and scalable web applications designed around users, business requirements, and long-term growth.",
    icon: PanelsTopLeft,
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile applications built with modern technologies for customers, teams, and business workflows.",
    icon: Smartphone,
  },
  {
    title: "Modern Website Development",
    description:
      "Fast, responsive, and custom-designed websites that reflect the business and support its goals.",
    icon: Globe2,
  },
  {
    title: "Digital Marketing",
    description:
      "Practical digital strategies that improve visibility, audience reach, engagement, and measurable online growth.",
    icon: Megaphone,
  },
  {
    title: "Digital Branding",
    description:
      "Professional brand systems, visual identities, and digital assets that create clarity and consistency.",
    icon: Palette,
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
      "We define scope, priorities, requirements, timeline, and technical direction.",
  },
  {
    title: "Design",
    description:
      "We create the structure, user experience, visual direction, and important interactions.",
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
      "We use feedback and future requirements to continue improving the product.",
  },
] as const satisfies readonly ProcessStep[];

export const technologies: readonly Technology[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React Native", icon: SiReact },
  { name: "Expo", icon: SiExpo },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "Go", icon: SiGo },
  { name: "Gin", textMark: "Gi" },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Resend", icon: SiResend },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/grosbyte.tech/",
  facebook: "https://www.facebook.com/profile.php?id=61591801983966",
  linkedin:
    "https://www.linkedin.com/search/results/all/?keywords=Grosbyte%20Technologies&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A133457329&position=0",
} as const;
