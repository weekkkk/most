import { useVueTable } from "@tanstack/vue-table";

export type UiTableProps<T> = {
  table: ReturnType<typeof useVueTable<T>>;
};
