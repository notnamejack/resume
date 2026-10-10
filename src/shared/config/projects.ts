import shot from "@/assets/projects/four-horses-club.webp";
import odanlab from "@/assets/projects/odanlab.webp";

/**
 * Кейс — по коду репозитория или по живому продукту и подтверждённой зоне ответственности.
 * layout чередовать: mediaStart → mediaEnd → stacked.
 * Не описывать API, стор или фичи, которых нет в коде и которые автор не подтвердил.
 */
export type ProjectLayout = "mediaStart" | "mediaEnd" | "stacked";

export type ProjectNote = {
  title: string;
  text: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  originalTitle: string;
  year: string;
  summary: string;
  notes: ProjectNote[];
  stack: string[];
  meta: string[];
  github?: string;
  live?: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageWidth: number;
  imageHeight: number;
  layout: ProjectLayout;
};

export const projects: Project[] = [
  {
    slug: "four-horses-club",
    index: "01",
    title: "Four Horses Club",
    originalTitle: "Клуб четырёх коней",
    year: "2026",
    summary:
      "Лендинг Международного васюкинского турнира по мотивам «Двенадцати стульев». Hero с бегущей строкой, лекция и сеанс, семь этапов преображения Васюков, карусель участников. Адаптивная вёрстка без фреймворка и сборки.",
    notes: [
      {
        title: "Карусель участников",
        text: "Бесконечный цикл на клонах по краям. С 1024px видно 3 карточки, шаг равен ширине карточки и gap; уже — одна карточка на ширину viewport. Счётчик на desktop показывает правую видимую, на mobile — текущую. Автосмена 4 с, сброс по клику, пауза на hover, focus и скрытой вкладке.",
      },
      {
        title: "Этапы на mobile",
        text: "До 768px сетка этапов становится слайдером без loop и autoplay. Кнопки гаснут на краях, точки держат aria-current. Шаги 4 и 5 склеиваются в один слайд, на desktop разметка возвращается как была.",
      },
      {
        title: "Появление и якоря",
        text: "Блоки с классом reveal показывает IntersectionObserver с threshold 0.12. Если API нет — они сразу видимы. Якоря скроллятся плавно и записывают hash в history. Анимации гасятся через prefers-reduced-motion.",
      },
      {
        title: "Состояние и данные",
        text: "Серверного API и внешнего стора нет. Индекс карусели и слайдера живёт в замыкании инициализатора. Стили — custom properties, flex и grid. Шрифты: Merriweather и Golos Text.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    meta: ["Merriweather", "Golos Text", "Netlify"],
    github: "https://github.com/notnamejack/four-horses-club",
    live: "https://joyful-marshmallow-fed806.netlify.app/",
    image: shot,
    imageAlt:
      "Главный экран лендинга «Клуб четырёх коней»: заголовок «Превратите уездный город в столицу земного шара», кнопки поддержки турнира и бегущая строка с цитатой.",
    imageCaption: "Hero · 1440",
    imageWidth: 1600,
    imageHeight: 875,
    layout: "mediaStart",
  },
  {
    slug: "odanlab",
    index: "02",
    title: "OdanLab",
    originalTitle: "Электронный лабораторный журнал",
    year: "2026",
    summary:
      "Журнал для химиков: документирование, систематизация и анализ экспериментов и реакций. На публичном экране карточка вещества и кнопка «Нарисовать». Frontend веду как систему: архитектура, редактор структур, офлайн, ревью.",
    notes: [
      {
        title: "Архитектура",
        text: "Стек выбран под журнал: React, TypeScript, Redux Toolkit, RTK Query, SCSS, Webpack. Архитектурные решения, контроль качества и единый подход по кодовой базе — на мне.",
      },
      {
        title: "Структуры и реакции",
        text: "Интерфейс структур, реакций и экспериментальных данных собран на Ketcher и связан с журналом и backend API. В живом бандле есть «Редактор структур Ketcher» и статика /ketcher-cloud. На экране — карточка вещества и кнопка «Нарисовать».",
      },
      {
        title: "Офлайн",
        text: "Журнал работает без сети: данные эксперимента хранятся локально в IndexedDB.",
      },
      {
        title: "Команда",
        text: "Техническое руководство frontend: архитектурные решения, code review, наставничество и адаптация нового разработчика.",
      },
    ],
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
    imageAlt:
      "Главный экран OdanLab: заголовок «Электронный лабораторный журнал» и карточка вещества с полями CAS, формулы, молекулярной массы и кнопкой «Нарисовать».",
    imageCaption: "Вещество · 1440",
    imageWidth: 1600,
    imageHeight: 877,
    layout: "mediaEnd",
  },
];
