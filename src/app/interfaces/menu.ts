export interface Menu {
  id: string;
  name: string;
  location?: {
    lat: number,
    lng: number
  };
  ownerId: string;
  createdAt?: Date;
  items: MenuItem[]
}

export interface MenuItem {
  id: string;
  name: string;
  addons: MenuItemAddon[];
  price: number | MenuItemSizeMap;
}

export interface MenuItemAddon {
  id: string;
  name: string;
  price?: number;
}

export interface MenuItemSize {
  id: string;
  label: string;
  price: number;
}

export interface MenuItemSizeMap {
  [id: string]: MenuItemSize
}
