import Image from "next/image";
import { Breadcrumbs, EditorialCTA } from "@/components/editorial/page-shell";
import { serviceMetadata } from "@/components/services/service-ui";
import { BlogList } from "@/components/blogs/blog-list";
import { listPosts } from "@/lib/blogs/repository";

export const metadata = serviceMetadata(
  "Blogs",
  "Practical reading on websites, software, automation, and digital marketing. Explore Grosbyte’s sample article library.",
  "/blogs",
);

export default async function BlogsPage() {
  const posts = await listPosts();

  return (
    <div className="container editorial-container">
      <header className="editorial-hero">
        <Breadcrumbs current="Blogs" />
        <div className="editorial-hero-grid">
          <div className="editorial-hero-content">
            <p className="eyebrow">Ideas for your next step</p>
            <h1>
              Thoughtful decisions.
              <br />
              <span className="highlight-blue">Better digital work.</span>
            </h1>
            <p className="editorial-lead">
              Practical reading on building useful products, improving
              workflows, and communicating clearly online.
            </p>
          </div>
          <div className="editorial-hero-media">
            <div className="editorial-hero-image-wrap">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Modern developer workspace with laptop, code, notebook, and coffee representing thoughtful digital decisions"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="editorial-hero-image"
              />
            </div>
          </div>
        </div>
      </header>

      <BlogList posts={posts} />

      <EditorialCTA
        title="Turn a question into a plan."
        description="Tell us what you’re working on and where you need support."
        buttonText="Discuss your project"
        buttonHref="/contact"
      />
    </div>
  );
}
