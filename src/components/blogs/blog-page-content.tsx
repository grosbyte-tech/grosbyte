"use client";

import Image from "next/image";
import { Breadcrumbs, EditorialCTA } from "@/components/editorial/page-shell";
import { BlogList } from "@/components/blogs/blog-list";
import { useTranslation } from "@/contexts/language-context";
import type { BlogSummary } from "@/lib/blogs/types";

export function BlogPageContent({ posts }: { posts: BlogSummary[] }) {
  const { t } = useTranslation();

  return (
    <div className="container editorial-container">
      <header className="editorial-hero">
        <Breadcrumbs current={t("blogsPage.breadcrumb") || "Blogs"} />
        <div className="editorial-hero-grid">
          <div className="editorial-hero-content">
            <p className="eyebrow">
              {t("blogsPage.eyebrow") || "Ideas for your next step"}
            </p>
            <h1>
              {t("blogsPage.title") || "Thoughtful decisions."}
              <br />
              <span className="highlight-blue">
                {t("blogsPage.titleHighlight") || "Better digital work."}
              </span>
            </h1>
            <p className="editorial-lead">
              {t("blogsPage.lead") ||
                "Practical reading on building useful products, improving workflows, and communicating clearly online."}
            </p>
          </div>
          <div className="editorial-hero-media">
            <div className="editorial-hero-image-wrap">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt={
                  t("blogsPage.imageAlt") ||
                  "Modern developer workspace with laptop, code, notebook, and coffee representing thoughtful digital decisions"
                }
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
        title={t("blogsPage.ctaTitle") || "Turn a question into a plan."}
        description={
          t("blogsPage.ctaDescription") ||
          "Tell us what you’re working on and where you need support."
        }
        buttonText={t("blogsPage.ctaButton") || "Discuss your project"}
        buttonHref="/contact"
      />
    </div>
  );
}
