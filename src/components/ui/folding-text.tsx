"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FoldingTextProps extends React.HTMLAttributes<HTMLElement> {
  /** The text string to animate (can contain \n for line breaks) */
  text?: string;
  /** Children fallback if text prop is not directly provided */
  children?: React.ReactNode;
  /** Explicit array of lines to break across */
  lines?: string[];
  /** Custom HTML tag to render, defaults to 'h2' */
  as?: React.ElementType;
  /** Additional container classes */
  className?: string;
  /** Alignment: 'center' | 'left' | 'right' */
  align?: "center" | "left" | "right";
  /** Whether to fold by whole words or individual characters */
  splitBy?: "words" | "chars";
  /** Words that should receive gradient or custom highlight styling */
  highlightWords?: string[];
  /** Custom classes for highlighted words */
  highlightClassName?: string;
  /** Fold direction: 'down' (hinge at top) or 'up' (hinge at bottom) */
  direction?: "down" | "up";
  /** Stagger delay between items in seconds (default: 0.05) */
  stagger?: number;
  /** Delay before animation starts in seconds (default: 0.1) */
  delay?: number;
  /** Enable 3D paper flex on hover */
  interactive?: boolean;
  /** Allow clicking to replay the unfolding sequence */
  replayOnClick?: boolean;
  /** Only animate once on scroll, or replay on every view */
  once?: boolean;
}

/**
 * Accurately extracts plain text string from React children if text prop is omitted.
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

/**
 * Accurately splits text into unicode graphemes so multi-byte characters and emoji don't tear.
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

export function FoldingText({
  text,
  children,
  lines,
  as: Component = "h2",
  className,
  align = "center",
  splitBy = "words",
  highlightWords = [],
  highlightClassName = "text-brand-gradient font-extrabold",
  direction = "down",
  stagger = 0.05,
  delay = 0.1,
  interactive = true,
  replayOnClick = true,
  once = true,
  style,
  onClick,
  ...restProps
}: FoldingTextProps) {
  const containerRef = React.useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, {
    once,
    amount: 0.25,
  });
  const [replayKey, setReplayKey] = React.useState(0);

  const handleReplay = (e: React.MouseEvent<HTMLElement>) => {
    if (replayOnClick) {
      setReplayKey((k) => k + 1);
    }
    onClick?.(e);
  };

  const fullText = React.useMemo(() => {
    if (typeof text === "string" && text.length > 0) return text;
    return extractText(children);
  }, [text, children]);

  // Compute lines array: either from explicit lines prop, or by splitting fullText by \n
  const computedLines = React.useMemo(() => {
    if (lines && lines.length > 0) return lines;
    if (fullText) return fullText.split("\n");
    return [""];
  }, [lines, fullText]);

  // Pre-calculate structured word and character data with deterministic stagger indices
  const processedLines = React.useMemo(() => {
    let globalIndex = 0;

    return computedLines.map((lineStr) => {
      const words = lineStr.split(/\s+/).filter(Boolean);

      const lineWords = words.map((word) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase()),
        );

        if (splitBy === "chars") {
          const graphemes = splitIntoGraphemes(word);
          const charsWithIndex = graphemes.map((char) => ({
            char,
            index: globalIndex++,
          }));

          return {
            word,
            isHighlighted,
            chars: charsWithIndex,
          };
        }

        return {
          word,
          isHighlighted,
          index: globalIndex++,
        };
      });

      return lineWords;
    });
  }, [computedLines, highlightWords, splitBy]);

  const transformOrigin = direction === "down" ? "50% 0%" : "50% 100%";
  const initialRotateX = direction === "down" ? -88 : 88;
  const initialY = direction === "down" ? -14 : 14;

  const alignClass = {
    center: "justify-center text-center",
    left: "justify-start text-left",
    right: "justify-end text-right",
  }[align];

  const Tag = Component as React.ElementType;

  // Render static accessible text if user prefers reduced motion
  if (reduceMotion) {
    return (
      <Tag
        ref={containerRef}
        className={cn(
          "flex flex-col relative",
          align === "center" && "items-center text-center",
          align === "left" && "items-start text-left",
          align === "right" && "items-end text-right",
          className,
        )}
        style={style}
        {...restProps}
      >
        {computedLines.map((line, idx) => (
          <span key={`reduced-${idx}`} className={alignClass}>
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      key={fullText}
      ref={containerRef}
      onClick={handleReplay}
      aria-label={fullText}
      className={cn(
        "flex flex-col relative select-none",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        interactive && "cursor-pointer group/fold",
        className,
      )}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...restProps}
    >
      {/* Accessible screen-reader text */}
      <span className="sr-only">{fullText}</span>

      {/* Visual folding animation */}
      <span aria-hidden="true" className="contents">
        {processedLines.map((lineWords, lineIdx) => (
          <span
            key={`line-${lineIdx}`}
            className={cn(
              "inline-flex flex-wrap items-center gap-x-[0.3em] gap-y-1.5 w-full",
              alignClass,
            )}
            style={{
              perspective: 1200,
              transformStyle: "preserve-3d",
            }}
          >
            {lineWords.map((wordData, wordIdx) => {
              // Character-level folding: word acts as non-breaking wrapper
              if (
                splitBy === "chars" &&
                "chars" in wordData &&
                wordData.chars
              ) {
                return (
                  <span
                    key={`${replayKey}-${lineIdx}-${wordIdx}`}
                    className={cn(
                      "inline-flex whitespace-nowrap",
                      wordData.isHighlighted && highlightClassName,
                    )}
                  >
                    {wordData.chars.map(({ char, index }) => {
                      const itemDelay = delay + index * stagger;

                      return (
                        <span
                          key={`c-${index}-${char}`}
                          className="inline-block relative overflow-visible py-0.5"
                          style={{
                            perspective: 1000,
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <motion.span
                            initial={{
                              opacity: 0,
                              rotateX: initialRotateX,
                              y: initialY,
                              z: -28,
                              scale: 0.94,
                              filter: "blur(2px)",
                            }}
                            animate={
                              isInView
                                ? {
                                    opacity: 1,
                                    rotateX: 0,
                                    y: 0,
                                    z: 0,
                                    scale: 1,
                                    filter: "blur(0px)",
                                  }
                                : {
                                    opacity: 0,
                                    rotateX: initialRotateX,
                                    y: initialY,
                                    z: -28,
                                    scale: 0.94,
                                    filter: "blur(2px)",
                                  }
                            }
                            whileHover={
                              interactive
                                ? {
                                    rotateX: direction === "down" ? -20 : 20,
                                    y: direction === "down" ? -2.5 : 2.5,
                                    z: 14,
                                    transition: {
                                      type: "spring",
                                      stiffness: 350,
                                      damping: 18,
                                    },
                                  }
                                : undefined
                            }
                            transition={{
                              duration: 0.6,
                              delay: itemDelay,
                              type: "spring",
                              stiffness: 120,
                              damping: 14,
                              mass: 0.85,
                            }}
                            style={{
                              display: "inline-block",
                              transformOrigin,
                              transformStyle: "preserve-3d",
                              WebkitFontSmoothing: "antialiased",
                            }}
                            className="relative"
                          >
                            {/* Subtle Origami Crease Hinge Line on hover */}
                            <span
                              aria-hidden="true"
                              className={cn(
                                "pointer-events-none absolute left-0 right-0 h-[1.5px] opacity-0 group-hover/fold:opacity-60 transition-opacity duration-300",
                                direction === "down"
                                  ? "top-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                                  : "bottom-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent",
                              )}
                            />
                            {char}
                          </motion.span>
                        </span>
                      );
                    })}
                  </span>
                );
              }

              // Word-level folding
              const itemDelay = delay + (wordData.index ?? 0) * stagger;

              return (
                <span
                  key={`${replayKey}-${lineIdx}-${wordIdx}-${wordData.word}`}
                  className="inline-block relative overflow-visible py-0.5"
                  style={{
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.span
                    initial={{
                      opacity: 0,
                      rotateX: initialRotateX,
                      y: initialY,
                      z: -30,
                      scale: 0.94,
                      filter: "blur(2px)",
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            rotateX: 0,
                            y: 0,
                            z: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          }
                        : {
                            opacity: 0,
                            rotateX: initialRotateX,
                            y: initialY,
                            z: -30,
                            scale: 0.94,
                            filter: "blur(2px)",
                          }
                    }
                    whileHover={
                      interactive
                        ? {
                            rotateX: direction === "down" ? -20 : 20,
                            y: direction === "down" ? -3 : 3,
                            z: 15,
                            transition: {
                              type: "spring",
                              stiffness: 350,
                              damping: 18,
                            },
                          }
                        : undefined
                    }
                    transition={{
                      duration: 0.65,
                      delay: itemDelay,
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                      mass: 0.85,
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin,
                      transformStyle: "preserve-3d",
                      WebkitFontSmoothing: "antialiased",
                    }}
                    className={cn(
                      "relative transition-colors duration-200",
                      wordData.isHighlighted && highlightClassName,
                    )}
                  >
                    {/* Dynamic 3D Paper Crease Shadow Overlay: Fades as it unfolds flat */}
                    <motion.span
                      aria-hidden="true"
                      initial={{ opacity: 0.65 }}
                      animate={isInView ? { opacity: 0 } : { opacity: 0.65 }}
                      transition={{
                        duration: 0.45,
                        delay: itemDelay + 0.06,
                        ease: "easeOut",
                      }}
                      className={cn(
                        "pointer-events-none absolute inset-0 rounded-xs",
                        direction === "down"
                          ? "bg-gradient-to-b from-black/45 via-black/15 to-transparent"
                          : "bg-gradient-to-t from-black/45 via-black/15 to-transparent",
                      )}
                    />

                    {/* Subtle Origami Crease Hinge Line */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute left-0 right-0 h-[1.5px] opacity-0 group-hover/fold:opacity-60 transition-opacity duration-300",
                        direction === "down"
                          ? "top-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                          : "bottom-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent",
                      )}
                    />

                    {wordData.word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </Tag>
  );
}

export { FoldingText as FoldingTitle };
