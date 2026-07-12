import { useRef, useState } from 'react'
import {
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    type MotionValue,
} from 'motion/react'
import CountUp from './count-up'
import {
    FileText,
    FolderTree,
    Gauge,
    LayoutDashboard,
    Link2,
    Map,
    Network,
    Search,
    SearchCheck,
    Shield,
} from 'lucide-react'

/** Crawl Discovery line chart that draws itself as the section scrolls into view. */
function CrawlChart({ progress }: { progress: MotionValue<number> }) {
    const reduced = useReducedMotion()

    const drawRaw = useTransform(progress, [0.08, 0.45], [0, 1], { clamp: true })
    const draw = useSpring(drawRaw, { stiffness: 90, damping: 24 })
    const pathLength = reduced ? 1 : draw
    const dotOpacity = useTransform(progress, [0.42, 0.48], [0, 1])
    const areaOpacity = useTransform(progress, [0.2, 0.45], [0, 0.08])

    const totalUrls = 'M0,112 L40,104 L80,96 L120,100 L160,84 L200,70 L240,58 L280,50 L320,38'
    const internalHtml = 'M0,124 L40,120 L80,114 L120,116 L160,104 L200,96 L240,88 L280,80 L320,70'

    return (
        <div className="relative h-full w-full">
            <div className="absolute left-3 top-2 z-10 flex items-center gap-4">
                <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Crawl discovery
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-neutral-400">
                    <span className="size-1.5 rounded-full bg-[#3b82f6]" aria-hidden="true" />
                    Total URLs
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-neutral-400">
                    <span className="size-1.5 rounded-full bg-[#8b5cf6]" aria-hidden="true" />
                    Internal HTML
                </span>
            </div>

            <svg
                className="h-full w-full"
                viewBox="0 0 320 140"
                preserveAspectRatio="none"
                aria-hidden="true">
                {[35, 70, 105].map((y) => (
                    <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#262626" strokeWidth="1" />
                ))}

                <motion.path
                    d={`${totalUrls} L320,140 L0,140 Z`}
                    fill="#3b82f6"
                    style={{ opacity: reduced ? 0.08 : areaOpacity }}
                />
                <motion.path
                    d={totalUrls}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    style={{ pathLength }}
                />
                <motion.path
                    d={internalHtml}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    style={{ pathLength }}
                />
                <motion.circle
                    cx="320"
                    cy="38"
                    r="3"
                    fill="#3b82f6"
                    style={{ opacity: reduced ? 1 : dotOpacity }}
                />
                <motion.circle
                    cx="320"
                    cy="70"
                    r="3"
                    fill="#8b5cf6"
                    style={{ opacity: reduced ? 1 : dotOpacity }}
                />
            </svg>
        </div>
    )
}

/** Mini Summary dashboard: stat cards, chart, and a threshold alert that appears on scroll. */
function DashboardMock({ progress }: { progress: MotionValue<number> }) {
    const reduced = useReducedMotion()
    const alertOpacity = useTransform(progress, [0.4, 0.5], [0, 1])
    const alertY = useTransform(progress, [0.4, 0.5], [8, 0])

    const stats = [
        { label: 'Health score', value: 94, dot: 'bg-emerald-500' },
        { label: 'Total URLs', value: 128431 },
        { label: '4XX responses', value: 73, dot: 'bg-amber-500', dotAnimated: true },
    ]

    return (
        <div className="flex h-full flex-col bg-neutral-950/40">
            <div className="grid shrink-0 grid-cols-3 divide-x divide-neutral-800 border-b border-neutral-800">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-2.5 md:p-3">
                        <p className="flex items-center gap-1.5 truncate text-[10px] text-neutral-500">
                            {stat.dot &&
                                (stat.dotAnimated ? (
                                    <motion.span
                                        className={`size-1.5 shrink-0 rounded-full ${stat.dot}`}
                                        style={{ opacity: reduced ? 1 : alertOpacity }}
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <span
                                        className={`size-1.5 shrink-0 rounded-full ${stat.dot}`}
                                        aria-hidden="true"
                                    />
                                ))}
                            {stat.label}
                        </p>
                        <CountUp
                            value={stat.value}
                            className="mt-1 block text-base font-semibold tabular-nums text-neutral-100 md:text-lg"
                        />
                    </div>
                ))}
            </div>

            <div className="relative min-h-0 flex-1 pt-6">
                <CrawlChart progress={progress} />

                <motion.div
                    className="absolute bottom-3 right-3 flex items-center gap-2 border border-neutral-800 bg-neutral-900 px-3 py-2"
                    style={reduced ? undefined : { opacity: alertOpacity, y: alertY }}>
                    <span className="size-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                    <span className="text-[10px] text-neutral-300">
                        4XX Responses rose above 50 — now{' '}
                        <span className="font-semibold tabular-nums">73</span>
                    </span>
                </motion.div>
            </div>
        </div>
    )
}

const sidebarSections = [
    { label: 'Summary', icon: LayoutDashboard },
    { label: 'Search Performance', icon: Search, count: '12,847' },
    { label: 'Response Codes', icon: Network, count: '38' },
    { label: 'Indexability', icon: SearchCheck, count: '89,204' },
    { label: 'Site Structure', icon: FolderTree },
    { label: 'On-Page', icon: FileText, count: '412' },
    { label: 'PageSpeed', icon: Gauge, count: '62%' },
    { label: 'Security', icon: Shield, count: '214' },
    { label: 'Sitemaps', icon: Map },
]

/** Mock sidebar where the active section follows the page scroll. */
function SidebarMock({ progress }: { progress: MotionValue<number> }) {
    const reduced = useReducedMotion()
    const [activeIndex, setActiveIndex] = useState(0)

    useMotionValueEvent(progress, 'change', (v) => {
        const idx = Math.min(
            sidebarSections.length - 1,
            Math.max(0, Math.floor(((v - 0.12) / 0.68) * sidebarSections.length)),
        )
        setActiveIndex((prev) => (prev === idx ? prev : idx))
    })

    const index = reduced ? 0 : activeIndex

    return (
        <div className="flex h-full flex-col bg-neutral-950/40">
            <div className="shrink-0 border-b border-neutral-800 p-2">
                <div className="flex items-center gap-2 border border-neutral-800 bg-neutral-900 px-2 py-1.5">
                    <Search className="size-3 text-neutral-600" aria-hidden="true" />
                    <span className="flex-1 text-[11px] text-neutral-500">Search sections…</span>
                    <span className="border border-neutral-700 px-1 text-[10px] text-neutral-500">
                        ⌘K
                    </span>
                </div>
            </div>

            <div className="relative p-2">
                <motion.div
                    className="absolute left-2 right-2 h-7 bg-neutral-800/70"
                    initial={false}
                    animate={{ y: index * 28 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    aria-hidden="true"
                />
                {sidebarSections.map((section, i) => {
                    const active = i === index
                    return (
                        <div
                            key={section.label}
                            className="relative flex h-7 items-center gap-2 px-2">
                            <section.icon
                                className={`size-3.5 shrink-0 transition-colors duration-300 ${
                                    active ? 'text-neutral-300' : 'text-neutral-600'
                                }`}
                                aria-hidden="true"
                            />
                            <span
                                className={`flex-1 truncate text-xs transition-colors duration-300 ${
                                    active ? 'text-neutral-100' : 'text-neutral-500'
                                }`}>
                                {section.label}
                            </span>
                            {section.count && (
                                <span
                                    className={`text-[10px] tabular-nums transition-opacity duration-300 ${
                                        active ? 'text-neutral-400 opacity-100' : 'opacity-0'
                                    }`}>
                                    {section.count}
                                </span>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    return (
        <section id="features" className="border-b border-neutral-800 py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl">
                        Everything your crawler reports, visualized
                    </h2>
                    <p className="mt-4 max-w-xl text-base text-neutral-400 sm:text-lg">
                        Turn crawl data into clear reports for indexability, performance, and on-page issues.
                    </p>
                </div>

                <div
                    ref={sectionRef}
                    className="mt-12 grid border border-neutral-800 sm:grid-cols-5 sm:divide-x sm:divide-neutral-800 max-sm:divide-y max-sm:divide-neutral-800">
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
                                <DashboardMock progress={scrollYProgress} />
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
                                <SidebarMock progress={scrollYProgress} />
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
