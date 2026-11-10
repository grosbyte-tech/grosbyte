import type { Metadata } from "next";
import {
  AboutSection,
  ServicesSection,
} from "@/components/sections/content-sections";
import { BlogSection } from "@/components/sections/blog-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { listPosts } from "@/lib/blogs/repository";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function Home() {
  const posts = (await listPosts()).slice(0, 3);

  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BlogSection posts={posts} />
    </main>
  );
}
