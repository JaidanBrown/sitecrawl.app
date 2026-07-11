import { Gauge, Link2, SearchCheck, Shield } from 'lucide-react'

export default function Features() {
    return (
        <section id="features" className="border-b border-neutral-800 py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="max-w-2xl">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Features</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
                        Everything your crawler reports, visualized
                    </h2>
                </div>

                <div className="mt-12 grid border border-neutral-800 sm:grid-cols-5 sm:divide-x sm:divide-neutral-800 max-sm:divide-y max-sm:divide-neutral-800">
                    <div className="group flex flex-col overflow-hidden bg-neutral-900/50 sm:col-span-3">
                        <div className="p-6 md:p-8">
                            <h3 className="text-sm font-medium text-neutral-100">Full crawl reporting</h3>
                            <p className="mt-0.5 max-w-sm text-xs text-neutral-500">
                                Crawl servers push reports via the ingest API. Indexability, response
                                codes, site structure, and on-page issues in one dashboard.
                            </p>
                        </div>
                        <div className="mt-auto pl-6 md:pl-8">
                            <div className="h-48 overflow-hidden border-l border-t border-neutral-800 md:h-72">
                                <img
                                    className="h-full w-full object-cover object-left-top"
                                    src="/dashboard/dashboard-2.png"
                                    alt="SiteCrawl crawl report"
                                    width={1065}
                                    height={669}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="group flex flex-col overflow-hidden bg-neutral-900/50 sm:col-span-2">
                        <div className="p-6 md:p-8">
                            <h3 className="text-sm font-medium text-neutral-100">Simple UI</h3>
                            <p className="mt-0.5 text-xs text-neutral-500">
                                Instantly locate what you need. Every report is one click away.
                            </p>
                        </div>
                        <div className="mt-auto pl-6 md:pl-8">
                            <div className="h-48 overflow-hidden border-l border-t border-neutral-800 md:h-72">
                                <img
                                    className="h-full w-full object-cover object-left-top"
                                    src="/dashboard/sidebar-1.png"
                                    alt="SiteCrawl sidebar navigation"
                                    width={2135}
                                    height={962}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-x border-b border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
                    <h3 className="text-sm font-medium text-neutral-100">Every report in one place</h3>
                    <p className="mt-0.5 max-w-sm text-xs text-neutral-500">
                        Response codes, links, indexability, PageSpeed, and security — each with
                        its own dedicated view.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                        <div className="flex items-center gap-2 border border-neutral-800 p-3">
                            <SearchCheck className="size-4 text-neutral-500" />
                            <span className="text-xs text-neutral-400">Indexability</span>
                        </div>
                        <div className="flex items-center gap-2 border border-neutral-800 p-3">
                            <Link2 className="size-4 text-neutral-500" />
                            <span className="text-xs text-neutral-400">Links</span>
                        </div>
                        <div className="flex items-center gap-2 border border-neutral-800 p-3">
                            <Gauge className="size-4 text-neutral-500" />
                            <span className="text-xs text-neutral-400">PageSpeed</span>
                        </div>
                        <div className="flex items-center gap-2 border border-neutral-800 p-3">
                            <Shield className="size-4 text-neutral-500" />
                            <span className="text-xs text-neutral-400">Security</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
