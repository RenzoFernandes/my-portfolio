import { useCallback, useEffect, useMemo, useState } from "react";
import { en } from "./en";
import { es } from "./es";
import { ptBR } from "./pt-BR";
import type { Language } from "./types";

export type { Language, Translation } from "./types";

const STORAGE_KEY = "portfolio-language";

export const languages: Language[] = ["pt-BR", "en", "es"];

export const languageLabels: Record<Language, string> = {
  "pt-BR": "PT",
  en: "EN",
  es: "ES",
};

export const translations = {
  "pt-BR": ptBR,
  en,
  es,
};

function isLanguage(value: string | null): value is Language {
  return value === "pt-BR" || value === "en" || value === "es";
}

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt-BR";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  const detected = browserLanguages.find((language) => {
    const normalizedLanguage = language.toLowerCase();
    return (
      normalizedLanguage.startsWith("pt") ||
      normalizedLanguage.startsWith("en") ||
      normalizedLanguage.startsWith("es")
    );
  });

  if (!detected) {
    return "pt-BR";
  }

  const normalizedDetected = detected.toLowerCase();

  if (normalizedDetected.startsWith("en")) {
    return "en";
  }

  if (normalizedDetected.startsWith("es")) {
    return "es";
  }

  return "pt-BR";
}

export function useI18n() {
  const [language, setLanguageState] = useState<Language>("pt-BR");

  useEffect(() => {
    setLanguageState(detectBrowserLanguage());
  }, []);

  const t = translations[language];

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.lang = language;
    document.title = t.meta.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content = t.meta.description;
    }
  }, [language, t.meta.description, t.meta.title]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    }
  }, []);

  return useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  );
}
