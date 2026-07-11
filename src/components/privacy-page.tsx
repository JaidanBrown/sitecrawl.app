import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function PrivacyPage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-background pt-24 md:pt-36">
                <div className="mx-auto max-w-3xl px-6 py-12">
                    <div className="mb-16">
                        <h1 className="text-foreground text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
                        <p className="text-muted-foreground mt-4 text-sm">Last updated: July 11, 2026</p>
                    </div>

                    <div className="space-y-10">
                        <section>
                            <p className="text-muted-foreground leading-relaxed">
                                SiteCrawl ("we", "us", or "our") operates the SiteCrawl website and web crawling
                                and analysis service (the "Service"). This Privacy Policy explains what
                                information we collect, how we use it, and the choices you have. By using the
                                Service, you agree to the collection and use of information as described in this
                                policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Information We Collect</h2>
                            <ul className="text-muted-foreground list-disc space-y-2 pl-6 leading-relaxed">
                                <li>
                                    <span className="text-foreground font-medium">Account information.</span>{' '}
                                    When you create an account, we collect your name, email address, and
                                    password, along with billing details if you purchase a paid plan.
                                </li>
                                <li>
                                    <span className="text-foreground font-medium">Website and crawl data.</span>{' '}
                                    When you use the Service to crawl a website, we collect and store the URLs
                                    you submit and the publicly available content, metadata, and technical data
                                    retrieved during the crawl in order to generate reports and analysis.
                                </li>
                                <li>
                                    <span className="text-foreground font-medium">Usage data.</span>{' '}
                                    We collect information about how you interact with the Service, such as
                                    pages visited, features used, browser type, device information, and IP
                                    address.
                                </li>
                                <li>
                                    <span className="text-foreground font-medium">Cookies and analytics.</span>{' '}
                                    We use cookies and similar technologies, including Google Analytics, to
                                    understand how visitors use our website and to improve the Service.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">How We Use Your Information</h2>
                            <ul className="text-muted-foreground list-disc space-y-2 pl-6 leading-relaxed">
                                <li>To provide, operate, and maintain the Service</li>
                                <li>To process payments and manage your subscription</li>
                                <li>To generate crawl reports, insights, and recommendations</li>
                                <li>To communicate with you about your account, updates, and support requests</li>
                                <li>To monitor usage, prevent abuse, and improve the Service</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">How We Share Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not sell your personal information. We may share information with trusted
                                service providers who help us operate the Service (such as hosting, payment
                                processing, and analytics providers), when required by law or legal process, or
                                in connection with a merger, acquisition, or sale of assets. Service providers
                                are only permitted to use your information to perform services on our behalf.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Data Retention</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We retain your personal information for as long as your account is active or as
                                needed to provide the Service. Crawl data and reports are retained according to
                                your plan limits and may be deleted by you at any time from your dashboard. We
                                may retain certain information as required by law or for legitimate business
                                purposes such as fraud prevention.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use industry-standard technical and organizational measures to protect your
                                information, including encryption in transit and at rest. However, no method of
                                transmission or storage is completely secure, and we cannot guarantee absolute
                                security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Depending on your location, you may have rights to access, correct, export, or
                                delete your personal information, or to object to or restrict certain
                                processing. You can exercise these rights by contacting us at{' '}
                                <a href="mailto:hello@sitecrawl.app" className="text-foreground underline">
                                    hello@sitecrawl.app
                                </a>
                                . You can also update or delete your account information at any time from your
                                dashboard.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Third-Party Services</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Service may contain links to third-party websites or rely on third-party
                                services such as Google Analytics. These third parties have their own privacy
                                policies, and we are not responsible for their practices. We encourage you to
                                review their policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Children's Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Service is not directed to children under 16, and we do not knowingly
                                collect personal information from children. If you believe a child has provided
                                us with personal information, please contact us and we will delete it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Changes to This Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. We will post the updated
                                policy on this page and revise the "Last updated" date above. Material changes
                                will be communicated by email or through the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-foreground mb-3 text-2xl font-semibold">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, contact us at{' '}
                                <a href="mailto:hello@sitecrawl.app" className="text-foreground underline">
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
