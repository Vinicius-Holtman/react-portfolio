import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type Lang = "pt" | "en";

export type L10n<T> = { pt: T; en: T };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const STORAGE_KEY = "holtman-portfolio-lang";

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  setLang: () => undefined,
  toggle: () => undefined,
});

function detectLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
    return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
  } catch {
    return "pt";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage indisponivel - segue sem persistir */
    }
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === "pt" ? "en" : "pt")),
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Resolve um par { pt, en } para o idioma ativo. */
export function useT() {
  const { lang } = useLang();
  return function translate<T>(value: L10n<T>): T {
    return value[lang];
  };
}
