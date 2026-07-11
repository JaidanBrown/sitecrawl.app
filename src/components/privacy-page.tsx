import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function PrivacyPage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-32 md:pt-44">
                <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
                    <div className="mb-12">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Legal</p>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">Privacy Policy</h1>
                        <p className="mt-3 text-xs text-neutral-500">Last updated: July 11, 2026</p>
                    </div>

                    <div className="space-y-10">
                        <section>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                SiteCrawl ("we", "us", or "our") operates the SiteCrawl website and web crawling
                                and analysis service (the "Service"). This Privacy Policy explains what
                                information we collect, how we use it, and the choices you have. By using the
                                Service, you agree to the collection and use of information as described in this
                                policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Information We Collect</h2>
                            <ul className="text-neutral-400 list-disc space-y-2 pl-6 text-sm leading-relaxed">
                                <li>
                                    <span className="font-medium text-neutral-100">Account information.</span>{' '}
                                    When you create an account, we collect your name, email address, and
                                    password, along with billing details if you purchase a paid plan.
                                </li>
                                <li>
                                    <span className="font-medium text-neutral-100">Website and crawl data.</span>{' '}
                                    When you use the Service to crawl a website, we collect and store the URLs
                                    you submit and the publicly available content, metadata, and technical data
                                    retrieved during the crawl in order to generate reports and analysis.
                                </li>
                                <li>
                                    <span className="font-medium text-neutral-100">Usage data.</span>{' '}
                                    We collect information about how you interact with the Service, such as
                                    pages visited, features used, browser type, device information, and IP
                                    address.
                                </li>
                                <li>
                                    <span className="font-medium text-neutral-100">Cookies and analytics.</span>{' '}
                                    We use cookies and similar technologies, including Google Analytics, to
                                    understand how visitors use our website and to improve the Service.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">How We Use Your Information</h2>
                            <ul className="text-neutral-400 list-disc space-y-2 pl-6 text-sm leading-relaxed">
                                <li>To provide, operate, and maintain the Service</li>
                                <li>To process payments and manage your subscription</li>
                                <li>To generate crawl reports, insights, and recommendations</li>
                                <li>To communicate with you about your account, updates, and support requests</li>
                                <li>To monitor usage, prevent abuse, and improve the Service</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">How We Share Information</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                We do not sell your personal information. We may share information with trusted
                                service providers who help us operate the Service (such as hosting, payment
                                processing, and analytics providers), when required by law or legal process, or
                                in connection with a merger, acquisition, or sale of assets. Service providers
                                are only permitted to use your information to perform services on our behalf.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Data Retention</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                We retain your personal information for as long as your account is active or as
                                needed to provide the Service. Crawl data and reports are retained according to
                                your plan limits and may be deleted by you at any time from your dashboard. We
                                may retain certain information as required by law or for legitimate business
                                purposes such as fraud prevention.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Security</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                We use industry-standard technical and organizational measures to protect your
                                information, including encryption in transit and at rest. However, no method of
                                transmission or storage is completely secure, and we cannot guarantee absolute
                                security.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Your Rights</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Depending on your location, you may have rights to access, correct, export, or
                                delete your personal information, or to object to or restrict certain
                                processing. You can exercise these rights by contacting us at{' '}
                                <a href="mailto:hello@sitecrawl.app" className="text-neutral-100 underline underline-offset-4 hover:no-underline">
                                    hello@sitecrawl.app
                                </a>
                                . You can also update or delete your account information at any time from your
                                dashboard.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Third-Party Services</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                The Service may contain links to third-party websites or rely on third-party
                                services such as Google Analytics. These third parties have their own privacy
                                policies, and we are not responsible for their practices. We encourage you to
                                review their policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Children's Privacy</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                The Service is not directed to children under 16, and we do not knowingly
                                collect personal information from children. If you believe a child has provided
                                us with personal information, please contact us and we will delete it.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Changes to This Policy</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                We may update this Privacy Policy from time to time. We will post the updated
                                policy on this page and revise the "Last updated" date above. Material changes
                                will be communicated by email or through the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-lg font-semibold text-neutral-100">Contact Us</h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                If you have any questions about this Privacy Policy, contact us at{' '}
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
