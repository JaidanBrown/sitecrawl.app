import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

interface ParsedCommit {
    type: string
    scope?: string
    description: string
    date: string
    sha: string
}

interface ChangelogEntry {
    date: string
    type: string
    typeLabel: string
    changes: ParsedCommit[]
}

interface ChangelogPageProps {
    entries: ChangelogEntry[]
}

export default function ChangelogPage({ entries }: ChangelogPageProps) {
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
                        {entries.length === 0 ? (
                            <div className="text-center text-muted-foreground py-12">
                                <p>No changelog entries yet. Check back soon!</p>
                            </div>
                        ) : (
                            entries.map((entry, index) => (
                                <div
                                    key={`${entry.date}-${entry.type}-${index}`}
                                    className="border-l-2 border-white/10 pl-8 relative">
                                    <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-foreground ring-4 ring-background" />

                                    <div className="mb-2 flex flex-wrap items-center gap-3">
                                        <h2 className="text-foreground text-2xl font-semibold">
                                            {entry.typeLabel}
                                        </h2>
                                        <span className="bg-foreground/10 text-foreground rounded-full px-3 py-1 text-xs font-medium capitalize">
                                            {entry.type}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground mb-4 text-sm">Week of {entry.date}</p>

                                    <ul className="space-y-2">
                                        {entry.changes.map((change) => (
                                            <li
                                                key={change.sha}
                                                className="text-foreground flex items-start gap-2">
                                                <span className="text-muted-foreground mt-1.5">•</span>
                                                <span>
                                                    {change.scope && (
                                                        <span className="text-muted-foreground">({change.scope}) </span>
                                                    )}
                                                    {change.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-16 rounded-3xl border border-white/5 bg-[#1d1f23] p-8 text-center">
                        <h3 className="text-foreground text-xl font-semibold">
                            Want to request a feature?
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            We're always looking to improve SiteCrawl. Let us know what you'd like to see next. <a href="mailto:hello@sitecrawl.app" className="text-foreground underline">Contact our sales team</a>.
                        </p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
