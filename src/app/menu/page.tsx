import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import MenuCategoryBlock from "@/components/menu/MenuCategoryBlock";
import MenuCategoryNav from "@/components/menu/MenuCategoryNav";
import MenuLayoutToggle from "@/components/menu/MenuLayoutToggle";
import MenuPattern from "@/components/ui/MenuPattern";
import { MenuLayoutProvider } from "@/context/MenuLayoutContext";
import { MENU } from "@/data/menu";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Меню — ПРОСТРАНСТВО",
  description:
    "Полное меню ресторана «ПРОСТРАНСТВО» в Махачкале: салаты, горячие блюда, супы, десерты, пиццы и роллы с ценами.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Меню — ПРОСТРАНСТВО",
    description:
      "Салаты, горячие блюда, супы, десерты, пиццы и роллы ресторана «ПРОСТРАНСТВО» в Махачкале.",
    url: "/menu",
    type: "website",
  },
};

export default function MenuPage() {
  const categories = MENU.map((category) => ({
    id: category.id,
    title: category.title,
  }));

  return (
    <MenuLayoutProvider>
      <main className="relative isolate bg-background pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-40">
        <MenuPattern />
        <Container className="flex flex-col items-center text-center">
          <SectionHeading as="h1" subtitle="Ресторан «Пространство»" title="Меню" />
          <span className="mt-2 text-sm text-muted">{contactInfo.addressDisplay}</span>
        </Container>

        {/* Вынесли навигацию на верхний уровень main и дали ей sticky top-0 */}
        <div className="sticky top-0 z-30 mt-12">
          <Container>
            <MenuCategoryNav categories={categories} />
          </Container>
        </div>

        {/* Переключатель сетки остаётся в обычном потоке и уезжает при скролле */}
        <Container className="mt-3 flex justify-end sm:hidden">
          <MenuLayoutToggle />
        </Container>

        <div className="mt-12 flex flex-col gap-24 sm:mt-16 sm:gap-32">
          {MENU.map((category, index) => (
            <div key={category.id}>
              <Container>
                <MenuCategoryBlock category={category} prioritizeFirstItem={index === 0} />
              </Container>
              {index < MENU.length - 1 && (
                <Container className="mt-24 flex justify-center sm:mt-32">
                  <Divider className="w-full max-w-xs" />
                </Container>
              )}
            </div>
          ))}
        </div>
      </main>
    </MenuLayoutProvider>
  );
}