# Алексей — портфолио

Персональный сайт Senior / Lead Frontend Developer. Отдельный продукт, не замена профильному README GitHub: страница [github.com/notnamejack](https://github.com/notnamejack) живёт в репозитории `notnamejack/notnamejack`.

Публичные кейсы: [Four Horses Club](https://github.com/notnamejack/four-horses-club) и [OdanLab](https://lab.odanchem.org/ru-ru/). У журнала нет открытого репозитория — описание по живому интерфейсу и зоне ответственности фронтенда. Следующий кейс добавлять только после разбора кода или подтверждённого скоупа.

## Стек

React, TypeScript, Vite, SCSS Modules, Motion, Lucide.

Слои без лишней вложенности: `app` → `pages` → `widgets` → `shared`.

## Запуск

```bash
npm ci
npm run dev
```

Проверки и сборка:

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

`lint` — ESLint (typescript-eslint и react-hooks). Парсер ESLint берёт TypeScript 6 (`typescript`), проверка типов — `tsc` из TypeScript 7 (`@typescript/native`).

Локально `VITE_BASE` равен `/`. На GitHub Pages для этого репозитория — `/resume/`.

## Язык и тема

Если в `localStorage` нет `locale`, первый визит смотрит на `navigator.language`: `ru*` → русский, иначе английский. Если нет `theme`, тема берётся из `prefers-color-scheme`. Выбор в шапке пишется в `localStorage` и больше не следует за системой. Тот же порядок у inline-скрипта в `index.html` и у React-провайдера, чтобы не было мигания.

## Контакты

Telegram: [@notnamejack](https://t.me/notnamejack). Email пустой, пока адрес не подтверждён — пустая строка в `src/shared/config/site.ts` не рисует кнопку. Телефон не используется.

Имя, местоимения, роль и город, которые видны на странице, лежат в `src/shared/i18n/messages.ts`.

## Новый проект

Тексты кейса — в `src/shared/i18n/messages.ts`, ключ `work.cases`. В `src/shared/config/projects.ts` только метаданные.

1. Добавить slug в тип `ProjectSlug`.
2. Добавить объект в `projects`: `title`, `year`, `stack`, ссылки `github` / `live` (github можно не указывать), `image`, `imageWidth`, `imageHeight`. Номер (`01`, `02`, …) и раскладка считаются по позиции: `mediaStart` → `mediaEnd` → `stacked`. `layout` — необязательное переопределение. `meta` — короткая подпись под скрином из того, чего нет в тегах стека.
3. Добавить тексты EN и RU в `work.cases`: `originalTitle`, `summary`, `imageAlt`, `imageCaption`, `notes`. Длины массивов в двух языках проверяет тип: пропуск элемента не соберётся.
4. Положить WebP-скриншот в `src/assets/projects/`.

Кейс без разбора кода или подтверждённого скоупа не добавлять.

## Публикация

Сайт рассчитан на GitHub Pages: `https://notnamejack.github.io/resume/`.

1. В репозитории: Settings → Pages → Source: GitHub Actions.
2. Workflow `.github/workflows/pages.yml` на `main` гоняет `lint`, `typecheck` и сборку с `VITE_BASE=/resume/` и `VITE_SITE_URL=https://notnamejack.github.io/resume/`, затем публикует `dist`.

Свой домен: в окружении сборки задать `VITE_SITE_URL` (со слэшем на конце, дефолт в `.env` — `https://notnamejack.github.io/resume/`) и `VITE_BASE` (`/resume/` для этого репозитория, `/` для корня домена). Адрес подставляется в `index.html`, `site.url`, `robots.txt` и `sitemap.xml`. Менять шаблон и `site.ts` вручную не нужно.
