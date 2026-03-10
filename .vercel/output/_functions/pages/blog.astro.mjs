import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_OwsMB55A.mjs';
import 'piccolore';
import { H as HeroHeader, F as FooterSection, $ as $$Layout } from '../chunks/footer_wpZW-o8b.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { u as urlFor, s as sanityClient } from '../chunks/sanity_DkD1xA9J.mjs';
export { renderers } from '../renderers.mjs';

function BlogList({ posts }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-32 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold tracking-tight sm:text-5xl mb-4", children: "Blog" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Stay updated with the latest insights on SEO, website performance, and technical optimization." })
      ] }),
      posts.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground", children: "No posts yet. Check back soon!" }) : /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: posts.map((post) => /* @__PURE__ */ jsx("article", { className: "group", children: /* @__PURE__ */ jsxs("a", { href: `/blog/${post.slug.current}`, className: "block", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border bg-card mb-4 aspect-[16/9]", children: post.mainImage ? /* @__PURE__ */ jsx(
          "img",
          {
            src: urlFor(post.mainImage),
            alt: post.mainImage.alt || post.title,
            className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "No image" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          post.categories && post.categories.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: post.categories.map((cat, idx) => /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary/80", children: cat.title }, idx)) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold group-hover:text-primary/80 transition-colors", children: post.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            post.author && /* @__PURE__ */ jsx("span", { children: post.author.name }),
            post.author && post.publishedAt && /* @__PURE__ */ jsx("span", { children: "·" }),
            post.publishedAt && /* @__PURE__ */ jsx("time", { dateTime: post.publishedAt, children: new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }) })
          ] })
        ] })
      ] }) }, post._id)) })
    ] }) }),
    /* @__PURE__ */ jsx(FooterSection, {})
  ] });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sanityClient.fetch(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->{ name, image },
    "categories": categories[]->{ title }
  }
`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - SiteCrawl", "description": "Stay updated with the latest insights on SEO, website performance, and technical optimization." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogList", BlogList, { "posts": posts, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/components/blog-list", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
