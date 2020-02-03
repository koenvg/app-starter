export interface BaseNavigation {
  id: string;
  title: string;
}

export interface NavigationItem extends BaseNavigation {
  type: "item";
  url: string;
  selected?: (path: string) => boolean;
  icon?: JSX.Element;
}

export interface NavigationCollapse extends BaseNavigation {
  type: "collapse";
  icon: JSX.Element;
  children: NavigationItem[];
}

export interface NavigationGroup extends BaseNavigation {
  type: "group";
  children: NavigationItemsType;
}

export type NavigationItemsType = Array<NavigationItem | NavigationCollapse | NavigationGroup>;
