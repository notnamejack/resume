import { site } from "@/shared/config/site";
import { usePreferences } from "@/shared/preferences/preferences";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./About.module.scss";

export function About() {
  const { t } = usePreferences();
  const meta = [
    { label: t.about.labels.name, value: site.name },
    { label: t.about.labels.github, value: site.handle },
    { label: t.about.labels.pronouns, value: site.pronouns },
    { label: t.about.labels.city, value: t.about.city },
  ];

  return (
    <Section id="about" labelledBy="about-title">
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <Reveal className={styles.identity}>
            <p className={styles.kicker}>{t.about.kicker}</p>
            <h2 id="about-title" className={styles.title}>
              {t.about.title}
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
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote className={styles.principle}>
                <p className={styles.principleLabel}>{t.about.principleLabel}</p>
                <p className={styles.principleText}>{t.about.principle}</p>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
