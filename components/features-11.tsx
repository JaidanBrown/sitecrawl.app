import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
    return (
        <section className="bg-white text-black py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden shadow-none border-0 bg-[#f5f5f6] sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <p className="font-medium text-black">Advanced tracking system</p>
                                <p className="text-gray-600 mt-3 max-w-sm text-sm">Quick AI lives a single hotkey away - ready to quickly appear as a floating window above your other apps..</p>
                            </div>
                        </CardHeader>

                        <div className="mask-b-from-75% mask-b-to-95% relative h-fit pl-6 md:pl-12">
                            <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                                <Image
                                    src="/dashboard/dashboard-2.png"
                                    className="hidden dark:block"
                                    alt="payments illustration dark"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="group overflow-hidden shadow-none border-0 bg-[#f5f5f6] sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
                        <p className="mx-auto my-6 max-w-md text-left px-6 text-center text-lg font-semibold sm:text-2xl md:p-6 text-black">Simple UI, Instantly locate what you need.</p>
                        <CardContent className="mt-auto h-fit">
                            <div className="mask-radial-at-left mask-radial-from-75% mask-radial-[75%_75%] relative max-sm:mb-6">
                                <div className=" overflow-hidden rounded-l-lg border">
                                    <Image
                                        src="/dashboard/sidebar-1.png"
                                        alt="sidebar illustration"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="group p-6 shadow-none border-0 bg-[#f5f5f6] sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
                        <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl text-black">Navigate your dashboard with ease.</p>

                        <div className="flex justify-center gap-6">
                            <div className="bg-white flex aspect-square size-16 items-center justify-center rounded-[7px] border border-gray-300 p-3 shadow-sm">
                                <span className="text-sm font-medium text-black">Ctrl</span>
                            </div>
                            <div className="bg-white flex aspect-square size-16 items-center justify-center rounded-[7px] border border-gray-300 p-3 shadow-sm">
                                <span className="text-sm font-medium text-black">K</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="group relative shadow-none border-0 bg-[#f5f5f6] sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
                        <CardHeader className="p-6 md:p-12">
                            <p className="font-medium text-black">Advanced tracking system</p>
                            <p className="text-gray-600 mt-2 max-w-sm text-sm">Quick AI lives a single hotkey away apps..</p>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/linear.svg"
                                        alt="Linear logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                                        alt="Netlify logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/github.svg"
                                        alt="github logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
