import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Breadcrumbs, EditorialCTA } from "@/components/editorial/page-shell";
import { ArticleCard, ArticleMeta } from "@/components/blogs/article-card";
import { ShareArticle } from "@/components/blogs/share-article";
import { TableOfContents } from "@/components/blogs/table-of-contents";
import { clientEnv } from "@/lib/env";
import { summarizePost } from "@/lib/blogs/repository";
import type { BlogPost, BlogSummary } from "@/lib/blogs/types";
import type { ServiceDetail } from "@/lib/services/services";

export interface ArticleLayoutProps {
  post: BlogPost;
  related: BlogSummary[];
  service?: ServiceDetail;
}

export function ArticleHero({ post }: { post: BlogPost }) {
  const postSummary = summarizePost(post);
  return (
    <header className="article-hero">
      <Breadcrumbs current={post.title} blog />

      <div className="article-header-meta">
        <ArticleMeta post={postSummary} />
      </div>

      <h1 className="article-title">{post.title}</h1>

      <p className="article-lead">{post.excerpt}</p>
    </header>
  );
}

export function ArticleServiceCard({ service }: { service: ServiceDetail }) {
  return (
    <aside className="article-service-card" aria-label="Related service">
      <div className="article-service-badge">Relevant Capability</div>
      <div className="article-service-title font-semibold text-lg">
        <Link href={`/services/${service.slug}`}>{service.title}</Link>
      </div>
      <p className="article-service-summary">{service.summary}</p>
      <Link
        className="article-service-cta group"
        href={`/services/${service.slug}`}
      >
        <span>Explore {service.title}</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </aside>
  );
}

export function RelatedArticlesSection({
  related,
}: {
  related: BlogSummary[];
}) {
  if (related.length === 0) return null;
  return (
    <section className="related-articles" aria-labelledby="related-title">
      <div className="related-header">
        <p className="eyebrow">More to explore</p>
        <h2 id="related-title">Continue reading</h2>
      </div>
      <div className="article-grid">
        {related.map((item) => (
          <ArticleCard key={item.slug} post={item} />
        ))}
      </div>
    </section>
  );
}

export function ArticleLayout({ post, related, service }: ArticleLayoutProps) {
  const siteUrl = clientEnv.NEXT_PUBLIC_SITE_URL;
  const articleUrl = `${siteUrl}/blogs/${post.slug}`;
  const tocItems = post.sections.map((section, i) => ({
    id: `section-${i}`,
    heading: section.heading,
  }));

  return (
    <div className="container editorial-container">
      <article className="blog-article">
        {/* Article Header & Metadata */}
        <ArticleHero post={post} />

        {/* Article Content Layout: Sticky Table of Contents on Left + Unified 760px Reading Column */}
        <div className="article-layout">
          {/* Left Sidebar: Table of Contents */}
          <aside className="article-toc-sidebar" aria-label="Table of contents">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Unified Reading Column (760px shared max-width across image, text, share, capability, and back navigation) */}
          <div className="article-body">
            {/* Featured Cover Image */}
            {post.coverImage && (
              <div className="article-cover-wrap">
                <div className="article-cover-frame">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt || post.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 920px"
                    className="article-cover-image"
                  />
                </div>
                {post.coverImageAlt && (
                  <p className="article-cover-caption" aria-hidden="true">
                    {post.coverImageAlt}
                  </p>
                )}
              </div>
            )}

            {/* Article Body Content */}
            {post.sections.map((section, i) => (
              <section
                key={section.heading}
                id={`section-${i}`}
                aria-labelledby={`section-heading-${i}`}
                className="article-section"
              >
                <h2 id={`section-heading-${i}`}>{section.heading}</h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </section>
            ))}

            {/* Share Article Section */}
            <ShareArticle title={post.title} url={articleUrl} />

            {/* Related Service Context Callout */}
            {service && <ArticleServiceCard service={service} />}

            {/* Back to Blog Listing */}
            <div className="article-back-nav">
              <Link className="article-back-link group" href="/blogs">
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                <span>Back to all articles</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Continue Reading (Related Articles Grid) */}
      <RelatedArticlesSection related={related} />

      {/* Reusable Editorial CTA */}
      <EditorialCTA
        title="Have a related challenge?"
        description="Share your context and explore a practical next step with Grosbyte."
        buttonText="Start a conversation"
        buttonHref="/contact"
      />
    </div>
  );
}
