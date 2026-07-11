import { HeroHeader } from '@/components/header'
import { Check } from 'lucide-react'
import FooterSection from '@/components/footer'
import { useState } from 'react'

const pricingPlans = [
    {
        name: 'Free',
        monthlyPrice: '$0',
        yearlyPrice: '$0',
        yearlySavings: null,
        description: 'Try SiteCrawl on a small site, free forever',
        features: [
            '1 URL',
            '500 pages per URL',
            'Weekly crawls',
            'SEO analysis',
            'Technical issue detection',
            '1 user',
        ],
        cta: 'Get started free',
        popular: false,
    },
    {
        name: 'Starter',
        monthlyPrice: '$29',
        yearlyPrice: '$240',
        yearlySavings: '$108',
        description: 'Perfect for small websites and personal projects',
        features: [
            '1 URL',
            '2,500 pages per URL',
            'Daily crawls',
            'SEO analysis',
            'Technical issue detection',
            'PageSpeed insights',
            '1 user',
        ],
        cta: 'Get started',
        popular: false,
    },
    {
        name: 'Professional',
        monthlyPrice: '$49',
        yearlyPrice: '$480',
        yearlySavings: '$108',
        description: 'Ideal for growing businesses and agencies',
        features: [
            '3 URLs',
            '20,000 pages per URL',
            'Daily crawls',
            'SEO analysis',
            'Technical issue detection',
            'PageSpeed insights',
            '5 users',
        ],
        cta: 'Get started',
        popular: true,
    },
    {
        name: 'Agency',
        monthlyPrice: '$149',
        yearlyPrice: '$1,560',
        yearlySavings: '$228',
        description: 'For large organizations with complex needs',
        features: [
            '10 URLs',
            '50,000 pages per URL',
            'Daily crawls',
            'SEO analysis',
            'Technical issue detection',
            'PageSpeed insights',
            '20 users',
        ],
        cta: 'Get started',
        popular: false,
    },
]

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false)

    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-32 md:pt-44">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Pricing</p>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
                            Simple, transparent pricing
                        </h1>
                        <p className="mt-3 max-w-xl text-sm text-neutral-400">
                            Choose the plan that fits your site. Start free — no credit card required.
                        </p>

                        <div className="mt-8 inline-flex border border-neutral-800">
                            <button
                                type="button"
                                onClick={() => setIsYearly(false)}
                                className={`px-4 py-2 text-sm ${
                                    !isYearly
                                        ? 'bg-neutral-800/70 text-neutral-100'
                                        : 'text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                                }`}>
                                Monthly
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsYearly(true)}
                                className={`border-l border-neutral-800 px-4 py-2 text-sm ${
                                    isYearly
                                        ? 'bg-neutral-800/70 text-neutral-100'
                                        : 'text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                                }`}>
                                Yearly <span className="text-neutral-500">(save up to 31%)</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`flex flex-col border bg-neutral-900/50 p-6 ${
                                    plan.popular ? 'border-neutral-600' : 'border-neutral-800'
                                }`}>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-neutral-100">{plan.name}</h3>
                                    {plan.popular && (
                                        <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                                            <span className="size-2 rounded-full bg-emerald-500"></span>
                                            Most popular
                                        </span>
                                    )}
                                </div>
                                <p className="mt-0.5 text-xs text-neutral-500">{plan.description}</p>

                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-2xl font-semibold tabular-nums text-neutral-100">
                                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-xs text-neutral-500">
                                        {isYearly ? '/year' : '/month'}
                                    </span>
                                </div>
                                {isYearly && plan.yearlySavings && (
                                    <p className="mt-1 text-xs tabular-nums text-neutral-400">
                                        Save {plan.yearlySavings} per year
                                    </p>
                                )}

                                <ul className="mt-6 mb-8 space-y-2.5 border-t border-neutral-800 pt-6">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-2">
                                            <Check className="mt-0.5 size-3.5 flex-shrink-0 text-neutral-500" />
                                            <span className="text-xs tabular-nums text-neutral-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://dashboard.sitecrawl.app"
                                    className={`mt-auto block px-4 py-2 text-center text-sm font-medium ${
                                        plan.popular
                                            ? 'bg-neutral-100 text-neutral-900 hover:bg-white'
                                            : 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                                    }`}>
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <p className="text-sm text-neutral-400">
                            Need something custom?{' '}
                            <a href="mailto:hello@sitecrawl.app" className="text-neutral-100 underline underline-offset-4 hover:no-underline">
                                Contact our sales team
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
