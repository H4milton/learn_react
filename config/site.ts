export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aprendiendo React & Next.js",
  description: "Aprendiendo React & Next.js",
  navItems: [
    {
      label: "Principal",
      href: "/",
      icon: "Home",
    },
    {
      label: "TIC-TAC-TOE",
      href: "/tic-tac-toe",
      icon: "Gamepad",
    },
  ],
  navMenuItems: [
    {
      label: "Principal",
      href: "/",
      icon: "Home",
    },
    {
      label: "TIC-TAC-TOE",
      href: "/tic-tac-toe",
      icon: "Gamepad",
    },
    {
      label: "Logout",
      href: "/logout",
      icon: "exit",
      color: "danger",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
