import { HeroHeader } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import FooterSection from '@/components/footer'

const pricingPlans = [
    {
        name: 'Starter',
        price: '$29',
        period: '/month',
        description: 'Perfect for small websites and personal projects',
        features: [
            '1,000 pages per month',
            'Weekly crawls',
            'Basic SEO analysis',
            'Email support',
            'Technical issue detection',
            'Mobile responsiveness check',
        ],
        cta: 'Start Free Trial',
        popular: false,
    },
    {
        name: 'Professional',
        price: '$99',
        period: '/month',
        description: 'Ideal for growing businesses and agencies',
        features: [
            '10,000 pages per month',
            'Daily crawls',
            'Advanced SEO analysis',
            'Priority support',
            'Custom reporting',
            'API access',
            'Team collaboration',
            'Change tracking',
        ],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations with complex needs',
        features: [
            'Unlimited pages',
            'Continuous monitoring',
            'White-label reports',
            'Dedicated support',
            'Custom integrations',
            'SLA guarantee',
            'Advanced security',
            'Custom data retention',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
]

export default function PricingPage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-background pt-24 md:pt-36">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="text-center">
                        <h1 className="text-foreground text-5xl font-semibold md:text-6xl lg:text-7xl">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
                            Choose the perfect plan for your website. All plans include a 14-day free trial.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl border bg-[#1d1f23] p-8 ${
                                    plan.popular
                                        ? 'border-white/20 ring-2 ring-white/10'
                                        : 'border-white/5'
                                }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-foreground text-background rounded-full px-4 py-1 text-sm font-medium">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-foreground text-2xl font-semibold">{plan.name}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>
                                    <div className="mt-6 flex items-baseline gap-1">
                                        <span className="text-foreground text-5xl font-bold">{plan.price}</span>
                                        {plan.period && (
                                            <span className="text-muted-foreground text-lg">{plan.period}</span>
                                        )}
                                    </div>
                                </div>

                                <ul className="mb-8 space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <Check className="text-foreground mt-0.5 size-5 flex-shrink-0" />
                                            <span className="text-foreground text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    size="lg"
                                    variant={plan.popular ? 'default' : 'outline'}
                                    className="w-full rounded-xl">
                                    <a href="#link">{plan.cta}</a>
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground text-sm">
                            All plans include SSL monitoring, broken link detection, and basic analytics.
                            <br />
                            Need something custom? <a href="#link" className="text-foreground underline">Contact our sales team</a>.
                        </p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
