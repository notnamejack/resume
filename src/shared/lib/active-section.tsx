import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { sections } from "@/shared/config/navigation";

const ActiveSectionContext = createContext<string>(sections[0].id);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        const next = [...ratios.entries()].sort((a, b) => b[1] - a[1])[0];
        if (next && next[1] > 0) setActive(next[0]);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <ActiveSectionContext.Provider value={active}>{children}</ActiveSectionContext.Provider>;
}

export function useCurrentSection() {
  return useContext(ActiveSectionContext);
}
