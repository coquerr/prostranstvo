"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { MenuItem } from "@/types/menu";

interface MenuItemModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function MenuItemModal({ item, onClose }: MenuItemModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isAvailable = item.available !== false;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <div
        className={`relative max-h-[85vh] w-full max-w-4xl overflow-y-auto border border-gold/40 bg-surface transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <span className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
        <span className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors duration-300 hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X size={20} />
        </button>

        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60">
          {item.image ? (
            <Image
              src={item.image}
              alt={`${item.name} — ресторан «ПРОСТРАНСТВО», Кизляр`}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-surface">
              <span className="font-heading text-7xl text-gold/25">
                {item.name.charAt(0)}
              </span>
            </div>
          )}

          {!isAvailable && (
            <span className="absolute right-4 top-4 border border-gold/40 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
              Нет в наличии
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-10">
          <h3 className="font-heading text-2xl text-beige sm:text-3xl">
            {item.name}
          </h3>

          {item.note && (
            <span className="text-sm italic text-muted">{item.note}</span>
          )}

          {item.description && (
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          )}

          {item.composition && (
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.2em] text-gold/70">
                Состав
              </span>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {item.composition}
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 border-t border-border/60 pt-4 text-sm text-muted">
            {item.weight && <span>{item.weight}</span>}
            {item.size && <span>{item.size}</span>}
          </div>

          <span className="mt-2 text-2xl text-gold sm:text-3xl">
            {item.price} ₽
          </span>
        </div>
      </div>
    </div>
  );
}