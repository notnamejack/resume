import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { profileFacts, site } from "@/shared/config/site";
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
        <p className={styles.kicker}>01 / Portfolio</p>
        <motion.div className={styles.stage} variants={container} initial="hidden" animate="show">
          <div className={styles.titleRow}>
            <div>
              <motion.h1 id="hero-title" className={styles.title} lang="en" variants={item}>
                <span className={styles.line}>Frontend Engineer.</span>
                <span className={cn(styles.line, styles.accent)}>Architecture.</span>
                <span className={styles.line}>Leadership.</span>
              </motion.h1>
              <motion.p className={styles.subtitle} variants={item}>
                {site.role}
              </motion.p>
            </div>
            <motion.dl className={styles.facts} variants={item}>
              {profileFacts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
          <motion.p className={styles.lede} variants={item}>
            Проектирую архитектуру веб-приложений, разрабатываю сложные интерфейсы и выстраиваю
            инженерные процессы в командах.
          </motion.p>
          <motion.div className={styles.actions} variants={item}>
            <Button href="#work" variant="primary">
              Проекты
            </Button>
            <Button href="#contact">Контакты</Button>
            <Button href={site.github} external>
              <GithubIcon size={16} />
              GitHub
              <span className="sr-only">, откроется в новой вкладке</span>
            </Button>
          </motion.div>
          <motion.a className={styles.scroll} href="#expertise" aria-label="К разделу экспертизы" variants={item}>
            <span aria-hidden="true">Scroll</span>
            <span className={styles.scrollLine} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
