import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectLayout } from "@/shared/config/projects";
import { cn } from "@/shared/lib/cn";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Projects.module.scss";

const layoutClass: Record<ProjectLayout, string> = {
  mediaStart: styles.mediaStart,
  mediaEnd: styles.mediaEnd,
  stacked: styles.stacked,
};

export function Projects() {
  return (
    <Section id="work" labelledBy="work-title">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.intro}>
            <div>
              <p className={styles.kicker}>03 / Work</p>
              <h2 id="work-title" className={styles.title} lang="en">
                Selected Projects.
              </h2>
            </div>
            <p className={styles.lede}>
              Публичный кейс добавляю после разбора реального кода. Сейчас в центре — Four Horses Club.
            </p>
          </div>
        </Reveal>

        <div className={styles.list}>
          {projects.map((project) => {
            const image = (
              <img
                className={styles.shot}
                src={project.image}
                width={project.imageWidth}
                height={project.imageHeight}
                alt={project.imageAlt}
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
                      <span className="sr-only">Открыть живой сайт, новая вкладка</span>
                    </a>
                  ) : (
                    <div className={styles.frame}>{image}</div>
                  )}
                  <figcaption className={styles.caption}>
                    <span>Hero · 1440</span>
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
                  <p className={styles.original}>{project.originalTitle}</p>
                  <p className={styles.summary}>{project.summary}</p>
                  <div className={styles.notes}>
                    {project.notes.map((note) => (
                      <div key={note.title} className={styles.note}>
                        <h4 className={styles.noteTitle}>{note.title}</h4>
                        <p className={styles.noteText}>{note.text}</p>
                      </div>
                    ))}
                  </div>
                  <ul className={styles.stack} aria-label="Стек">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    <a className={styles.link} href={project.github} target="_blank" rel="noreferrer noopener">
                      GitHub
                      <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                      <span className="sr-only">, откроется в новой вкладке</span>
                    </a>
                    {project.live ? (
                      <a className={styles.link} href={project.live} target="_blank" rel="noreferrer noopener">
                        Live
                        <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">, откроется в новой вкладке</span>
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
