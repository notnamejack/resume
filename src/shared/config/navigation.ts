export const sections = [
  { id: "top", index: "01", href: "#top", nav: false },
  { id: "expertise", index: "02", href: "#expertise", nav: true },
  { id: "work", index: "03", href: "#work", nav: true },
  { id: "process", index: "04", href: "#process", nav: true },
  { id: "leadership", index: "05", href: "#leadership", nav: true },
  { id: "stack", index: "06", href: "#stack", nav: true },
  { id: "about", index: "07", href: "#about", nav: true },
  { id: "contact", index: "08", href: "#contact", nav: true },
] as const;

export type SectionId = (typeof sections)[number]["id"];
