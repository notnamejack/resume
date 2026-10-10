import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

function pages404(): Plugin {
  return {
    name: "pages-404",
    apply: "build",
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
  plugins: [react(), pages404()],
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
