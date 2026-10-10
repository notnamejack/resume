import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projectIndex, projectLayout, projects, type ProjectLayout, type ProjectSlug } from "@/shared/config/projects";
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

const STACK_PREVIEW = 6;

export function Projects() {
  const { t } = usePreferences();
  const [openStacks, setOpenStacks] = useState<Partial<Record<ProjectSlug, boolean>>>({});

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
          {projects.map((project, position) => {
            const copy = t.work.cases[project.slug];
            const layout = projectLayout(position, project.layout);
            const expanded = openStacks[project.slug] ?? false;
            const hidden = Math.max(0, project.stack.length - STACK_PREVIEW);
            const stack = expanded || hidden === 0 ? project.stack : project.stack.slice(0, STACK_PREVIEW);
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
                className={cn(styles.case, layoutClass[layout])}
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
                    {project.meta && project.meta.length > 0 ? <span>{project.meta.join(" · ")}</span> : null}
                  </figcaption>
                </figure>

                <div>
                  <p className={styles.index}>
                    {projectIndex(position)} / {project.year}
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
                    {stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    {hidden > 0 ? (
                      <li>
                        <button
                          type="button"
                          className={styles.more}
                          aria-expanded={expanded}
                          onClick={() =>
                            setOpenStacks((current) => ({ ...current, [project.slug]: !expanded }))
                          }
                        >
                          {expanded
                            ? t.work.stackLess
                            : t.work.stackMore.replace("{count}", String(hidden))}
                        </button>
                      </li>
                    ) : null}
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
