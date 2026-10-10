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

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private mode can reject storage. The document attributes still hold the choice.
  }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale);
  const [theme, setThemeState] = useState<Theme>(readTheme);
  const t = messages[locale];

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    writeStorage(LOCALE_KEY, next);
  };

  const setTheme = (next: Theme) => {
    setThemeState(next);
    writeStorage(THEME_KEY, next);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor(theme));
  }, [locale, theme]);

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
