"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/types/menu";
import MenuItemModal from "@/components/menu/MenuItemModal";

interface MenuItemCardProps {
  item: MenuItem;
  priority?: boolean;
}

export default function MenuItemCard({ item, priority = false }: MenuItemCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAvailable = item.available !== false;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={`group relative flex flex-col border border-border/60 bg-surface/40 text-left transition-colors duration-300 hover:border-gold/60 ${
          isAvailable ? "" : "opacity-50"
        }`}
      >
        <div className="relative aspect-square w-full overflow-hidden border-b border-border/60">
          {item.image ? (
            <Image
              src={item.image}
              alt={`${item.name} — ресторан «ПРОСТРАНСТВО», Кизляр`}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-surface">
              <span className="font-heading text-5xl text-gold/25">
                {item.name.charAt(0)}
              </span>
            </div>
          )}

          {!isAvailable && (
            <span className="absolute right-3 top-3 border border-gold/40 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
              Нет в наличии
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <h4 className="text-base font-medium tracking-wide text-beige sm:text-lg">
            {item.name}
          </h4>

          {item.note && (
            <span className="text-xs italic text-muted">{item.note}</span>
          )}

          {item.description && (
            <p className="text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          )}

          {item.weight && (
            <span className="text-xs text-muted">{item.weight}</span>
          )}

          <div className="mt-auto flex items-baseline justify-between gap-3 pt-3">
            {item.size && (
              <span className="text-xs text-muted">{item.size}</span>
            )}
            <span className="ml-auto text-base text-gold sm:text-lg">
              {item.price} ₽
            </span>
          </div>
        </div>
      </button>

      {isModalOpen && (
        <MenuItemModal item={item} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}