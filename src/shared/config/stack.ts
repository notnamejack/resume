export const stackGroups = [
  {
    id: "frontend",
    items: ["React", "TypeScript", "JavaScript", "Redux Toolkit", "RTK Query"],
  },
  {
    id: "architecture",
    items: ["FSD", "Component Architecture", "REST API", "WebSocket"],
  },
  {
    id: "graphics",
    items: ["WebGL", "Canvas"],
  },
  {
    id: "ui",
    items: ["SCSS", "Mantine", "Ant Design", "Gravity UI"],
  },
  {
    id: "testing",
    items: ["Jest", "Cypress"],
  },
  {
    id: "infrastructure",
    items: ["Webpack", "Vite", "GitLab CI/CD", "Azure DevOps", "GitHub Actions"],
  },
] as const;

export type StackGroupId = (typeof stackGroups)[number]["id"];
