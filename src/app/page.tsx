import type { Metadata } from "next";
import {
  AboutSection,
  ServicesSection,
} from "@/components/sections/content-sections";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
