import { leadershipStats } from "@/shared/config/leadership";
import { usePreferences } from "@/shared/preferences/preferences";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Leadership.module.scss";

export function Leadership() {
  const { t } = usePreferences();

  return (
    <Section id="leadership" labelledBy="leadership-title" tone="raised">
      <div className={styles.wrap}>
        <Reveal>
          <p className={styles.kicker}>{t.leadership.kicker}</p>
          <h2 id="leadership-title" className={styles.title}>
            {t.leadership.title}
          </h2>
          <p className={styles.lede}>{t.leadership.lede}</p>
        </Reveal>

        <div className={styles.stats}>
          {leadershipStats.map((stat, index) => {
            const copy = t.leadership.stats[index];
            if (!copy) return null;
            return (
              <article key={copy.kicker} className={styles.stat}>
                <p className={styles.statKicker}>{copy.kicker}</p>
                <p className={styles.value}>
                  {copy.prefix ? <span className={styles.prefix}>{copy.prefix}</span> : null}
                  {stat.value}
                </p>
                <p className={styles.caption}>{copy.caption}</p>
              </article>
            );
          })}
        </div>

        <div className={styles.points}>
          {t.leadership.points.map((point, index) => (
            <article key={point.title} className={styles.point}>
              <p className={styles.pointIndex}>{String(index + 1).padStart(2, "0")}</p>
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointText}>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
