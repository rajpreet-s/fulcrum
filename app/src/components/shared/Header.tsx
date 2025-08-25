import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Logo />
                        <span className="hidden font-bold sm:inline-block text-xl">Fulcrum</span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link
                            href="/features"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Features
                        </Link>
                        <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Pricing
                        </Link>
                        <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            About
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Button variant="ghost" className="mr-2">
                            <Link href="/signin">Sign In</Link>
                        </Button>
                        <Button>
                            <Link href="/dashboard">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
