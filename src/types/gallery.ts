export type GalleryOrientation = "landscape" | "portrait" | "square";

export type GallerySize = "small" | "medium" | "large";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  orientation: GalleryOrientation;
  size: GallerySize;
}