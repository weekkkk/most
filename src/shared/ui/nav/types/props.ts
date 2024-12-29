import type { UiNavItemProps } from "../ui/item/types";

export type UiNavProps = {
  items: UiNavItemProps[];
  right?: boolean;
  noAbsolute?: boolean;
  col?: boolean;
};
