"use client";

import React, { ElementType, useId, useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedParagraphProps extends React.HTMLAttributes<HTMLElement> {
  /** Text content to animate. Can also be passed as string children. */
  text?: string;
  /** Fallback children if text prop is not provided. */
  children?: React.ReactNode;
  /** Semantic HTML element tag. Defaults to 'p'. */
  as?: ElementType;
  /** Delay in seconds before word animation starts. Defaults to 0.2. */
  delay?: number;
  /** Stagger time in seconds between words. Auto-calculated if not provided. */
  stagger?: number;
  /** Duration of each word's fade/float in seconds. Defaults to 0.45. */
  duration?: number;
  /** Whether the viewport entrance should only animate once. Defaults to true. */
  once?: boolean;
}

/**
 * Extracts string text from React children if text prop is not directly provided.
 */
function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (
    React.isValidElement(children) &&
    children.props &&
    (children.props as { children?: React.ReactNode }).children
  ) {
    return extractText(
      (children.props as { children?: React.ReactNode }).children,
    );
  }
  return "";
}

export function AnimatedParagraph({
  text,
  children,
  as: Component = "p",
  className,
  delay = 0.2,
  stagger: customStagger,
  duration = 0.45,
  once = true,
  style,
  ...restProps
}: AnimatedParagraphProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const id = useId();

  const fullText = (text ?? extractText(children)).trim();

  const words = useMemo(() => {
    return fullText ? fullText.split(/\s+/).filter(Boolean) : [];
  }, [fullText]);

  // Keep total flow animation under ~0.55s delay for snappy, fluid delivery
  const autoStagger = useMemo(() => {
    if (customStagger !== undefined) return customStagger;
    if (words.length <= 0) return 0.015;
    return Math.min(0.018, 0.45 / Math.max(words.length, 1));
  }, [customStagger, words.length]);

  const isInView = useInView(containerRef, {
    once,
    amount: 0.15,
  });

  const Tag = Component;

  if (reduceMotion || words.length === 0) {
    return (
      <Tag
        ref={containerRef}
        className={cn("animated-paragraph", className)}
        style={style}
        {...restProps}
      >
        {fullText || children}
      </Tag>
    );
  }

  return (
    <Tag
      key={fullText}
      ref={containerRef}
      className={cn(
        "animated-paragraph block w-full [text-wrap:balance]",
        className,
      )}
      style={{
        textWrap: "balance",
        ...style,
      }}
      aria-label={fullText}
      {...restProps}
    >
      {/* Accessible screen-reader text */}
      <span className="sr-only">{fullText}</span>

      {/* Visual animated words */}
      <span aria-hidden="true" className="block w-full">
        {words.map((word, index) => (
          <motion.span
            key={`${id}-w-${index}`}
            className="inline-block mx-[0.14em]"
            style={{
              willChange: "transform, opacity, filter",
            }}
            initial={{
              opacity: 0,
              y: 12,
              filter: "blur(4px)",
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 12,
                    filter: "blur(4px)",
                  }
            }
            transition={{
              duration,
              delay: delay + index * autoStagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
