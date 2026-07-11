import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Updates', href: '/changelog' },
]

const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const elementId = href.substring(1)
    const element = document.getElementById(elementId)

    if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    } else {
        window.location.href = '/' + href
    }
}

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    React.useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            setTimeout(() => {
                const elementId = hash.substring(1)
                const element = document.getElementById(elementId)
                if (element) {
                    const headerOffset = 100
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.scrollY - headerOffset

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    })
                }
            }, 100)
        }
    }, [])

    return (
        <header>
            <nav className="fixed z-20 w-full border-b border-neutral-800 bg-neutral-950">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="flex h-14 items-center justify-between gap-6">
                        <div className="flex items-center gap-8">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center">
                                <Logo />
                            </a>

                            <ul className="hidden items-center gap-1 lg:flex">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        {item.href.startsWith('#') ? (
                                            <button
                                                onClick={(e) => handleAnchorClick(e, item.href)}
                                                className="block px-3 py-1.5 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200">
                                                {item.name}
                                            </button>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="block px-3 py-1.5 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200">
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden items-center gap-3 lg:flex">
                            <Button asChild variant="outline" size="sm">
                                <a href="https://dashboard.sitecrawl.app">
                                    <span>Login</span>
                                </a>
                            </Button>
                            <Button asChild size="sm">
                                <a href="https://dashboard.sitecrawl.app">
                                    <span>Sign Up</span>
                                </a>
                            </Button>
                        </div>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            className="-mr-2 p-2 text-neutral-400 hover:text-neutral-200 lg:hidden">
                            {menuState ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>
                </div>

                {menuState && (
                    <div className="border-t border-neutral-800 bg-neutral-950 lg:hidden">
                        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
                            <ul className="space-y-1">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        {item.href.startsWith('#') ? (
                                            <button
                                                onClick={(e) => {
                                                    handleAnchorClick(e, item.href)
                                                    setMenuState(false)
                                                }}
                                                className="block w-full px-3 py-2 text-left text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200">
                                                {item.name}
                                            </button>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="block px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200">
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 flex flex-col gap-3 border-t border-neutral-800 pt-4">
                                <Button asChild variant="outline" size="sm">
                                    <a href="https://dashboard.sitecrawl.app">
                                        <span>Login</span>
                                    </a>
                                </Button>
                                <Button asChild size="sm">
                                    <a href="https://dashboard.sitecrawl.app">
                                        <span>Sign Up</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
