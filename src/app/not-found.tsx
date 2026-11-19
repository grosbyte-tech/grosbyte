import { Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-[70vh] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="glowing" size="default">
            <Home className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/contact" variant="secondary" size="default">
            <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Contact Grosbyte</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
