<script setup lang="ts">
import type { UiProcessStepListItemProps } from "./item";

const props = defineProps<{
  list: UiProcessStepListItemProps[];
  right?: boolean;
}>();
</script>

<template>
  <ul
    :class="[
      'inline-flex flex-col',
      'md:gap-[6.5rem] max-md:gap-8',
      { 'items-start': !right, 'items-end': right },
    ]"
  >
    <UiProcessStepListItem
      v-for="li in list"
      :key="li.icon"
      v-bind="{ ...li }"
    />
  </ul>
</template>
