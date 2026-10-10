import { motion } from "motion/react";
import { ease } from "@/shared/lib/motion";
import styles from "./Rule.module.scss";

export function Rule() {
  return (
    <motion.div
      className={styles.rule}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease }}
      aria-hidden="true"
    />
  );
}
