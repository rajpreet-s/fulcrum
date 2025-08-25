import DealBoard from "@/components/app/dashboard/DealBoard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Deals Dashboard</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Deal
                </Button>
            </div>
            <DealBoard />
        </div>
    );
}
