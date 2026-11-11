import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Bot,
  Globe,
  Layers,
  Workflow,
  Megaphone,
  Search,
  Share2,
  Palette,
} from "lucide-react";

export interface MegaMenuServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  category?: string;
}

export interface MegaMenuConfig {
  featuredServices: MegaMenuServiceItem[];
  allServices: MegaMenuServiceItem[];
}

/**
 * 3 Core Featured Services matching the refined 3-column mega menu layout.
 * Content derived directly from src/lib/services.ts and src/lib/site-data.ts.
 */
export const featuredServices: MegaMenuServiceItem[] = [
  {
    id: "custom-software",
    slug: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Purpose-built business systems, internal tools, and dashboards designed around your exact workflows.",
    href: "/custom-software-development",
    icon: Code2,
  },
  {
    id: "web-mobile-apps",
    slug: "web-mobile-applications",
    title: "Web, Mobile Application Development",
    description:
      "High-performance cross-platform mobile apps and responsive web applications engineered for scale.",
    href: "/services/web-mobile-applications",
    icon: Smartphone,
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing and Brand Growth",
    description:
      "Connected marketing and brand strategies that improve visibility, consistency, audience engagement, and long-term digital growth.",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
];

/**
 * Full catalog of Grosbyte services for easy extension and reference.
 */
export const allServicesCatalog: MegaMenuServiceItem[] = [
  ...featuredServices,
  {
    id: "ai-automation",
    slug: "ai-automation-integrations",
    title: "AI Automation & Integrations",
    description:
      "Practical AI workflows, conversational assistants, and custom LLM integrations that eliminate repetitive work.",
    href: "/services/ai-automation-integrations",
    icon: Bot,
  },
  {
    id: "ecommerce-web",
    slug: "website-ecommerce-development",
    title: "Website & E-commerce",
    description:
      "Modern corporate sites and scalable online storefronts focused on speed, conversions, and easy management.",
    href: "/services/website-ecommerce-development",
    icon: Globe,
  },
  {
    id: "crm-erp",
    slug: "crm-erp-solutions",
    title: "CRM / ERP Solutions",
    description:
      "Unified enterprise platforms that streamline operations, centralize customer data, and improve team visibility.",
    href: "/services/crm-erp-solutions",
    icon: Layers,
  },
  {
    id: "business-automation",
    slug: "business-automation",
    title: "Business Automation",
    description:
      "End-to-end pipeline automation connecting disparate operational tools, APIs, and team handoffs.",
    href: "/services/business-automation",
    icon: Workflow,
  },
  {
    id: "seo",
    slug: "seo",
    title: "Search Engine Optimization",
    description:
      "Technical SEO, on-page architecture, and content strategies to rank higher on search engines.",
    href: "/services/seo",
    icon: Search,
  },
  {
    id: "social-media",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Engaging social campaigns and brand storytelling tailored for modern digital channels.",
    href: "/services/social-media-marketing",
    icon: Share2,
  },
  {
    id: "branding-design",
    slug: "branding-design",
    title: "Branding & UI/UX Design",
    description:
      "Complete visual identities, design systems, and user-centric wireframes that leave an impression.",
    href: "/services/branding-design",
    icon: Palette,
  },
];

export const megaMenuConfig: MegaMenuConfig = {
  featuredServices,
  allServices: allServicesCatalog,
};
