import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { HouseIcon } from "@phosphor-icons/react/dist/csr/House";
import { UsersIcon } from "@phosphor-icons/react/dist/csr/Users";
import { PhoneIcon } from "@phosphor-icons/react/dist/csr/Phone";
import { BookOpenIcon } from "@phosphor-icons/react/dist/csr/BookOpen";
import { UserPlusIcon } from "@phosphor-icons/react/dist/csr/UserPlus";
import { SignInIcon } from "@phosphor-icons/react/dist/csr/SignIn";
import { cn } from "../../lib/utils";

type PhosphorIcon = React.ComponentType<{ size?: number; weight?: "fill" | "regular" | "light" | "bold" | "duotone" | "thin"; className?: string }>;

type NavLink = {
    label: string;
    href: string;
    icon: PhosphorIcon;
};

const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/", icon: HouseIcon },
    { label: "About Us", href: "/about", icon: UsersIcon },
    { label: "Resources", href: "/resources", icon: BookOpenIcon },
    { label: "Contact Us", href: "/contact", icon: PhoneIcon },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    return (
        <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Brand */}
                <a href="/" className="flex items-center gap-2.5">
                    <img src="/icon.svg" alt="Cadpay Logo" className="h-8 w-8" />
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Cadpay
                    </span>
                    {/* Sui logo */}
                    <img
                        src="/sui-logo.svg"
                        alt="Built on Sui"
                        className="hidden sm:block h-6 w-6 ml-1"
                    />
                </a>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeLink === link.href;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={cn(
                                    "relative flex items-center gap-1.5 text-sm px-4 py-2 rounded-full transition-all duration-200 font-medium",
                                    isActive
                                        ? "text-foreground bg-white/5 border border-primary shadow-[0_0_8px_rgba(249,115,22,0.3)]"
                                        : "text-muted-foreground hover:text-foreground hover:bg-white/8 border border-transparent",
                                )}
                            >
                                <Icon size={15} weight={isActive ? "fill" : "regular"} className={isActive ? "text-primary" : ""} />
                                {link.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Auth buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="/login"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
                    >
                        <SignInIcon size={16} />
                        Log in
                    </a>
                    <a
                        href="/signup"
                        className="flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-full transition-all hover:brightness-110 active:scale-95 shadow-md shadow-primary/25"
                    >
                        <UserPlusIcon size={16} weight="fill" />
                        Create Account
                    </a>
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
                    mobileOpen ? "max-h-96 border-t border-border/40" : "max-h-0",
                )}
            >
                <nav className="flex flex-col gap-1 px-4 py-4">
                    {NAV_LINKS.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeLink === link.href;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
                                className={cn(
                                    "flex items-center gap-2 text-sm py-2.5 px-4 rounded-full transition-all duration-200",
                                    isActive
                                        ? "text-foreground bg-white/5 font-semibold border border-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-white/8 border border-transparent",
                                )}
                            >
                                <Icon size={16} weight={isActive ? "fill" : "regular"} className={isActive ? "text-primary" : ""} />
                                {link.label}
                            </a>
                        );
                    })}
                    <div className="pt-3 flex flex-col gap-2 border-t border-border/40 mt-2">
                        <a href="/login" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-4 py-2 transition-colors">
                            <SignInIcon size={16} />
                            Log in
                        </a>
                        <a href="/signup" className="flex items-center justify-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-full hover:brightness-110 transition-all shadow-md shadow-primary/25">
                            <UserPlusIcon size={16} weight="fill" />
                            Create Account
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}