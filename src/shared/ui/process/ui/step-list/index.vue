<script setup lang="ts">
import type { UiProcessStepListProps } from "./types";

const props = defineProps<UiProcessStepListProps>();
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
      v-for="step in steps"
      :key="step.icon"
      v-bind="{ ...step }"
    />
  </ul>
</template>
