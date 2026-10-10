export const sections = [
  { id: "top", index: "01", label: "Hero", href: "#top", nav: false },
  { id: "expertise", index: "02", label: "Expertise", href: "#expertise", nav: true },
  { id: "work", index: "03", label: "Projects", href: "#work", nav: true },
  { id: "process", index: "04", label: "Process", href: "#process", nav: true },
  { id: "leadership", index: "05", label: "Leadership", href: "#leadership", nav: true },
  { id: "stack", index: "06", label: "Stack", href: "#stack", nav: true },
  { id: "about", index: "07", label: "About", href: "#about", nav: true },
  { id: "contact", index: "08", label: "Contact", href: "#contact", nav: true },
] as const;

export type SectionId = (typeof sections)[number]["id"];
