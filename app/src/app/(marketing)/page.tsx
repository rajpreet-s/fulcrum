"use client";
import FeatureCard from "@/components/marketing/FeatureCard";
import { Button } from "@/components/ui/button";

export default function Homepage() {
    return (
        <div>
            <section className="text-center py-20">
                <h1 className="text-5xl font-bold">Look Professional. Get Paid Faster.</h1>
                <p className="text-xl mt-4">
                    Fulcrum is the all-in-one platform for creators to manage their brand deals.
                </p>
                <Button size="lg" className="mt-8">
                    Start for Free
                </Button>
            </section>
            <section className="grid grid-cols-3 gap-8">
                <FeatureCard
                    title="Deal Dashboard"
                    description="Manage all your brand deals in one place."
                    visual={<div className="bg-gray-200 h-40 w-full" />}
                />
                <FeatureCard
                    title="Proof-of-Performance Reporting"
                    description="Generate beautiful reports to send to brands."
                    visual={<div className="bg-gray-200 h-40 w-full" />}
                />
                <FeatureCard
                    title="Payment & Invoicing Ledger"
                    description="Track all your payments and invoices."
                    visual={<div className="bg-gray-200 h-40 w-full" />}
                />
            </section>
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold">What Creators Are Saying</h2>
                <p className="mt-4">"Fulcrum has been a game-changer for my business." - Creator A</p>
            </section>
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold">Ready to take your business to the next level?</h2>
                <Button size="lg" className="mt-8">
                    Sign Up Now
                </Button>
            </section>
        </div>
    );
}
