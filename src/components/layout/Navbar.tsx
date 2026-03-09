import { FloatingDock } from "../ui/floating-dock";
import { ConnectButton } from "@mysten/dapp-kit-react/ui";
import { House } from "@phosphor-icons/react/dist/csr/House";
import { CreditCard } from "@phosphor-icons/react/dist/csr/CreditCard";
import { Storefront } from "@phosphor-icons/react/dist/csr/Storefront";

export function Navbar() {
    const links = [
        {
            title: "Home",
            icon: <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/",
        },
        {
            title: "Pay",
            icon: <CreditCard className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/pay",
        },
        {
            title: "Merchants",
            icon: <Storefront className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/merchants",
        },
    ];

    return (
        <>
            {/* Top Header for Brand & Connect Button */}
            <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 pointer-events-auto">
                    <a href="/" className="text-xl font-bold tracking-tight text-foreground drop-shadow-md bg-background/50 backdrop-blur-md px-3 py-1 rounded-full border border-border/50">
                        Cadpay
                    </a>

                    {/* Desktop nav links restored */}
                    <nav className="hidden md:flex items-center gap-6 bg-background/50 backdrop-blur-md px-6 py-2 rounded-full border border-border/50">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    <div className="drop-shadow-md">
                        <ConnectButton />
                    </div>
                </div>
            </header>

            {/* Bottom Floating Navigation Dock */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <FloatingDock items={links} />
            </div>
        </>
    );
}
