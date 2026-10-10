import { leadershipPoints, leadershipStats } from "@/shared/config/leadership";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Leadership.module.scss";

export function Leadership() {
  return (
    <Section id="leadership" labelledBy="leadership-title" tone="raised">
      <div className={styles.wrap}>
        <Reveal>
          <p className={styles.kicker}>05 / Leadership</p>
          <h2 id="leadership-title" className={styles.title} lang="en">
            Engineering is a team effort.
          </h2>
          <p className={styles.lede}>
            Руководство для меня — это ясность решений и среда, в которой инженеры делают работу лучше.
          </p>
        </Reveal>

        <div className={styles.stats}>
          {leadershipStats.map((stat) => (
            <article key={stat.kicker} className={styles.stat}>
              <p className={styles.statKicker}>{stat.kicker}</p>
              <p className={styles.value}>
                {stat.prefix ? <span className={styles.prefix}>{stat.prefix}</span> : null}
                {stat.value}
              </p>
              <p className={styles.caption}>{stat.caption}</p>
            </article>
          ))}
        </div>

        <div className={styles.points}>
          {leadershipPoints.map((point) => (
            <article key={point.index} className={styles.point}>
              <p className={styles.pointIndex}>{point.index}</p>
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointText}>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
