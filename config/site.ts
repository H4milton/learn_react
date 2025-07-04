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
  links: [
    {
      label: "HeroUI",
      href: "https://www.heroui.com/docs/",
      icon: "HeroUI",
      isExternal: true,
    },
    {
      label: "Tailwind CSS",
      href: "https://tailwindcss.com/docs/",
      icon: "Tailwind",
      isExternal: true,
    },
    {
      label: "Tailwind Cheat Sheet",
      href: "https://nerdcave.com/tailwind-cheat-sheet",
      icon: "Tailwind",
      isExternal: true,
    },
    {
      label: "React doc",
      href: "https://react.dev/reference/react",
      icon: "React",
      isExternal: true,
    },
  ],
};
