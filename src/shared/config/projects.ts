import shot from "@/assets/projects/four-horses-club.webp";

/**
 * Следующий кейс — только после разбора реального репозитория.
 * layout чередовать: mediaStart → mediaEnd → stacked.
 * Не описывать API, стор или фичи, которых нет в коде.
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
  github: string;
  live?: string;
  image: string;
  imageAlt: string;
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
    imageWidth: 1600,
    imageHeight: 875,
    layout: "mediaStart",
  },
];
