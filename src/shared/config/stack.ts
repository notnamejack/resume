export const stackGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Redux Toolkit", "RTK Query"],
  },
  {
    id: "architecture",
    label: "Architecture",
    items: ["FSD", "Component Architecture", "REST API", "WebSocket"],
  },
  {
    id: "graphics",
    label: "Graphics",
    items: ["WebGL", "Canvas"],
  },
  {
    id: "ui",
    label: "UI",
    items: ["SCSS", "Mantine", "Ant Design", "Gravity UI"],
  },
  {
    id: "testing",
    label: "Testing",
    items: ["Jest", "Cypress"],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    items: ["Webpack", "Vite", "GitLab CI/CD", "Azure DevOps", "GitHub Actions"],
  },
] as const;

export type StackGroupId = (typeof stackGroups)[number]["id"];
