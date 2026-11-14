import type { Metadata } from "next";
import { AboutPageContent } from "@/components/sections/about-page-content";
import "./about.css";

const title = "About Us";
const fullTitle = `${title} | Grosbyte Technologies`;
const description =
  "Meet Grosbyte Technologies, a Nepal-based technology company focused on practical software, websites, applications, automation, and digital marketing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: fullTitle,
    description,
    url: "/about",
    type: "website",
    siteName: "Grosbyte Technologies",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: fullTitle,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["/images/og-default.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="about-page" id="main-content" tabIndex={-1}>
      <AboutPageContent />
    </main>
  );
}
