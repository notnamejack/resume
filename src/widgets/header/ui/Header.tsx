import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { sections } from "@/shared/config/navigation";
import { site } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/messages";
import { useCurrentSection } from "@/shared/lib/active-section";
import { cn } from "@/shared/lib/cn";
import { usePreferences } from "@/shared/preferences/preferences";
import { GithubIcon } from "@/shared/ui/GithubIcon/GithubIcon";
import styles from "./Header.module.scss";

const locales: Locale[] = ["en", "ru"];

const navItems = sections.filter((section) => section.nav);

export function Header() {
  const { t, locale, setLocale, theme, setTheme } = usePreferences();
  const active = useCurrentSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1041px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const header = headerRef.current;
    const main = document.getElementById("main");
    const rail = document.getElementById("section-rail");
    const footer = document.querySelector("footer");
    if (main) main.inert = true;
    if (rail) rail.inert = true;
    if (footer instanceof HTMLElement) footer.inert = true;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      [...(header?.querySelectorAll<HTMLElement>("a, button") ?? []), ...(menuRef.current?.querySelectorAll<HTMLElement>("a, button") ?? [])].filter(
        (element) => !element.hasAttribute("disabled") && element.getClientRects().length > 0,
      );

    const frame = requestAnimationFrame(() => {
      const items = focusable();
      const firstLink = items.find((element) => element.classList.contains(styles.menuLink));
      (firstLink ?? items[0])?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = false;
      if (rail) rail.inert = false;
      if (footer instanceof HTMLElement) footer.inert = false;
    };
  }, [open]);

  return (
    <header ref={headerRef} className={cn(styles.header, (scrolled || open) && styles.solid)}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" onClick={() => setOpen(false)}>
          <span className={styles.name}>{t.identity.name}</span>
          <span className={styles.handle}>{site.handle}</span>
        </a>

        <nav className={styles.nav} aria-label={t.header.nav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={cn(styles.link, active === item.id && styles.current)}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
            >
              {t.nav[item.id]}
            </a>
          ))}
        </nav>

        <div className={styles.tools}>
          <div className={styles.locale} role="group" aria-label={t.controls.language}>
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                className={cn(styles.localeBtn, locale === code && styles.localeOn)}
                lang={code}
                aria-pressed={locale === code}
                onClick={() => setLocale(code)}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={styles.theme}
            aria-pressed={theme === "light"}
            aria-label={theme === "dark" ? t.controls.toLight : t.controls.toDark}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
          </button>
          <a
            className={styles.github}
            href={site.github}
            target="_blank"
            rel="me noreferrer noopener"
          >
            <GithubIcon />
            <span className="sr-only">{t.header.github}</span>
          </a>
          <button
            ref={buttonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            <span className="sr-only">{open ? t.header.close : t.header.open}</span>
          </button>
        </div>
      </div>

      {open
        ? createPortal(
            <div
              ref={menuRef}
              id="site-menu"
              className={styles.menu}
              role="dialog"
              aria-modal="true"
              aria-label={t.header.menu}
            >
              {navItems.map((item) => (
                <a key={item.id} className={styles.menuLink} href={item.href} onClick={() => setOpen(false)}>
                  <span className={styles.menuIndex}>{item.index}</span>
                  {t.nav[item.id]}
                </a>
              ))}
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
