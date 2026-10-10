import shot from "@/assets/projects/four-horses-club.webp";
import odanlab from "@/assets/projects/odanlab.webp";

/**
 * Кейс — по коду репозитория или по живому продукту и подтверждённой зоне ответственности.
 * Тексты лежат в shared/i18n/messages.ts.
 * layout по позиции: mediaStart → mediaEnd → stacked. Поле layout — необязательное переопределение.
 * meta — короткая подпись под скрином из того, чего нет в тегах стека.
 * Не описывать API, стор или фичи, которых нет в коде и которые автор не подтвердил.
 */
export type ProjectLayout = "mediaStart" | "mediaEnd" | "stacked";

export type ProjectSlug = "four-horses-club" | "odanlab";

export type Project = {
  slug: ProjectSlug;
  title: string;
  year: string;
  stack: string[];
  meta?: string[];
  github?: string;
  live?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  layout?: ProjectLayout;
};

const layoutCycle: ProjectLayout[] = ["mediaStart", "mediaEnd", "stacked"];

export function projectIndex(position: number) {
  return String(position + 1).padStart(2, "0");
}

export function projectLayout(position: number, override?: ProjectLayout): ProjectLayout {
  return override ?? layoutCycle[position % layoutCycle.length] ?? "mediaStart";
}

export const projects: Project[] = [
  {
    slug: "four-horses-club",
    title: "Four Horses Club",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript"],
    meta: ["Merriweather", "Golos Text", "Netlify"],
    github: "https://github.com/notnamejack/four-horses-club",
    live: "https://joyful-marshmallow-fed806.netlify.app/",
    image: shot,
    imageWidth: 1600,
    imageHeight: 875,
  },
  {
    slug: "odanlab",
    title: "OdanLab",
    year: "2026",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "IndexedDB",
      "Ketcher",
      "SCSS",
      "Jest",
      "Cypress",
      "Webpack",
    ],
    live: "https://lab.odanchem.org/ru-ru/",
    image: odanlab,
    imageWidth: 1600,
    imageHeight: 877,
  },
];
