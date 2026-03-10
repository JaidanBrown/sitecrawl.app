import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro } from '../../chunks/astro/server_OwsMB55A.mjs';
import 'piccolore';
import { H as HeroHeader, F as FooterSection, $ as $$Layout } from '../../chunks/footer_wpZW-o8b.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { u as urlFor, s as sanityClient } from '../../chunks/sanity_DkD1xA9J.mjs';
export { renderers } from '../../renderers.mjs';

function PortableText({ content }) {
  if (!content) return null;
  const renderText = (child, markDefs) => {
    let text = child.text;
    if (child.marks) {
      child.marks.forEach((mark) => {
        if (mark === "strong") {
          text = /* @__PURE__ */ jsx("strong", { children: text }, mark);
        } else if (mark === "em") {
          text = /* @__PURE__ */ jsx("em", { children: text }, mark);
        } else {
          const linkDef = markDefs?.find((def) => def._key === mark);
          if (linkDef && linkDef._type === "link") {
            text = /* @__PURE__ */ jsx("a", { href: linkDef.href, className: "text-primary underline hover:no-underline", target: "_blank", rel: "noopener noreferrer", children: text });
          }
        }
      });
    }
    return text;
  };
  const renderBlock = (block) => {
    if (block._type === "block") {
      const children = block.children?.map((child, idx) => /* @__PURE__ */ jsx("span", { children: renderText(child, block.markDefs) }, idx));
      switch (block.style) {
        case "h1":
          return /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mt-8 mb-4", children }, block._key);
        case "h2":
          return /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mt-8 mb-4", children }, block._key);
        case "h3":
          return /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mt-6 mb-3", children }, block._key);
        case "h4":
          return /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mt-4 mb-2", children }, block._key);
        case "blockquote":
          return /* @__PURE__ */ jsx("blockquote", { className: "border-l-4 border-primary pl-4 italic my-4 text-muted-foreground", children }, block._key);
        default:
          if (block.listItem === "bullet") {
            return /* @__PURE__ */ jsx("li", { className: "ml-6", children }, block._key);
          }
          return /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed", children }, block._key);
      }
    }
    if (block._type === "image" && block.asset) {
      return /* @__PURE__ */ jsx("figure", { className: "my-8", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: urlFor({ asset: block.asset }),
          alt: "",
          className: "rounded-xl w-full"
        }
      ) }, block._key);
    }
    return null;
  };
  const groupedContent = [];
  let currentList = [];
  content.forEach((block) => {
    if (block.listItem === "bullet") {
      currentList.push(block);
    } else {
      if (currentList.length > 0) {
        groupedContent.push(currentList);
        currentList = [];
      }
      groupedContent.push(block);
    }
  });
  if (currentList.length > 0) {
    groupedContent.push(currentList);
  }
  return /* @__PURE__ */ jsx("div", { className: "prose prose-invert max-w-none", children: groupedContent.map((item, idx) => {
    if (Array.isArray(item)) {
      return /* @__PURE__ */ jsx("ul", { className: "list-disc mb-4", children: item.map((block) => renderBlock(block)) }, idx);
    }
    return renderBlock(item);
  }) });
}

function BlogPost({ post }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-32 pb-16", children: /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          post.categories && post.categories.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-4", children: post.categories.map((cat, idx) => /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full", children: cat.title }, idx)) }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold tracking-tight sm:text-5xl mb-4", children: post.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-muted-foreground", children: [
            post.author && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              post.author.image && /* @__PURE__ */ jsx(
                "img",
                {
                  src: urlFor(post.author.image),
                  alt: post.author.name,
                  className: "w-10 h-10 rounded-full object-cover"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: post.author.name })
            ] }),
            post.publishedAt && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { children: "·" }),
              /* @__PURE__ */ jsx("time", { dateTime: post.publishedAt, children: new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }) })
            ] })
          ] })
        ] }),
        post.mainImage && /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl aspect-[16/9]", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: urlFor(post.mainImage),
            alt: post.mainImage.alt || post.title,
            className: "w-full h-full object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-lg", children: post.body && /* @__PURE__ */ jsx(PortableText, { content: post.body }) }),
      /* @__PURE__ */ jsx("footer", { className: "mt-16 pt-8 border-t", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/blog",
          className: "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) }),
            "Back to all posts"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(FooterSection, {})
  ] });
}

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await sanityClient.fetch(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "author": author->{ name, image },
    "categories": categories[]->{ title }
  }
`, { slug });
  if (!post) {
    return Astro2.redirect("/blog");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - SiteCrawl Blog`, "description": post.title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogPost", BlogPost, { "post": post, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/components/blog-post", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
