import type { UiHeaderNavItemProps } from "../../nav/ui/item";

type NavItem = UiHeaderNavItemProps;

export type UiHeaderProps = {
  startNavItems: NavItem[];
  endNavItems: NavItem[];
};
