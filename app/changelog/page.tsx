import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

const changelogEntries = [
    {
        version: '2.1.0',
        date: 'November 15, 2024',
        type: 'New Features',
        changes: [
            'Advanced SEO analysis with keyword density tracking',
            'Mobile-first indexing insights',
            'Automated sitemap generation',
            'Custom crawl scheduling',
        ],
    },
    {
        version: '2.0.5',
        date: 'October 28, 2024',
        type: 'Improvements',
        changes: [
            'Improved crawl speed by 40%',
            'Enhanced broken link detection',
            'Better handling of JavaScript-heavy sites',
            'Updated dashboard UI with dark mode support',
        ],
    },
    {
        version: '2.0.0',
        date: 'October 1, 2024',
        type: 'Major Release',
        changes: [
            'Complete platform redesign',
            'Real-time crawl monitoring',
            'Team collaboration features',
            'API v2 with enhanced endpoints',
            'Integration with Google Search Console',
            'Custom report templates',
        ],
    },
    {
        version: '1.9.2',
        date: 'September 15, 2024',
        type: 'Bug Fixes',
        changes: [
            'Fixed issue with crawling large sitemaps',
            'Resolved duplicate content detection errors',
            'Improved memory usage during crawls',
            'Fixed email notification delivery issues',
        ],
    },
]

export default function ChangelogPage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-background pt-24 md:pt-36">
                <div className="mx-auto max-w-4xl px-6 py-12">
                    <div className="mb-16 text-center">
                        <h1 className="text-foreground text-5xl font-semibold md:text-6xl lg:text-7xl">
                            Changelog
                        </h1>
                        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
                            Stay updated with the latest features, improvements, and bug fixes.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {changelogEntries.map((entry, index) => (
                            <div
                                key={index}
                                className="border-l-2 border-white/10 pl-8 relative">
                                {/* Timeline dot */}
                                <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-foreground ring-4 ring-background" />

                                <div className="mb-2 flex flex-wrap items-center gap-3">
                                    <h2 className="text-foreground text-2xl font-semibold">
                                        Version {entry.version}
                                    </h2>
                                    <span className="bg-foreground/10 text-foreground rounded-full px-3 py-1 text-xs font-medium">
                                        {entry.type}
                                    </span>
                                </div>

                                <p className="text-muted-foreground mb-4 text-sm">{entry.date}</p>

                                <ul className="space-y-2">
                                    {entry.changes.map((change, changeIndex) => (
                                        <li
                                            key={changeIndex}
                                            className="text-foreground flex items-start gap-2">
                                            <span className="text-muted-foreground mt-1.5">•</span>
                                            <span>{change}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 rounded-3xl border border-white/5 bg-[#1d1f23] p-8 text-center">
                        <h3 className="text-foreground text-xl font-semibold">
                            Want to request a feature?
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            We're always looking to improve SiteCrawl. Let us know what you'd like to see next.
                        </p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
