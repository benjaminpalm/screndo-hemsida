"use client";

import { useEffect, useState } from "react";

export type Lang = "sv" | "en";

const STORAGE_KEY = "screndo_lang";

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("sv");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "sv" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  };

  return [lang, setLang];
}
