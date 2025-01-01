<script setup lang="ts">
import type { UiGuaranteesStepListItemProps } from "./item";

const props = defineProps<{
  list: UiGuaranteesStepListItemProps[];
}>();
</script>

<template>
  <ul
    :class="[
      'inline-flex flex-col justify-center gap-24 w-[50.5rem]',
    ]"
  >
    <UiGuaranteesStepListItem
      v-for="li in list"
      :key="li.icon"
      v-bind="{ ...li }"
    />
  </ul>
</template>
