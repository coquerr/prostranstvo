export interface MenuItem {
  name: string;
  price: string;
  size?: string;
  note?: string;
  description?: string;
  composition?: string;
  weight?: string;
  image?: string;
  available?: boolean;
}

export interface MenuSubcategory {
  title: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  items?: MenuItem[];
  subcategories?: MenuSubcategory[];
}