import { ThemeToggle } from "@/components/shared/ThemeToggle";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            {children}
        </div>
    );
}
