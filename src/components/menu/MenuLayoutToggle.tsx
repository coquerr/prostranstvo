"use client";

import { List, LayoutGrid } from "lucide-react";
import { useMenuLayout } from "@/context/MenuLayoutContext";

export default function MenuLayoutToggle() {
  const { columns, setColumns } = useMenuLayout();

  return (
    <div className="flex items-center gap-1 border border-border/60 p-1 sm:hidden">
      <button
        type="button"
        onClick={() => setColumns(1)}
        aria-label="Одна колонка"
        aria-pressed={columns === 1}
        className={`flex h-9 w-9 items-center justify-center transition-colors duration-300 ${
          columns === 1
            ? "bg-gold text-background"
            : "text-muted hover:text-gold"
        }`}
      >
        <List size={18} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={() => setColumns(2)}
        aria-label="Две колонки"
        aria-pressed={columns === 2}
        className={`flex h-9 w-9 items-center justify-center transition-colors duration-300 ${
          columns === 2
            ? "bg-gold text-background"
            : "text-muted hover:text-gold"
        }`}
      >
        <LayoutGrid size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
}