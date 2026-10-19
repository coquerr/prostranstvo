"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { RESTAURANT } from "@/lib/constants";

const NAV_LINKS = [
  { label: "О нас", href: "/#about" },
  { label: "Меню", href: "/menu" },
  { label: "Контакты", href: "/#contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full py-6 sm:py-8">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.3em] text-beige transition-colors hover:text-gold"
          onClick={() => setIsOpen(false)}
        >
          Пространство
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.25em] text-muted transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="border border-gold/50 px-5 py-2 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            Меню
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Открыть меню"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-beige transition-colors hover:text-gold sm:hidden"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </Container>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-background/98 backdrop-blur-sm sm:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть меню"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-beige transition-colors hover:text-gold"
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-[0.25em] text-beige transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/menu"
            onClick={() => setIsOpen(false)}
            className="border border-gold/50 px-8 py-3 text-sm uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            Смотреть меню
          </Link>

          <a
            href={RESTAURANT.phoneHref}
            className="text-sm text-muted transition-colors hover:text-gold"
          >
            {RESTAURANT.phone}
          </a>
        </div>
      )}
    </header>
  );
}