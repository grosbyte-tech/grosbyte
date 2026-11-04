import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/editorial/page-shell";
import { ArticleCard, ArticleMeta } from "@/components/blogs/article-card";
import { Button } from "@/components/ui/button";
import { serviceMetadata } from "@/components/services/service-ui";
import {
  findPost,
  listPosts,
  relatedPosts,
  summarizePost,
} from "@/lib/blogs/repository";
import { getService } from "@/lib/services";
export const dynamicParams = false;
export async function generateStaticParams() {
  return (await listPosts()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await findPost((await params).slug);
  if (!post) notFound();
  const metadata = serviceMetadata(
    post.title,
    post.excerpt,
    `/blogs/${post.slug}`,
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: `${post.publishedAt}T00:00:00Z`,
      tags: [post.category, "Sample article"],
    },
  };
}
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await findPost((await params).slug);
  if (!post) notFound();
  const related = await relatedPosts(post);
  const service = getService(post.serviceSlug);
  return (
    <div className="container editorial-container">
      <article>
        <header className="editorial-hero article-hero">
          <Breadcrumbs current={post.title} blog />
          <p className="sample-notice">
            Sample article · Demonstration publication date
          </p>
          <h1>{post.title}</h1>
          <p className="editorial-lead">{post.excerpt}</p>
          <ArticleMeta post={summarizePost(post)} />
        </header>
        <div className="article-body">
          {post.sections.map((section, i) => (
            <section key={section.heading} aria-labelledby={`section-${i}`}>
              <h2 id={`section-${i}`}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          {service && (
            <aside className="article-service">
              <p className="eyebrow">Explore the service</p>
              <h2>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </h2>
              <p>{service.summary}</p>
              <Link
                className="editorial-link"
                href={`/services/${service.slug}`}
              >
                See what Grosbyte can deliver ↗
              </Link>
            </aside>
          )}
          <Link className="editorial-link" href="/blogs">
            ← All articles
          </Link>
        </div>
      </article>
      <section className="related-articles" aria-labelledby="related-title">
        <h2 id="related-title">Continue reading</h2>
        <div className="article-grid">
          {related.map((item) => (
            <ArticleCard key={item.slug} post={item} />
          ))}
        </div>
      </section>
      <section className="editorial-cta">
        <div>
          <h2>Have a related challenge?</h2>
          <p>
            Share your context and explore a practical next step with Grosbyte.
          </p>
        </div>
        <Button href="/contact" size="lg">
          Start a conversation
        </Button>
      </section>
    </div>
  );
}
