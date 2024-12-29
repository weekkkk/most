<script setup lang="ts">
import type { UiGuaranteesStepListItemProps } from "./item";

const props = defineProps<{
  list: UiGuaranteesStepListItemProps[];
}>();
</script>

<template>
  <ul
    :class="[
      'inline-flex flex-col justify-center gap-y-10',
    ]"
  >
    <UiGuaranteesStepListItem
      v-for="li in list"
      :key="li.icon"
      v-bind="{ ...li }"
    />
  </ul>
</template>
