import { aboutParagraphs, principle } from "@/shared/config/about";
import { site } from "@/shared/config/site";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./About.module.scss";

const meta = [
  { label: "Имя", value: site.name },
  { label: "GitHub", value: site.handle },
  { label: "Местоимения", value: site.pronouns },
  { label: "Город", value: site.location },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <Reveal className={styles.identity}>
            <p className={styles.kicker}>07 / About</p>
            <h2 id="about-title" className={styles.title} lang="en">
              A little about me.
            </h2>
            <dl className={styles.meta}>
              {meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={styles.copy}>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote className={styles.principle}>
                <p className={styles.principleLabel}>Принцип</p>
                <p className={styles.principleText}>{principle}</p>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
