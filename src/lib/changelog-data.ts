export interface ChangelogChange {
    scope?: string
    description: string
}

export interface ChangelogEntry {
    version: string
    date: string
    title: string
    summary: string
    sections: {
        title: string
        changes: ChangelogChange[]
    }[]
}

export const changelog: ChangelogEntry[] = [
    {
        version: '1.0',
        date: 'July 12, 2026',
        title: 'Version 1.0',
        summary:
            'SiteCrawl is live. Monitor your sites, spot technical SEO issues early, and see how search performance changes over time — all in one place.',
        sections: [
            {
                title: 'Get started with your team',
                changes: [
                    { description: 'Invite your team and manage sites under one organization' },
                    { description: 'Add websites by domain and switch between them instantly' },
                    { description: 'Jump to any project or report with quick search (⌘K)' },
                ],
            },
            {
                title: 'See site health at a glance',
                changes: [
                    { description: 'Get an overall health score so you know what’s fine and what needs attention' },
                    { description: 'Track key numbers like total URLs, redirects, errors, and indexable pages' },
                    { description: 'Watch trends over time with clear charts for discovery and indexability' },
                ],
            },
            {
                title: 'Connect Google Search Console',
                changes: [
                    { description: 'Link Search Console to see clicks, impressions, CTR, and average position' },
                    { description: 'Compare performance against previous periods to spot wins and drops' },
                    { description: 'Review your top queries and pages, plus daily and last-24-hour trends' },
                ],
            },
            {
                title: 'Find and fix technical issues',
                changes: [
                    { description: 'Response codes — see success, redirects, client errors, and server errors clearly' },
                    { description: 'Indexability — understand what’s indexable, blocked, or missing a canonical' },
                    { description: 'On-page SEO — catch title, meta description, heading, and image problems' },
                    { description: 'Content quality — surface duplicates, thin content, and mobile usability issues' },
                    { description: 'Site structure — review crawl depth, top linked pages, and weak internal links' },
                    { description: 'PageSpeed — track Core Web Vitals and opportunities to load faster' },
                    { description: 'Security — check HTTPS coverage, mixed content, and common security gaps' },
                    { description: 'Hreflang & sitemaps — validate international targeting and sitemap coverage' },
                ],
            },
            {
                title: 'Stay on top of problems',
                changes: [
                    { description: 'Set thresholds on any metric so you’re notified when something crosses the line' },
                    { description: 'Get alerts automatically after each crawl when a threshold is breached' },
                    { description: 'Review recent alerts from the dashboard without digging through reports' },
                ],
            },
            {
                title: 'Compare crawls over time',
                changes: [
                    { description: 'Filter by last 7, 30, or 90 days — or pick a custom date range' },
                    { description: 'Focus on the latest crawl in a period, or review how health has changed over time' },
                ],
            },
            {
                title: 'Plans that scale with you',
                changes: [
                    { description: 'Start free, then upgrade to Starter or Agency as you add more sites' },
                    { description: 'See your plan and project usage in the sidebar so limits never surprise you' },
                ],
            },
        ],
    },
]
