"use client";

import { useTranslation, Language } from "@/contexts/language-context";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

const languages: { code: Language; short: string; label: string }[] = [
  { code: "eng", short: "EN", label: "English" },
  { code: "nep", short: "NP", label: "नेपाली" },
  { code: "ger", short: "DE", label: "Deutsch" },
  { code: "spa", short: "ES", label: "Español" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-hover)] text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none active:scale-95 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="h-3.5 w-3.5 opacity-80" />
        <span className="uppercase">{currentLang.short}</span>
        <ChevronDown className={`h-3 w-3 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] py-1 z-[100] animate-in fade-in slide-in-from-top-2 duration-150">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-left text-xs transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg cursor-pointer ${
                language === lang.code
                  ? "bg-[var(--surface-hover)] text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span>{lang.label}</span>
              <span className="text-[10px] opacity-40 uppercase font-mono">{lang.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
