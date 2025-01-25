<script setup lang="ts">
import type { CategoryListItemProps } from "./types";

const props = defineProps<CategoryListItemProps>();

const emit = defineEmits<{
  (e: "select", id: string): void;
}>();
</script>

<template>
  <li>
    <button
      class="py-[1.2rem] max-2xl:py-[1rem] max-md:py-[.75rem] px-[2rem] max-2xl:px-[2rem] max-md:px-[1rem] text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem] leading-small max-2xl:leading-control max-md:leading-small rounded-[5rem] max-2xl:rounded-[1.9rem] bg-[#F5F5F5] lowercase"
      :class="{
        'hover:bg-brand-50 hover:text-[#FFF]': !active,
        '!bg-[#0094FF] text-[#FFF]': active,
      }"
      @click="emit('select', id)"
    >
      {{ name }}
    </button>
  </li>
</template>
