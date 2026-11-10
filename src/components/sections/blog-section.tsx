"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";
import { Reveal } from "@/components/motion/reveal";
import { FoldingText } from "@/components/ui/folding-text";
import { ArticleCard } from "@/components/blogs/article-card";
import { Button } from "@/components/ui/button";
import type { BlogSummary } from "@/lib/blogs/types";
import "@/components/editorial/editorial.css";

interface BlogSectionProps {
  posts: BlogSummary[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  const { t } = useTranslation();

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="section blog-section bg-white" id="blogs">
      <div className="container">
        <Reveal className="section-heading section-heading-centered mb-10 sm:mb-14">
          <p className="eyebrow">
            {t("blogsSection.eyebrow") || "Ideas & Insights"}
          </p>
          <FoldingText
            as="h2"
            text={t("blogsSection.title") || "Our Latest Blogs"}
          />
          <p className="hero-copy mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
            {t("blogsSection.subtitle") ||
              "Practical perspectives on software engineering, digital products, automation, and tech workflows."}
          </p>
        </Reveal>

        <div className="article-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {posts.map((post) => (
            <ArticleCard post={post} key={post.slug} />
          ))}
        </div>

        <Reveal className="mt-12 sm:mt-14 flex justify-center" delay={0.1}>
          <Button
            href="/blogs"
            variant="outline"
            size="lg"
            className="h-12 min-h-[48px] px-8 text-sm font-bold inline-flex items-center gap-2"
          >
            <span>{t("blogsSection.viewAll") || "Explore all articles"}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
