"use client";

import { useState } from "react";
import { useTranslation } from "@/contexts/language-context";
import { blogCategories, type BlogSummary } from "@/lib/blogs/types";
import { ArticleCard } from "./article-card";

export function BlogList({ posts }: { posts: BlogSummary[] }) {
  const { t } = useTranslation();
  const [category, setCategory] = useState("All articles");

  const visible = posts.filter(
    (post) => category === "All articles" || post.category === category,
  );

  const getCategoryLabel = (cat: string) => {
    if (cat === "All articles") {
      return t<string>("blogsPage.filterAll") || "All articles";
    }
    return t<string>(`blogsPage.categories.${cat}`) || cat;
  };

  const countLabel =
    visible.length === 1
      ? t<string>("blogsPage.articleCountSingular") || "article"
      : t<string>("blogsPage.articleCountPlural") || "articles";

  const inCategoryText =
    category !== "All articles"
      ? ` ${t<string>("blogsPage.inCategory") || "in"} ${getCategoryLabel(category)}`
      : "";

  return (
    <section className="blog-library" aria-labelledby="blog-library-title">
      <h2 id="blog-library-title">
        {t<string>("blogsPage.exploreTitle") || "Explore the articles"}
      </h2>

      <div
        className="blog-filters"
        role="group"
        aria-label={
          t<string>("blogsPage.exploreTitle") || "Filter articles by category"
        }
      >
        {["All articles", ...blogCategories].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {getCategoryLabel(item)}
          </button>
        ))}
      </div>

      <p className="article-count" role="status">
        {visible.length} {countLabel}
        {inCategoryText}
      </p>

      <div className="article-grid">
        {visible.map((post) => (
          <ArticleCard post={post} key={post.slug} />
        ))}
      </div>

      {visible.length === 0 && (
        <p>
          {t<string>("blogsPage.noArticles") ||
            "No articles in this category yet. Try another category."}
        </p>
      )}
    </section>
  );
}
