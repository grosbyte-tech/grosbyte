"use client";

import React, { ElementType, useId, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RollingTextProps extends React.HTMLAttributes<HTMLElement> {
  /** The text string to animate. Can also be passed as string children. */
  text?: string;
  /** Children fallback if text prop is not provided. */
  children?: React.ReactNode;
  /** The semantic HTML tag to render (h1, h2, h3, h4, span, p, div). Defaults to h2. */
  as?: ElementType;
  /** Base delay in seconds before animation begins. Defaults to 0. */
  delay?: number;
  /** Stagger time in seconds between each character. Clamped automatically if not provided. */
  stagger?: number;
  /** Duration of the character roll animation in seconds. Defaults to 0.55. */
  duration?: number;
  /** Whether the viewport entrance roll should only happen once. Defaults to true. */
  once?: boolean;
  /** Whether to roll characters up interactively on hover. Defaults to true. */
  rollOnHover?: boolean;
  /** Whether to roll characters on viewport entrance. Defaults to true. */
  rollOnView?: boolean;
  /** Hover trigger scope: 'container' rolls entire heading, 'word' rolls hovered word. */
  hoverTrigger?: "container" | "word" | "none";
  /** Words to highlight with highlightClassName. */
  highlightWords?: string[];
  /** Class name applied to highlighted words. Defaults to brand gradient. */
  highlightClassName?: string;
}

/**
 * Accurately splits text into unicode grapheme clusters so multi-byte,
 * emoji, and complex script conjuncts (e.g. Nepali, Hindi) don't break.
 */
function splitIntoGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    try {
      const segmenter = new Intl.Segmenter(undefined, {
        granularity: "grapheme",
      });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    } catch {
      // Fallback
    }
  }
  return Array.from(text);
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

export function RollingText({
  text,
  children,
  as: Component = "h2",
  className,
  delay = 0,
  stagger: customStagger,
  duration = 0.55,
  once = true,
  rollOnHover = true,
  rollOnView = true,
  hoverTrigger = "container",
  highlightWords = [],
  highlightClassName = "text-brand-gradient",
  style,
  ...restProps
}: RollingTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const id = useId();

  const fullText = (text ?? extractText(children)).trim();

  // Break text into words
  const words = useMemo(() => {
    return fullText.split(/\s+/).filter(Boolean);
  }, [fullText]);

  // Pre-calculate graphemes and global character indices for smooth progressive staggering
  const wordsData = useMemo(() => {
    const items = [];
    let runningOffset = 0;
    for (const word of words) {
      const graphemes = splitIntoGraphemes(word);
      items.push({
        word,
        graphemes,
        startIndex: runningOffset,
        isHighlighted: highlightWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase(),
        ),
      });
      runningOffset += graphemes.length;
    }
    return items;
  }, [words, highlightWords]);

  const totalChars = useMemo(() => {
    return wordsData.reduce((acc, w) => acc + w.graphemes.length, 0);
  }, [wordsData]);

  // Keep total entrance wave under ~0.65s delay for snappy feel
  const autoStagger = useMemo(() => {
    if (customStagger !== undefined) return customStagger;
    if (totalChars <= 0) return 0.02;
    return Math.min(0.022, 0.5 / Math.max(totalChars, 1));
  }, [customStagger, totalChars]);

  const isInView = useInView(containerRef, {
    once,
    amount: 0.15,
  });

  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [hoveredWordIndex, setHoveredWordIndex] = useState<number | null>(null);

  // If user prefers reduced motion or there is no text, render simple heading
  if (reduceMotion || !fullText) {
    const Tag = Component;
    return (
      <Tag
        ref={containerRef}
        className={cn("rolling-heading", className)}
        style={style}
        {...restProps}
      >
        {fullText || children}
      </Tag>
    );
  }

  const Tag = Component;

  return (
    <Tag
      key={fullText}
      ref={containerRef}
      className={cn(
        "rolling-heading select-none group block w-full text-center mx-auto [text-wrap:balance]",
        className,
      )}
      style={{
        textAlign: "center",
        textWrap: "balance",
        ...style,
      }}
      onMouseEnter={() => {
        if (rollOnHover && hoverTrigger === "container") {
          setIsContainerHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (rollOnHover && hoverTrigger === "container") {
          setIsContainerHovered(false);
        }
      }}
      aria-label={fullText}
      {...restProps}
    >
      {/* Accessible screen-reader text */}
      <span className="sr-only">{fullText}</span>

      {/* Visual animated rolling letters */}
      <span aria-hidden="true" className="block w-full text-center">
        {wordsData.map((wordObj, wordIndex) => {
          const isWordHovered =
            isContainerHovered ||
            (hoverTrigger === "word" && hoveredWordIndex === wordIndex);

          return (
            <span
              key={`${id}-w-${wordIndex}`}
              className={cn(
                "inline-block whitespace-nowrap mx-[0.14em]",
                wordObj.isHighlighted && highlightClassName,
              )}
              onMouseEnter={() => {
                if (rollOnHover && hoverTrigger === "word") {
                  setHoveredWordIndex(wordIndex);
                }
              }}
              onMouseLeave={() => {
                if (rollOnHover && hoverTrigger === "word") {
                  setHoveredWordIndex(null);
                }
              }}
            >
              {wordObj.graphemes.map((char, charIndex) => {
                const globalIndex = wordObj.startIndex + charIndex;

                const isTriggered = rollOnView ? isInView : true;
                const state = !isTriggered
                  ? "hidden"
                  : isWordHovered && rollOnHover
                    ? "hover"
                    : "visible";

                return (
                  <span
                    key={`${id}-c-${globalIndex}`}
                    className="relative inline-block overflow-hidden align-baseline"
                    style={{
                      paddingTop: "0.14em",
                      paddingBottom: "0.14em",
                      marginTop: "-0.14em",
                      marginBottom: "-0.14em",
                    }}
                  >
                    {/* Primary character: rolls into view on scroll, rolls up on hover */}
                    <motion.span
                      className="inline-block"
                      initial="hidden"
                      animate={state}
                      variants={{
                        hidden: {
                          y: "115%",
                          opacity: 0,
                        },
                        visible: {
                          y: "0%",
                          opacity: 1,
                          transition: {
                            duration,
                            delay: delay + globalIndex * autoStagger,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        hover: {
                          y: "-100%",
                          opacity: 1,
                          transition: {
                            duration: Math.max(duration * 0.72, 0.32),
                            delay: (globalIndex % 20) * (autoStagger * 0.65),
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                    >
                      {char}
                    </motion.span>

                    {/* Secondary duplicate character: positioned below, rolls up to take slot on hover */}
                    {rollOnHover && (
                      <motion.span
                        className="absolute left-0 top-0 inline-block select-none pointer-events-none"
                        style={{
                          paddingTop: "0.14em",
                          paddingBottom: "0.14em",
                          marginTop: "-0.14em",
                          marginBottom: "-0.14em",
                        }}
                        initial="hidden"
                        animate={state}
                        variants={{
                          hidden: {
                            y: "115%",
                            opacity: 0,
                          },
                          visible: {
                            y: "100%",
                            opacity: 1,
                            transition: {
                              duration,
                              delay: delay + globalIndex * autoStagger,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          hover: {
                            y: "0%",
                            opacity: 1,
                            transition: {
                              duration: Math.max(duration * 0.72, 0.32),
                              delay: (globalIndex % 20) * (autoStagger * 0.65),
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    )}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}

/**
 * Reusable vertical rolling words / ticker component.
 * Rotates between multiple phrases with a smooth rolling slot animation.
 */
export function RollingWords({
  words,
  interval = 3000,
  className,
  as: Component = "span",
}: {
  words: string[];
  interval?: number;
  className?: string;
  as?: ElementType;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (words.length <= 1 || reduceMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval, reduceMotion]);

  const Tag = Component;

  if (reduceMotion || words.length === 0) {
    return <Tag className={className}>{words[index] || ""}</Tag>;
  }

  return (
    <Tag
      className={cn(
        "relative inline-block overflow-hidden align-baseline h-[1.2em] -mb-[0.2em]",
        className,
      )}
    >
      <motion.span
        key={index}
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {words[index]}
      </motion.span>
    </Tag>
  );
}

// Alias for convenience
export const RollingHeading = RollingText;
