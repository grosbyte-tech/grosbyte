"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import eng from "../locales/eng.json";
import nep from "../locales/nep.json";
import ger from "../locales/ger.json";
import spa from "../locales/spa.json";

export type Language = "eng" | "nep" | "ger" | "spa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, any> = {
  eng,
  nep,
  ger,
  spa,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("eng");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("grosbyte-lang") as Language;
    if (savedLanguage && (savedLanguage === "eng" || savedLanguage === "nep" || savedLanguage === "ger" || savedLanguage === "spa")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("grosbyte-lang", lang);
  };

  const getNestedValue = (obj: any, path: string): any => {
    return path.split(".").reduce((acc, part) => {
      return acc && acc[part] !== undefined ? acc[part] : null;
    }, obj);
  };

  const t = (key: string): any => {
  
    const currentTranslation = translations[language];
    let value = getNestedValue(currentTranslation, key);

    // Fallback to English if translation is missing
    if (value === null && language !== "eng") {
      value = getNestedValue(translations["eng"], key);
    }

    return value !== null ? value : key;
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
