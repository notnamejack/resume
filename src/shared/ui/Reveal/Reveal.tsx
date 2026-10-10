import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ease, viewport } from "@/shared/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
