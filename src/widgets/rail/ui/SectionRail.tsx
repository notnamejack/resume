import { sections } from "@/shared/config/navigation";
import { useCurrentSection } from "@/shared/lib/active-section";
import { usePreferences } from "@/shared/preferences/preferences";
import { cn } from "@/shared/lib/cn";
import styles from "./SectionRail.module.scss";

export function SectionRail() {
  const { t } = usePreferences();
  const active = useCurrentSection();

  return (
    <nav id="section-rail" className={styles.rail} aria-label={t.rail}>
      <ol className={styles.list}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              className={cn(styles.link, active === section.id && styles.current)}
              href={section.href}
              aria-label={`${section.index} ${section.label}`}
              aria-current={active === section.id ? "true" : undefined}
            >
              <span aria-hidden="true">{section.index}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
