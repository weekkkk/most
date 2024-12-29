type PageLink = {
  label: string;
  to: string;
};

export type UiNavItemProps = PageLink & {
  children?: PageLink[];
  absolute?: boolean;
};
