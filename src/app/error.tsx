"use client";

import { useEffect } from "react";
import { RotateCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if configured
    console.error("Application error:", error);
  }, [error]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-[70vh] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
          <span>Something went wrong</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
          An unexpected error <span className="text-[var(--brand-blue)]">occurred</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          We encountered an issue while loading this page. You can try refreshing
          the page or return to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            type="button"
            variant="glowing"
            size="default"
            onClick={() => reset()}
          >
            <RotateCw className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Try Again</span>
          </Button>
          <Button href="/" variant="secondary" size="default">
            <Home className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
