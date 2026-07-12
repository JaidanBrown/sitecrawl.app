import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import type { ChangelogEntry } from '@/lib/changelog-data'

interface ChangelogPageProps {
    entries: ChangelogEntry[]
}

export default function ChangelogPage({ entries }: ChangelogPageProps) {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-32 md:pt-44">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                    <div className="mb-12">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                            Updates
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl">
                            What’s new
                        </h1>
                        <p className="mt-4 max-w-xl text-base text-neutral-400 sm:text-lg">
                            Product updates and everything included in SiteCrawl today.
                        </p>
                    </div>

                    <div className="divide-y divide-neutral-800 border-t border-neutral-800">
                        {entries.length === 0 ? (
                            <div className="py-12">
                                <p className="text-sm text-neutral-500">
                                    No changelog entries yet. Check back soon.
                                </p>
                            </div>
                        ) : (
                            entries.map((entry) => (
                                <article key={entry.version} className="py-10">
                                    <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-10">
                                        <div>
                                            <p className="text-xs text-neutral-500">{entry.date}</p>
                                            <div className="mt-2 flex items-center gap-2">
                                                <span className="size-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-sm font-medium text-neutral-100">
                                                    {entry.title}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <p className="max-w-2xl text-sm text-neutral-400">
                                                {entry.summary}
                                            </p>

                                            {entry.sections.map((section) => (
                                                <div key={section.title}>
                                                    <h2 className="text-sm font-medium text-neutral-100">
                                                        {section.title}
                                                    </h2>
                                                    <ul className="mt-3 space-y-2">
                                                        {section.changes.map((change) => (
                                                            <li
                                                                key={`${section.title}-${change.description}`}
                                                                className="text-sm text-neutral-400">
                                                                {change.description}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>

                    <div className="mt-12 border border-neutral-800 bg-neutral-900/50 p-6">
                        <h3 className="text-sm font-medium text-neutral-100">
                            Want to request a feature?
                        </h3>
                        <p className="mt-0.5 text-xs text-neutral-500">
                            We're always looking to improve SiteCrawl. Let us know what you'd like to
                            see next.{' '}
                            <a
                                href="mailto:hello@sitecrawl.app"
                                className="text-neutral-300 underline underline-offset-4 hover:no-underline">
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
