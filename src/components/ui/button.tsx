import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "dark" | "light" | "text";
  arrow?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  arrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={clsx("button", `button--${variant}`, className)} {...props}>
      <span>{children}</span>
      {arrow && <ArrowRight size={18} aria-hidden="true" />}
    </a>
  );
}
