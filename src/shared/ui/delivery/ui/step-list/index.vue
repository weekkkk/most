<script setup lang="ts">
import type { UiDeliveryStepListItemProps } from "./item";

const props = defineProps<{
  list: UiDeliveryStepListItemProps[];
}>();
</script>

<template>
  <ul
    :class="[
      'inline-flex flex-col justify-center gap-[3rem] md:gap-24 w-[17.25rem] md:w-[50.5rem]',
    ]"
  >
    <UiDeliveryStepListItem
      v-for="li in list"
      :key="li.icon"
      v-bind="{ ...li }"
    />
  </ul>
</template>
