import { useEffect } from "react";
import type { Locale, Messages } from "@/shared/i18n/messages";
import { usePreferences } from "@/shared/preferences/preferences";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
};

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function updateJsonLd(name: string, jobTitle: string, description: string, locale: Locale) {
  const script = document.querySelector('script[type="application/ld+json"]');
  if (!script?.textContent) return;

  try {
    const data = JSON.parse(script.textContent) as {
      mainEntity?: { jobTitle?: string; description?: string; name?: string; alternateName?: string | string[] };
    };
    if (!data.mainEntity) return;
    data.mainEntity.name = name;
    data.mainEntity.alternateName = [locale === "en" ? "Алексей" : "Alexey", "notnamejack"];
    data.mainEntity.jobTitle = jobTitle;
    data.mainEntity.description = description;
    script.textContent = JSON.stringify(data);
  } catch {
    // Статичная разметка в index.html остаётся запасным вариантом.
  }
}

export function useDocumentMeta(locale: Locale, t: Messages) {
  useEffect(() => {
    const alternate: Locale = locale === "ru" ? "en" : "ru";

    document.title = t.meta.title;
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.ogTitle);
    setMeta('meta[property="og:description"]', t.meta.ogDescription);
    setMeta('meta[property="og:locale"]', OG_LOCALE[locale]);
    setMeta('meta[property="og:locale:alternate"]', OG_LOCALE[alternate]);
    setMeta('meta[property="og:image:alt"]', t.meta.ogTitle);
    setMeta('meta[name="twitter:title"]', t.meta.twitterTitle);
    setMeta('meta[name="twitter:description"]', t.meta.twitterDescription);
    setMeta('meta[property="og:site_name"]', t.identity.name);
    setMeta('meta[name="author"]', t.identity.name);
    updateJsonLd(t.identity.name, t.hero.role, t.meta.description, locale);
  }, [locale, t]);
}

export function DocumentMeta() {
  const { locale, t } = usePreferences();
  useDocumentMeta(locale, t);
  return null;
}
