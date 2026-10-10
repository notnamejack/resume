# Алексей — портфолио

Персональный сайт Senior / Lead Frontend Developer. Отдельный продукт, не замена профильному README GitHub: страница [github.com/notnamejack](https://github.com/notnamejack) живёт в репозитории `notnamejack/notnamejack`.

Публичные кейсы: [Four Horses Club](https://github.com/notnamejack/four-horses-club) и [OdanLab](https://lab.odanchem.org/ru-ru/). У журнала нет открытого репозитория — описание по живому интерфейсу и зоне ответственности frontend. Следующий кейс добавлять только после разбора кода или подтверждённого скоупа.

## Стек

React, TypeScript, Vite, SCSS Modules, Motion, Lucide.

Слои без лишней вложенности: `app` → `pages` → `widgets` → `shared`.

## Запуск

```bash
npm install
npm run dev
```

Сборка и проверка типов:

```bash
npm run build
npm run preview
```

Локально `base` равен `/`. На GitHub Pages для этого репозитория — `/resume/`.

## Контакты

Email и Telegram намеренно пустые, пока адреса не подтверждены. Заполнить строки в `src/shared/config/site.ts` — блок контактов подхватит их сам.

## Новый проект

Файл `src/shared/config/projects.ts`. Поля: описание, заметки только по коду или подтверждённому скоупу, стек, скриншот интерфейса, `imageCaption`, ссылки. `github` можно не указывать, если репозитория нет.

`layout` чередовать: `mediaStart`, `mediaEnd`, `stacked`.

Скриншот класть в `src/assets/projects/`, лучше WebP.

## Публикация

Сайт рассчитан на GitHub Pages: `https://notnamejack.github.io/resume/`.

1. В репозитории: Settings → Pages → Source: GitHub Actions.
2. Workflow `.github/workflows/pages.yml` собирает `main` с `VITE_BASE=/resume/` и публикует `dist`.

Свой домен: поменять `base` в workflow и абсолютные URL в `index.html` (`canonical`, Open Graph, JSON-LD) и `site.url`.
