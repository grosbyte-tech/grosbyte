export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://grosbyte.com/#organization",
    name: "Grosbyte Technologies",
    url: "https://grosbyte.com",
    logo: "https://grosbyte.com/logo.png",
    description:
      "Practical software, websites, web and mobile applications, automation, and digital marketing for your business.",
    email: "contact@grosbyte.com",
    telephone: "+9779869793130",
    sameAs: [
      "https://www.instagram.com/grosbyte.tech/",
      "https://www.facebook.com/profile.php?id=61591801983966",
      "https://www.linkedin.com/company/grosbyte-technologies",
      "https://github.com/grosbyte-tech",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://grosbyte.com/#website",
    name: "Grosbyte Technologies",
    url: "https://grosbyte.com",
    publisher: {
      "@id": "https://grosbyte.com/#organization",
    },
    inLanguage: "en-US",
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  coverImage?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://grosbyte.com/blogs/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://grosbyte.com/blogs/${post.slug}`,
    },
    datePublished: `${post.publishedAt}T00:00:00Z`,
    dateModified: `${post.publishedAt}T00:00:00Z`,
    articleSection: post.category,
    image: post.coverImage || "https://grosbyte.com/images/og-default.png",
    author: {
      "@type": "Organization",
      name: "Grosbyte Technologies",
      url: "https://grosbyte.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Grosbyte Technologies",
      url: "https://grosbyte.com",
      logo: {
        "@type": "ImageObject",
        url: "https://grosbyte.com/logo.png",
      },
    },
  };
}

export function getBreadcrumbListSchema(
  items: Array<{ name: string; url?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const element: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      };
      if (item.url) {
        element.item = item.url.startsWith("http")
          ? item.url
          : `https://grosbyte.com${item.url}`;
      }
      return element;
    }),
  };
}

export function getServiceSchema(service: {
  title: string;
  summary: string;
  slug: string;
  category?: string;
}) {
  const url =
    service.slug === "custom-software-development" ||
    service.slug === "web-mobile-applications" ||
    service.slug === "digital-marketing"
      ? `https://grosbyte.com/${service.slug}`
      : `https://grosbyte.com/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url,
    serviceType: service.category || service.title,
    provider: {
      "@type": "Organization",
      name: "Grosbyte Technologies",
      url: "https://grosbyte.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
  };
}
