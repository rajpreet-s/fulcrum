import { Column } from "@/types/types";

export const initialDealColumns: Column[] = [
    {
        id: "active",
        title: "Active",
        color: "blue",
        deals: [
            {
                id: "1",
                brandName: "BrandA",
                campaignName: "Summer Sale",
                status: "active",
                amount: 15000,
                dueDate: "2025-09-01",
                deliverables: [
                    { id: "del1", text: "Social media posts", completed: true },
                    { id: "del2", text: "Email campaign setup", completed: false },
                ],
            },
            {
                id: "2",
                brandName: "BrandB",
                campaignName: "Product Launch",
                status: "active",
                amount: 25000,
                dueDate: "2025-09-15",
                deliverables: [
                    { id: "del3", text: "Press release", completed: true },
                    { id: "del4", text: "Influencer outreach", completed: false },
                ],
            },
        ],
    },
    {
        id: "awaiting-payment",
        title: "Awaiting Payment",
        color: "amber",
        deals: [
            {
                id: "3",
                brandName: "BrandC",
                campaignName: "Holiday Promo",
                status: "invoiced",
                amount: 10000,
                dueDate: "2025-08-28",
                deliverables: [
                    { id: "del5", text: "Banner ads", completed: true },
                    { id: "del6", text: "Landing page design", completed: true },
                ],
            },
        ],
    },
    {
        id: "completed",
        title: "Completed",
        color: "accent",
        deals: [
            {
                id: "4",
                brandName: "BrandD",
                campaignName: "Winter Collection",
                status: "paid",
                amount: 30000,
                dueDate: "2025-07-20",
                deliverables: [
                    { id: "del7", text: "Video ad production", completed: true },
                    { id: "del8", text: "Website integration", completed: true },
                ],
            },
        ],
    },
];
