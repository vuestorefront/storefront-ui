export const getAvatar = (member = {}) => {
  if (member.avatar) return member.avatar

  if (member.socials) {
    const socials = member.socials

    if (socials.github) {
      return `https://github.com/${socials.github}.png`
    } else if (socials.twitter) {
      return `https://avatars.io/twitter/${socials.twitter}`
    }
  }

  return "https://res.cloudinary.com/mayashavin/image/upload/w_80,h_80,c_scale,r_max,q_auto/v1567439978/Portrait_Placeholder.png"
}

export const languageNameFor = {
  en: "English",
  nl: "Nederlands",
  zh: "中文",
  vi: "Tiếng Việt",
  pl: "Polski",
  pt: "Português",
  ru: "Русский",
  jp: "日本語",
  fr: "Français",
  de: "Deutsch",
  el: "Ελληνικά",
  es: "Español",
  he: "עברית",
  hi: "हिंदी",
  it: "Italiano",
  fa: "فارسی",
  ko: "한국어",
  ro: "Română",
  uk: "Українська",
}

export const minimizedLink = (link) =>
  link
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "")
    .replace(/^mailto:/, "")
