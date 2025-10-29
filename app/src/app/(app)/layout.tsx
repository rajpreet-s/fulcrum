"use client";
import { useState } from "react";
import Sidebar from "@/components/app/Sidebar";
import { UserNav } from "@/components/app/UserNav";
import { mockUser } from "@/lib/mock-data";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background ">
            <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            <div className="md:ml-64">
                {/* Header */}
                <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex h-16 items-center justify-between px-4 md:px-6">
                        <div className="flex items-center gap-4">
                            {/* Mobile menu button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                            <h2 className="text-base md:text-lg font-semibold">
                                Welcome back, {mockUser.name.split(" ")[0]}
                            </h2>
                        </div>

                        <div className="flex items-center gap-2 md:gap-4">
                            <ThemeToggle />
                            <UserNav />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-4 md:p-6">{children}</main>
            </div>
        </div>
    );
}
