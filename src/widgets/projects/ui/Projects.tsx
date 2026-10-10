import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectLayout } from "@/shared/config/projects";
import { cn } from "@/shared/lib/cn";
import { usePreferences } from "@/shared/preferences/preferences";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Projects.module.scss";

const layoutClass: Record<ProjectLayout, string> = {
  mediaStart: styles.mediaStart,
  mediaEnd: styles.mediaEnd,
  stacked: styles.stacked,
};

export function Projects() {
  const { t } = usePreferences();

  return (
    <Section id="work" labelledBy="work-title">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.intro}>
            <div>
              <p className={styles.kicker}>{t.work.kicker}</p>
              <h2 id="work-title" className={styles.title}>
                {t.work.title}
              </h2>
            </div>
            <p className={styles.lede}>{t.work.lede}</p>
          </div>
        </Reveal>

        <div className={styles.list}>
          {projects.map((project) => {
            const copy = t.work.cases[project.slug];
            const image = (
              <img
                className={styles.shot}
                src={project.image}
                width={project.imageWidth}
                height={project.imageHeight}
                alt={copy.imageAlt}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 960px) 100vw, 58vw"
              />
            );

            return (
              <article
                key={project.slug}
                className={cn(styles.case, layoutClass[project.layout])}
                aria-labelledby={`${project.slug}-title`}
              >
                <figure className={styles.media}>
                  {project.live ? (
                    <a
                      className={styles.frame}
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {image}
                      <span className="sr-only">{t.work.openLive}</span>
                    </a>
                  ) : (
                    <div className={styles.frame}>{image}</div>
                  )}
                  <figcaption className={styles.caption}>
                    <span>{copy.imageCaption}</span>
                    <span>{project.meta.join(" · ")}</span>
                  </figcaption>
                </figure>

                <div>
                  <p className={styles.index}>
                    {project.index} / {project.year}
                  </p>
                  <h3 id={`${project.slug}-title`} className={styles.name}>
                    {project.title}
                  </h3>
                  <p className={styles.original}>{copy.originalTitle}</p>
                  <p className={styles.summary}>{copy.summary}</p>
                  <div className={styles.notes}>
                    {copy.notes.map((note) => (
                      <div key={note.title} className={styles.note}>
                        <h4 className={styles.noteTitle}>{note.title}</h4>
                        <p className={styles.noteText}>{note.text}</p>
                      </div>
                    ))}
                  </div>
                  <ul className={styles.stack} aria-label={t.work.stack}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    {project.github ? (
                      <a className={styles.link} href={project.github} target="_blank" rel="noreferrer noopener">
                        GitHub
                        <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">{t.newTab}</span>
                      </a>
                    ) : null}
                    {project.live ? (
                      <a className={styles.link} href={project.live} target="_blank" rel="noreferrer noopener">
                        {t.work.live}
                        <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">{t.newTab}</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
