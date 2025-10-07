import Sidebar from "@/components/app/Sidebar";
import { UserNav } from "@/components/app/UserNav";
import { mockUser } from "@/lib/mock-data";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />

            <div className="ml-64">
                {/* Header */}
                <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex h-16 items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-lg font-semibold">Welcome back, {mockUser.name.split(" ")[0]}</h2>
                        </div>

                        <div className="flex items-center gap-4">
                            <UserNav />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
