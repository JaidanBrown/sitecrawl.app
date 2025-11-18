'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { motion, useScroll, useTransform } from 'motion/react'
import FooterSection from './footer'
import FAQs from './faqs'
import FeaturesSection from './features-6'
import LogoCloud from './logo-cloud'
import Features8Section from './features-8'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

function ScrollRevealSection() {
    const ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "end 0.3"]
    })

    const paragraphs = [
        "Every website has hidden problems that slow it down and hurt its search rankings. Missing meta tags, broken links, slow loading times - these issues stack up and cost you traffic.",
        "SiteCrawl automatically scans your entire site, identifies every technical issue, and gives you a clear roadmap to fix them. Get the insights you need to outrank your competition."
    ]

    const allWords = paragraphs.flatMap(p => p.split(' '))
    const totalWords = allWords.length

    return (
        <section ref={ref} className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center">
                {paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-6 text-xl font-semibold leading-relaxed md:text-2xl">
                        {paragraph.split(' ').map((word, wIndex) => {
                            const wordPosition = paragraphs.slice(0, pIndex).reduce((sum, p) => sum + p.split(' ').length, 0) + wIndex
                            const threshold = wordPosition / totalWords

                            const opacity = useTransform(
                                scrollYProgress,
                                [threshold - 0.01, threshold],
                                [0.3, 1]
                            )

                            const y = useTransform(
                                scrollYProgress,
                                [threshold - 0.01, threshold],
                                [5, 0]
                            )

                            return (
                                <motion.span
                                    key={wIndex}
                                    style={{ opacity, y }}
                                    className="inline-block mr-[0.25em]"
                                >
                                    {word}
                                </motion.span>
                            )
                        })}
                    </p>
                ))}
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <div className="rounded-3xl bg-[#1d1f23] border border-white/5 px-8 py-16 md:px-16 md:py-20">
                    <h2 className="text-foreground text-3xl font-bold md:text-4xl lg:text-5xl">
                        Ready to fix your website issues?
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
                        Start your free 14-day trial today. No credit card required.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-xl px-8 text-base">
                                <Link href="#link">
                                    <span className="text-nowrap">Start Free Trial</span>
                                </Link>
                            </Button>
                        </div>
                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className="h-10.5 rounded-xl px-8">
                            <Link href="#link">
                                <span className="text-nowrap">Schedule Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="bg-[#1d1f23] hover:bg-background dark:hover:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 transition-colors duration-300 dark:border-t-white/5">
                                        <span className="text-foreground text-sm">Now with Advanced SEO Analysis</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-[#1d1f23] size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <h1 className="text-foreground mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Comprehensive Website Analysis & SEO Insights
                                </h1>
                                <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    Discover technical issues, optimize performance, and improve your search rankings with intelligent website crawling and analysis.
                                </p>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">14 Day Free Trial</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Learn More</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-15/8 relative rounded-2xl"
                                        src="/dashboard/dashboard-1.png"
                                        alt="SiteCrawl Dashboard"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>

                <ScrollRevealSection />

                <Features8Section />

                <FeaturesSection />

                <FAQs />
                <CTASection />
                <LogoCloud />
                <FooterSection />
            </main>
        </>
    )
}
