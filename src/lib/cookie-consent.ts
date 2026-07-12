import 'vanilla-cookieconsent/dist/cookieconsent.css'
import * as CookieConsent from 'vanilla-cookieconsent'

CookieConsent.run({
    categories: {
        necessary: {
            enabled: true,
            readOnly: true,
        },
        analytics: {
            autoClear: {
                cookies: [
                    { name: /^_ga/ },
                    { name: '_gid' },
                    { name: '_gat' },
                ],
            },
            services: {
                ga: {
                    label: 'Google Analytics',
                },
            },
        },
    },

    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom left',
            equalWeightButtons: true,
            flipButtons: false,
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false,
        },
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description:
                        'We use cookies to understand how the site is used and improve SiteCrawl. Necessary cookies keep the site working. Analytics cookies (Google Analytics) are optional.',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage preferences',
                    footer: `
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    `,
                },
                preferencesModal: {
                    title: 'Cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Save preferences',
                    closeIconLabel: 'Close',
                    sections: [
                        {
                            title: 'Cookie usage',
                            description:
                                'We use cookies to run the site and optionally measure traffic. You can change these choices anytime via Cookie preferences in the footer.',
                        },
                        {
                            title: 'Strictly necessary',
                            description:
                                'Required for the site to function. These cannot be disabled.',
                            linkedCategory: 'necessary',
                        },
                        {
                            title: 'Analytics',
                            description:
                                'Help us understand how visitors use the site. Data is collected via Google Analytics and used to improve SiteCrawl.',
                            linkedCategory: 'analytics',
                        },
                        {
                            title: 'More information',
                            description:
                                'See our <a href="/privacy">Privacy Policy</a> for details on how we handle data.',
                        },
                    ],
                },
            },
        },
    },
})
