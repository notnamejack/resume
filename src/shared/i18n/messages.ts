export type Locale = "en" | "ru";

const en = {
  meta: {
    title: "Алексей — Senior / Lead Frontend Developer",
    description:
      "Aleksei, Senior / Lead Frontend Developer. Application architecture, complex interfaces, and engineering process in teams.",
  },
  controls: {
    language: "Language",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  header: {
    nav: "Sections",
    menu: "Navigation",
    open: "Open menu",
    close: "Close menu",
    github: "GitHub, opens in a new tab",
  },
  rail: "Section numbers",
  skip: "Skip to content",
  newTab: ", opens in a new tab",
  nav: {
    top: "Hero",
    expertise: "Expertise",
    work: "Projects",
    process: "Process",
    leadership: "Leadership",
    stack: "Stack",
    about: "About",
    contact: "Contact",
  },
  hero: {
    kicker: "01 / Portfolio",
    lines: ["Frontend Engineer.", "Architecture.", "Leadership."],
    role: "Senior / Lead Frontend Developer",
    lede: "I design web application architecture, build complex interfaces, and set up engineering process inside teams.",
    projects: "Projects",
    contact: "Contact",
    scroll: "To expertise",
    scrollWord: "Scroll",
    facts: [
      { label: "Location", value: "Irkutsk" },
      { label: "Experience", value: "5+ years" },
      { label: "Format", value: "Hands-on and leadership" },
    ],
  },
  expertise: {
    kicker: "02 / Expertise",
    title: "Beyond writing code.",
    titles: ["Frontend Architecture", "Engineering Leadership", "Development Infrastructure", "Complex Interfaces"],
    lede: "Four areas where I make the calls: from module boundaries to how the team ships.",
    items: [
      "I design scalable architectures in React and TypeScript: module boundaries, Feature-Sliced Design, reuse without extra abstractions.",
      "I lead the team technically: architecture decisions, decomposition, code review, mentoring, and shared engineering standards.",
      "I set up how the app ships: GitLab, Azure DevOps, CI/CD. I bring AI into code review where it removes noise and does not replace responsibility.",
      "I build interfaces where the screen is a system: corporate flows, Canvas, WebGL, and interactive visualizations.",
    ],
  },
  work: {
    kicker: "03 / Work",
    title: "Selected Projects.",
    lede: "Four Horses Club is taken from the public repository. OdanLab is taken from the live product and the frontend scope I own. The journal repository is closed.",
    openLive: "Open the live site, new tab",
    live: "Live",
    stack: "Stack",
    cases: {
      "four-horses-club": {
        originalTitle: "Клуб четырёх коней",
        summary:
          "A landing page for the International Vasyuki tournament, after The Twelve Chairs. A hero with a marquee, the lecture and the match, seven stages of Vasyuki’s transformation, and a participants carousel. Adaptive layout with no framework and no build.",
        imageAlt:
          "Hero of the Four Horses Club landing: the headline about turning a provincial town into the capital of the world, tournament support buttons, and a quote marquee.",
        imageCaption: "Hero · 1440",
        notes: [
          {
            title: "Participants carousel",
            text: "An infinite loop built on clones at the edges. From 1024px, three cards are visible and the step equals card width plus gap; below that, one card fills the viewport. The desktop counter shows the rightmost visible card, mobile shows the current one. Autoplay is 4s, reset on click, paused on hover, focus, and a hidden tab.",
          },
          {
            title: "Stages on mobile",
            text: "Up to 768px the stage grid becomes a slider with no loop and no autoplay. Buttons fade at the edges, dots carry aria-current. Steps 4 and 5 merge into one slide; on desktop the markup returns as it was.",
          },
          {
            title: "Reveal and anchors",
            text: "Blocks with the reveal class are shown by an IntersectionObserver at threshold 0.12. If the API is missing, they are visible immediately. Anchors scroll smoothly and write the hash into history. Motion is disabled with prefers-reduced-motion.",
          },
          {
            title: "State and data",
            text: "There is no server API and no external store. The carousel and slider indexes live in the initializer closure. Styles are custom properties, flex, and grid. Fonts: Merriweather and Golos Text.",
          },
        ],
      },
      odanlab: {
        originalTitle: "Electronic lab journal",
        summary:
          "A journal for chemists: documenting, organizing, and analyzing experiments and reactions. The public screen shows a substance card and a Draw button. I run the frontend as a system: architecture, the structure editor, offline, and review.",
        imageAlt:
          "OdanLab hero: the headline “Electronic lab journal” and a substance card with CAS, formula, molecular weight, and a Draw button.",
        imageCaption: "Substance · 1440",
        notes: [
          {
            title: "Architecture",
            text: "The stack was chosen for the journal: React, TypeScript, Redux Toolkit, RTK Query, SCSS, Webpack. Architecture decisions, quality, and one way of building across the codebase sit with me.",
          },
          {
            title: "Structures and reactions",
            text: "The interface for structures, reactions, and experimental data is built on Ketcher and wired into the journal and the backend API. The live bundle includes “Ketcher structure editor” and static assets at /ketcher-cloud. The screen shows a substance card and a Draw button.",
          },
          {
            title: "Offline",
            text: "The journal works without a network: experiment data is stored locally in IndexedDB.",
          },
          {
            title: "Team",
            text: "Technical lead of the frontend: architecture decisions, code review, mentoring, and onboarding a new developer.",
          },
        ],
      },
    },
  },
  process: {
    kicker: "04 / Process",
    title: "Systems over solutions.",
    tabs: "How I approach the work",
    hint: "Arrow keys change the step",
    titles: [
      "Understanding the problem",
      "Architecture & Design",
      "Implementation",
      "Testing & Code Quality",
      "Delivery & Evolution",
    ],
    steps: [
      "First I separate the product problem from the habitual way of closing it. Who the user is, which constraint the system has, and what will count as done in six months — without that, architecture serves the mock, not the product.",
      "I fix module boundaries, data contracts, and what has to survive a new screen. Feature-Sliced Design and component architecture are how I hold complexity, not a diagram for its own sake.",
      "I cut the work in vertical slices: state, API, interface. Complexity stays in the module that owns it. The rest of the code should not know more than it needs.",
      "I test the critical paths, and I use review to check that we still share one model. Standards and automation, including AI code review, remove noise so people can talk about decisions.",
      "The build, the environments, and the path to the user are part of the system. After release, the architecture has to stay clear to the people who will change it later.",
    ],
  },
  leadership: {
    kicker: "05 / Leadership",
    title: "Engineering is a team effort.",
    lede: "For me, leadership is clear decisions and a setting where engineers do better work.",
    stats: [
      { kicker: "Frontend", prefix: "", caption: "specialists on the team I coordinated" },
      { kicker: "Department", prefix: "up to", caption: "people while standing in as department head" },
    ],
    points: [
      {
        title: "Architectural lead",
        text: "I hold the system boundaries and the decisions that decide how the project will change later.",
      },
      {
        title: "Mentoring",
        text: "I onboard developers on real work, not on a separate training track.",
      },
      {
        title: "Interviews",
        text: "I take part in technical interviews: I look at how someone thinks and whether they can work inside a system.",
      },
      {
        title: "AI Code Review",
        text: "I automate change review with agents where it strengthens the team and does not remove responsibility.",
      },
    ],
  },
  stack: {
    kicker: "06 / Stack",
    title: "Tools are secondary. Engineering comes first.",
    lede: "The stack changes. The way I hold complexity does not.",
    caption: "Technologies by category",
    groups: {
      frontend: "Frontend",
      architecture: "Architecture",
      graphics: "Graphics",
      ui: "UI",
      testing: "Testing",
      infrastructure: "Infrastructure",
    },
  },
  about: {
    kicker: "07 / About",
    title: "A little about me.",
    labels: {
      name: "Name",
      github: "GitHub",
      pronouns: "Pronouns",
      city: "City",
    },
    city: "Irkutsk",
    paragraphs: [
      "Frontend developer and technical lead, with more than five years of commercial work.",
      "I focus on the architecture of complex web applications, scalable frontend systems, and engineering practice.",
      "I combine hands-on development with technical leadership, growing the team, and improving how we build.",
    ],
    principleLabel: "Principle",
    principle: "Good architecture should help the product evolve and the team work more effectively.",
  },
  contact: {
    kicker: "08 / Contact",
    lines: ["Let's build", "something", "meaningful."],
  },
  footer: {
    tagline: "Frontend · Architecture · Leadership",
    top: "Back to top",
  },
};

export type Messages = typeof en;

const ru: Messages = {
  meta: {
    title: "Алексей — Senior / Lead Frontend Developer",
    description:
      "Алексей — Senior / Lead Frontend Developer. Архитектура веб-приложений, сложные интерфейсы и инженерные процессы в командах.",
  },
  controls: {
    language: "Язык",
    toLight: "Включить светлую тему",
    toDark: "Включить тёмную тему",
  },
  header: {
    nav: "Разделы",
    menu: "Навигация",
    open: "Открыть меню",
    close: "Закрыть меню",
    github: "GitHub, откроется в новой вкладке",
  },
  rail: "Номера разделов",
  skip: "К содержанию",
  newTab: ", откроется в новой вкладке",
  nav: {
    top: "Главная",
    expertise: "Экспертиза",
    work: "Проекты",
    process: "Процесс",
    leadership: "Руководство",
    stack: "Стек",
    about: "Обо мне",
    contact: "Контакты",
  },
  hero: {
    kicker: "01 / Портфолио",
    lines: ["Фронтенд-инженер.", "Архитектура.", "Руководство."],
    role: "Старший фронтенд-разработчик и тимлид",
    lede: "Проектирую архитектуру веб-приложений, разрабатываю сложные интерфейсы и выстраиваю инженерные процессы в командах.",
    projects: "Проекты",
    contact: "Контакты",
    scroll: "К разделу экспертизы",
    scrollWord: "Дальше",
    facts: [
      { label: "Локация", value: "Иркутск" },
      { label: "Опыт", value: "5+ лет" },
      { label: "Формат", value: "Практика и руководство" },
    ],
  },
  expertise: {
    kicker: "02 / Экспертиза",
    title: "Не только код.",
    titles: ["Архитектура фронтенда", "Инженерное руководство", "Инфраструктура разработки", "Сложные интерфейсы"],
    lede: "Четыре направления, в которых я принимаю решения: от границ модулей до того, как команда поставляет результат.",
    items: [
      "Проектирую масштабируемые архитектуры на React и TypeScript: границы модулей, Feature-Sliced Design, переиспользование без лишних абстракций.",
      "Веду команду технически: архитектурные решения, декомпозиция, code review, наставничество и общие инженерные стандарты.",
      "Собираю поставку приложения: GitLab, Azure DevOps, CI/CD. AI в code review подключаю там, где он снимает шум и не подменяет ответственность.",
      "Делаю интерфейсы, в которых экран — система: корпоративные сценарии, Canvas, WebGL и интерактивные визуализации.",
    ],
  },
  work: {
    kicker: "03 / Проекты",
    title: "Избранные проекты.",
    lede: "Four Horses Club разобран по открытому коду. OdanLab — по живому продукту и зоне ответственности frontend. Репозиторий журнала закрыт.",
    openLive: "Открыть живой сайт, новая вкладка",
    live: "Сайт",
    stack: "Стек",
    cases: {
      "four-horses-club": {
        originalTitle: "Клуб четырёх коней",
        summary:
          "Лендинг Международного васюкинского турнира по мотивам «Двенадцати стульев». Главный экран с бегущей строкой, лекция и сеанс, семь этапов преображения Васюков, карусель участников. Адаптивная вёрстка без фреймворка и сборки.",
        imageAlt:
          "Главный экран лендинга «Клуб четырёх коней»: заголовок «Превратите уездный город в столицу земного шара», кнопки поддержки турнира и бегущая строка с цитатой.",
        imageCaption: "Экран · 1440",
        notes: [
          {
            title: "Карусель участников",
            text: "Бесконечный цикл на клонах по краям. С 1024px видно 3 карточки, шаг равен ширине карточки и gap; уже — одна карточка на ширину viewport. Счётчик на desktop показывает правую видимую, на mobile — текущую. Автосмена 4 с, сброс по клику, пауза на hover, focus и скрытой вкладке.",
          },
          {
            title: "Этапы на узком экране",
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
      },
      odanlab: {
        originalTitle: "Электронный лабораторный журнал",
        summary:
          "Журнал для химиков: документирование, систематизация и анализ экспериментов и реакций. На публичном экране карточка вещества и кнопка «Нарисовать». Frontend веду как систему: архитектура, редактор структур, офлайн, ревью.",
        imageAlt:
          "Главный экран OdanLab: заголовок «Электронный лабораторный журнал» и карточка вещества с полями CAS, формулы, молекулярной массы и кнопкой «Нарисовать».",
        imageCaption: "Вещество · 1440",
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
      },
    },
  },
  process: {
    kicker: "04 / Процесс",
    title: "Системы, не разовые решения.",
    tabs: "Как я подхожу к разработке",
    hint: "Стрелки переключают этап",
    titles: ["Понять задачу", "Архитектура и дизайн", "Реализация", "Тесты и качество кода", "Поставка и развитие"],
    steps: [
      "Сначала отделяю задачу продукта от привычного способа её закрыть. Кто пользователь, какое ограничение системы и что будет считаться готовым через полгода — без этого архитектура обслуживает макет, а не развитие.",
      "Фиксирую границы модулей, контракты данных и то, что должно пережить смену экрана. Feature-Sliced Design и компонентная архитектура здесь — способ удержать сложность, а не схема ради схемы.",
      "Режу работу вертикальными срезами: состояние, API, интерфейс. Сложность остаётся в модуле, который за неё отвечает. Остальной код не должен знать лишнего.",
      "Проверяю критичные сценарии, а ревью использую как сверку общей модели. Стандарты и автоматизация, включая AI code review, снимают шум, чтобы люди обсуждали решения.",
      "Сборка, окружения и путь до пользователя — часть системы. После релиза архитектура должна оставаться понятной тем, кто придёт позже и будет её менять.",
    ],
  },
  leadership: {
    kicker: "05 / Руководство",
    title: "Инженерия — командная работа.",
    lede: "Руководство для меня — это ясность решений и среда, в которой инженеры делают работу лучше.",
    stats: [
      { kicker: "Фронтенд", prefix: "", caption: "специалистов в команде, которую координировал" },
      { kicker: "Отдел", prefix: "до", caption: "человек при замещении руководителя отдела" },
    ],
    points: [
      {
        title: "Архитектурное руководство",
        text: "Держу границы системы и решения, от которых зависит, как проект будет меняться дальше.",
      },
      {
        title: "Наставничество",
        text: "Адаптирую разработчиков на реальных задачах, а не на отдельной учебной программе.",
      },
      {
        title: "Собеседования",
        text: "Участвую в технических интервью: смотрю на мышление и способность работать внутри системы.",
      },
      {
        title: "Ревью кода с AI",
        text: "Автоматизирую разбор изменений агентами там, где это усиливает команду и не снимает ответственность.",
      },
    ],
  },
  stack: {
    kicker: "06 / Стек",
    title: "Инструменты вторичны. Сначала инженерия.",
    lede: "Стек меняется. Способ держать сложность — нет.",
    caption: "Технологии по категориям",
    groups: {
      frontend: "Фронтенд",
      architecture: "Архитектура",
      graphics: "Графика",
      ui: "Интерфейс",
      testing: "Тестирование",
      infrastructure: "Инфраструктура",
    },
  },
  about: {
    kicker: "07 / Обо мне",
    title: "Немного обо мне.",
    labels: {
      name: "Имя",
      github: "GitHub",
      pronouns: "Местоимения",
      city: "Город",
    },
    city: "Иркутск",
    paragraphs: [
      "Frontend-разработчик и технический лидер с опытом коммерческой разработки более 5 лет.",
      "Специализируюсь на архитектуре сложных веб-приложений, разработке масштабируемых frontend-решений и внедрении инженерных практик.",
      "Совмещаю hands-on разработку с техническим руководством, развитием команды и совершенствованием процессов разработки.",
    ],
    principleLabel: "Принцип",
    principle: "Хорошая архитектура должна помогать продукту развиваться, а команде работать эффективнее.",
  },
  contact: {
    kicker: "08 / Контакты",
    lines: ["Сделаем", "что-то", "значимое."],
  },
  footer: {
    tagline: "Фронтенд · Архитектура · Руководство",
    top: "Наверх",
  },
};

export const messages: Record<Locale, Messages> = { en, ru };
