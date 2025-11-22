import type { Metadata } from "next";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { productName } from "@/constants/common.constants";

export const metadata: Metadata = {
    title: productName,
    description: "Streamline your creator workflow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <QueryProvider>
                        <TooltipProvider>
                            <Toaster />
                            <Sonner />
                            {children}
                        </TooltipProvider>
                    </QueryProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
