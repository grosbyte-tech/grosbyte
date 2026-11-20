import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface UnderlineHeadingProps {
  /** The accented, underlined word/phrase. */
  accent: ReactNode;
  /** Text before the accent. */
  lead?: ReactNode;
  /** Text after the accent. */
  trail?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * Accent heading with the hand-drawn underline sweeping in.
 */
export function UnderlineHeading({
  accent,
  lead,
  trail,
  as = "h2",
  className,
}: UnderlineHeadingProps) {
  const Tag = as as ElementType;

  return (
    <Tag className={className}>
      {lead ? <>{lead} </> : null}
      <span className="relative inline-block text-accent">
        {accent}
        <span className="absolute top-full left-0 block w-full pt-1">
          <BrandUnderline />
        </span>
      </span>
      {trail ? <> {trail}</> : null}
    </Tag>
  );
}

/**
 * The hand-drawn underline stroke, painted with the brand blue gradient.
 * Self-contained SVG curve — zero missing image or asset dependencies.
 */
export function BrandUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 210 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("block aspect-[210/16] w-full", className)}
    >
      <path
        d="M3 13C55 4 155 3 207 9"
        stroke="url(#brand-underline-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="brand-underline-gradient"
          x1="3"
          y1="8"
          x2="207"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1d4ed8" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
