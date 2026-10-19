"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import { GalleryTile } from "@/components/gallery/GalleryTile";
import { Lightbox } from "@/components/gallery/Lightbox";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import Reveal from "@/components/ui/Reveal";
import styles from "./AtmosphereGallery.module.css";

const tileClassNames = [
  styles.tileA,
  styles.tileB,
  styles.tileC,
  styles.tileD,
  styles.tileE,
  styles.tileF,
  styles.overlayG,
  styles.overlayH,
];

export function AtmosphereGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleOpen(index: number) {
    setActiveIndex(index);
  }

  function handleClose() {
    setActiveIndex(null);
  }

  function handlePrev() {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + galleryImages.length) % galleryImages.length;
    });
  }

  function handleNext() {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % galleryImages.length;
    });
  }

  return (
    <section id="atmosphere" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading as="h2" align="center" title="Атмосфера" />
        </Reveal>
        <Reveal>
          <Divider />
        </Reveal>

        <Reveal>
          <div className="relative mt-12 border border-border/40 p-3 sm:p-4 lg:p-6">
            <span className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
            <span className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />

            <div className={styles.grid}>
              {galleryImages.map((image, index) => (
                <GalleryTile
                  key={image.id}
                  image={image}
                  onClick={() => handleOpen(index)}
                  priority={index === 0}
                  className={tileClassNames[index] ?? ""}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}