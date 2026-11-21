import { featuredServices } from "@/config/mega-menu";

export interface FooterLinkItem {
  label: string;
  href: string;
}

export const FOOTER_COMPANY_LINKS: FooterLinkItem[] = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_RESOURCE_LINKS: FooterLinkItem[] = [
  { label: "Blogs", href: "/blogs" },
];

export const FOOTER_SERVICE_LINKS: FooterLinkItem[] = featuredServices.map(
  (service) => ({
    label: service.title,
    href: service.href,
  }),
);

export const FOOTER_INDUSTRY_LINKS: FooterLinkItem[] = [
  { label: "Healthcare", href: "/custom-software-development" },
  { label: "Fin-tech", href: "/custom-software-development" },
  { label: "Ed-tech", href: "/custom-software-development" },
  {
    label: "E-commerce & Retail",
    href: "/services/website-ecommerce-development",
  },
  { label: "Logistics & Supply Chain", href: "/custom-software-development" },
  { label: "Real Estate & Construction", href: "/custom-software-development" },
];
