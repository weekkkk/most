<script setup lang="ts">
import type { UiGuaranteesStepListItemProps } from "./item";

const props = defineProps<{
  list: UiGuaranteesStepListItemProps[];
}>();
</script>

<template>
  <ul
    :class="[
      'inline-flex flex-col justify-center gap-40 max-2xl:gap-[5rem] max-md:gap-12',
    ]"
  >
    <UiGuaranteesStepListItem
      v-for="li in list"
      :key="li.icon"
      v-bind="{ ...li }"
    />
  </ul>
</template>
