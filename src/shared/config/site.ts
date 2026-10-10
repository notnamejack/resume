export const site = {
  // Каноническое имя. То, что видно на странице, берётся из messages.identity,
  // чтобы EN и RU не тянули одну и ту же строку отсюда.
  name: "Алексей",
  handle: "notnamejack",
  github: "https://github.com/notnamejack",
  url: "https://notnamejack.github.io/resume/",
  // Публичные контакты. Заполнить строку после подтверждения — секция подхватит сама.
  // TODO: worksFor, familyName и email — только после подтверждения, не выдумывать.
  email: "",
  telegram: "@notnamejack",
};

export type ContactLink = {
  id: string;
  label: string;
  href: string;
  value: string;
};

function telegramHref(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `https://t.me/${value.replace(/^@/, "")}`;
}

export function getContacts(): ContactLink[] {
  const contacts: ContactLink[] = [
    {
      id: "github",
      label: "GitHub",
      href: site.github,
      value: site.handle,
    },
  ];

  if (site.email) {
    contacts.push({
      id: "email",
      label: "Email",
      href: `mailto:${site.email}`,
      value: site.email,
    });
  }

  if (site.telegram) {
    const handle = site.telegram.replace(/^@/, "");
    contacts.push({
      id: "telegram",
      label: "Telegram",
      href: telegramHref(site.telegram),
      value: site.telegram.startsWith("http") ? site.telegram : `@${handle}`,
    });
  }

  return contacts;
}
