import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import FooterSection from './footer'
import FAQs from './faqs'
import FeaturesSection from './features-6'
import Features11 from './features-11'

function StatementSection() {
    const stats = [
        { label: 'URLs crawled', value: '128,431' },
        { label: 'Issues detected', value: '12,847' },
        { label: 'Response codes tracked', value: '38' },
        { label: 'Reports generated', value: '4,209' },
    ]

    return (
        <section className="border-b border-neutral-800 py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="max-w-3xl space-y-6">
                    <p className="text-xl font-semibold leading-snug tracking-tight text-neutral-500 md:text-2xl">
                        Every website has hidden problems that slow it down and hurt its{' '}
                        <span className="text-neutral-100">search rankings</span>. Missing meta tags,
                        broken links, slow loading times — these issues stack up and cost you traffic.
                    </p>
                    <p className="text-xl font-semibold leading-snug tracking-tight text-neutral-500 md:text-2xl">
                        <span className="text-neutral-100">SiteCrawl</span> scans your entire site,
                        identifies every <span className="text-neutral-100">technical issue</span>, and
                        gives you a clear roadmap to fix them.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-2 divide-x divide-y divide-neutral-800 border border-neutral-800 lg:grid-cols-4 lg:divide-y-0">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-neutral-900/50 p-4">
                            <p className="text-xs text-neutral-400">{stat.label}</p>
                            <p className="mt-2 text-2xl font-semibold tabular-nums text-neutral-100">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="border-b border-neutral-800 py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border border-neutral-800 bg-neutral-900/50 p-8 md:p-16">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Get started</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
                        Ready to fix your website issues?
                    </h2>
                    <p className="mt-3 max-w-xl text-sm text-neutral-400">
                        Start monitoring for free. No credit card required.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://dashboard.sitecrawl.app"
                            className="bg-neutral-100 px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-white">
                            Start for free
                        </a>
                        <a
                            href="https://tidycal.com/sitecrawl/demo"
                            className="border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-center text-sm text-neutral-400 hover:border-neutral-700 hover:text-neutral-200">
                            Schedule demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="border-b border-neutral-800">
                    <div className="pt-32 md:pt-44">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6">
                            <div className="text-center">
                                <a
                                    href="/changelog"
                                    className="group mx-auto inline-flex w-fit items-center gap-2 border border-neutral-800 bg-neutral-900/50 py-1 pl-3 pr-2 hover:border-neutral-700">
                                    <span className="size-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-xs text-neutral-400 group-hover:text-neutral-200">
                                        Version 1.0 is now available
                                    </span>
                                    <ArrowRight className="size-3.5 text-neutral-500" />
                                </a>

                                <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
                                    Comprehensive website analysis and SEO insights
                                </h1>
                                <p className="mx-auto mt-6 max-w-xl text-balance text-base text-neutral-400 sm:text-lg">
                                    Push crawl reports via the ingest API. See indexability, response
                                    codes, and Core Web Vitals in one place.
                                </p>

                                <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
                                    <a
                                        href="https://dashboard.sitecrawl.app"
                                        className="bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white">
                                        Start for free
                                    </a>
                                    <a
                                        href="#features"
                                        className="border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-sm text-neutral-400 hover:border-neutral-700 hover:text-neutral-200">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 md:mt-24">
                            <div className="border border-neutral-800">
                                <img
                                    className="aspect-15/8 w-full"
                                    src="/dashboard/dashboard-1.jpg"
                                    alt="SiteCrawl dashboard"
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>

                        <div className="h-20 md:h-32" />
                    </div>
                </section>

                <StatementSection />

                <Features11 />

                <FeaturesSection />

                <FAQs />
                <CTASection />
                <FooterSection />
            </main>
        </>
    )
}
