"use client";

import { MenuCategory } from "@/types/menu";
import MenuItemCard from "@/components/menu/MenuItemCard";
import Divider from "@/components/ui/Divider";
import { useMenuLayout } from "@/context/MenuLayoutContext";

interface MenuCategoryBlockProps {
  category: MenuCategory;
  prioritizeFirstItem?: boolean;
}

export default function MenuCategoryBlock({
  category,
  prioritizeFirstItem = false,
}: MenuCategoryBlockProps) {
  const { columns } = useMenuLayout();
  const mobileGridClass = columns === 1 ? "grid-cols-1" : "grid-cols-2";

  return (
    <div id={category.id} className="scroll-mt-32">
      <h2 className="text-center text-3xl font-medium tracking-wide text-beige sm:text-4xl">
        {category.title}
      </h2>

      <Divider className="mt-6" />

      {category.items && (
        <div className={`mt-10 grid gap-6 ${mobileGridClass} sm:grid-cols-2 lg:grid-cols-3`}>
          {category.items.map((item, index) => (
            <MenuItemCard
              key={item.name}
              item={item}
              priority={prioritizeFirstItem && index === 0}
            />
          ))}
        </div>
      )}

      {category.subcategories && (
        <div className="mt-10 flex flex-col gap-14">
          {category.subcategories.map((sub, subIndex) => (
            <div key={sub.title}>
              <h3 className="text-center text-lg uppercase tracking-[0.2em] text-gold-light">
                {sub.title}
              </h3>
              <div className={`mt-6 grid gap-6 ${mobileGridClass} sm:grid-cols-2 lg:grid-cols-3`}>
                {sub.items.map((item, itemIndex) => (
                  <MenuItemCard
                    key={item.name}
                    item={item}
                    priority={prioritizeFirstItem && subIndex === 0 && itemIndex === 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}