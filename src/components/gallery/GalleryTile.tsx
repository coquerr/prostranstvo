"use client";

import Image from "next/image";
import type { GalleryImage } from "@/types/gallery";

interface GalleryTileProps {
  image: GalleryImage;
  onClick: () => void;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

const orientationAspect: Record<GalleryImage["orientation"], string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function GalleryTile({
  image,
  onClick,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
}: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={image.alt}
      className={`group relative overflow-hidden rounded-sm border border-border ${orientationAspect[image.orientation]} lg:aspect-auto lg:h-full lg:w-full ${className} transition-all duration-500 hover:border-gold hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="pointer-events-none absolute inset-0 border border-gold/0 transition-colors duration-500 group-hover:border-gold/40" />
      <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold" />
    </button>
  );
}