import { LayoutDashboard, Briefcase, FileText, Settings, BarChart3, CreditCard, Users } from "lucide-react";

export const navigation = [
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
