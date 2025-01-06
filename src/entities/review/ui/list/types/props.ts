import type { ReviewListItemProps } from "../ui/item/types";

export type ReviewListProps = {
  items: (ReviewListItemProps & { id: ReviewDto["id"] })[];
};
