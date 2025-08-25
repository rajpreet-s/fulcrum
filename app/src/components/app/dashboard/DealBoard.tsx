"use client";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import DealColumn from "./DealColumn";
import { Column, Deal } from "@/types/types";
import { initialDealColumns } from "@/lib/dashboard-mock-data";

interface DealsBoardProps {
    className?: string;
}

const DealsBoard: React.FC<DealsBoardProps> = ({ className }) => {
    const [columns, setColumns] = useState<Column[]>(initialDealColumns);
    const [draggedDeal, setDraggedDeal] = useState<Deal | null>(null);
    const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);
    const { toast } = useToast();

    const handleDealDragStart = (e: React.DragEvent, deal: Deal) => {
        e.dataTransfer.setData("dealId", deal.id);
        setDraggedDeal(deal);

        // Find source column
        const sourceColumn = columns.find((col) => col.deals.some((d) => d.id === deal.id));

        if (sourceColumn) {
            setDragSourceColumn(sourceColumn.id);
            e.dataTransfer.setData("sourceColumnId", sourceColumn.id);
        }
    };

    const handleDealDragEnd = () => {
        setDraggedDeal(null);
        setDragSourceColumn(null);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDragLeave = (e: React.DragEvent) => {
        // Handle drag leave logic if needed
    };

    const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
        e.preventDefault();

        const dealId = e.dataTransfer.getData("dealId");
        const sourceColumnId = e.dataTransfer.getData("sourceColumnId");

        if (!dealId || !sourceColumnId || sourceColumnId === targetColumnId) {
            return;
        }

        // Update columns state
        const newColumns = columns.map((column) => {
            // Remove deal from source column
            if (column.id === sourceColumnId) {
                return {
                    ...column,
                    deals: column.deals.filter((deal) => deal.id !== dealId),
                };
            }

            // Add deal to target column
            if (column.id === targetColumnId) {
                const dealToMove = columns
                    .find((col) => col.id === sourceColumnId)
                    ?.deals.find((deal) => deal.id === dealId);
                if (dealToMove) {
                    return {
                        ...column,
                        deals: [...column.deals, dealToMove],
                    };
                }
            }

            return column;
        });

        setColumns(newColumns);

        // Show a toast notification
        const targetColumn = columns.find((col) => col.id === targetColumnId);
        if (targetColumn && draggedDeal) {
            toast({
                title: "Deal moved",
                description: `${draggedDeal.brandName} moved to ${targetColumn.title}`,
            });
        }
    };

    const handleStatusChange = (dealId: string, newStatus: string) => {
        // This function can be used for programmatic status changes (not used in this implementation)
    };

    return (
        <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
            {columns.map((column) => (
                <DealColumn
                    key={column.id}
                    column={column}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDealDragStart={handleDealDragStart}
                    onDealDragEnd={handleDealDragEnd}
                    onStatusChange={handleStatusChange}
                />
            ))}
        </div>
    );
};

export default DealsBoard;
