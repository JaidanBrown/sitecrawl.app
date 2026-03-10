import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_OwsMB55A.mjs';
import 'piccolore';
import { H as HeroHeader, B as Button, F as FooterSection, $ as $$Layout } from '../chunks/footer_wpZW-o8b.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Check } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small websites and personal projects",
    features: [
      "1,000 pages per month",
      "Weekly crawls",
      "Basic SEO analysis",
      "Email support",
      "Technical issue detection",
      "Mobile responsiveness check"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Ideal for growing businesses and agencies",
    features: [
      "10,000 pages per month",
      "Daily crawls",
      "Advanced SEO analysis",
      "Priority support",
      "Custom reporting",
      "API access",
      "Team collaboration",
      "Change tracking"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited pages",
      "Continuous monitoring",
      "White-label reports",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security",
      "Custom data retention"
    ],
    cta: "Contact Sales",
    popular: false
  }
];
function PricingPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background pt-24 md:pt-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-foreground text-5xl font-semibold md:text-6xl lg:text-7xl", children: "Simple, Transparent Pricing" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mx-auto mt-6 max-w-2xl text-lg", children: "Choose the perfect plan for your website. All plans include a 14-day free trial." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-8 lg:grid-cols-3", children: pricingPlans.map((plan, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative rounded-3xl border bg-[#1d1f23] p-8 ${plan.popular ? "border-white/20 ring-2 ring-white/10" : "border-white/5"}`,
          children: [
            plan.popular && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx("span", { className: "bg-foreground text-background rounded-full px-4 py-1 text-sm font-medium", children: "Most Popular" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-foreground text-2xl font-semibold", children: plan.name }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: plan.description }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-foreground text-5xl font-bold", children: plan.price }),
                plan.period && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-lg", children: plan.period })
              ] })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mb-8 space-y-3", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-foreground mt-0.5 size-5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: feature })
            ] }, featureIndex)) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                variant: plan.popular ? "default" : "outline",
                className: "w-full rounded-xl",
                children: /* @__PURE__ */ jsx("a", { href: "#link", children: plan.cta })
              }
            )
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
        "All plans include SSL monitoring, broken link detection, and basic analytics.",
        /* @__PURE__ */ jsx("br", {}),
        "Need something custom? ",
        /* @__PURE__ */ jsx("a", { href: "#link", className: "text-foreground underline", children: "Contact our sales team" }),
        "."
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(FooterSection, {})
  ] });
}

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing - SiteCrawl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingPage", PricingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/components/pricing-page", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/pricing.astro", void 0);

const $$file = "C:/Users/Jaidan/sitecrawl.app/sitecrawl-landing/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Pricing,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
