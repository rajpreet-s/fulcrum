"use client";
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
    const [openFeature, setOpenFeature] = useState<number | null>(null);

    const features = [
        {
            title: "Payment Automation",
            description:
                "Automate payment processing and reconciliation to reduce manual errors and improve efficiency.",
            expandedDescription:
                "Set up automated payment workflows with custom approval chains. Schedule recurring payments, automate invoice processing, and create conditional rules for different transaction types. Reduce manual intervention and ensure compliance with financial regulations.",
            icon: <Layers size={24} className="text-accent" />,
        },
        {
            title: "Real-time Analytics",
            description: "Monitor financial performance with real-time dashboards and comprehensive reporting.",
            expandedDescription:
                "Track key financial metrics with customizable dashboards. Monitor cash flow, payment volumes, and transaction success rates in real-time. Generate detailed reports for stakeholders and identify trends before they impact your business.",
            icon: <Grid3x3 size={24} className="text-accent" />,
        },
        {
            title: "Risk Management",
            description: "Advanced fraud detection and risk assessment tools to protect your business.",
            expandedDescription:
                "Utilize machine learning algorithms to detect suspicious transactions and prevent fraud. Set up custom risk rules, monitor transaction patterns, and receive instant alerts for unusual activity. Protect your business with enterprise-grade security measures.",
            icon: <LayoutDashboard size={24} className="text-accent" />,
        },
        {
            title: "Compliance Tools",
            description: "Built-in compliance features to meet regulatory requirements effortlessly.",
            expandedDescription:
                "Stay compliant with financial regulations across multiple jurisdictions. Automated KYC/AML checks, transaction monitoring, and regulatory reporting. Generate audit trails and maintain documentation to meet compliance standards.",
            icon: <ListCheck size={24} className="text-accent" />,
        },
        {
            title: "Multi-currency Support",
            description: "Process payments in multiple currencies with real-time exchange rates.",
            expandedDescription:
                "Accept and process payments in over 150 currencies with competitive exchange rates. Automatic currency conversion, hedging tools, and multi-currency accounting. Expand your business globally with seamless international payment processing.",
            icon: <Star size={24} className="text-accent" />,
        },
        {
            title: "API Integration",
            description: "Powerful APIs for seamless integration with your existing financial systems.",
            expandedDescription:
                "Connect with your ERP, accounting software, and banking systems through our comprehensive APIs. Real-time webhooks, detailed documentation, and SDKs for popular programming languages. Build custom integrations that fit your unique business needs.",
            icon: <BookOpen size={24} className="text-accent" />,
        },
    ];

    const toggleFeature = (index: number) => {
        setOpenFeature(openFeature === index ? null : index);
    };

    return (
        <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                        Everything your business needs
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Comprehensive fintech solutions to streamline your financial operations and drive growth
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Collapsible
                            key={index}
                            open={openFeature === index}
                            onOpenChange={() => toggleFeature(index)}
                            className={`rounded-xl border ${
                                openFeature === index ? "border-primary/40" : "border-border"
                            } gradient-mesh bg-card transition-all duration-300 card-interactive`}
                        >
                            <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                                <div className="flex justify-between items-start">
                                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                                            openFeature === index ? "rotate-180" : ""
                                        }`}
                                    />
                                </div>
                                <h3 className="text-xl font-medium tracking-tighter mb-3 text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-6 pb-6 pt-2">
                                <div className="pt-3 border-t border-border">
                                    <p className="text-muted-foreground">{feature.expandedDescription}</p>
                                    <div className="mt-4 flex justify-end">
                                        <button className="text-accent hover:text-accent/80 text-sm font-medium">
                                            Learn more →
                                        </button>
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
