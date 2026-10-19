import { useEffect, useRef } from "react";

interface UseLightboxControlsParams {
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function useLightboxControls({
  isOpen,
  onClose,
  onPrev,
  onNext,
}: UseLightboxControlsParams) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const deltaY = event.changedTouches[0].clientY - touchStartY.current;

    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
    const SWIPE_THRESHOLD = 50;

    if (isHorizontalSwipe && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        onPrev();
      } else {
        onNext();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  }

  return { handleTouchStart, handleTouchEnd };
}