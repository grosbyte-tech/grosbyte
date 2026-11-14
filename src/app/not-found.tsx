import Link from "next/link";
import {
  Code2,
  Smartphone,
  Sparkles,
  BookOpen,
  Mail,
  Home,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const coreServices = [
  {
    title: "Custom Software Development",
    description:
      "Bespoke web applications, internal tools, and robust backend systems tailored to your workflows.",
    href: "/custom-software-development",
    icon: Code2,
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Modern, fast, and responsive digital products built with Next.js, React, and mobile technologies.",
    href: "/web-mobile-applications",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing & Brand Growth",
    description:
      "Brand identity, technical SEO, and targeted marketing campaigns that turn clicks into clients.",
    href: "/digital-marketing",
    icon: Sparkles,
  },
];

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-[75vh] flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] border border-[var(--brand-blue)]/20">
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
          Page <span className="text-[var(--brand-blue)]">Not Found</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          The link you followed may be broken, or the page may have been moved,
          renamed, or deleted.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" size="default">
            <Home className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/contact" variant="minimal" size="default">
            <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Contact Grosbyte</span>
          </Button>
        </div>
      </div>

      <div className="mt-14 pt-12 border-t border-[var(--border)]">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
            Explore our core solutions
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Or jump directly to another section of our website
          </p>
        </div>

        <nav
          aria-label="Popular destinations"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group relative p-5 rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-all duration-200 flex flex-col justify-between hover:border-[var(--brand-blue)]/40 hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors text-base mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center text-xs font-semibold text-[var(--brand-blue)] group-hover:translate-x-0.5 transition-transform">
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-secondary)]">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 hover:text-[var(--brand-blue)] transition-colors font-medium"
          >
            <BookOpen
              className="w-4 h-4 text-[var(--brand-blue)]"
              aria-hidden="true"
            />
            <span>Read our Insights & Blogs</span>
          </Link>
          <span className="text-[var(--border)]" aria-hidden="true">
            •
          </span>
          <Link
            href="/about"
            className="hover:text-[var(--brand-blue)] transition-colors font-medium"
          >
            About Grosbyte Technologies
          </Link>
        </div>
      </div>
    </main>
  );
}
