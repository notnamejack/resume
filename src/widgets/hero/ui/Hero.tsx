import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { site } from "@/shared/config/site";
import { usePreferences } from "@/shared/preferences/preferences";
import { cn } from "@/shared/lib/cn";
import { ease } from "@/shared/lib/motion";
import { Button } from "@/shared/ui/Button/Button";
import { GithubIcon } from "@/shared/ui/GithubIcon/GithubIcon";
import styles from "./Hero.module.scss";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const { t } = usePreferences();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--px", `${x}%`);
        root.style.setProperty("--py", `${y}%`);
      });
    };

    root.addEventListener("pointermove", onMove);
    return () => {
      root.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" ref={rootRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.gridHot} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.kicker}>{t.hero.kicker}</p>
        <motion.div className={styles.stage} variants={container} initial="hidden" animate="show">
          <div className={styles.titleRow}>
            <div>
              <motion.h1 id="hero-title" className={styles.title} variants={item}>
                <span className={styles.line}>{t.hero.lines[0]}</span>
                <span className={cn(styles.line, styles.accent)}>{t.hero.lines[1]}</span>
                <span className={styles.line}>{t.hero.lines[2]}</span>
              </motion.h1>
              <motion.p className={styles.subtitle} variants={item}>
                {t.hero.role}
              </motion.p>
            </div>
            <motion.dl className={styles.facts} variants={item}>
              {t.hero.facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
          <motion.p className={styles.lede} variants={item}>
            {t.hero.lede}
          </motion.p>
          <motion.div className={styles.actions} variants={item}>
            <Button href="#work" variant="primary">
              {t.hero.projects}
            </Button>
            <Button href="#contact">{t.hero.contact}</Button>
            <Button href={site.github} external>
              <GithubIcon size={16} />
              GitHub
              <span className="sr-only">{t.newTab}</span>
            </Button>
          </motion.div>
          <motion.a
            className={styles.scroll}
            href="#expertise"
            aria-label={`${t.hero.scrollWord}. ${t.hero.scroll}`}
            variants={item}
          >
            <span aria-hidden="true">{t.hero.scrollWord}</span>
            <span className={styles.scrollLine} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
