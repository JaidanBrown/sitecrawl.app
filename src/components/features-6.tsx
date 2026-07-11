import { Search, BarChart3, Bell, FileText } from 'lucide-react'

const features = [
    {
        icon: Search,
        title: 'Deep crawling',
        description: 'Scan every page, link, and resource to uncover hidden issues.',
    },
    {
        icon: BarChart3,
        title: 'SEO analytics',
        description: 'Track rankings, monitor performance, and measure improvements.',
    },
    {
        icon: Bell,
        title: 'Smart alerts',
        description: 'Get notified when critical issues are detected on your site.',
    },
    {
        icon: FileText,
        title: 'Detailed reports',
        description: 'Export comprehensive reports to share with your team.',
    },
]

export default function FeaturesSection() {
    return (
        <section className="border-b border-neutral-800 py-20 md:py-32">
            <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
                <div className="grid items-end gap-4 md:grid-cols-2 md:gap-12">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Platform</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
                            Everything you need to optimize your website
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm text-neutral-400 md:ml-auto">
                        Tools and insights that help you identify and fix technical issues
                        before they impact your search rankings.
                    </p>
                </div>

                <div className="border border-neutral-800">
                    <img
                        src="/dashboard/dashboard-2.png"
                        className="w-full"
                        alt="SiteCrawl dashboard"
                        width={2797}
                        height={1137}
                    />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="border border-neutral-800 bg-neutral-900/50 p-4">
                            <div className="flex items-center gap-2">
                                <feature.icon className="size-4 text-neutral-500" />
                                <h3 className="text-sm font-medium text-neutral-100">{feature.title}</h3>
                            </div>
                            <p className="mt-2 text-xs text-neutral-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
