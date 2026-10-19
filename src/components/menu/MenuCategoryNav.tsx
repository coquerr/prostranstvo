"use client";

import { useEffect, useState } from "react";

interface MenuCategoryNavProps {
  categories: { id: string; title: string }[];
}

export default function MenuCategoryNav({ categories }: MenuCategoryNavProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 140;
      let current = categories[0]?.id ?? "";

      for (const category of categories) {
        const el = document.getElementById(category.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = category.id;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <nav
      aria-label="Категории меню"
      className="sticky top-0 z-30 -mx-6 flex gap-2 overflow-x-auto border-y border-border/60 bg-background/95 px-6 py-4 backdrop-blur-sm sm:mx-0 sm:justify-center sm:gap-4 sm:border sm:px-4"
    >
      {categories.map((category) => (
        <a
          key={category.id}
          href={`#${category.id}`}
          className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
            activeId === category.id
              ? "border border-gold text-gold"
              : "border border-transparent text-muted hover:text-gold"
          }`}
        >
          {category.title}
        </a>
      ))}
    </nav>
  );
}