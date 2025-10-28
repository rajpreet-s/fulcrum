"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center gap-2 rounded-full px-3 py-2">
                <Moon size={18} className="text-muted-foreground" />
                <Switch disabled />
                <Sun size={18} className="text-muted-foreground" />
            </div>
        );
    }

    const isDark = theme === "dark";

    return (
        <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={isDark ? "text-primary" : "text-muted-foreground"} />
            <Switch checked={!isDark} onCheckedChange={() => setTheme(isDark ? "light" : "dark")} />
            <Sun size={18} className={!isDark ? "text-primary" : "text-muted-foreground"} />
        </div>
    );
}
