import { Search, BarChart3, Bell, FileCheck } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-foreground text-4xl font-medium md:text-5xl lg:text-6xl" style={{ lineHeight: '70px', letterSpacing: '-0.05em' }}>Everything you need to optimize your website</h2>
                    <p className="text-muted-foreground max-w-sm sm:ml-auto">Powerful tools and insights that help you identify and fix technical issues before they impact your search rankings.</p>
                </div>
                <div className="px-3 pt-3 md:-mx-8">
                    <div className="aspect-88/36 mask-b-from-75% mask-b-to-95% relative">
                        <Image
                            src="/dashboard/dashboard-2.png"
                            className="absolute inset-0 z-10"
                            alt="sitecrawl dashboard"
                            width={2797}
                            height={1137}
                        />
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Search className="size-4 text-foreground" />
                            <h3 className="text-foreground text-sm font-medium">Deep Crawling</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Scan every page, link, and resource to uncover hidden issues.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-4 text-foreground" />
                            <h3 className="text-foreground text-sm font-medium">SEO Analytics</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Track rankings, monitor performance, and measure improvements.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Bell className="size-4 text-foreground" />
                            <h3 className="text-foreground text-sm font-medium">Smart Alerts</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Get notified when critical issues are detected on your site.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FileCheck className="size-4 text-foreground" />
                            <h3 className="text-foreground text-sm font-medium">Detailed Reports</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Export comprehensive reports to share with your team.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
