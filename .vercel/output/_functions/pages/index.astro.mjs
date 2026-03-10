import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_OwsMB55A.mjs';
import 'piccolore';
import { c as cn, H as HeroHeader, B as Button, F as FooterSection, $ as $$Layout } from '../chunks/footer_wpZW-o8b.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React from 'react';
import { Search, BarChart3, Bell, FileCheck, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
export { renderers } from '../renderers.mjs';

const defaultContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
const presetVariants = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 }
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 }
  },
  blur: {
    hidden: { filter: "blur(4px)" },
    visible: { filter: "blur(0px)" }
  },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 20 },
    visible: { filter: "blur(0px)", y: 0 }
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 8 }
    }
  }
};
const addDefaultVariants = (variants) => ({
  hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
  visible: { ...defaultItemVariants.visible, ...variants.visible }
});
function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = "div",
  asChild = "div"
}) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants)
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;
  const MotionComponent = React.useMemo(
    () => motion.create(as),
    [as]
  );
  const MotionChild = React.useMemo(
    () => motion.create(asChild),
    [asChild]
  );
  return /* @__PURE__ */ jsx(
    MotionComponent,
    {
      initial: "hidden",
      animate: "visible",
      variants: containerVariants,
      className,
      children: React.Children.map(children, (child, index) => /* @__PURE__ */ jsx(MotionChild, { variants: itemVariants, children: child }, index))
    }
  );
}

function FAQs() {
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "bg-white text-black scroll-py-16 py-16 md:scroll-py-32 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 text-4xl font-medium md:text-5xl lg:text-6xl", style: { lineHeight: "70px", letterSpacing: "-0.05em" }, children: [
        "Frequently ",
        /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
        " Asked ",
        /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
        "Questions"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Everything you need to know about SiteCrawl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "How does SiteCrawl work?" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "SiteCrawl automatically scans your entire website, analyzing every page for technical issues, SEO problems, and performance bottlenecks." }),
        /* @__PURE__ */ jsxs("ol", { className: "list-outside list-decimal space-y-2 pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "text-gray-600 mt-4", children: "Enter your website URL and start a crawl" }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-600 mt-4", children: "Our crawler analyzes every page on your site" }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-600 mt-4", children: "Get a detailed report with actionable insights" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "What issues does SiteCrawl detect?" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "SiteCrawl identifies broken links, missing meta tags, slow loading pages, duplicate content, mobile responsiveness issues, and over 100 other technical SEO problems." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "How many pages can I crawl?" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 my-4", children: "It depends on your plan. Our plans range from 1,000 pages per month for small sites to unlimited crawls for enterprise customers." }),
        /* @__PURE__ */ jsxs("ul", { className: "list-outside list-disc space-y-2 pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "text-gray-600", children: "Starter: 1,000 pages/month" }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-600", children: "Professional: 10,000 pages/month" }),
          /* @__PURE__ */ jsx("li", { className: "text-gray-600", children: "Enterprise: Unlimited" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Can I cancel my subscription anytime?" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees." })
      ] })
    ] })
  ] }) }) });
}

function FeaturesSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-16 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl space-y-12 px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-foreground text-4xl font-medium md:text-5xl lg:text-6xl", style: { lineHeight: "70px", letterSpacing: "-0.05em" }, children: "Everything you need to optimize your website" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm sm:ml-auto", children: "Powerful tools and insights that help you identify and fix technical issues before they impact your search rankings." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-3 pt-3 md:-mx-8", children: /* @__PURE__ */ jsx("div", { className: "aspect-88/36 mask-b-from-75% mask-b-to-95% relative", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/dashboard/dashboard-2.png",
        className: "absolute inset-0 z-10",
        alt: "sitecrawl dashboard",
        width: 2797,
        height: 1137
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Search, { className: "size-4 text-foreground" }),
          /* @__PURE__ */ jsx("h3", { className: "text-foreground text-sm font-medium", children: "Deep Crawling" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Scan every page, link, and resource to uncover hidden issues." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "size-4 text-foreground" }),
          /* @__PURE__ */ jsx("h3", { className: "text-foreground text-sm font-medium", children: "SEO Analytics" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Track rankings, monitor performance, and measure improvements." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Bell, { className: "size-4 text-foreground" }),
          /* @__PURE__ */ jsx("h3", { className: "text-foreground text-sm font-medium", children: "Smart Alerts" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Get notified when critical issues are detected on your site." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileCheck, { className: "size-4 text-foreground" }),
          /* @__PURE__ */ jsx("h3", { className: "text-foreground text-sm font-medium", children: "Detailed Reports" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Export comprehensive reports to share with your team." })
      ] })
    ] })
  ] }) });
}

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}

function Features() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white text-black py-16 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid gap-2 sm:grid-cols-5", children: [
    /* @__PURE__ */ jsxs(Card, { className: "group overflow-hidden shadow-none border-0 bg-[#f5f5f6] sm:col-span-3 sm:rounded-none sm:rounded-tl-xl", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "md:p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-black", children: "Advanced tracking system" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-3 max-w-sm text-sm", children: "Quick AI lives a single hotkey away - ready to quickly appear as a floating window above your other apps.." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mask-b-from-75% mask-b-to-95% relative h-fit pl-6 md:pl-12", children: /* @__PURE__ */ jsx("div", { className: "bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/dashboard/dashboard-2.png",
          className: "hidden dark:block",
          alt: "payments illustration dark",
          width: 1207,
          height: 929
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "group overflow-hidden shadow-none border-0 bg-[#f5f5f6] sm:col-span-2 sm:rounded-none sm:rounded-tr-xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mx-auto my-6 max-w-md text-left px-6 text-center text-lg font-semibold sm:text-2xl md:p-6 text-black", children: "Simple UI, Instantly locate what you need." }),
      /* @__PURE__ */ jsx(CardContent, { className: "mt-auto h-fit", children: /* @__PURE__ */ jsx("div", { className: "mask-radial-at-left mask-radial-from-75% mask-radial-[75%_75%] relative max-sm:mb-6", children: /* @__PURE__ */ jsx("div", { className: " overflow-hidden rounded-l-lg border", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/dashboard/sidebar-1.png",
          alt: "sidebar illustration",
          width: 1207,
          height: 929
        }
      ) }) }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "group p-6 shadow-none border-0 bg-[#f5f5f6] sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12", children: [
      /* @__PURE__ */ jsx("p", { className: "mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl text-black", children: "Navigate your dashboard with ease." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white flex aspect-square size-16 items-center justify-center rounded-[7px] border border-gray-300 p-3 shadow-sm", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-black", children: "Ctrl" }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white flex aspect-square size-16 items-center justify-center rounded-[7px] border border-gray-300 p-3 shadow-sm", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-black", children: "K" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "group relative shadow-none border-0 bg-[#f5f5f6] sm:col-span-3 sm:rounded-none sm:rounded-br-xl", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "p-6 md:p-12", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-black", children: "Advanced tracking system" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2 max-w-sm text-sm", children: "Quick AI lives a single hotkey away apps.." })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "relative h-fit px-6 pb-6 md:px-12 md:pb-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2 md:grid-cols-6", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-(--radius) aspect-square border border-dashed" }),
        /* @__PURE__ */ jsx("div", { className: "rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "m-auto size-8 invert dark:invert-0",
            src: "https://oxymor-ns.tailus.io/logos/linear.svg",
            alt: "Linear logo",
            width: "32",
            height: "32"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-(--radius) aspect-square border border-dashed" }),
        /* @__PURE__ */ jsx("div", { className: "rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "m-auto size-8 invert dark:invert-0",
            src: "https://oxymor-ns.tailus.io/logos/netlify.svg",
            alt: "Netlify logo",
            width: "32",
            height: "32"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-(--radius) aspect-square border border-dashed" }),
        /* @__PURE__ */ jsx("div", { className: "rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "m-auto size-8 invert dark:invert-0",
            src: "https://oxymor-ns.tailus.io/logos/github.svg",
            alt: "github logo",
            width: "32",
            height: "32"
          }
        ) })
      ] }) })
    ] })
  ] }) }) });
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
};
function ScrollRevealSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.3"]
  });
  const paragraphs = [
    "Every website has hidden problems that slow it down and hurt its search rankings. Missing meta tags, broken links, slow loading times - these issues stack up and cost you traffic.",
    "SiteCrawl automatically scans your entire site, identifies every technical issue, and gives you a clear roadmap to fix them. Get the insights you need to outrank your competition."
  ];
  const highlightWords = /* @__PURE__ */ new Set(["problems", "search rankings", "SiteCrawl", "technical issue", "roadmap", "outrank", "competition"]);
  const allWords = paragraphs.flatMap((p) => p.split(" "));
  const totalWords = allWords.length;
  return /* @__PURE__ */ jsx("section", { ref, className: "bg-[#f8f9fa] text-black py-32 md:py-48", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6 text-left", children: paragraphs.map((paragraph, pIndex) => /* @__PURE__ */ jsx("p", { className: "mb-8 text-xl font-semibold leading-snug tracking-tight md:text-3xl lg:text-4xl", children: paragraph.split(" ").map((word, wIndex) => {
    const wordPosition = paragraphs.slice(0, pIndex).reduce((sum, p) => sum + p.split(" ").length, 0) + wIndex;
    const threshold = wordPosition / totalWords;
    const opacity = useTransform(
      scrollYProgress,
      [threshold - 0.01, threshold],
      [0.3, 1]
    );
    const y = useTransform(
      scrollYProgress,
      [threshold - 0.01, threshold],
      [5, 0]
    );
    const cleanWord = word.replace(/[.,]/g, "");
    const isHighlighted = highlightWords.has(cleanWord) || highlightWords.has(word);
    return /* @__PURE__ */ jsx(
      motion.span,
      {
        style: { opacity, y },
        className: `inline-block mr-[0.25em] ${isHighlighted ? "text-[#0097ff]" : ""}`,
        children: word
      },
      wIndex
    );
  }) }, pIndex)) }) });
}
function CTASection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-[#1d1f23] border border-white/5 px-8 py-16 md:px-16 md:py-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-foreground text-4xl font-medium md:text-5xl lg:text-6xl", style: { lineHeight: "70px", letterSpacing: "-0.05em" }, children: "Ready to fix your website issues?" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mx-auto mt-6 max-w-2xl text-lg", children: "Start your free 14-day trial today. No credit card required." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5", children: /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          size: "lg",
          className: "rounded-xl px-8 text-base",
          children: /* @__PURE__ */ jsx("a", { href: "#link", children: /* @__PURE__ */ jsx("span", { className: "text-nowrap", children: "Start Free Trial" }) })
        }
      ) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          size: "lg",
          variant: "ghost",
          className: "h-10.5 rounded-xl px-8",
          children: /* @__PURE__ */ jsx("a", { href: "#link", children: /* @__PURE__ */ jsx("span", { className: "text-nowrap", children: "Schedule Demo" }) })
        }
      )
    ] })
  ] }) }) });
}
function HeroSection() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroHeader, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "relative pt-24 md:pt-36", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center sm:mx-auto lg:mr-auto lg:mt-0", children: [
          /* @__PURE__ */ jsx(AnimatedGroup, { variants: transitionVariants, children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#link",
              className: "bg-[#1d1f23] hover:bg-background dark:hover:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 transition-colors duration-300 dark:border-t-white/5",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: "Now with Advanced SEO Analysis" }),
                /* @__PURE__ */ jsx("span", { className: "dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" }),
                /* @__PURE__ */ jsx("div", { className: "group-hover:bg-[#1d1f23] size-6 overflow-hidden rounded-full duration-500", children: /* @__PURE__ */ jsxs("div", { className: "flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0", children: [
                  /* @__PURE__ */ jsx("span", { className: "flex size-6", children: /* @__PURE__ */ jsx(ArrowRight, { className: "m-auto size-3" }) }),
                  /* @__PURE__ */ jsx("span", { className: "flex size-6", children: /* @__PURE__ */ jsx(ArrowRight, { className: "m-auto size-3" }) })
                ] }) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("h1", { className: "text-foreground mx-auto mt-8 max-w-4xl text-balance text-4xl font-medium md:text-5xl lg:mt-16 lg:text-6xl", style: { lineHeight: "70px", letterSpacing: "-0.05em" }, children: "Comprehensive Website Analysis & SEO Insights" }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground mx-auto mt-8 max-w-2xl text-balance text-lg", children: "A smarter way to keep track of your website's health and performance." }),
          /* @__PURE__ */ jsxs(
            AnimatedGroup,
            {
              variants: {
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75
                    }
                  }
                },
                ...transitionVariants
              },
              className: "mt-12 flex flex-col items-center justify-center gap-2 md:flex-row",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5",
                    children: /* @__PURE__ */ jsx(
                      Button,
                      {
                        asChild: true,
                        size: "lg",
                        className: "rounded-xl px-5 text-base",
                        children: /* @__PURE__ */ jsx("a", { href: "#link", children: /* @__PURE__ */ jsx("span", { className: "text-nowrap", children: "14 Day Free Trial" }) })
                      }
                    )
                  },
                  1
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    variant: "ghost",
                    className: "h-10.5 rounded-xl px-5",
                    children: /* @__PURE__ */ jsx("a", { href: "#link", children: /* @__PURE__ */ jsx("span", { className: "text-nowrap", children: "Learn More" }) })
                  },
                  2
                )
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          AnimatedGroup,
          {
            variants: {
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75
                  }
                }
              },
              ...transitionVariants
            },
            children: /* @__PURE__ */ jsx("div", { className: "mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20", children: /* @__PURE__ */ jsx("div", { className: "inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1", children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "bg-background aspect-15/8 relative rounded-2xl",
                src: "/dashboard/dashboard-1.png",
                alt: "SiteCrawl Dashboard",
                width: "2700",
                height: "1440"
              }
            ) }) })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ScrollRevealSection, {}),
      /* @__PURE__ */ jsx(Features, {}),
      /* @__PURE__ */ jsx(FeaturesSection, {}),
      /* @__PURE__ */ jsx(FAQs, {}),
      /* @__PURE__ */ jsx(CTASection, {}),
      /* @__PURE__ */ jsx(FooterSection, {})
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SiteCrawl - Comprehensive Website Analysis & SEO Insights" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/components/hero-section", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
