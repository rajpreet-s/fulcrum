"use client";
import DealBoard from "@/components/app/dashboard/DealBoard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h1 className="text-2xl md:text-3xl font-bold">Deals Dashboard</h1>
                <Button className="w-full sm:w-auto">
                    <Plus className="mr-2 h-4 w-4" />
                    New Deal
                </Button>
            </div>
            <DealBoard />
        </div>
    );
}
