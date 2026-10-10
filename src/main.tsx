import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/styles/fonts.css";
import { App } from "@/app/App";
import { ErrorBoundary } from "@/app/error-boundary";
import "@/app/styles/global.scss";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root is missing");
}

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
