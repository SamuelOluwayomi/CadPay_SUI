import { ConnectButton } from "@mysten/dapp-kit-react/ui";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <h1 className="text-lg font-semibold">CADPAY</h1>
                <ConnectButton />
            </div>
        </header>
    );
}
