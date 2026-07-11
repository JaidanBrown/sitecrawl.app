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

const typeDotColors: Record<string, string> = {
    feat: 'bg-emerald-500',
    fix: 'bg-amber-500',
    perf: 'bg-sky-500',
    refactor: 'bg-violet-500',
}

export default function ChangelogPage({ entries }: ChangelogPageProps) {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-32 md:pt-44">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                    <div className="mb-12">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Updates</p>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
                            Changelog
                        </h1>
                        <p className="mt-3 max-w-xl text-sm text-neutral-400">
                            The latest features, improvements, and bug fixes.
                        </p>
                    </div>

                    <div className="divide-y divide-neutral-800 border-t border-neutral-800">
                        {entries.length === 0 ? (
                            <div className="py-12">
                                <p className="text-sm text-neutral-500">No changelog entries yet. Check back soon.</p>
                            </div>
                        ) : (
                            entries.map((entry, index) => (
                                <div
                                    key={`${entry.date}-${entry.type}-${index}`}
                                    className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
                                    <div>
                                        <p className="text-xs text-neutral-500">Week of {entry.date}</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className={`size-2 rounded-full ${typeDotColors[entry.type] ?? 'bg-neutral-500'}`}></span>
                                            <span className="text-sm font-medium text-neutral-100">{entry.typeLabel}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {entry.changes.map((change) => (
                                            <li
                                                key={change.sha}
                                                className="text-sm text-neutral-400">
                                                {change.scope && (
                                                    <span className="font-mono text-xs text-neutral-500">({change.scope}) </span>
                                                )}
                                                {change.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-12 border border-neutral-800 bg-neutral-900/50 p-6">
                        <h3 className="text-sm font-medium text-neutral-100">
                            Want to request a feature?
                        </h3>
                        <p className="mt-0.5 text-xs text-neutral-500">
                            We're always looking to improve SiteCrawl. Let us know what you'd like to see next.{' '}
                            <a href="mailto:hello@sitecrawl.app" className="text-neutral-300 underline underline-offset-4 hover:no-underline">
                                Contact us
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
