"use client";
import React, { useState, useRef } from "react";
import { Deal } from "@/types/types";

interface DealCardProps {
    deal: Deal;
    onDragStart: (e: React.DragEvent, deal: Deal) => void;
    onDragEnd: () => void;
    onStatusChange: (dealId: string, newStatus: string) => void;
}

const DealCard: React.FC<DealCardProps> = ({ deal, onDragStart, onDragEnd, onStatusChange }) => {
    const [isDragging, setIsDragging] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleDragStart = (e: React.DragEvent) => {
        setIsDragging(true);

        // Add ghost image effect
        if (cardRef.current) {
            const ghostImage = cardRef.current.cloneNode(true) as HTMLDivElement;
            ghostImage.style.position = "absolute";
            ghostImage.style.top = "-1000px";
            ghostImage.style.opacity = "0.8";
            document.body.appendChild(ghostImage);

            // Clean up the ghost element after drag
            setTimeout(() => {
                document.body.removeChild(ghostImage);
            }, 0);
        }

            onDragStart(e, deal);
        };

    const handleDragEnd = () => {
        setIsDragging(false);
        onDragEnd();
    };

    // Generate tag background class using only grey/white colors
    const getStatusClass = (status: string) => {
        switch (status) {
            case "active":
                return "bg-blue-500/20 text-blue-600 border-blue-500";
            case "invoiced":
                return "bg-amber-500/20 text-amber-600 border-amber-500";
            case "paid":
                return "bg-green-500/20 text-green-600 border-green-500";
            default:
                return "bg-muted/50 text-muted-foreground border border-border";
        }
    };

    return (
        <div
            ref={cardRef}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className={`task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-44 flex flex-col cursor-pointer ${
                isDragging ? "dragging" : ""
            }`}
        >
            {/* Header with tag and due date */}
            <div className="flex justify-between items-start mb-3 flex-shrink-0">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusClass(deal.status)}`}>
                    {deal.status}
                </span>
                <span className="text-muted-foreground text-xs">{deal.dueDate}</span>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col min-h-0">
                {/* Title and description */}
                <div className="flex-1 mb-3">
                    <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">
                        {deal.brandName}
                    </h5>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{deal.campaignName}</p>
                </div>

                {/* Footer progress */}
                <div className="flex justify-between items-center flex-shrink-0 mt-auto">
                    <ul className="text-xs text-muted-foreground space-y-1">
                        {deal.deliverables.map((deliverable) => (
                            <li key={deliverable.id} className="flex items-center gap-1">
                                {deliverable.completed ? (
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 12L10 17L19 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 12H16"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                                {deliverable.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DealCard;
