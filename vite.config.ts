import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { normalizeSiteUrl } from "./src/shared/config/site-url.ts";

const root = path.dirname(fileURLToPath(import.meta.url));

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function siteFiles(): Plugin {
  let siteUrl = normalizeSiteUrl(undefined);

  return {
    name: "site-files",
    config(_config, { mode }) {
      const fileEnv = loadEnv(mode, root, "VITE_");
      siteUrl = normalizeSiteUrl(process.env.VITE_SITE_URL || fileEnv.VITE_SITE_URL);
      process.env.VITE_SITE_URL = siteUrl;
    },
    transformIndexHtml(html) {
      return html.replaceAll("%VITE_SITE_URL%", siteUrl);
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${escapeXml(siteUrl)}</loc>\n  </url>\n</urlset>\n`,
      });
    },
    closeBundle() {
      const dist = path.resolve(root, "dist");
      const index = path.join(dist, "index.html");
      if (!existsSync(index)) return;
      copyFileSync(index, path.join(dist, "404.html"));
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react(), siteFiles()],
  resolve: {
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(root, "src")],
        additionalData: `@use "app/styles/tokens" as *;\n`,
      },
    },
  },
});
