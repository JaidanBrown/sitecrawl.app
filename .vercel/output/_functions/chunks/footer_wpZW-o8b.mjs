import { e as createComponent, g as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_OwsMB55A.mjs';
import 'piccolore';
import { clsx } from 'clsx';
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Discover technical issues, optimize performance, and improve your search rankings with intelligent website crawling and analysis." } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body class="antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Logo = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "/logo/logo.png",
      alt: "SiteCrawl Logo",
      width: 1521,
      height: 256,
      className: cn("h-5 w-auto", className)
    }
  );
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Updates", href: "/changelog" }
];
const handleAnchorClick = (e, href) => {
  e.preventDefault();
  const elementId = href.substring(1);
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  } else {
    window.location.href = "/" + href;
  }
};
const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(
    "nav",
    {
      "data-state": menuState && "active",
      className: "fixed z-20 w-full px-2",
      children: /* @__PURE__ */ jsx("div", { className: cn("mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 bg-background/30 backdrop-blur-sm", isScrolled && "bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"), children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex w-full justify-between lg:w-auto", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              "aria-label": "home",
              className: "flex items-center space-x-2",
              children: /* @__PURE__ */ jsx(Logo, {})
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setMenuState(!menuState),
              "aria-label": menuState == true ? "Close Menu" : "Open Menu",
              className: "relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden",
              children: [
                /* @__PURE__ */ jsx(Menu, { className: "in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" }),
                /* @__PURE__ */ jsx(X, { className: "in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 m-auto hidden size-fit lg:block", children: /* @__PURE__ */ jsx("ul", { className: "flex gap-8 text-sm", children: menuItems.map((item, index) => /* @__PURE__ */ jsx("li", { children: item.href.startsWith("#") ? /* @__PURE__ */ jsx(
          "button",
          {
            onClick: (e) => handleAnchorClick(e, item.href),
            className: "text-muted-foreground hover:text-accent-foreground block duration-150",
            children: /* @__PURE__ */ jsx("span", { children: item.name })
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "text-muted-foreground hover:text-accent-foreground block duration-150",
            children: /* @__PURE__ */ jsx("span", { children: item.name })
          }
        ) }, index)) }) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent", children: [
          /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx("ul", { className: "space-y-6 text-base", children: menuItems.map((item, index) => /* @__PURE__ */ jsx("li", { children: item.href.startsWith("#") ? /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                handleAnchorClick(e, item.href);
                setMenuState(false);
              },
              className: "text-muted-foreground hover:text-accent-foreground block duration-150",
              children: /* @__PURE__ */ jsx("span", { children: item.name })
            }
          ) : /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: "text-muted-foreground hover:text-accent-foreground block duration-150",
              children: /* @__PURE__ */ jsx("span", { children: item.name })
            }
          ) }, index)) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "sm",
                className: cn(isScrolled && "lg:hidden"),
                children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("span", { children: "Login" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                size: "sm",
                className: cn(isScrolled && "lg:hidden"),
                children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("span", { children: "Sign Up" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                size: "sm",
                className: cn(isScrolled ? "lg:inline-flex" : "hidden"),
                children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("span", { children: "Get Started" }) })
              }
            )
          ] })
        ] })
      ] }) })
    }
  ) });
};

const links = [
  {
    title: "Features",
    href: "#features"
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Documentation",
    href: "#docs"
  },
  {
    title: "Blog",
    href: "/blog"
  },
  {
    title: "Support",
    href: "#support"
  },
  {
    title: "About",
    href: "#about"
  }
];
function FooterSection() {
  return /* @__PURE__ */ jsx("footer", { className: "py-16 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/",
        "aria-label": "go home",
        className: "mx-auto block size-fit",
        children: /* @__PURE__ */ jsx(Logo, {})
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "my-8 flex flex-wrap justify-center gap-6 text-sm", children: links.map((link, index) => /* @__PURE__ */ jsx(
      "a",
      {
        href: link.href,
        className: "text-muted-foreground hover:text-primary block duration-150",
        children: /* @__PURE__ */ jsx("span", { children: link.title })
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "my-8 flex flex-wrap justify-center gap-6 text-sm", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "X/Twitter",
          className: "text-muted-foreground hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "size-6",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "LinkedIn",
          className: "text-muted-foreground hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "size-6",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Facebook",
          className: "text-muted-foreground hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "size-6",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Threads",
          className: "text-muted-foreground hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "size-6",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4",
                  color: "currentColor"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Instagram",
          className: "text-muted-foreground hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "size-6",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "TikTok",
          className: "text-muted-foreground hover:text-primary block",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "size-6",
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                }
              )
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground block text-center text-sm", children: [
      " © ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " SiteCrawl. All rights reserved."
    ] })
  ] }) });
}

export { $$Layout as $, Button as B, FooterSection as F, HeroHeader as H, cn as c };
