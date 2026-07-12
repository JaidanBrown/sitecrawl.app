import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function TermsPage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-32 md:pt-44">
                <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
                    <div className="mb-12">
                        <h1 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl">Terms of Service</h1>
                        <p className="mt-4 text-base text-neutral-500 sm:text-lg">Last updated: July 11, 2026</p>
                    </div>

                    <div className="space-y-10">
                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">1. Acceptance of Terms</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                These Terms of Service ("Terms") govern your access to and use of the SiteCrawl
                                website and web crawling and analysis service (the "Service"). By creating an
                                account or using the Service, you agree to be bound by these Terms. If you do
                                not agree, do not use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">2. The Service</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                SiteCrawl provides website crawling, technical analysis, and search engine
                                optimization insights. We may add, change, or remove features at any time. We
                                will make reasonable efforts to notify you of material changes that negatively
                                affect your use of the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">3. Accounts</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                You must provide accurate information when creating an account and keep it up
                                to date. You are responsible for safeguarding your account credentials and for
                                all activity that occurs under your account. Notify us immediately at{' '}
                                <a href="mailto:hello@sitecrawl.app" className="text-neutral-100 underline underline-offset-4 hover:no-underline">
                                    hello@sitecrawl.app
                                </a>{' '}
                                if you suspect unauthorized use of your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">4. Acceptable Use</h2>
                            <p className="text-neutral-400 mb-3 text-sm leading-relaxed">
                                You agree to use the Service only for lawful purposes. In particular, you agree
                                that you will not:
                            </p>
                            <ul className="text-neutral-400 list-disc space-y-2 pl-6 text-sm leading-relaxed">
                                <li>
                                    Crawl websites that you do not own or do not have permission to crawl and
                                    analyze
                                </li>
                                <li>
                                    Use the Service to circumvent access controls, rate limits, or robots.txt
                                    directives of third-party websites
                                </li>
                                <li>Use the Service to collect personal data unlawfully or to harass others</li>
                                <li>
                                    Interfere with or disrupt the Service, or attempt to access it by any means
                                    other than the interfaces we provide
                                </li>
                                <li>Resell, sublicense, or share your account access without our written consent</li>
                                <li>Reverse engineer or attempt to extract the source code of the Service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">5. Subscriptions and Billing</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Paid plans are billed in advance on a recurring basis (monthly or annually)
                                until cancelled. You can cancel at any time from your dashboard; your plan will
                                remain active until the end of the current billing period. Except where required
                                by law, payments are non-refundable. We may change our prices with reasonable
                                advance notice, effective at your next billing cycle.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">6. Your Content and Data</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                You retain all rights to the URLs you submit and the data generated from your
                                crawls ("Your Data"). You grant us a limited license to process and store Your
                                Data solely to provide and improve the Service. You are responsible for
                                ensuring that your use of the Service, including the websites you crawl,
                                complies with applicable laws and third-party rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">7. Intellectual Property</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                The Service, including its software, design, and branding, is owned by
                                SiteCrawl and protected by intellectual property laws. Except for the limited
                                right to use the Service in accordance with these Terms, no rights are granted
                                to you.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">8. Disclaimers</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                The Service is provided "as is" and "as available" without warranties of any
                                kind, express or implied, including warranties of merchantability, fitness for
                                a particular purpose, and non-infringement. We do not warrant that the Service
                                will be uninterrupted or error-free, or that crawl results, reports, or
                                recommendations will be accurate or complete.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">9. Limitation of Liability</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                To the maximum extent permitted by law, SiteCrawl will not be liable for any
                                indirect, incidental, special, consequential, or punitive damages, or for any
                                loss of profits, revenue, data, or goodwill, arising out of or related to your
                                use of the Service. Our total liability for any claim arising out of these
                                Terms or the Service will not exceed the amounts you paid to us in the twelve
                                months preceding the claim.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">10. Termination</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                You may stop using the Service and delete your account at any time. We may
                                suspend or terminate your access if you violate these Terms or if we reasonably
                                believe your use poses a risk to the Service or others. Upon termination, your
                                right to use the Service ends and we may delete Your Data after a reasonable
                                period.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">11. Changes to These Terms</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                We may update these Terms from time to time. We will post the updated Terms on
                                this page and revise the "Last updated" date above. If the changes are
                                material, we will provide additional notice. Your continued use of the Service
                                after changes take effect constitutes acceptance of the updated Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">12. Contact Us</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                If you have any questions about these Terms, contact us at{' '}
                                <a href="mailto:hello@sitecrawl.app" className="text-neutral-100 underline underline-offset-4 hover:no-underline">
                                    hello@sitecrawl.app
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
