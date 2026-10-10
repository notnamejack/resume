import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { Rule } from "@/shared/ui/Rule/Rule";
import styles from "./Section.module.scss";

type Props = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  tone?: "default" | "raised";
};

export function Section({ id, labelledBy, children, tone = "default" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(styles.section, tone === "raised" && styles.raised)}
    >
      <Rule />
      {children}
    </section>
  );
}
