type PageLink = {
  label: string;
  to: string;
};

export type UiPageLinkProps = PageLink & {
  children?: PageLink[];
  absolute?: boolean;
};
