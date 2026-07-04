export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export interface MenuData {
  restaurantName: string;
  categories: MenuCategory[];
  allergenNotice: { it: string; en: string };
  tableServiceCharge: number;
}
