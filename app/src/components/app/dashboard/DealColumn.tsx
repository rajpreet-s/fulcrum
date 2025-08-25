"use client";
import React, { useState } from "react";
import DealCard from "./DealCard";
import { Column, Deal } from "@/types/types";

interface DealColumnProps {
    column: Column;
    onDrop: (e: React.DragEvent, columnId: string) => void;
    onDragOver: (e: React.DragEvent) => void;
    onDragLeave: (e: React.DragEvent) => void;
    onDealDragStart: (e: React.DragEvent, deal: Deal) => void;
    onDealDragEnd: () => void;
    onStatusChange: (dealId: string, newStatus: string) => void;
}

const DealColumn: React.FC<DealColumnProps> = ({
    column,
    onDrop,
    onDragOver,
    onDragLeave,
    onDealDragStart,
    onDealDragEnd,
    onStatusChange,
}) => {
    const [isOver, setIsOver] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsOver(true);
        onDragOver(e);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        setIsOver(false);
        onDragLeave(e);
    };

    const handleDrop = (e: React.DragEvent) => {
        setIsOver(false);
        onDrop(e, column.id);
    };

    const getStatusClass = (status: string) => {
        console.log(status);
        switch (status) {
            case "active":
                return "bg-blue-500/20 text-blue-600 border-blue-500";
            case "awaiting-payment":
                return "bg-amber-500/20 text-amber-600 border-amber-500";
            case "completed":
                return "bg-green-500/20 text-green-600 border-green-500";
            default:
                return "bg-muted/50 text-muted-foreground border border-border";
        }
    };
    return (
        <div
            className={`flex flex-col w-72 min-w-72 rounded-lg border border-border backdrop-blur-sm transition-all duration-300 ${
                isOver ? "column-highlight border-muted/50" : "bg-card/50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="p-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-muted"></span>
                    <h4 className="font-medium text-sm text-foreground">{column.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusClass(column.id.toLowerCase())}`}>
                        {column.deals.length}
                    </span>
                </div>
                <div className="text-muted-foreground cursor-pointer hover:text-foreground/80">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 12V12.01M8 12V12.01M16 12V12.01"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="p-2 flex-1 space-y-2 overflow-auto">
                {column.deals.map((deal) => (
                    <DealCard
                        key={deal.id}
                        deal={deal}
                        onDragStart={onDealDragStart}
                        onDragEnd={onDealDragEnd}
                        onStatusChange={onStatusChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default DealColumn;
