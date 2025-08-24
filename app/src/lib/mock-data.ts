export interface Deal {
    id: string;
    brandName: string;
    campaignName: string;
    status: "active" | "invoiced" | "paid";
    amount: number;
    deliverables: {
        id: string;
        text: string;
        completed: boolean;
    }[];
    dueDate: string;
    createdAt: string;
    description?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export const mockUser: User = {
    id: "1",
    name: "Alex Chen",
    email: "alex@creator.com",
    avatar: "/placeholder.svg",
};

export const mockDeals: Deal[] = [
    {
        id: "1",
        brandName: "TechCorp",
        campaignName: "Q4 Product Launch",
        status: "active",
        amount: 15000,
        dueDate: "2024-09-15",
        createdAt: "2024-08-01",
        description:
            "Complete brand campaign for new product launch including social media content and video production.",
        deliverables: [
            { id: "1", text: "10 Instagram posts", completed: true },
            { id: "2", text: "3 TikTok videos", completed: true },
            { id: "3", text: "1 Brand video (60s)", completed: false },
            { id: "4", text: "Story highlights package", completed: false },
        ],
    },
    {
        id: "2",
        brandName: "StyleBrand",
        campaignName: "Summer Collection",
        status: "active",
        amount: 8500,
        dueDate: "2024-09-20",
        createdAt: "2024-08-05",
        description: "Fashion content creation for summer collection launch.",
        deliverables: [
            { id: "5", text: "5 Outfit posts", completed: true },
            { id: "6", text: "2 Styling videos", completed: false },
            { id: "7", text: "Brand story series (5 parts)", completed: false },
        ],
    },
    {
        id: "3",
        brandName: "FitnessPro",
        campaignName: "Workout Series",
        status: "invoiced",
        amount: 12000,
        dueDate: "2024-08-30",
        createdAt: "2024-07-15",
        description: "Comprehensive fitness content series with workout routines and nutrition tips.",
        deliverables: [
            { id: "8", text: "8 Workout videos", completed: true },
            { id: "9", text: "4 Nutrition posts", completed: true },
            { id: "10", text: "Live Q&A session", completed: true },
        ],
    },
    {
        id: "4",
        brandName: "GreenTech",
        campaignName: "Sustainability Campaign",
        status: "paid",
        amount: 20000,
        dueDate: "2024-08-15",
        createdAt: "2024-07-01",
        description: "Educational content about sustainable technology and eco-friendly practices.",
        deliverables: [
            { id: "11", text: "6 Educational posts", completed: true },
            { id: "12", text: "2 Documentary-style videos", completed: true },
            { id: "13", text: "Infographic series (4 pieces)", completed: true },
            { id: "14", text: "Podcast appearance", completed: true },
        ],
    },
    {
        id: "5",
        brandName: "FoodieDelights",
        campaignName: "Recipe Collection",
        status: "invoiced",
        amount: 6000,
        dueDate: "2024-09-10",
        createdAt: "2024-08-10",
        description: "Creative recipe content featuring seasonal ingredients and cooking techniques.",
        deliverables: [
            { id: "15", text: "10 Recipe videos", completed: true },
            { id: "16", text: "5 Ingredient spotlight posts", completed: true },
            { id: "17", text: "Recipe e-book", completed: true },
        ],
    },
];

export const getDealsbyStatus = (status: Deal["status"]) => {
    return mockDeals.filter((deal) => deal.status === status);
};

export const getDealById = (id: string) => {
    return mockDeals.find((deal) => deal.id === id);
};
