interface Dropdownitems {
  title: string;
  path?: string;
  subRoutes?: Dropdownitems[];
}

export interface NavItemsProps {
  navRoutes: Dropdownitems[];
}
