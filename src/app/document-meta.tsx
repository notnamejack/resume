import { useEffect } from "react";
import { site } from "@/shared/config/site";
import type { Locale, Messages } from "@/shared/i18n/messages";
import { usePreferences } from "@/shared/preferences/preferences";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
};

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function updateJsonLd(jobTitle: string, description: string) {
  const script = document.querySelector('script[type="application/ld+json"]');
  if (!script?.textContent) return;

  try {
    const data = JSON.parse(script.textContent) as {
      mainEntity?: { jobTitle?: string; description?: string; name?: string };
    };
    if (!data.mainEntity) return;
    data.mainEntity.jobTitle = jobTitle;
    data.mainEntity.description = description;
    data.mainEntity.name = site.name;
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
    updateJsonLd(t.hero.role, t.meta.description);
  }, [locale, t]);
}

export function DocumentMeta() {
  const { locale, t } = usePreferences();
  useDocumentMeta(locale, t);
  return null;
}
