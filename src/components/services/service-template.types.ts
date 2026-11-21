import type { ElementType } from "react";

export interface CapabilityItem {
  key: string;
  icon: ElementType;
  fallbackTitle: string;
  fallbackDesc: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface CaseStudyItem {
  stat: string;
  label: string;
  sub: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageConfig {
  translationNamespace:
    | "customSoftwarePage"
    | "webMobilePage"
    | "digitalMarketingPage";
  heroSectionClass?: string;
  hero: {
    pill: string;
    titleLead: string;
    titleGradient1?: string;
    titleGradient2?: string;
    titleGradient?: string;
    titleSuffix?: string;
    subtitle: string;
    primaryBtn: {
      text: string;
      href: string;
    };
    secondaryBtn: {
      text: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  whatWeDo: {
    eyebrow: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    capabilities: CapabilityItem[];
  };
  whyChoose: {
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    eyebrow: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    defaultChecklist: string[];
  };
  techStack?: {
    eyebrow: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    techs: TechStackItem[];
    moreText?: string;
  };
  caseStudies?: {
    eyebrow: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    defaultItems: CaseStudyItem[];
    viewMoreHref: string;
    viewMoreText: string;
  };
  testimonials?: {
    eyebrow: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    quote: string;
    author: string;
    role: string;
    avatarInitials: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    defaultFaqs: FaqItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    btnText: string;
    btnHref: string;
  };
}
