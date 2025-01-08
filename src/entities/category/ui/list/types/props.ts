import type { CategoryListItemProps } from "../ui/item/types";

export type CategoryListProps = {
  items: CategoryDto[];
  modelValue: CategoryDto["id"];
};
