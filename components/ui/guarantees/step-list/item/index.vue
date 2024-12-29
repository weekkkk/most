<script setup lang="ts">
import type { UiGuaranteesStepListItemProps } from "./types";

const props = defineProps<UiGuaranteesStepListItemProps>();

const bgImg = computed(() => `url(/icons/${props.icon}.svg)`);
</script>

<template>
  <li
    :class="[
      'inline-flex',
      'flex-col',
      'items-center',
      'md:gap-8 max-md:gap-[0.4rem]',
      'whitespace-pre-wrap',
      'md:text-[4rem]',
      'md:leading-none max-md:leading-control',
      'before:inline-flex',
      'md:before:h-[200px] max-md:before:h-8',
      'md:before:w-[200px] max-md:before:w-8',
      'before:items-center before:justify-center',
      'md:before:bg-[length:100px] max-md:before:bg-[length:1.2rem]',
      'before:bg-center before:bg-no-repeat before:bg-common',
      'before:rounded-full',
      'before:rounded-full',
      'max-md:text-center max-md:flex-col max-md:justify-center max-md:w-full',
      'text-center'
    ]"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<style scoped>
li {
  margin: 0;
}
@media (max-width: 768px) {
  li {
    margin: 0 !important;
  }
}
li::before {
  background-image: v-bind(bgImg);
}
</style>
