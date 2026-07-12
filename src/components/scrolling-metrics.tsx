import { useEffect, useRef, useState } from 'react'

type Metric = {
    label: string
    value: string
    breach?: 'high' | 'low'
}

const allMetrics: Metric[] = [
    { label: 'URLs crawled', value: '128,431' },
    { label: 'Issues detected', value: '12,847', breach: 'high' },
    { label: 'Response codes tracked', value: '38' },
    { label: 'Reports generated', value: '4,209' },
    { label: 'Pages indexed', value: '89,204' },
    { label: 'Broken links found', value: '1,432', breach: 'high' },
    { label: 'Avg load time', value: '4.8s', breach: 'high' },
    { label: 'CWV pass rate', value: '62%', breach: 'low' },
    { label: 'Sitemap URLs', value: '12,340' },
    { label: 'Redirect chains', value: '87', breach: 'high' },
    { label: 'Meta tags checked', value: '256,890' },
    { label: 'Security issues', value: '214', breach: 'high' },
]

const rows: { metrics: Metric[]; duration: string; reverse?: boolean }[] = [
    { metrics: allMetrics.slice(0, 6), duration: '90s' },
    { metrics: allMetrics.slice(4, 10), duration: '110s', reverse: true },
    { metrics: [...allMetrics.slice(6), ...allMetrics.slice(0, 4)], duration: '100s' },
]

/** Order in which breached metrics turn red, with the section-scroll progress (0-1) that triggers each. */
const revealOrder: { label: string; at: number }[] = [
    { label: 'Issues detected', at: 0.25 },
    { label: 'Broken links found', at: 0.35 },
    { label: 'Avg load time', at: 0.45 },
    { label: 'CWV pass rate', at: 0.55 },
    { label: 'Redirect chains', at: 0.65 },
    { label: 'Security issues', at: 0.75 },
]

function repeatMetrics(metrics: Metric[], minItems = 12): Metric[] {
    const repeated: Metric[] = []
    while (repeated.length < minItems) {
        repeated.push(...metrics)
    }
    return repeated
}

const valuePattern = /^([\d,]*\.?\d+)(.*)$/

function formatNumber(base: number, hasComma: boolean, decimals: number): string {
    const fixed = base.toFixed(decimals)
    if (!hasComma) return fixed
    const [intPart, decPart] = fixed.split('.')
    const withCommas = Number(intPart).toLocaleString('en-US')
    return decPart !== undefined ? `${withCommas}.${decPart}` : withCommas
}

/** A metric value that subtly fluctuates over time so the strip feels live. */
function TickingValue({ value, className }: { value: string; className: string }) {
    const [display, setDisplay] = useState(value)

    useEffect(() => {
        const match = value.match(valuePattern)
        if (!match) return

        const numericStr = match[1]
        const suffix = match[2] ?? ''
        const base = parseFloat(numericStr.replace(/,/g, ''))
        const hasComma = numericStr.includes(',')
        const decimals = numericStr.includes('.') ? (numericStr.split('.')[1]?.length ?? 0) : 0

        let timeoutId: ReturnType<typeof setTimeout>

        const tick = () => {
            const jitter = 1 + (Math.random() - 0.5) * 0.04
            setDisplay(formatNumber(Math.max(0, base * jitter), hasComma, decimals) + suffix)
            timeoutId = setTimeout(tick, 1600 + Math.random() * 1800)
        }

        timeoutId = setTimeout(tick, 400 + Math.random() * 1600)
        return () => clearTimeout(timeoutId)
    }, [value])

    return <span className={className}>{display}</span>
}

function MetricCard({ label, value, breach, revealed }: Metric & { revealed: boolean }) {
    const isRed = breach !== undefined && revealed

    return (
        <div
            className={`flex shrink-0 flex-col justify-center gap-1 border px-5 py-3 transition-colors duration-500 ${
                isRed ? 'border-red-500/50 bg-red-500/5' : 'border-neutral-800 bg-neutral-900/50'
            }`}>
            <div className="flex items-baseline gap-3">
                <span className="flex items-center gap-2 text-xs text-neutral-400">
                    {breach && (
                        <span
                            className={`size-2 shrink-0 rounded-full bg-red-500 transition-opacity duration-500 ${
                                isRed ? 'opacity-100' : 'opacity-0'
                            }`}
                            aria-hidden="true"
                        />
                    )}
                    {label}
                </span>
                <TickingValue
                    value={value}
                    className={`text-xl font-semibold tabular-nums transition-colors duration-500 ${
                        isRed ? 'text-red-500' : 'text-neutral-100'
                    }`}
                />
            </div>
            {breach && (
                <span
                    className={`text-[10px] text-red-500/80 transition-opacity duration-500 ${
                        isRed ? 'opacity-100' : 'opacity-0'
                    }`}>
                    {breach === 'high' ? 'Above threshold' : 'Below threshold'}
                </span>
            )}
        </div>
    )
}

function MarqueeRow({
    metrics,
    duration,
    reverse = false,
    revealedLabels,
}: {
    metrics: Metric[]
    duration: string
    reverse?: boolean
    revealedLabels: Set<string>
}) {
    const items = repeatMetrics(metrics)

    return (
        <div className="overflow-hidden">
            <div
                style={{
                    transform: `translateX(calc(var(--scroll-nudge, 0px) * ${reverse ? 1 : -1}))`,
                }}>
                <div
                    className={`flex w-max ${reverse ? 'marquee-reverse' : 'marquee-forward'}`}
                    style={{ ['--marquee-duration' as string]: duration }}>
                    {[0, 1].map((segment) => (
                        <div key={segment} className="flex shrink-0 gap-3 pr-3" aria-hidden={segment === 1}>
                            {items.map((metric, index) => (
                                <MetricCard
                                    key={`${segment}-${index}-${metric.label}`}
                                    {...metric}
                                    revealed={revealedLabels.has(metric.label)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function ScrollingMetrics() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [revealedCount, setRevealedCount] = useState(0)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        let rafId = 0

        const update = () => {
            rafId = 0
            const rect = el.getBoundingClientRect()
            const viewportHeight = window.innerHeight
            // 0 when the section enters at the bottom, 1 when it leaves at the top
            const total = viewportHeight + rect.height
            const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / total))

            // Scroll-linked horizontal nudge, layered on top of the CSS auto-scroll.
            // Kept small so the shift always stays behind the edge fade masks.
            el.style.setProperty('--scroll-nudge', `${((progress - 0.5) * 100).toFixed(1)}px`)

            const count = revealOrder.filter((r) => progress >= r.at).length
            setRevealedCount((prev) => (prev === count ? prev : count))
        }

        const onScroll = () => {
            if (!rafId) rafId = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    const revealedLabels = new Set(revealOrder.slice(0, revealedCount).map((r) => r.label))

    return (
        <div ref={containerRef} className="relative mt-16 overflow-x-clip">
            <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-950 to-transparent sm:w-28"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-950 to-transparent sm:w-28"
                aria-hidden="true"
            />

            <div className="flex flex-col gap-3 motion-reduce:hidden">
                {rows.map((row, index) => (
                    <MarqueeRow key={index} {...row} revealedLabels={revealedLabels} />
                ))}
            </div>

            <div className="hidden grid-cols-2 gap-3 motion-reduce:grid lg:grid-cols-4">
                {allMetrics.slice(0, 4).map((metric) => (
                    <MetricCard key={metric.label} {...metric} revealed />
                ))}
            </div>
        </div>
    )
}
