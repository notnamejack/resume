import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";
import { processSteps } from "@/shared/config/process";
import { ease } from "@/shared/lib/motion";
import { usePreferences } from "@/shared/preferences/preferences";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Process.module.scss";

export function Process() {
  const { t } = usePreferences();
  const [active, setActive] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const step = processSteps[active] ?? processSteps[0];

  function select(index: number) {
    const next = Math.max(0, Math.min(processSteps.length - 1, index));
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(processSteps.length - 1);
    }
  }

  return (
    <Section id="process" labelledBy="process-title">
      <div className={styles.wrap}>
        <Reveal>
          <header className={styles.intro}>
            <p className={styles.kicker}>{t.process.kicker}</p>
            <h2 id="process-title" className={styles.title}>
              {t.process.title}
            </h2>
          </header>
        </Reveal>

        <div className={styles.tabs} role="tablist" aria-label={t.process.tabs} aria-orientation="horizontal">
          {processSteps.map((item, index) => (
            <button
              key={item.id}
              ref={(node) => {
                tabsRef.current[index] = node;
              }}
              id={`process-tab-${item.id}`}
              className={styles.tab}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="process-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className={styles.tabIndex}>{item.index}</span>
              <span className={styles.tabTitle}>{t.process.titles[index]}</span>
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className={styles.panel}
          id="process-panel"
          aria-labelledby={`process-tab-${step.id}`}
          tabIndex={0}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={step.id}
              className={styles.statement}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease }}
            >
              {t.process.steps[active]}
            </motion.p>
          </AnimatePresence>
          <p className={styles.hint}>{t.process.hint}</p>
        </div>
      </div>
    </Section>
  );
}
