export type ExpertiseItem = {
  index: "01" | "02" | "03" | "04";
  title: string;
  meta?: string[];
};

export const expertise: ExpertiseItem[] = [
  {
    index: "01",
    title: "Frontend Architecture",
    meta: ["React", "TypeScript", "FSD"],
  },
  {
    index: "02",
    title: "Engineering Leadership",
  },
  {
    index: "03",
    title: "Development Infrastructure",
  },
  {
    index: "04",
    title: "Complex Interfaces",
    meta: ["Corporate", "Canvas", "WebGL"],
  },
];
