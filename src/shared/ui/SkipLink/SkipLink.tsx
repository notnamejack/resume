import { usePreferences } from "@/shared/preferences/preferences";
import styles from "./SkipLink.module.scss";

export function SkipLink() {
  const { t } = usePreferences();

  return (
    <a className={styles.skip} href="#main">
      {t.skip}
    </a>
  );
}
