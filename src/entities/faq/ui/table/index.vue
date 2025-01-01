<script setup lang="ts">
import {
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
} from "@tanstack/vue-table";
import type { FaqTableProps } from "./types";

const props = defineProps<FaqTableProps>();

const columnHelper = createColumnHelper<FaqDto>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("question", {
    header: () => "Вопрос",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("answer", {
    header: () => "Ответ",
    cell: (info) => info.getValue(),
  }),
];

const rerender = () => {};

const table = useVueTable({
  get data() {
    return props.items;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
});
</script>

<template>
  <UiTable :table="table" />
</template>
