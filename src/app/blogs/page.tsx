import { Breadcrumbs } from "@/components/editorial/page-shell";
import { serviceMetadata } from "@/components/services/service-ui";
import { BlogList } from "@/components/blogs/blog-list";
import { ArticleCard } from "@/components/blogs/article-card";
import { Button } from "@/components/ui/button";
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
        <p className="eyebrow">Ideas for your next step</p>
        <h1>
          Thoughtful decisions.
          <br />
          Better digital work.
        </h1>
        <p className="editorial-lead">
          Practical reading on building useful products, improving workflows,
          and communicating clearly online.
        </p>
        <p className="sample-notice">
          Sample library — these articles and publication dates are
          demonstration content.
        </p>
      </header>
      <section className="featured-articles" aria-labelledby="featured-title">
        <p className="eyebrow">A place to start</p>
        <h2 id="featured-title">Featured reading</h2>
        <div className="featured-grid">
          {posts
            .filter((post) => post.featured)
            .map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
        </div>
      </section>
      <BlogList posts={posts} />
      <section className="editorial-cta">
        <div>
          <h2>Turn a question into a plan.</h2>
          <p>Tell us what you’re working on and where you need support.</p>
        </div>
        <Button href="/contact" size="lg">
          Discuss your project
        </Button>
      </section>
    </div>
  );
}
