"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
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

const isoLangMap: Record<Language, string> = {
  eng: "en",
  nep: "ne",
  ger: "de",
  spa: "es",
};

const emptySubscribe = () => () => {};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [preferredLanguage, setLanguageState] = useState<Language>(() => {
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

  // Saved preferences apply only after the server HTML has hydrated.
  const language = isMounted ? preferredLanguage : "eng";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = isoLangMap[language] || "en";
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("grosbyte-lang", lang);
    }
  };

  const cache = useRef(new Map<string, unknown>());

  useEffect(() => {
    cache.current.clear();
  }, [language]);

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

  const t = useCallback(
    <T = string,>(key: string): T => {
      if (cache.current.has(key)) {
        return cache.current.get(key) as T;
      }
      const currentTranslation = translations[language];
      let value = getNestedValue(currentTranslation, key);

      // Fallback to English if translation is missing
      if (value === null && language !== "eng") {
        value = getNestedValue(translations["eng"], key);
      }

      const result = (value !== null ? value : key) as T;
      cache.current.set(key, result);
      return result;
    },
    [language],
  );

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
