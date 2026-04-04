import { BgMask } from "@/components/bg-mask";
import { Logo } from "@/components/logo";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
const links = [
  {
    id: "footer-link-work",
    label: "Work",
    href: "#",
  },
  {
    id: "footer-link-services",
    label: "Services",
    href: "#",
  },
  {
    id: "footer-link-process",
    label: "Process",
    href: "#",
  },
  {
    id: "footer-link-about",
    label: "About",
    href: "#",
  },
  {
    id: "footer-link-contact",
    label: "Contact",
    href: "#",
  },
];
export function Footer() {
  return (
    <footer className="bg-card-foreground text-background px-8 flex flex-col gap-8 py-12 md:grid md:grid-cols-3 md:items-start md:grid-rows-2">
      <div className="row-span-1 col-span-1 space-y-4">
        <Logo className="w-50 text-muted-foreground" />
        <p className="max-w-prose text-muted text-sm">
          A multidisciplinary team of designers, developers, and strategists
          united by one goal, creating digital experiences that empower brands
          to stand out.
        </p>
      </div>

      <nav className=" row-span-2 flex flex-col">
        {links.map((item) => (
          <li key={item.id} className="border-b list-none border-b-border/40">
            <BgMask className="after:bg-primary p-6 flex gap-2 items-center">
              <Link
                href={item.href}
                title={item.label}
                aria-label={`navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
              <ArrowUpRightIcon className="size-4" />
            </BgMask>
          </li>
        ))}
      </nav>

      <div className="space-y-2">
        <h3 className="text-xl font-medium">Have a question?</h3>

        <a
          href="mailto:mail@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px"
        >
          Contact us
        </a>
      </div>

      <ul className="flex flex-col items-start space-y-2 text-muted">
        <li className="list-none relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
          <address>200 Main St, San Francisco, CA 94103</address>
        </li>

        <li className="list-none relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
          <a href="mailto:mail@email.com">hello@motus.com</a>
        </li>
        <li className="list-none relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
          <a href="tel:+21348878799">+213 487 879 9</a>
        </li>

        <li className="inline-flex gap-4">
          <div className="relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </div>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </li>
      </ul>
      <div className="text-muted-foreground text-sm">
        © 2025 Motus. created by{" "}
        <a
          className="text-background"
          href="https://x.com/lbnm_yussef"
          target="_blank"
          rel="noopener noreferrer"
        >
          @YoucefBnm
        </a>{" "}
        made with{" "}
        <a
          className="text-background"
          href="https://systaliko-ui.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Systaliko UI
        </a>
      </div>
    </footer>
  );
}
