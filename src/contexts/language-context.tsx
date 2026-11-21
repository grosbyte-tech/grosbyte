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
import en from "../locales/en.json";
import ne from "../locales/ne.json";
import de from "../locales/de.json";
import es from "../locales/es.json";

export type Language = "en" | "ne" | "de" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(key: string) => T;
}

const translations: Record<Language, Record<string, unknown>> = {
  en,
  ne,
  de,
  es,
};

const legacyLangMap: Record<string, Language> = {
  eng: "en",
  nep: "ne",
  ger: "de",
  spa: "es",
  en: "en",
  ne: "ne",
  de: "de",
  es: "es",
};

const isoLangMap: Record<Language, string> = {
  en: "en",
  ne: "ne",
  de: "de",
  es: "es",
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
      if (saved && saved in legacyLangMap) {
        return legacyLangMap[saved];
      }
    }
    return "en";
  });

  // Saved preferences apply only after the server HTML has hydrated.
  const language = isMounted ? preferredLanguage : "en";

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
      if (value === null && language !== "en") {
        value = getNestedValue(translations["en"], key);
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
