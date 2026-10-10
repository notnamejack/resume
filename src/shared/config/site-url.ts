export const DEFAULT_SITE_URL = "https://notnamejack.github.io/resume/";

export function normalizeSiteUrl(value: string | undefined) {
  const raw = (value || DEFAULT_SITE_URL).trim();
  return raw.endsWith("/") ? raw : `${raw}/`;
}
