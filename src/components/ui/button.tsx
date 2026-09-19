"use client";

import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-full font-semibold whitespace-nowrap outline-none select-none transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "capsule-btn capsule-btn-primary text-white",
        glowing: "capsule-btn capsule-btn-primary text-white",
        outline: "capsule-btn capsule-btn-secondary text-white",
        "glowing-secondary": "capsule-btn capsule-btn-secondary text-white",
        secondary: "capsule-btn capsule-btn-secondary text-white",
        ghost:
          "hover:bg-white/10 text-white rounded-full transition-colors duration-200 px-4 py-2",
        link: "text-[var(--brand-blue-hover)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 min-h-[44px] px-7 text-sm",
        xs: "h-7 min-h-[28px] px-3.5 text-xs",
        sm: "h-9 min-h-[36px] px-5 text-xs",
        lg: "h-12 min-h-[48px] px-8 text-[15px]",
        icon: "size-10 rounded-full",
        "icon-xs": "size-7 rounded-full",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "glowing",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "glowing",
      size = "default",
      children,
      href,
      target,
      rel,
      ...props
    },
    ref,
  ) => {
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          data-slot="button"
          data-size={size}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <ButtonPrimitive
        ref={ref as React.Ref<HTMLButtonElement>}
        data-slot="button"
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
