import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { CapabilityMarquee } from "@/components/sections/capability-marquee";
import {
  AboutSection,
  AISection,
  CTASection,
  CustomWebSection,
  MarketingSection,
  ServicesSection,
  WhySection,
} from "@/components/sections/content-sections";
import { TechnologyCarousel } from "@/components/sections/technology-carousel";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CapabilityMarquee />
        <AboutSection />
        <ServicesSection />
        <CustomWebSection />
        <AISection />
        <MarketingSection />
        <TechnologyCarousel />
        <ProcessSection />
        <WhySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
