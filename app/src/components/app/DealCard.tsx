import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Deal } from "../../types/types";

interface DealCardProps {
    deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
    return (
        <Link href={`/deals/${deal.id}`}>
            <Card>
                <CardHeader>
                    <CardTitle>{deal.brandName}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{deal.campaignName}</p>
                    <Badge>{deal.status}</Badge>
                    <p>${deal.amount}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
