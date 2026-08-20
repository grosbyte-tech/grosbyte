"use client";

import { useTheme } from "@/contexts/theme-context";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center h-8 w-8 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-hover)] transition-all duration-250 focus:outline-none active:scale-90 select-none cursor-pointer"
      aria-label="Toggle theme"
    >
      <div className="relative h-4 w-4">
        {/* Sun Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-50"
          }`}
          style={{ color: "var(--text-primary)" }}
        >
          <Sun className="h-4 w-4" />
        </span>
        {/* Moon Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50"
          }`}
          style={{ color: "var(--text-primary)" }}
        >
          <Moon className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
