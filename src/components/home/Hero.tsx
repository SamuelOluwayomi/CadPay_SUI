"use client";
import { Storefront } from "@phosphor-icons/react/dist/csr/Storefront";
import { Wallet } from "@phosphor-icons/react/dist/csr/Wallet";
import { ConnectButton } from "@mysten/dapp-kit-react/ui";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
    { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/1.webp", label: "New York" },
    { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/2.webp", label: "London" },
    { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/3.webp", label: "Tokyo" },
    { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/4.webp", label: "Sydney" },
    { lat: 48.8566, lng: 2.3522, src: "https://assets.aceternity.com/avatars/5.webp", label: "Paris" },
    { lat: 28.6139, lng: 77.209, src: "https://assets.aceternity.com/avatars/6.webp", label: "New Delhi" },
    { lat: 55.7558, lng: 37.6173, src: "https://assets.aceternity.com/avatars/7.webp", label: "Moscow" },
    { lat: -22.9068, lng: -43.1729, src: "https://assets.aceternity.com/avatars/8.webp", label: "Rio de Janeiro" },
    { lat: 31.2304, lng: 121.4737, src: "https://assets.aceternity.com/avatars/9.webp", label: "Shanghai" },
    { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
    { lat: -34.6037, lng: -58.3816, src: "https://assets.aceternity.com/avatars/11.webp", label: "Buenos Aires" },
    { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
    { lat: 37.5665, lng: 126.978, src: "https://assets.aceternity.com/avatars/13.webp", label: "Seoul" },
];

export function Hero() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden py-20 lg:py-32 flex items-center">
            {/* Background gradients */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-sui/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-sui" />
                        Powered by Sui Network
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 leading-[1.1]">
                        Global Crypto Payments, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-sui via-blue-400 to-indigo-500">
                            Instant Local Settlement
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                        Cadpay is a non-custodial payment gateway enabling SMEs to accept USDC
                        and instantly settle in their preferred currency. Fast, secure, and borderless.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
                        <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-foreground text-background px-8 py-3.5 font-semibold transition-transform hover:scale-105 active:scale-95">
                            <Storefront weight="fill" size={20} />
                            Become a Merchant
                        </button>

                        <div className="w-full sm:w-auto [&>button]:w-full [&>button]:sm:w-auto [&>button]:px-8! [&>button]:py-3.5! [&>button]:rounded-lg! [&>button]:font-semibold! [&>button]:bg-background! [&>button]:text-foreground! [&>button]:border! [&>button]:border-border! hover:[&>button]:bg-muted!">
                            <ConnectButton />
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 border-t border-border/50 w-full max-w-xl flex flex-wrap justify-start gap-8 md:gap-12 text-muted-foreground text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Wallet size={20} weight="duotone" className="text-sui" />
                            Non-Custodial
                        </div>
                        <div className="flex items-center gap-2">
                            <Storefront size={20} weight="duotone" className="text-sui" />
                            Instant Settlement
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-base text-sui">0.5s</span>
                            Finality
                        </div>
                    </div>
                </div>

                {/* Globe Container */}
                <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <Globe3D
                            className="h-full w-full opacity-80"
                            markers={sampleMarkers}
                            config={{
                                atmosphereColor: "#4da6ff",
                                atmosphereIntensity: 15,
                                bumpScale: 5,
                                autoRotateSpeed: 0.5,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
