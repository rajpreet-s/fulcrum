"use client";
import React, { useState, useEffect } from "react";
import TaskBoard from "@/components/app/TaskBoard";

const DashboardPreview = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Use IntersectionObserver to trigger animation when component enters viewport
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById("dashboard");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="dashboard" className="w-full py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
                <div
                    className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 transform ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                        Intuitive task management interface
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A powerful dashboard that adapts to how your team works
                    </p>
                </div>

                <div
                    className={`glass-card card-interactive relative overflow-hidden transition-all duration-1000 delay-300 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                    {/* Mock Dashboard */}
                    <div className="glass w-full">
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <div className="flex items-center gap-4">
                                <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                                    <div className="h-3 w-3 rounded-sm bg-accent"></div>
                                </div>
                                <span className="text-foreground font-medium">Marketing Campaign Q2</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="h-8 w-8 rounded-full bg-muted border-2 border-card"></div>
                                    <div className="h-8 w-8 rounded-full bg-muted/80 border-2 border-card"></div>
                                    <div className="h-8 w-8 rounded-full bg-muted/60 border-2 border-card"></div>
                                    <div className="h-8 w-8 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center text-xs text-accent">
                                        +3
                                    </div>
                                </div>

                                <div className="h-8 px-3 rounded-md bg-muted flex items-center justify-center text-foreground text-sm">
                                    Share
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="flex h-[500px] overflow-hidden">
                            {/* Sidebar */}
                            <div className="w-64 border-r border-border p-4 space-y-4 bg-card/50">
                                <div className="space-y-2">
                                    <div className="text-xs text-muted-foreground uppercase">Navigation</div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted text-foreground">
                                            <div className="h-3 w-3 rounded-sm bg-accent"></div>
                                            <span>Board</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                                            <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                                            <span>Timeline</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                                            <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                                            <span>Calendar</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                                            <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                                            <span>Files</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4">
                                    <div className="text-xs text-muted-foreground uppercase">Teams</div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                                            <div className="h-3 w-3 rounded-full bg-accent/80"></div>
                                            <span>Marketing</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                                            <div className="h-3 w-3 rounded-full bg-purple-400/80"></div>
                                            <span>Design</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                                            <div className="h-3 w-3 rounded-full bg-blue-400/80"></div>
                                            <span>Development</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-4 bg-background/50">
                                {/* Board Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium text-foreground">Tasks</h3>
                                        <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                            23
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 12V12.01M8 12V12.01M16 12V12.01"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17 9L17 17H9"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17 17L7 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-8 px-3 rounded-md bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                                            New Task
                                        </div>
                                    </div>
                                </div>

                                {/* Kanban Board - replaced static implementation with TaskBoard component */}
                                <TaskBoard className="h-[400px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
