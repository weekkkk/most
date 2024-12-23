import type { UiMenuProps } from "~/components/ui";

export interface LayoutHeaderMenuListItemProps
  extends UiMenuProps<string, { title: string; to: string }> {}
