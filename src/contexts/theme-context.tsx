"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read persisted theme or system preference
    const savedTheme = localStorage.getItem("grosbyte-theme") as Theme;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setThemeState(initialTheme);
    setMounted(true);

    // Apply theme class to documentElement
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(initialTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("grosbyte-theme", newTheme);

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Prevent flash of unstyled content during SSR by rendering children directly once client is loaded
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }} className="w-full min-h-screen bg-[var(--background)]">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
