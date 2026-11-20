import type { Metadata } from "next";
import {
  AboutSection,
  ServicesSection,
} from "@/components/sections/content-sections";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BlogSection } from "@/components/sections/blog-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowWeWork } from "@/components/sections/how-we-work";
import { listPosts } from "@/lib/blogs/repository";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function Home() {
  const posts = (await listPosts()).slice(0, 3);

  return (
    <main id="main-content" tabIndex={-1} className="w-full max-w-full overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <HowWeWork />
      <BlogSection posts={posts} />
    </main>
  );
}
