import React, { ElementType, ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type GradientVariant = "brand" | "brand-subtle" | "brand-light";

export type GradientTextProps<T extends ElementType = "span"> = {
  as?: T;
  variant?: GradientVariant;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

const gradientVariants: Record<GradientVariant, string> = {
  // Grosbyte signature vibrant blue -> cyan gradient (#0966fa -> #00a8ff -> #00d2ff)
  brand: "linear-gradient(135deg, #0966fa 0%, #00a8ff 55%, #00d2ff 100%)",
  "brand-subtle": "linear-gradient(135deg, #0966fa 0%, #38bdf8 100%)",
  "brand-light": "linear-gradient(180deg, #ffffff 30%, #8bb4ff 100%)",
};

export const GradientText = forwardRef(function GradientText(
  {
    as,
    variant = "brand",
    className,
    style,
    children,
    ...props
  }: GradientTextProps<ElementType>,
  ref: React.Ref<HTMLElement>
) {
  const Component = as || "span";
  const gradientStyle = gradientVariants[variant] || gradientVariants.brand;

  return (
    <Component
      ref={ref}
      className={cn("brand-gradient-text inline-block", className)}
      style={{
        backgroundImage: gradientStyle,
        WebkitBackgroundImage: gradientStyle,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}) as <T extends ElementType = "span">(
  props: GradientTextProps<T> & { ref?: React.Ref<HTMLElement> }
) => React.ReactElement | null;

export default GradientText;
