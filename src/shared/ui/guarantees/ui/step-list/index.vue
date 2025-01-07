<script setup lang="ts">
import type { UiGuaranteesStepListItemProps } from "./item";

const props = defineProps<{
  list: UiGuaranteesStepListItemProps[];
}>();
</script>

<template>
  <ul
    :class="[
      'inline-flex flex-col justify-center md:gap-40 max-md:gap-12 w-[50.5rem]',
    ]"
  >
    <UiGuaranteesStepListItem
      v-for="li in list"
      :key="li.icon"
      v-bind="{ ...li }"
    />
  </ul>
</template>
