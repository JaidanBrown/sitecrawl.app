export default function FAQs() {
    return (
        <section className="bg-white text-black scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p className="text-gray-600">Everything you need to know about SiteCrawl</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">How does SiteCrawl work?</h3>
                            <p className="text-gray-600 mt-4">SiteCrawl automatically scans your entire website, analyzing every page for technical issues, SEO problems, and performance bottlenecks.</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-gray-600 mt-4">Enter your website URL and start a crawl</li>
                                <li className="text-gray-600 mt-4">Our crawler analyzes every page on your site</li>
                                <li className="text-gray-600 mt-4">Get a detailed report with actionable insights</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">What issues does SiteCrawl detect?</h3>
                            <p className="text-gray-600 mt-4">SiteCrawl identifies broken links, missing meta tags, slow loading pages, duplicate content, mobile responsiveness issues, and over 100 other technical SEO problems.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How many pages can I crawl?</h3>
                            <p className="text-gray-600 my-4">It depends on your plan. Our plans range from 1,000 pages per month for small sites to unlimited crawls for enterprise customers.</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-gray-600">Starter: 1,000 pages/month</li>
                                <li className="text-gray-600">Professional: 10,000 pages/month</li>
                                <li className="text-gray-600">Enterprise: Unlimited</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Can I cancel my subscription anytime?</h3>
                            <p className="text-gray-600 mt-4">Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
