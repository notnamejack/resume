export type ExpertiseItem = {
  index: "01" | "02" | "03" | "04";
  title: string;
  text: string;
  meta?: string[];
};

export const expertise: ExpertiseItem[] = [
  {
    index: "01",
    title: "Frontend Architecture",
    text: "Проектирую масштабируемые архитектуры на React и TypeScript: границы модулей, Feature-Sliced Design, переиспользование без лишних абстракций.",
    meta: ["React", "TypeScript", "FSD"],
  },
  {
    index: "02",
    title: "Engineering Leadership",
    text: "Веду команду технически: архитектурные решения, декомпозиция, code review, наставничество и общие инженерные стандарты.",
  },
  {
    index: "03",
    title: "Development Infrastructure",
    text: "Собираю поставку приложения: GitLab, Azure DevOps, CI/CD. AI в code review подключаю там, где он снимает шум и не подменяет ответственность.",
  },
  {
    index: "04",
    title: "Complex Interfaces",
    text: "Делаю интерфейсы, в которых экран — система: корпоративные сценарии, Canvas, WebGL и интерактивные визуализации.",
    meta: ["Corporate", "Canvas", "WebGL"],
  },
];
