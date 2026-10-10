import { site } from "@/shared/config/site";
import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.meta}>
          © {year} {site.name}
          <span aria-hidden="true"> · </span>
          Frontend · Architecture · Leadership
        </p>
        <a className={styles.top} href="#top">
          Наверх
        </a>
      </div>
    </footer>
  );
}
