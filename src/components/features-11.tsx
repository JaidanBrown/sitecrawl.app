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

type ChartPoint = { x: number; y: number }

const totalUrlPoints: ChartPoint[] = [
    { x: 0, y: 112 },
    { x: 40, y: 104 },
    { x: 80, y: 96 },
    { x: 120, y: 100 },
    { x: 160, y: 84 },
    { x: 200, y: 70 },
    { x: 240, y: 58 },
    { x: 280, y: 50 },
    { x: 320, y: 38 },
]

const internalHtmlPoints: ChartPoint[] = [
    { x: 0, y: 124 },
    { x: 40, y: 120 },
    { x: 80, y: 114 },
    { x: 120, y: 116 },
    { x: 160, y: 104 },
    { x: 200, y: 96 },
    { x: 240, y: 88 },
    { x: 280, y: 80 },
    { x: 320, y: 70 },
]

function pointsToPath(points: ChartPoint[]): string {
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
}

/** Position along a polyline at t in [0, 1], weighted by segment length. */
function pointAtProgress(points: ChartPoint[], t: number): ChartPoint {
    if (points.length === 0) return { x: 0, y: 0 }
    if (points.length === 1 || t <= 0) return points[0]
    if (t >= 1) return points[points.length - 1]

    const lengths: number[] = []
    let total = 0
    for (let i = 1; i < points.length; i++) {
        const dx = points[i].x - points[i - 1].x
        const dy = points[i].y - points[i - 1].y
        const len = Math.hypot(dx, dy)
        lengths.push(len)
        total += len
    }

    let remaining = t * total
    for (let i = 0; i < lengths.length; i++) {
        const len = lengths[i]
        if (remaining <= len || i === lengths.length - 1) {
            const localT = len === 0 ? 0 : Math.min(1, remaining / len)
            const a = points[i]
            const b = points[i + 1]
            return {
                x: a.x + (b.x - a.x) * localT,
                y: a.y + (b.y - a.y) * localT,
            }
        }
        remaining -= len
    }

    return points[points.length - 1]
}

/** Crawl Discovery line chart that draws itself as the section scrolls into view. */
function CrawlChart({ progress }: { progress: MotionValue<number> }) {
    const reduced = useReducedMotion()

    const drawRaw = useTransform(progress, [0.08, 0.45], [0, 1], { clamp: true })
    // Higher damping avoids overshoot past 1, which makes stroke-dash look split.
    const drawSpring = useSpring(drawRaw, { stiffness: 100, damping: 28, restDelta: 0.001 })
    const draw = useTransform(drawSpring, (v) => Math.min(1, Math.max(0, v)))
    const pathLength = reduced ? 1 : draw
    const areaOpacity = useTransform(draw, [0.15, 1], [0, 0.08])

    const totalTipX = useTransform(draw, (t) => pointAtProgress(totalUrlPoints, t).x)
    const totalTipY = useTransform(draw, (t) => pointAtProgress(totalUrlPoints, t).y)
    const htmlTipX = useTransform(draw, (t) => pointAtProgress(internalHtmlPoints, t).x)
    const htmlTipY = useTransform(draw, (t) => pointAtProgress(internalHtmlPoints, t).y)
    const tipOpacity = useTransform(draw, [0.02, 0.08], [0, 1])

    const totalUrls = pointsToPath(totalUrlPoints)
    const internalHtml = pointsToPath(internalHtmlPoints)

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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    style={{ pathLength }}
                />
                <motion.path
                    d={internalHtml}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    style={{ pathLength }}
                />
                {/* Dots track the drawing tip so they stay on the line (not parked at the end). */}
                <motion.circle
                    cx={reduced ? 320 : totalTipX}
                    cy={reduced ? 38 : totalTipY}
                    r="3"
                    fill="#3b82f6"
                    style={{ opacity: reduced ? 1 : tipOpacity }}
                />
                <motion.circle
                    cx={reduced ? 320 : htmlTipX}
                    cy={reduced ? 70 : htmlTipY}
                    r="3"
                    fill="#8b5cf6"
                    style={{ opacity: reduced ? 1 : tipOpacity }}
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
