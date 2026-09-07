"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealWordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ScrollRevealWord({
  word,
  index,
  total,
  progress,
}: ScrollRevealWordProps) {
  // Normalize thresholds so every word reaches 100% illumination smoothly
  const start = (index / total) * 0.8;
  const end = Math.min(start + 0.2, 1.0);

  const opacity = useTransform(progress, [start, end], [0.22, 1.0]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block transition-colors duration-150"
    >
      {word}
    </motion.span>
  );
}

export interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function ScrollRevealText({
  text,
  className = "",
  as: Component = "p",
}: ScrollRevealTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end center"],
  });

  const wordsArr = text ? text.split(/\s+/).filter(Boolean) : [];

  if (reduceMotion || wordsArr.length === 0) {
    const Tag = Component;
    return (
      <Tag ref={textRef} className={className}>
        {text}
      </Tag>
    );
  }

  const Tag = Component;

  return (
    <Tag
      key={text}
      ref={textRef}
      className={cn(
        "flex flex-wrap gap-x-[0.28em] gap-y-[0.1em] text-[var(--text-primary)] leading-[1.7]",
        className,
      )}
    >
      {wordsArr.map((word, index) => (
        <ScrollRevealWord
          key={`${word}-${index}`}
          word={word}
          index={index}
          total={wordsArr.length}
          progress={scrollYProgress}
        />
      ))}
    </Tag>
  );
}
