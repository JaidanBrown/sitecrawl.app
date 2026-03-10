import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_OwsMB55A.mjs';
import 'piccolore';
import { H as HeroHeader, F as FooterSection, $ as $$Layout } from '../chunks/footer_wpZW-o8b.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const changelogEntries = [
  {
    version: "2.1.0",
    date: "November 15, 2024",
    type: "New Features",
    changes: [
      "Advanced SEO analysis with keyword density tracking",
      "Mobile-first indexing insights",
      "Automated sitemap generation",
      "Custom crawl scheduling"
    ]
  },
  {
    version: "2.0.5",
    date: "October 28, 2024",
    type: "Improvements",
    changes: [
      "Improved crawl speed by 40%",
      "Enhanced broken link detection",
      "Better handling of JavaScript-heavy sites",
      "Updated dashboard UI with dark mode support"
    ]
  },
  {
    version: "2.0.0",
    date: "October 1, 2024",
    type: "Major Release",
    changes: [
      "Complete platform redesign",
      "Real-time crawl monitoring",
      "Team collaboration features",
      "API v2 with enhanced endpoints",
      "Integration with Google Search Console",
      "Custom report templates"
    ]
  },
  {
    version: "1.9.2",
    date: "September 15, 2024",
    type: "Bug Fixes",
    changes: [
      "Fixed issue with crawling large sitemaps",
      "Resolved duplicate content detection errors",
      "Improved memory usage during crawls",
      "Fixed email notification delivery issues"
    ]
  }
];
function ChangelogPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background pt-24 md:pt-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-foreground text-5xl font-semibold md:text-6xl lg:text-7xl", children: "Changelog" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mx-auto mt-6 max-w-2xl text-lg", children: "Stay updated with the latest features, improvements, and bug fixes." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: changelogEntries.map((entry, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "border-l-2 border-white/10 pl-8 relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-[9px] top-0 size-4 rounded-full bg-foreground ring-4 ring-background" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-2 flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-foreground text-2xl font-semibold", children: [
                "Version ",
                entry.version
              ] }),
              /* @__PURE__ */ jsx("span", { className: "bg-foreground/10 text-foreground rounded-full px-3 py-1 text-xs font-medium", children: entry.type })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 text-sm", children: entry.date }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: entry.changes.map((change, changeIndex) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "text-foreground flex items-start gap-2",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground mt-1.5", children: "•" }),
                  /* @__PURE__ */ jsx("span", { children: change })
                ]
              },
              changeIndex
            )) })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 rounded-3xl border border-white/5 bg-[#1d1f23] p-8 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-foreground text-xl font-semibold", children: "Want to request a feature?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: "We're always looking to improve SiteCrawl. Let us know what you'd like to see next." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(FooterSection, {})
  ] });
}

const $$Changelog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Changelog - SiteCrawl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChangelogPage", ChangelogPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/components/changelog-page", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/changelog.astro", void 0);

const $$file = "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/changelog.astro";
const $$url = "/changelog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Changelog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
