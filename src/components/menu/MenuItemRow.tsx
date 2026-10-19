import { MenuItem } from "@/types/menu";

interface MenuItemRowProps {
  item: MenuItem;
}

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
      <span className="min-w-0 flex-1 basis-40 break-words text-sm text-beige sm:text-base">
        {item.name}
        {item.note && (
          <span className="ml-2 text-xs italic text-muted">{item.note}</span>
        )}
      </span>
      <span className="hidden flex-1 border-b border-dotted border-border/60 translate-y-[-4px] sm:block" />
      <span className="flex shrink-0 items-baseline gap-3 whitespace-nowrap text-sm sm:text-base">
        {item.size && <span className="text-xs text-muted">{item.size}</span>}
        <span className="text-gold">{item.price} ₽</span>
      </span>
    </div>
  );
}