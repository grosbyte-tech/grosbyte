import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./editorial.css";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="editorial-page">
      {children}
    </main>
  );
}

export function Breadcrumbs({
  current,
  blog = false,
}: {
  current: string;
  blog?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="editorial-breadcrumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {blog && (
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        )}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}

export function EditorialCTA({
  title = "Turn a question into a plan.",
  description = "Tell us what you’re working on and where you need support.",
  buttonText = "Discuss your project",
  buttonHref = "/contact",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="editorial-cta">
      {/* Atmospheric glowing aurora and 3D metallic chrome arc */}
      <div className="editorial-cta-backdrop" aria-hidden="true">
        <svg
          viewBox="0 0 1200 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="editorial-cta-svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="chromeTorus"
              x1="45%"
              y1="90%"
              x2="90%"
              y2="20%"
            >
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="15%" stopColor="#64748b" />
              <stop offset="35%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="85%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient
              id="chromeHighlight"
              x1="45%"
              y1="90%"
              x2="90%"
              y2="20%"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#e0f2fe" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <radialGradient id="tealNebula" cx="62%" cy="65%" r="45%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.28" />
              <stop offset="45%" stopColor="#0891b2" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="blueNebula" cx="88%" cy="30%" r="55%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.38" />
              <stop offset="45%" stopColor="#3b82f6" stopOpacity="0.18" />
              <stop offset="80%" stopColor="#1d4ed8" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="violetNebula" cx="95%" cy="85%" r="35%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#6366f1" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#tealNebula)" />
          <rect width="100%" height="100%" fill="url(#blueNebula)" />
          <rect width="100%" height="100%" fill="url(#violetNebula)" />

          {/* 3D Metallic Chrome Arc - Outer Depth Shadow */}
          <path
            d="M 460 380 C 490 240, 560 140, 700 95 C 850 50, 1010 80, 1090 190 C 1140 260, 1120 340, 1030 380"
            stroke="#000000"
            strokeWidth="38"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* 3D Metallic Chrome Arc - Main Chrome Body */}
          <path
            d="M 460 380 C 490 240, 560 140, 700 95 C 850 50, 1010 80, 1090 190 C 1140 260, 1120 340, 1030 380"
            stroke="url(#chromeTorus)"
            strokeWidth="28"
            strokeLinecap="round"
          />

          {/* 3D Metallic Chrome Arc - Specular Ridge Highlight */}
          <path
            d="M 460 380 C 490 240, 560 140, 700 95 C 850 50, 1010 80, 1090 190 C 1140 260, 1120 340, 1030 380"
            stroke="url(#chromeHighlight)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>
      </div>

      <div className="editorial-cta-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="editorial-cta-action">
        <Button href={buttonHref} size="lg" variant="glowing">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
