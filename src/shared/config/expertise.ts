export type ExpertiseItem = {
  index: "01" | "02" | "03" | "04";
  meta?: string[];
};

export const expertise: ExpertiseItem[] = [
  {
    index: "01",
    meta: ["React", "TypeScript", "FSD"],
  },
  {
    index: "02",
  },
  {
    index: "03",
  },
  {
    index: "04",
    meta: ["Corporate", "Canvas", "WebGL"],
  },
];
