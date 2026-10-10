import { expertise } from "@/shared/config/expertise";
import { cn } from "@/shared/lib/cn";
import { usePreferences } from "@/shared/preferences/preferences";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Expertise.module.scss";

export function Expertise() {
  const { t } = usePreferences();

  return (
    <Section id="expertise" labelledBy="expertise-title">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.intro}>
            <div>
              <p className={styles.kicker}>02 / Expertise</p>
              <h2 id="expertise-title" className={styles.title} lang="en">
                Beyond writing code.
              </h2>
            </div>
            <p className={styles.lede}>{t.expertise.lede}</p>
          </div>
        </Reveal>
        <div className={styles.board}>
          {expertise.map((item, index) => (
            <article key={item.index} className={cn(styles.cell, styles[`c${item.index}`])}>
              <p className={styles.index}>{item.index}</p>
              <h3 className={styles.name} lang="en">
                {item.title}
              </h3>
              <p className={styles.text}>{t.expertise.items[index]}</p>
              {item.meta ? (
                <ul className={styles.meta}>
                  {item.meta.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
