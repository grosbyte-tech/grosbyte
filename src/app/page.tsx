import type { Metadata } from "next";
import {
  AboutSection,
  ServicesSection,
} from "@/components/home/content-sections";
import { ProjectsSection } from "@/components/home/projects-section";
import { BlogSection } from "@/components/blogs/blog-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowWeWork } from "@/components/home/how-we-work";
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
