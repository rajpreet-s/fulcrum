"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "../shared/Logo";
import { Menu, X, CircleDot, LayoutDashboard, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
    { id: "home", label: "Home", icon: CircleDot, href: "/" },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "pricing", label: "Pricing", icon: DollarSign, href: "/pricing" },
];

const Header = () => {
    const router = useRouter();
    const [activePage, setActivePage] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (page: string, href?: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActivePage(page);
        setMobileMenuOpen(false);

        if (href) {
            router.push(href);
        } else {
            const element = document.getElementById(page);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderNavItem = (item: (typeof navItems)[0], isMobile = false) => {
        const Icon = item.icon;
        const isActive = activePage === item.id;
        const baseClass = isMobile
            ? "px-3 py-2 text-sm rounded-md transition-colors flex items-center"
            : "px-4 py-2 rounded-full transition-colors relative";

        const activeClass = isActive
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted";

        return (
            <ToggleGroupItem
                key={item.id}
                value={item.id}
                className={cn(baseClass, activeClass)}
                onClick={handleNavClick(item.id, item.href)}
                asChild={!!item.href && !isMobile}
            >
                {item.href && !isMobile ? (
                    <Link href={item.href}>
                        <Icon size={16} className="inline-block mr-1.5" /> {item.label}
                    </Link>
                ) : (
                    <span>
                        <Icon size={16} className="inline-block mr-1.5" /> {item.label}
                    </span>
                )}
            </ToggleGroupItem>
        );
    };

    return (
        <div className="sticky top-0 z-50 pt-8 px-4">
            <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Logo />
                    <span className="hidden font-bold sm:inline-block text-xl">Fulcrum</span>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
                        <ToggleGroup
                            type="single"
                            value={activePage}
                            onValueChange={(value) => value && setActivePage(value)}
                        >
                            {navItems.map((item) => renderNavItem(item))}
                        </ToggleGroup>
                    </div>
                </nav>

                {/* Mobile navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activePage === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        className={cn(
                                            "px-3 py-2 text-sm rounded-md transition-colors text-left",
                                            isActive
                                                ? "bg-accent text-accent-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        )}
                                        onClick={handleNavClick(item.id, item.href)}
                                    >
                                        <Icon size={16} className="inline-block mr-1.5" /> {item.label}
                                    </button>
                                );
                            })}

                            {/* Theme toggle for mobile */}
                            <div className="px-3 py-2">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                )}

                <div className="hidden md:flex items-center gap-4">
                    {/* Theme toggle for desktop */}
                    <ThemeToggle />
                    <div className="rounded-2xl">
                        <Link href="/login">
                            <Button
                                variant="ghost"
                                className="text-muted-foreground hover:text-foreground hover:bg-muted"
                            >
                                Log in
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
