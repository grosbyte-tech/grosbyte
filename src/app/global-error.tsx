"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          backgroundColor: "#f8fafc",
          color: "#0f172a",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "560px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.25rem 0.85rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              color: "#e11d48",
              marginBottom: "1.25rem",
            }}
          >
            Application Error
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 1rem",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#475569",
              lineHeight: 1.6,
              margin: "0 0 2rem",
            }}
          >
            A critical error prevented the application from rendering. Please
            refresh or try again.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                backgroundColor: "#0966fa",
                color: "#ffffff",
                border: "none",
                borderRadius: "9999px",
                padding: "0.75rem 1.75rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 10px 25px -5px rgba(9, 102, 250, 0.35)",
              }}
            >
              Try Again
            </button>
            <Link
              href="/"
              style={{
                backgroundColor: "#ffffff",
                color: "#0f172a",
                border: "1px solid rgba(15, 23, 42, 0.12)",
                borderRadius: "9999px",
                padding: "0.75rem 1.75rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
