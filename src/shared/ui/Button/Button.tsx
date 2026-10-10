import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import styles from "./Button.module.scss";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({ href, children, variant = "ghost", external = false }: Props) {
  return (
    <a
      className={cn(styles.button, styles[variant])}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
    >
      {children}
    </a>
  );
}
