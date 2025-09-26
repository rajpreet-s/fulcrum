"use client";
import Link from "next/link";
import { ArrowRight, BarChart3, FileText, CreditCard, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/marketing/Footer";
import FeatureCard from "@/components/marketing/FeatureCard";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-20 text-center cosmic-grid">
                    <div className="mx-auto max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-balance">
                            Look Professional. <span className="text-primary">Get Paid Faster.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
                            The operating system for creator solopreneurs. Manage brand deals, track deliverables, and
                            generate professional reports that get you paid.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6" asChild>
                                <Link href="/dashboard">
                                    Start for Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                                <Link href="/demo">Watch Demo</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Everything you need to succeed</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Streamline your creator business with professional tools designed for solopreneurs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={BarChart3}
                            title="Deal Dashboard"
                            description="Visualize all your brand partnerships in a clean Kanban board. Track progress from pitch to payment with ease."
                        />
                        <FeatureCard
                            icon={FileText}
                            title="Proof-of-Performance Reporting"
                            description="Generate professional reports that showcase your work and prove ROI to brands. Get paid faster with compelling evidence."
                        />
                        <FeatureCard
                            icon={CreditCard}
                            title="Payment & Invoicing Ledger"
                            description="Keep track of all payments, invoices, and financial milestones. Never lose money on forgotten follow-ups."
                        />
                    </div>
                </section>

                {/* Social Proof Section */}
                <section className="bg-muted/30 py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Trusted by creators worldwide</h2>
                            <p className="text-xl text-muted-foreground">
                                Join thousands of creators who&apos;ve streamlined their business with Fulcrum.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Sarah Johnson",
                                    role: "Fashion Creator",
                                    content:
                                        "Fulcrum helped me turn my chaotic brand partnerships into a professional business. I've increased my rates by 40% just by looking more organized!",
                                    rating: 5,
                                },
                                {
                                    name: "Mike Chen",
                                    role: "Tech Reviewer",
                                    content:
                                        "The reporting feature is a game-changer. Brands love seeing the professional reports, and I get paid 2x faster now.",
                                    rating: 5,
                                },
                                {
                                    name: "Emma Rodriguez",
                                    role: "Lifestyle Blogger",
                                    content:
                                        "Finally, a tool built specifically for creators. It's like having a business manager in my pocket.",
                                    rating: 5,
                                },
                            ].map((testimonial, index) => (
                                <Card key={index} className="cosmic-card">
                                    <CardContent className="pt-6">
                                        <div className="flex mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <p className="text-muted-foreground mb-4 italic">{testimonial.content}</p>
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 py-20 text-center">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold mb-4">Ready to professionalize your creator business?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join thousands of creators who&apos;ve transformed their brand partnerships into
                            professional revenue streams.
                        </p>
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>Free to start</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>Setup in 5 minutes</span>
                            </div>
                        </div>
                        <Button size="lg" className="text-lg px-12 py-6" asChild>
                            <Link href="/dashboard">
                                Get Started Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
