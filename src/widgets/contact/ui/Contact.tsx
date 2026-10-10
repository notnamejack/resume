import { ArrowUpRight } from "lucide-react";
import { getContacts } from "@/shared/config/site";
import { usePreferences } from "@/shared/preferences/preferences";
import { Reveal } from "@/shared/ui/Reveal/Reveal";
import { Section } from "@/shared/ui/Section/Section";
import styles from "./Contact.module.scss";

export function Contact() {
  const { t } = usePreferences();
  const contacts = getContacts();

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className={styles.wrap}>
        <Reveal>
          <p className={styles.kicker}>{t.contact.kicker}</p>
          <h2 id="contact-title" className={styles.title}>
            {t.contact.lines[0]}
            <br />
            {t.contact.lines[1]}
            <br />
            <span className={styles.accent}>{t.contact.lines[2]}</span>
          </h2>
        </Reveal>
        <address className={styles.list}>
          {contacts.map((contact) => {
            const external = !contact.href.startsWith("mailto:");
            return (
              <a
                key={contact.id}
                className={styles.link}
                href={contact.href}
                aria-label={`${contact.label} ${contact.value}${external ? t.newTab : ""}`}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={styles.label}>{contact.label}</span>
                <span className={styles.value}>{contact.value}</span>
                <ArrowUpRight className={styles.icon} size={20} strokeWidth={1.5} aria-hidden="true" />
              </a>
            );
          })}
        </address>
      </div>
    </Section>
  );
}
