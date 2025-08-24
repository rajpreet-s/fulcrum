export interface Deal {
    id: string;
    brandName: string;
    campaignName: string;
    status: "active" | "invoiced" | "paid";
    amount: number;
    description?: string; // Added description
    dueDate: string; // Added dueDate
    deliverables: {
        id: string; // Added id to deliverables
        text: string;
        completed: boolean;
    }[];
}
