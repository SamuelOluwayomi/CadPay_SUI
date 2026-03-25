"use client";
import { Storefront } from "@phosphor-icons/react/dist/csr/Storefront";
import { ConnectButton } from "@mysten/dapp-kit-react/ui";
import WorldMap from "@/components/ui/world-map";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden py-2 lg:py-4 flex flex-col justify-center items-center bg-black">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-sui/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
            </div>

            {/* World Map Background Layer */}
            <div className="absolute inset-0 z-1 w-full h-full flex items-center justify-end pointer-events-none opacity-100 pr-0 lg:pr-10">
                <div className="w-full h-full lg:w-[75%] relative flex justify-end">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />
                    <div className="w-full h-full">
                        <WorldMap
                            lineColor="#f97316"
                            dots={[
                                { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },    // NY → London
                                { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: -33.8688, lng: 151.2093 } }, // LA → Sydney
                                { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 35.6762, lng: 139.6503 } },   // Moscow → Tokyo
                                { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: -1.2921, lng: 36.8219 } },     // Paris → Nairobi
                                { start: { lat: 6.5244, lng: 3.3792 }, end: { lat: 19.076, lng: 72.8777 } },       // Lagos → Mumbai
                                { start: { lat: 37.5665, lng: 126.978 }, end: { lat: 1.3521, lng: 103.8198 } },   // Seoul → Singapore
                                { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: 38.7223, lng: -9.1393 } }, // Rio → Lisbon
                                { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 40.7128, lng: -74.006 } }, // Alaska → NY
                                { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 28.6139, lng: 77.209 } },     // Dubai → Delhi
                                { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 37.5665, lng: 126.978 } }, // Sydney → Seoul
                                { start: { lat: -53.1638, lng: -70.9171 }, end: { lat: -22.9068, lng: -43.1729 } }, // Punta Arenas → Rio (deep South America)
                                { start: { lat: 71.1705, lng: 25.9842 }, end: { lat: 55.7558, lng: 37.6173 } },    // North Cape → Moscow (far North)
                                { start: { lat: 78.9, lng: 11.9 }, end: { lat: 48.8566, lng: 2.3522 } },           // Svalbard → Paris (Arctic)
                                { start: { lat: -43.5321, lng: 172.6362 }, end: { lat: -33.8688, lng: 151.2093 } },// Christchurch → Sydney (NZ)
                                { start: { lat: -25.7479, lng: 28.2293 }, end: { lat: 6.5244, lng: 3.3792 } },    // Johannesburg → Lagos (South Africa)
                                { start: { lat: 64.1355, lng: -21.8954 }, end: { lat: 40.7128, lng: -74.006 } },  // Reykjavik → NY (far NW)
                                { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 25.2048, lng: 55.2708 } },   // Singapore → Dubai
                                { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: 40.7128, lng: -74.006 } },  // Mexico City → NY
                                { start: { lat: 43.6532, lng: -79.3832 }, end: { lat: 52.5200, lng: 13.4050 } },   // Toronto → Berlin
                                { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 35.6762, lng: 139.6503 } }, // San Francisco → Tokyo
                                { start: { lat: -33.9249, lng: 18.4232 }, end: { lat: -34.6037, lng: -58.3816 } }, // Cape Town → Buenos Aires
                                { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: -37.8136, lng: 144.9631 } },  // Mumbai → Melbourne
                                { start: { lat: 49.2827, lng: -123.1207 }, end: { lat: -36.8485, lng: 174.7633 } },// Vancouver → Auckland
                                { start: { lat: 39.9042, lng: 116.4074 }, end: { lat: 51.5074, lng: -0.1278 } },   // Beijing → London
                                { start: { lat: 41.8781, lng: -87.6298 }, end: { lat: 4.7110, lng: -74.0721 } },   // Chicago → Bogota
                                { start: { lat: 30.0444, lng: 31.2357 }, end: { lat: 41.9028, lng: 12.4964 } },    // Cairo → Rome
                                { start: { lat: -6.2088, lng: 106.8456 }, end: { lat: -33.8688, lng: 151.2093 } }, // Jakarta → Sydney
                                { start: { lat: -12.0464, lng: -77.0282 }, end: { lat: 25.7617, lng: -80.1918 } }, // Lima → Miami
                                { start: { lat: 13.7563, lng: 100.5018 }, end: { lat: 22.3193, lng: 114.1694 } },  // Bangkok → Hong Kong
                                { start: { lat: 41.0082, lng: 28.9784 }, end: { lat: 24.7136, lng: 46.6753 } },    // Istanbul → Riyadh
                                { start: { lat: 51.1657, lng: 10.4515 }, end: { lat: 39.9042, lng: 116.4074 } },   // Germany → Beijing
                                { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: 6.5244, lng: 3.3792 } },    // Sao Paulo → Lagos
                                { start: { lat: 59.3293, lng: 18.0686 }, end: { lat: 40.7128, lng: -74.006 } },    // Stockholm → NY
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* Content Foreground */}
            <div className="container relative z-10 mx-auto px-4 flex flex-col items-start justify-center text-left h-full pt-4">
                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 leading-[1.1] text-white selection:bg-primary/30">
                    <span className="inline-block selection:text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                        Global Crypto Payments,
                    </span> 
                    <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-amber-400 to-orange-500 drop-shadow-[0_2px_15px_rgba(249,115,22,0.3)]">
                        Instant Local Settlement
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed shadow-background drop-shadow-lg">
                    Cadpay is a non-custodial payment gateway enabling SMEs to accept USDC
                    and instantly settle in their preferred currency. Fast, secure, and borderless.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 justify-start">
                    <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-foreground text-background px-8 py-3.5 font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-black/20">
                        <Storefront weight="fill" size={20} />
                        Become a Merchant
                    </button>

                    <div className="w-full sm:w-auto [&>button]:w-full [&>button]:sm:w-auto [&>button]:px-8! [&>button]:py-3.5! [&>button]:rounded-lg! [&>button]:font-semibold! [&>button]:bg-background/80! [&>button]:backdrop-blur-md! [&>button]:text-foreground! [&>button]:border! [&>button]:border-border! hover:[&>button]:bg-muted!">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
