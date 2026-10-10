import { site } from "@/shared/config/site";
import { usePreferences } from "@/shared/preferences/preferences";
import styles from "./Footer.module.scss";

export function Footer() {
  const { t } = usePreferences();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.meta}>
          © {year} {site.name}
          <span aria-hidden="true"> · </span>
          {t.footer.tagline}
        </p>
        <a className={styles.top} href="#top">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
