import shot from "@/assets/projects/four-horses-club.webp";
import odanlab from "@/assets/projects/odanlab.webp";

/**
 * Кейс — по коду репозитория или по живому продукту и подтверждённой зоне ответственности.
 * Тексты лежат в shared/i18n/messages.ts.
 * layout чередовать: mediaStart → mediaEnd → stacked.
 * Не описывать API, стор или фичи, которых нет в коде и которые автор не подтвердил.
 */
export type ProjectLayout = "mediaStart" | "mediaEnd" | "stacked";

export type ProjectSlug = "four-horses-club" | "odanlab";

export type Project = {
  slug: ProjectSlug;
  index: string;
  title: string;
  year: string;
  stack: string[];
  meta: string[];
  github?: string;
  live?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  layout: ProjectLayout;
};

export const projects: Project[] = [
  {
    slug: "four-horses-club",
    index: "01",
    title: "Four Horses Club",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript"],
    meta: ["Merriweather", "Golos Text", "Netlify"],
    github: "https://github.com/notnamejack/four-horses-club",
    live: "https://joyful-marshmallow-fed806.netlify.app/",
    image: shot,
    imageWidth: 1600,
    imageHeight: 875,
    layout: "mediaStart",
  },
  {
    slug: "odanlab",
    index: "02",
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
    meta: ["React", "Ketcher", "Redux"],
    live: "https://lab.odanchem.org/ru-ru/",
    image: odanlab,
    imageWidth: 1600,
    imageHeight: 877,
    layout: "mediaEnd",
  },
];
