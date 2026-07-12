import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import FooterSection from './footer'
import FAQs from './faqs'
import FeaturesSection from './features-6'
import Features11 from './features-11'
import ScrollingMetrics from './scrolling-metrics'

function StatementSection() {
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
            </div>

            <ScrollingMetrics />
        </section>
    )
}

function CTASection() {
    return (
        <section className="border-b border-neutral-800 py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border border-neutral-800 bg-neutral-900/50 p-8 md:p-16">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl">
                        Ready to fix your website issues?
                    </h2>
                    <p className="mt-4 max-w-xl text-base text-neutral-400 sm:text-lg">
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
            <main>
                <section className="border-b border-neutral-800">
                    <div className="pt-32 md:pt-44">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6">
                            <div className="grid gap-10 md:grid-cols-2 md:items-end md:gap-8">
                                <div className="text-left">
                                    <a
                                        href="/changelog"
                                        className="group inline-flex w-fit items-center gap-2 border border-neutral-800 bg-neutral-900/50 py-1 pl-3 pr-2 hover:border-neutral-700">
                                        <span className="size-2 rounded-full bg-emerald-500"></span>
                                        <span className="text-xs text-neutral-400 group-hover:text-neutral-200">
                                            Version 1.0 is now available
                                        </span>
                                        <ArrowRight className="size-3.5 text-neutral-500" />
                                    </a>

                                    <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
                                        Comprehensive website analysis and SEO insights
                                    </h1>
                                    <p className="mt-6 max-w-xl text-balance text-base text-neutral-400 sm:text-lg">
                                        Track site health, performance, and SEO across every page. Clear
                                        reports and actionable insights, all in one dashboard.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3 md:ml-auto">
                                    <a
                                        href="https://dashboard.sitecrawl.app"
                                        className="w-full bg-neutral-100 px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-white">
                                        Start for free
                                    </a>
                                    <a
                                        href="#features"
                                        className="w-full border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-center text-sm text-neutral-400 hover:border-neutral-700 hover:text-neutral-200">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 md:mt-24">
                            <div className="border border-neutral-800">
                                <video
                                    className="w-full"
                                    src="/dashboard/sitecrawl-demo.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    aria-label="SiteCrawl dashboard demo"
                                    onEnded={(e) => {
                                        e.currentTarget.currentTime = 0
                                        void e.currentTarget.play()
                                    }}
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
