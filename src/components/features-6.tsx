import { useRef } from 'react'
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    type MotionValue,
} from 'motion/react'
import { Search, BarChart3, Bell, FileText } from 'lucide-react'
import CountUp from './count-up'

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

const donutSegments = [
    { label: '2XX Success', value: 78, color: '#22c55e' },
    { label: '3XX Redirects', value: 12, color: '#f59e0b' },
    { label: '4XX Client Errors', value: 7, color: '#ef4444' },
    { label: '5XX Server Errors', value: 3, color: '#8b5cf6' },
]

/** Response-code donut whose segments sweep in as the section scrolls into view. */
function DonutSegment({
    draw,
    fraction,
    offset,
    color,
}: {
    draw: MotionValue<number>
    fraction: number
    offset: number
    color: string
}) {
    const gap = 0.006
    const pathLength = useTransform(draw, (v) =>
        Math.max(0.0001, Math.min(fraction - gap, v - offset)),
    )

    return (
        <motion.circle
            cx="70"
            cy="70"
            r="56"
            fill="none"
            stroke={color}
            strokeWidth="18"
            style={{ pathLength, pathOffset: -offset }}
            transform="rotate(-90 70 70)"
        />
    )
}

function ResponseDonut({ progress }: { progress: MotionValue<number> }) {
    const reduced = useReducedMotion()
    const drawRaw = useTransform(progress, [0.12, 0.42], [0, 1], { clamp: true })
    const drawSpring = useSpring(drawRaw, { stiffness: 80, damping: 24 })
    const draw = reduced ? drawRaw : drawSpring

    let offset = 0
    const segments = donutSegments.map((seg) => {
        const s = { ...seg, fraction: seg.value / 100, offset }
        offset += seg.value / 100
        return s
    })

    return (
        <div className="flex h-full flex-col p-4 md:p-5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Response codes
            </p>
            <div className="mt-4 flex flex-1 items-center justify-center gap-5">
                <div className="relative shrink-0">
                    <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
                        <circle
                            cx="70"
                            cy="70"
                            r="56"
                            fill="none"
                            stroke="#262626"
                            strokeWidth="18"
                        />
                        {reduced
                            ? segments.map((seg) => (
                                  <circle
                                      key={seg.label}
                                      cx="70"
                                      cy="70"
                                      r="56"
                                      fill="none"
                                      stroke={seg.color}
                                      strokeWidth="18"
                                      pathLength={1}
                                      strokeDasharray={`${seg.fraction - 0.006} 1`}
                                      strokeDashoffset={-seg.offset}
                                      transform="rotate(-90 70 70)"
                                  />
                              ))
                            : segments.map((seg) => (
                                  <DonutSegment
                                      key={seg.label}
                                      draw={draw}
                                      fraction={seg.fraction}
                                      offset={seg.offset}
                                      color={seg.color}
                                  />
                              ))}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <CountUp
                            value={128431}
                            className="text-xl font-semibold tabular-nums text-neutral-100"
                        />
                        <span className="text-[11px] text-neutral-500">responses</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {donutSegments.map((seg) => (
                        <div key={seg.label} className="flex items-center gap-2">
                            <span
                                className="size-2 shrink-0 rounded-full"
                                style={{ backgroundColor: seg.color }}
                                aria-hidden="true"
                            />
                            <span className="flex-1 text-xs text-neutral-400">{seg.label}</span>
                            <span className="pl-3 text-xs tabular-nums text-neutral-300">
                                {seg.value}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const depthBars = [
    { depth: '0', height: 14 },
    { depth: '1', height: 42 },
    { depth: '2', height: 88 },
    { depth: '3', height: 100 },
    { depth: '4', height: 64 },
    { depth: '5', height: 34 },
    { depth: '6', height: 18 },
    { depth: '7+', height: 8 },
]

/** Crawl-depth bar that grows from the baseline, staggered by index. */
function DepthBar({
    progress,
    height,
    index,
}: {
    progress: MotionValue<number>
    height: number
    index: number
}) {
    const start = 0.14 + index * 0.025
    const growRaw = useTransform(progress, [start, start + 0.22], [0, 1], { clamp: true })
    const grow = useSpring(growRaw, { stiffness: 120, damping: 22 })

    return (
        <div className="flex h-full w-full items-end">
            <motion.div
                className="w-full origin-bottom bg-[#3b82f6]"
                style={{ height: `${height}%`, scaleY: grow }}
            />
        </div>
    )
}

function DepthChart({ progress }: { progress: MotionValue<number> }) {
    const reduced = useReducedMotion()

    return (
        <div className="flex h-full flex-col p-4 md:p-5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Crawl depth
            </p>
            <p className="mt-0.5 text-[10px] text-neutral-600">Pages by clicks from start URL</p>
            <div className="mt-4 flex flex-1 items-end gap-2">
                {depthBars.map((bar, i) => (
                    <div key={bar.depth} className="flex h-full flex-1 flex-col gap-1.5">
                        {reduced ? (
                            <div className="flex h-full w-full items-end">
                                <div
                                    className="w-full bg-[#3b82f6]"
                                    style={{ height: `${bar.height}%` }}
                                />
                            </div>
                        ) : (
                            <DepthBar progress={progress} height={bar.height} index={i} />
                        )}
                        <span className="text-center text-[10px] tabular-nums text-neutral-500">
                            {bar.depth}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const issueRows = [
    { label: 'Missing page titles', count: 214, percent: 62 },
    { label: 'Duplicate meta descriptions', count: 89, percent: 38 },
    { label: 'Images missing alt text', count: 1432, percent: 84, breach: true },
    { label: 'Multiple H1 headings', count: 37, percent: 21 },
    { label: 'Thin content pages', count: 118, percent: 44 },
]

/** On-page issues table whose rows and percentage bars reveal on scroll. */
function IssuesTable() {
    const reduced = useReducedMotion()

    return (
        <div className="flex h-full flex-col p-4 md:p-5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                On-page issues
            </p>
            <div className="mt-4 flex flex-1 flex-col justify-center gap-3">
                {issueRows.map((row, i) => (
                    <motion.div
                        key={row.label}
                        initial={reduced ? false : { opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                        transition={{ duration: 0.3, delay: i * 0.08, ease: 'easeOut' }}>
                        <div className="flex items-baseline justify-between gap-3">
                            <span className="flex items-center gap-2 truncate text-xs text-neutral-400">
                                {row.breach && (
                                    <span
                                        className="size-2 shrink-0 rounded-full bg-amber-500"
                                        aria-hidden="true"
                                    />
                                )}
                                {row.label}
                            </span>
                            <span className="text-xs font-medium tabular-nums text-neutral-100">
                                {row.count.toLocaleString('en-US')}
                            </span>
                        </div>
                        <div className="mt-1.5 h-1 w-full bg-neutral-800">
                            <motion.div
                                className={`h-full origin-left ${
                                    row.breach ? 'bg-amber-500' : 'bg-neutral-500'
                                }`}
                                style={{ width: `${row.percent}%` }}
                                initial={reduced ? false : { scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15 + i * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

/** Full-width dashboard mock replacing the static screenshot. */
function DashboardPanel() {
    const ref = useRef<HTMLDivElement>(null)
    const reduced = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const badgeOpacity = useTransform(scrollYProgress, [0.34, 0.42], [0, 1])
    const badgeScale = useTransform(scrollYProgress, [0.34, 0.42], [0.5, 1])

    return (
        <div ref={ref} className="border border-neutral-800 bg-neutral-900/50">
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2.5 md:px-5">
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span className="font-mono text-xs text-neutral-300">example.com</span>
                    <span className="hidden text-[11px] text-neutral-600 sm:inline">
                        Last crawl 2m ago
                    </span>
                </div>
                <div className="relative">
                    <Bell className="size-4 text-neutral-500" aria-hidden="true" />
                    <motion.span
                        className="absolute -right-1.5 -top-1.5 flex size-3.5 items-center justify-center rounded-full bg-amber-500 text-[9px] font-semibold text-neutral-950"
                        style={reduced ? undefined : { opacity: badgeOpacity, scale: badgeScale }}>
                        3
                    </motion.span>
                </div>
            </div>

            <div className="grid divide-y divide-neutral-800 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                <ResponseDonut progress={scrollYProgress} />
                <DepthChart progress={scrollYProgress} />
                <IssuesTable />
            </div>
        </div>
    )
}

export default function FeaturesSection() {
    const reduced = useReducedMotion()

    return (
        <section className="border-b border-neutral-800 py-20 md:py-32">
            <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl">
                        Everything you need to optimize your website
                    </h2>
                    <p className="mt-4 max-w-xl text-base text-neutral-400 sm:text-lg">
                        Tools and insights that help you identify and fix technical issues
                        before they impact your search rankings.
                    </p>
                </div>

                <DashboardPanel />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="border border-neutral-800 bg-neutral-900/50 p-4"
                            initial={reduced ? false : { opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                            transition={{ duration: 0.3, delay: i * 0.07, ease: 'easeOut' }}>
                            <div className="flex items-center gap-2">
                                <feature.icon className="size-4 text-neutral-500" />
                                <h3 className="text-sm font-medium text-neutral-100">{feature.title}</h3>
                            </div>
                            <p className="mt-2 text-xs text-neutral-500">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
