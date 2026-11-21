import {
  Search,
  Share2,
  FileText,
  Megaphone,
  Compass,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Users,
} from "lucide-react";
import type { ServicePageConfig } from "@/components/services/service-template.types";

export const DIGITAL_MARKETING_CONFIG: ServicePageConfig = {
  translationNamespace: "digitalMarketingPage",
  hero: {
    pill: "Digital Marketing Services",
    titleLead: "Digital Marketing",
    titleGradient: "Brand Growth",
    subtitle:
      "Grow your brand, reach the right audience, and turn clicks into loyal customers.",
    primaryBtn: {
      text: "Start a Campaign",
      href: "/contact?service=digital-marketing",
    },
    secondaryBtn: {
      text: "View Our Work",
      href: "/contact?service=digital-marketing",
    },
    image: {
      src: "/images/services/digital.png",
      alt: "Digital Marketing and Brand Growth Dashboard",
      width: 1812,
      height: 868,
    },
  },
  whatWeDo: {
    eyebrow: "What We Do",
    title: "Complete Digital",
    titleGradient: "Marketing Solutions.",
    subtitle:
      "From strategy to performance, we help your business grow online.",
    capabilities: [
      {
        key: "seo",
        icon: Search,
        fallbackTitle: "SEO",
        fallbackDesc: "Rank higher, get more organic traffic.",
      },
      {
        key: "social",
        icon: Share2,
        fallbackTitle: "Social Media Marketing",
        fallbackDesc: "Build your presence and engage your audience.",
      },
      {
        key: "content",
        icon: FileText,
        fallbackTitle: "Content Marketing",
        fallbackDesc: "Create content that converts.",
      },
      {
        key: "paidAds",
        icon: Megaphone,
        fallbackTitle: "Paid Advertising",
        fallbackDesc: "Run targeted ads for better ROI.",
      },
      {
        key: "branding",
        icon: Compass,
        fallbackTitle: "Brand Strategy",
        fallbackDesc: "Build a strong and memorable brand.",
      },
      {
        key: "analytics",
        icon: BarChart3,
        fallbackTitle: "Analytics & Reporting",
        fallbackDesc: "Track performance, measure growth.",
      },
    ],
  },
  whyChoose: {
    image: {
      src: "/images/services/glossy-3d.png",
      alt: "3D Target Bullseye Marketing Graphic",
      width: 1580,
      height: 995,
    },
    eyebrow: "Why Choose Us",
    title: "A Growth-Focused",
    titleGradient: "Marketing Partner.",
    subtitle:
      "We don't just market — we help you grow with smart strategies and real results.",
    defaultChecklist: [
      "Data-Driven Strategies",
      "Transparent Reporting",
      "Creative & Result-Oriented Campaigns",
      "Dedicated Support",
      "Affordable Plans",
    ],
  },
  caseStudies: {
    eyebrow: "Our Case Studies",
    title: "Real Growth.",
    titleGradient: "Real Results.",
    subtitle: "See how we've helped businesses achieve their goals.",
    defaultItems: [
      { stat: "+250%", label: "Organic Traffic", sub: "E-Commerce Store" },
      { stat: "+180%", label: "Sales Growth", sub: "Online Marketplace" },
      { stat: "+300%", label: "Engagement", sub: "Tech Startup" },
    ],
    viewMoreHref: "/blogs",
    viewMoreText: "View More",
  },
  testimonials: {
    eyebrow: "What Our Clients Say",
    title: "Trusted by",
    titleGradient: "Growing Brands.",
    subtitle: "Real feedback from our amazing clients.",
    quote:
      "Grosbyte helped us grow our online presence with smart strategies and creative campaigns. Our traffic and sales have never been better!",
    author: "Aarav Sharma",
    role: "Founder, SmartCart",
    avatarInitials: "AS",
  },
  faq: {
    eyebrow: "FAQs",
    title: "Frequently Asked",
    titleGradient: "Questions.",
    subtitle: "Find quick answers to common questions.",
    defaultFaqs: [
      {
        question: "Can you help with SEO and content marketing?",
        answer:
          "Yes! We deliver end-to-end SEO including on-page optimization, technical site audits, high-intent keyword strategy, and quality content creation designed to rank and convert.",
      },
      {
        question: "Do you run ads on Google and social media?",
        answer:
          "Yes. We manage high-converting ad campaigns across Google Search, Meta (Facebook & Instagram), LinkedIn, and YouTube, continually optimizing for lower CPA and maximum ROI.",
      },
      {
        question: "Will you provide reports?",
        answer:
          "Always. You receive clear weekly and monthly performance reports with real-time analytics dashboard access, actionable insights, and transparent KPI tracking.",
      },
      {
        question: "Can you work with small businesses?",
        answer:
          "Definitely. We partner with ambitious startups and small businesses to craft cost-effective, high-impact growth campaigns tailored to your specific budget and timeline.",
      },
    ],
  },
  cta: {
    title: "Ready to Grow Your Brand?",
    subtitle:
      "Let's create a winning digital marketing strategy for your business.",
    btnText: "Get in Touch",
    btnHref: "/contact?service=digital-marketing",
  },
};

export const CASE_STUDY_ICONS = [TrendingUp, ShoppingCart, Users];
