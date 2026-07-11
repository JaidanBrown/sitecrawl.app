export default function FAQs() {
    return (
        <section id="faq" className="scroll-py-16 border-b border-neutral-800 py-20 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-y-12 lg:[grid-template-columns:1fr_auto]">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">FAQ</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
                            Frequently asked questions
                        </h2>
                        <p className="mt-3 text-sm text-neutral-400">Everything you need to know about SiteCrawl.</p>
                    </div>

                    <div className="divide-y divide-neutral-800 sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="text-sm font-medium text-neutral-100">How does SiteCrawl work?</h3>
                            <p className="mt-3 text-sm text-neutral-400">SiteCrawl automatically scans your entire website, analyzing every page for technical issues, SEO problems, and performance bottlenecks.</p>

                            <ol className="mt-3 list-outside list-decimal space-y-2 pl-4">
                                <li className="text-sm text-neutral-400">Enter your website URL and start a crawl</li>
                                <li className="text-sm text-neutral-400">Our crawler analyzes every page on your site</li>
                                <li className="text-sm text-neutral-400">Get a detailed report with actionable insights</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="text-sm font-medium text-neutral-100">What issues does SiteCrawl detect?</h3>
                            <p className="mt-3 text-sm text-neutral-400">SiteCrawl identifies broken links, missing meta tags, slow loading pages, duplicate content, mobile responsiveness issues, and over 100 other technical SEO problems.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-sm font-medium text-neutral-100">How many pages can I crawl?</h3>
                            <p className="mt-3 text-sm text-neutral-400">It depends on your plan. Start free on a small site and upgrade as you grow.</p>
                            <ul className="mt-3 list-outside list-disc space-y-2 pl-4">
                                <li className="text-sm tabular-nums text-neutral-400">Free: 1 URL, 500 pages</li>
                                <li className="text-sm tabular-nums text-neutral-400">Starter: 1 URL, 2,500 pages</li>
                                <li className="text-sm tabular-nums text-neutral-400">Professional: 3 URLs, 20,000 pages each</li>
                                <li className="text-sm tabular-nums text-neutral-400">Agency: 10 URLs, 50,000 pages each</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="text-sm font-medium text-neutral-100">Can I cancel my subscription anytime?</h3>
                            <p className="mt-3 text-sm text-neutral-400">Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
