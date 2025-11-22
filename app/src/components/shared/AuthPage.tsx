"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon, Grid2x2PlusIcon, InstagramIcon } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { productName } from "@/constants/common.constants";

interface AuthPageProps {
    title: string;
    description: string;
    apiEndpoint: string;
    successRedirect: string;
    buttonText: string;
}

export function AuthPage({ title, description, apiEndpoint, successRedirect, buttonText }: AuthPageProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const res = await apiFetch(apiEndpoint, {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                router.push(successRedirect);
            } else {
                const data = await res.json();
                alert(data.error || "An error occurred");
            }
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("An unexpected error occurred");
            }
        }
    }

    return (
        <div className="relative md:h-screen md:overflow-hidden w-full">
            <Particles color="#666666" quantity={120} ease={20} className="absolute inset-0" />
            <div aria-hidden className="absolute inset-0 isolate -z-10 contain-strict">
                <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
            </div>
            <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4">
                <Button variant="ghost" className="absolute top-4 left-4" asChild>
                    <Link href="/">
                        <ChevronLeftIcon className="me-1 size-4" />
                        Home
                    </Link>
                </Button>

                <div className="mx-auto space-y-4 sm:w-sm">
                    <div className="flex items-center gap-2">
                        <Grid2x2PlusIcon className="size-6" />
                        <p className="text-xl font-semibold">{productName}</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="font-heading text-2xl font-bold tracking-wide">{title}</h1>
                        <p className="text-muted-foreground text-base">{description}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                            {buttonText}
                        </Button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Button type="button" size="lg" variant="outline" className="w-full">
                            <InstagramIcon className="me-2 size-4" />
                            Instagram
                        </Button>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm">
                        By clicking continue, you agree to our{" "}
                        <Link href="/terms" className="hover:text-primary underline underline-offset-4">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="hover:text-primary underline underline-offset-4">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
