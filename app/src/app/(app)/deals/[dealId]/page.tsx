import Link from "next/link";
import { ArrowLeft, Calendar, DollarSign, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import ReportGenerator from "@/components/app/ReportGenerator";
import { getDealById } from "@/lib/mock-data";
import { Deal } from "@/types/types";

const statusColors: Record<Deal["status"], string> = {
    active: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    invoiced: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    paid: "bg-green-500/10 text-green-500 border-green-500/20",
};

interface DealDetailProps {
    params: {
        dealId: string;
    };
}

const DealDetail = ({ params }: DealDetailProps) => {
    const { dealId } = params;
    const deal: Deal | undefined = getDealById(dealId);

    if (!deal) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Button asChild className="hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                        <Link href="/dashboard">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Dashboard
                        </Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="flex items-center justify-center py-12">
                        <p className="text-muted-foreground">Deal not found</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const completedDeliverables = deal.deliverables.filter((d) => d.completed).length;
    const totalDeliverables = deal.deliverables.length;
    const progress = totalDeliverables > 0 ? (completedDeliverables / totalDeliverables) * 100 : 0;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button asChild className="hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <Link href="/dashboard">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Deal Header */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <CardTitle className="text-2xl">{deal.brandName}</CardTitle>
                                    <CardDescription className="text-lg">{deal.campaignName}</CardDescription>
                                </div>
                                <Badge className={`${statusColors[deal.status]} text-foreground`}>{deal.status}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {deal.description && <p className="text-muted-foreground">{deal.description}</p>}

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                    <span className="font-medium">${deal.amount.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{new Date(deal.dueDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{deal.brandName}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{deal.status}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Deliverables */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Deliverables</CardTitle>
                                <div className="text-sm text-muted-foreground">
                                    {completedDeliverables} of {totalDeliverables} completed
                                </div>
                            </div>
                            <Progress value={progress} className="w-full" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {deal.deliverables.map((deliverable) => (
                                <div
                                    key={deliverable.id}
                                    className="flex items-center space-x-3 p-3 rounded-lg border border-border"
                                >
                                    <Checkbox checked={deliverable.completed} className="flex-shrink-0" />
                                    <span
                                        className={`flex-1 ${
                                            deliverable.completed ? "line-through text-muted-foreground" : ""
                                        }`}
                                    >
                                        {deliverable.text}
                                    </span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Quick Stats */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <CardTitle className="text-lg">Campaign Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-medium">{Math.round(progress)}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Days remaining</span>
                                <span className="font-medium">
                                    {Math.max(
                                        0,
                                        Math.ceil(
                                            (new Date(deal.dueDate).getTime() - new Date().getTime()) /
                                                (1000 * 60 * 60 * 24)
                                        )
                                    )}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Value</span>
                                <span className="font-medium">${deal.amount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Status</span>
                                <Badge className={`${statusColors[deal.status]} text-foreground`}>{deal.status}</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <Card className="cosmic-card">
                        <CardHeader>
                            <CardTitle className="text-lg">Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <ReportGenerator
                                dealId={deal.id}
                                brandName={deal.brandName}
                                campaignName={deal.campaignName}
                            />
                            <Button className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                Edit Deal
                            </Button>
                            <Button className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                Send Update
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DealDetail;
