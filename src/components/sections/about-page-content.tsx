"use client";

import { AboutHero } from "@/components/about/about-hero";
import { AboutWho } from "@/components/about/about-who";
import { AboutBeliefs } from "@/components/about/about-beliefs";
import { AboutWork } from "@/components/about/about-work";
import { AboutTechStack } from "@/components/about/about-tech-stack";
import { AboutCta } from "@/components/about/about-cta";

export function AboutPageContent() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Hero Section: Editorial Headline + High-Quality Online Image */}
      <AboutHero />

      {/* 2. Who We Are: Mission Narrative + Collaborative Development Image */}
      <AboutWho />

      {/* 3. Core Beliefs: 4 Principles mapped cleanly */}
      <AboutBeliefs />

      {/* 4. Working With Grosbyte: Partnership Pillars + Sprint Alignment Image */}
      <AboutWork />

      {/* 5. Closing Conversion Banner: (Let’s build something useful for your business.) */}
      <AboutCta />

      {/* 6. Tools & Technologies: Full-bleed Black Section right above Footer */}
      <AboutTechStack />
    </div>
  );
}
