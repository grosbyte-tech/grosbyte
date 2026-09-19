"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
  delay?: number;
}

export function AnimatedCounter({
  value,
  duration = 1.8,
  className,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  // Parse string like "18+", "$50M", "99.5%"
  const stringValue = String(value);
  const match = stringValue.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);

  const prefix = match ? match[1] : "";
  const numericTarget = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";
  const isFloat = match ? match[2].includes(".") : false;
  const decimals = isFloat && match ? match[2].split(".")[1].length : 0;

  const [displayNumber, setDisplayNumber] = useState<number>(0);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        // Ease out cubic / expo: 1 - Math.pow(1 - progress, 3)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = easeProgress * numericTarget;

        setDisplayNumber(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayNumber(numericTarget);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, numericTarget, duration, delay, shouldReduceMotion]);

  const activeNumber = shouldReduceMotion ? numericTarget : displayNumber;
  const rawValue = decimals > 0 ? activeNumber : Math.round(activeNumber);
  const formattedNumber = rawValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className} aria-label={stringValue}>
      <span aria-hidden="true">
        {prefix}
        {formattedNumber}
        {suffix}
      </span>
    </span>
  );
}
