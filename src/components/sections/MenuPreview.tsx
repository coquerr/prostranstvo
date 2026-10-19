import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Divider from "@/components/ui/Divider";
import SectionHeading from "@/components/ui/SectionHeading";
import Ornament from "@/components/ui/Ornament";
import MenuItemRow from "@/components/menu/MenuItemRow";
import { MENU } from "@/data/menu";

export default function MenuPreview() {
  // Берём по несколько блюд из первых двух категорий для превью
  const salads = MENU[0];
  const hotDishes = MENU[1];

  const saladItems = salads.items ?? [];
  const hotDishItems = hotDishes.items ?? [];

  return (
    <section id="menu" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <Ornament className="left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading subtitle="Меню" title="Избранное" />
        </Reveal>

        <Reveal className="mt-8">
          <Divider />
        </Reveal>

        <div className="mt-16 grid gap-16 sm:grid-cols-2 sm:gap-12">
          <div>
            <h3 className="text-xl font-medium tracking-wide text-gold-light sm:text-2xl">
              {salads.title}
            </h3>
            <div className="mt-4 divide-y divide-border/40">
              {saladItems.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium tracking-wide text-gold-light sm:text-2xl">
              {hotDishes.title}
            </h3>
            <div className="mt-4 divide-y divide-border/40">
              {hotDishItems.slice(0, 4).map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/menu"
            className="border border-gold/50 px-10 py-3 text-xs uppercase tracking-[0.3em] text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            Полное меню
          </Link>
        </div>
      </Container>
    </section>
  );
}