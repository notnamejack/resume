import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messages, type Locale, type Messages } from "@/shared/i18n/messages";

export type Theme = "dark" | "light";

const LOCALE_KEY = "locale";
const THEME_KEY = "theme";

type Preferences = {
  locale: Locale;
  theme: Theme;
  t: Messages;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
};

const PreferencesContext = createContext<Preferences | null>(null);

function readLocale(): Locale {
  return document.documentElement.lang === "ru" ? "ru" : "en";
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function themeColor(theme: Theme) {
  return theme === "light" ? "#F4F4F0" : "#0D0D0F";
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readLocale);
  const [theme, setTheme] = useState<Theme>(readTheme);
  const t = messages[locale];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dataset.theme = theme;
    try {
      localStorage.setItem(LOCALE_KEY, locale);
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Private mode can reject storage. The document attributes still hold the choice.
    }
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor(theme));
  }, [locale, theme, t]);

  const value = useMemo(
    () => ({ locale, theme, t, setLocale, setTheme }),
    [locale, theme, t],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }
  return value;
}
