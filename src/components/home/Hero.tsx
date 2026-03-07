import { Storefront } from "@phosphor-icons/react/dist/csr/Storefront";
import { Wallet } from "@phosphor-icons/react/dist/csr/Wallet";
import { ConnectButton } from "@mysten/dapp-kit-react/ui";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32">
            {/* Background gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-sui/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-sui" />
                    Powered by Sui Network
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-6">
                    Global Crypto Payments, <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-sui via-blue-400 to-indigo-500">
                        Instant Local Settlement
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                    Cadpay is a non-custodial payment gateway enabling SMEs to accept USDC
                    and instantly settle in their preferred currency. Fast, secure, and borderless.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-foreground text-background px-8 py-3.5 font-semibold transition-transform hover:scale-105 active:scale-95">
                        <Storefront weight="fill" size={20} />
                        Become a Merchant
                    </button>

                    <div className="w-full sm:w-auto [&>button]:w-full [&>button]:sm:w-auto [&>button]:px-8! [&>button]:py-3.5! [&>button]:rounded-lg! [&>button]:font-semibold! [&>button]:bg-background! [&>button]:text-foreground! [&>button]:border! [&>button]:border-border! hover:[&>button]:bg-muted!">
                        <ConnectButton />
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 pt-8 border-t border-border/50 w-full max-w-3xl flex flex-wrap justify-center gap-8 md:gap-16 text-muted-foreground text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Wallet size={24} weight="duotone" className="text-sui" />
                        Non-Custodial
                    </div>
                    <div className="flex items-center gap-2">
                        <Storefront size={24} weight="duotone" className="text-sui" />
                        Instant Settlement
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-sui">0.5s</span>
                        Transaction Time
                    </div>
                </div>
            </div>
        </section>
    );
}
