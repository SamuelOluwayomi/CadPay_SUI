import { useState } from "react";
import { ConnectButton } from "@mysten/dapp-kit-react/ui";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { cn } from "../../lib/utils";

type NavLink = {
    label: string;
    href: string;
};

const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Pay", href: "/pay" },
    { label: "Merchants", href: "/merchants" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Brand */}
                <a href="/" className="text-xl font-bold tracking-tight text-foreground">
                    Cadpay
                </a>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop connect button */}
                <div className="hidden md:block">
                    <ConnectButton />
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    aria-label="Toggle mobile menu"
                    className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileOpen((prev) => !prev)}
                >
                    {mobileOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300",
                    mobileOpen ? "max-h-96 border-t border-border" : "max-h-0",
                )}
            >
                <nav className="flex flex-col gap-1 px-4 py-4">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground py-2 hover:text-foreground transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-3">
                        <ConnectButton />
                    </div>
                </nav>
            </div>
        </header>
    );
}