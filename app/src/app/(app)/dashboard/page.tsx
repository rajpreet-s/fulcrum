import DealCard from "@/components/app/DealCard";
import { Button } from "@/components/ui/button";
import { mockDeals } from "@/lib/mock-data";

export default function DashboardPage() {
    const activeDeals = mockDeals.filter((deal) => deal.status === "active");
    const awaitingPaymentDeals = mockDeals.filter((deal) => deal.status === "invoiced");
    const completedDeals = mockDeals.filter((deal) => deal.status === "paid");

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <Button>New Deal</Button>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">Active Deals</h2>
                    {activeDeals.map((deal) => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Awaiting Payment</h2>
                    {awaitingPaymentDeals.map((deal) => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Completed</h2>
                    {completedDeals.map((deal) => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                </div>
            </div>
        </div>
    );
}
