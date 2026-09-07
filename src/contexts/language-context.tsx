"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import eng from "../locales/eng.json";
import nep from "../locales/nep.json";
import ger from "../locales/ger.json";
import spa from "../locales/spa.json";

export type Language = "eng" | "nep" | "ger" | "spa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(key: string) => T;
}

const translations: Record<Language, Record<string, unknown>> = {
  eng,
  nep,
  ger,
  spa,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("grosbyte-lang");
      if (
        saved === "eng" ||
        saved === "nep" ||
        saved === "ger" ||
        saved === "spa"
      ) {
        return saved;
      }
    }
    return "eng";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("grosbyte-lang", lang);
    }
  };

  const getNestedValue = (obj: unknown, path: string): unknown => {
    return path.split(".").reduce((acc: unknown, part: string) => {
      if (
        acc &&
        typeof acc === "object" &&
        part in (acc as Record<string, unknown>)
      ) {
        return (acc as Record<string, unknown>)[part];
      }
      return null;
    }, obj);
  };

  const t = <T = string>(key: string): T => {
    const currentTranslation = translations[language];
    let value = getNestedValue(currentTranslation, key);

    // Fallback to English if translation is missing
    if (value === null && language !== "eng") {
      value = getNestedValue(translations["eng"], key);
    }

    return (value !== null ? value : key) as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
