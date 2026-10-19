"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types/gallery";
import { useLightboxControls } from "@/hooks/useLightboxControls";

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isOpen = activeIndex !== null;
  const [isVisible, setIsVisible] = useState(false);

  const { handleTouchStart, handleTouchEnd } = useLightboxControls({
    isOpen,
    onClose,
    onPrev,
    onNext,
  });

  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    setIsVisible(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen || activeIndex === null) return null;

  const activeImage = images[activeIndex];

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Закрыть"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-6 sm:top-6"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          aria-label="Предыдущее фото"
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:left-6"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div
        className={`relative flex h-[80vh] w-[90vw] items-center justify-center transition-all duration-300 sm:w-[80vw] ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-full w-full">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label="Следующее фото"
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-6"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {images.length > 1 && (
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-sm tracking-wide text-muted sm:bottom-6">
          {activeIndex + 1} / {images.length}
        </span>
      )}
    </div>
  );
}