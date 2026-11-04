import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface SharePlatform {
  name: string;
  label: string;
  getHref: (url: string, title: string) => string;
  icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const SHARE_PLATFORMS: SharePlatform[] = [
  {
    name: "Facebook",
    label: "Share on Facebook",
    getHref: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    label: "Share on LinkedIn",
    getHref: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    icon: LinkedinIcon,
  },
  {
    name: "X",
    label: "Share on X",
    getHref: (url, title) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: XIcon,
  },
];

export interface ShareArticleProps {
  title: string;
  url: string;
  className?: string;
}

export function ShareArticle({
  title,
  url,
  className = "",
}: ShareArticleProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grosbyte.com";
  const absoluteUrl = url.startsWith("http")
    ? url
    : `${siteUrl.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;

  return (
    <section
      className={`article-share ${className}`.trim()}
      aria-label="Share this article"
    >
      <h3 className="article-share-title">Share the article</h3>
      <div
        className="article-share-buttons"
        role="group"
        aria-label="Social share options"
      >
        {SHARE_PLATFORMS.map((platform) => {
          const href = platform.getHref(absoluteUrl, title);
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.label}
              className="article-share-button"
            >
              <Icon className="article-share-icon" />
              <span className="article-share-label">
                <span className="article-share-prefix">Share on </span>
                {platform.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
