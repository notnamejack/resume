import { Component, type ReactNode } from "react";
import { getContacts } from "@/shared/config/site";
import styles from "./error-boundary.module.scss";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className={styles.fallback} role="alert">
        <p className={styles.kicker}>Error</p>
        <h1 className={styles.title}>Страница не открылась.</h1>
        <p className={styles.text}>The page failed to render. The links below still work.</p>
        <p className={styles.text}>Страница не собралась. Связаться можно по ссылкам ниже.</p>
        <div className={styles.links}>
          {getContacts().map((contact) => {
            const external = !contact.href.startsWith("mailto:");
            return (
              <a
                key={contact.id}
                href={contact.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {contact.label}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
