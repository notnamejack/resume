import { Boxes, CodeXml, FlaskConical, LayoutTemplate, Spline, Workflow, type LucideIcon } from "lucide-react";
import { stackGroups, type StackGroupId } from "@/shared/config/stack";
import { usePreferences } from "@/shared/preferences/preferences";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Stack.module.scss";

const icons: Record<StackGroupId, LucideIcon> = {
  frontend: CodeXml,
  architecture: Boxes,
  graphics: Spline,
  ui: LayoutTemplate,
  testing: FlaskConical,
  infrastructure: Workflow,
};

export function Stack() {
  const { t } = usePreferences();

  return (
    <Section id="stack" labelledBy="stack-title">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.intro}>
            <div>
              <p className={styles.kicker}>{t.stack.kicker}</p>
              <h2 id="stack-title" className={styles.title}>
                {t.stack.title}
              </h2>
            </div>
            <p className={styles.lede}>{t.stack.lede}</p>
          </div>
        </Reveal>

        <table className={styles.table}>
          <caption className="sr-only">{t.stack.caption}</caption>
          <tbody>
            {stackGroups.map((group) => {
              const Icon = icons[group.id];
              return (
                <tr key={group.id} className={styles.row}>
                  <th className={styles.category} scope="row">
                    <span className={styles.cat}>
                      <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                      {t.stack.groups[group.id]}
                    </span>
                  </th>
                  <td className={styles.items}>
                    <ul className={styles.list}>
                      {group.items.map((item) => (
                        <li key={item} className={styles.item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
