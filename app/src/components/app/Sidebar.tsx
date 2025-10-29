"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, FileText, Settings, BarChart3, CreditCard, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../shared/Logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Deals",
        href: "/deals",
        icon: Briefcase,
    },
    {
        name: "Reports",
        href: "/reports",
        icon: FileText,
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: BarChart3,
    },
    {
        name: "Invoicing",
        href: "/invoicing",
        icon: CreditCard,
    },
    {
        name: "Clients",
        href: "/clients",
        icon: Users,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

interface SidebarProps {
    mobileMenuOpen?: boolean;
    setMobileMenuOpen?: (open: boolean) => void;
}

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }: SidebarProps) => {
    const pathname = usePathname();

    const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => (
        <ul role="list" className="space-y-1">
            {navigation.map((item) => {
                const isActive =
                    pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

                return (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            onClick={() => isMobile && setMobileMenuOpen?.(false)}
                            className={cn(
                                "group flex gap-x-3 rounded-md p-3 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "h-5 w-5 shrink-0",
                                    isActive
                                        ? "text-accent-foreground"
                                        : "text-muted-foreground group-hover:text-accent-foreground"
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 z-50 glass">
                <div className="flex h-16 shrink-0 items-center px-6 border-b border-border">
                    <Link href="/dashboard" className="flex items-center space-x-2">
                        <Logo />
                        <span className="font-bold text-xl">Fulcrum</span>
                    </Link>
                </div>
                <nav className="flex flex-1 flex-col px-4 py-6">
                    <NavItems />
                </nav>
            </div>

            {/* Mobile Sidebar (Sheet) */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetContent side="left" className="w-64 p-0">
                    <SheetHeader className="flex h-16 shrink-0 items-center px-6 border-b border-border">
                        <SheetTitle className="flex items-center space-x-2">
                            <Logo />
                            <span className="font-bold text-xl">Fulcrum</span>
                        </SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-1 flex-col px-4 py-6">
                        <NavItems isMobile />
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default Sidebar;
