"use client";
import { BgMask } from "@/components/bg-mask";
import { Logo } from "@/components/logo";
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from "@/components/systaliko-ui/animated-menu";
import { ArrowUpRightIcon } from "lucide-react";
import { Variants } from "motion";
import Link from "next/link";

const variants = {
  open: {
    width: "100vw",
    height: "100vh",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: "100vw",
    height: "0vh",
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;
const menuItemVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.55 + i * 0.1,
      duration: 0.75,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -100,
    transition: {
      delay: 0.25 + -i * 0.1,
    },
  }),
} as Variants;
const menu_links = [
  {
    id: "menu-link-work",
    label: "Work",
    href: "#",
  },
  {
    id: "menu-link-services",
    label: "Services",
    href: "#",
  },
  {
    id: "menu-link-process",
    label: "Process",
    href: "#",
  },
  {
    id: "menu-link-about",
    label: "About",
    href: "#",
  },
  {
    id: "menu-link-contact",
    label: "Contact",
    href: "#",
  },
];
const menu_socials = [
  {
    id: "menu-social-github",
    label: "Github",
    href: "https://github.com/YoucefBnm/",
  },
  {
    id: "menu-social-linkedin",
    label: "Linkedin",
    href: "https://www.linkedin.com/in/",
  },
  {
    id: "menu-social-x",
    label: "X",
    href: "https://x.com/lbnm_yussef",
  },
  {
    id: "menu-social-ig",
    label: "IG",
    href: "https://www.instagram.com/",
  },
];
export function Header() {
  return (
    <header className="fixed z-999 backdrop-blur-lg w-full pl-8 flex gap-4 justify-between top-0 right-0 min-h-fit">
      <div className="relative p-2 z-999">
        <Link href="/">
          <Logo className=" w-28" />
        </Link>
      </div>
      <nav className="flex">
        <BgMask className="after:bg-primary before:absolute before:bg-inherit before:block before:size-full before:inset-0 before:shadow-[inset_-1px_0_0_0_rgba(51,51,51,0.6)] bg-black/50 text-accent p-2.5 flex gap-4 justify-between items-center z-[999]">
          <span className="pointer-events-none mix-blend-difference">
            Contact us
          </span>
          <ArrowUpRightIcon className="pointer-events-none mix-blend-difference size-4" />
        </BgMask>

        <AnimatedMenu className="relative">
          <BgMask className="after:bg-primary before:absolute before:bg-inherit before:block before:size-full before:inset-0 before:shadow-[inset_-1px_0_0_0_rgba(51,51,51,0.6)] bg-black/50 text-accent p-2.5 flex gap-4 justify-between items-center z-[999]">
            <AnimatedMenuButton className="px-6 py-2.5 mix-blend-difference gap-4">
              <AnimatedMenuButtonToggleIcon />
              <AnimatedMenuButtonLabel />
            </AnimatedMenuButton>
          </BgMask>

          <AnimatedMenuList
            menuListVariants={variants}
            className="fixed top-0 right-0 origin-top z-[800] bg-accent/98 text-accent-foreground"
          >
            <div className="flex  px-6 justify-evenly flex-wrap gap-6 items-center size-full">
              <div className="flex flex-col items-start gap-4">
                {menu_links.map((item, i) => (
                  <BgMask
                    className="after:bg-primary overflow-hidden"
                    key={item.id}
                  >
                    <AnimatedMenuItem
                      className="p-2.5"
                      variants={menuItemVariants}
                      order={i}
                    >
                      <a
                        className="text-6xl font-medium"
                        href={item.href}
                        title={item.label}
                        aria-label={`go to ${item.label} page`}
                      >
                        {item.label}
                      </a>
                    </AnimatedMenuItem>
                  </BgMask>
                ))}
              </div>
              <div className="flex flex-col items-start gap-4">
                {menu_socials.map((item, i) => (
                  <BgMask
                    className="after:bg-accent-foreground overflow-hidden"
                    key={item.id}
                  >
                    <AnimatedMenuItem
                      variants={menuItemVariants}
                      order={i + menu_links.length}
                      className="p-2.5"
                    >
                      <a
                        className="text-xl uppercase text-muted-foreground"
                        href={item.href}
                        title={item.label}
                        aria-label={`go to ${item.label} page`}
                      >
                        {item.label}
                      </a>
                    </AnimatedMenuItem>
                  </BgMask>
                ))}
              </div>
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </nav>
    </header>
  );
}
