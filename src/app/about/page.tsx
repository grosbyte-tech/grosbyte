import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutPageContent } from "@/components/sections/about-page-content";
import "./about.css";

const title = "About Us | Grosbyte Technologies";
const description =
  "Meet Grosbyte Technologies, a Nepal-based technology company focused on practical software, websites, applications, automation, and digital marketing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "website",
    siteName: "Grosbyte Technologies",
    images: [{ url: "/icons/logo-removebg.png", alt: "Grosbyte Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/icons/logo-removebg.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page" id="main-content" tabIndex={-1}>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
