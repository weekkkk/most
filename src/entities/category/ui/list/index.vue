<script setup lang="ts">
import type { CategoryListProps } from "./types";

const props = defineProps<CategoryListProps>();

const emit = defineEmits<{
  (e: "update:modelValue", v: CategoryDto["id"]): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (v: CategoryDto["id"]) => emit("update:modelValue", v),
});
</script>

<template>
  <ul class="flex flex-wrap">
    <CategoryListItem
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      :active="value == item.id"
      @select="value = item.id"
    />
  </ul>
</template>
