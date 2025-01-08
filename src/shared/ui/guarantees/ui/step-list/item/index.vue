<script setup lang="ts">
import type { UiGuaranteesStepListItemProps } from "./types";

const props = defineProps<UiGuaranteesStepListItemProps>();

const config = useRuntimeConfig();

const bgImg = computed(
  () => `url(${config.app.baseURL}icons/${props.icon}.svg)`
);
</script>

<template>
  <li
    :class="[
      'inline-flex',
      'flex-col',
      'items-center',
      'md:gap-10 max-md:gap-4',
      'whitespace-pre-wrap',
      'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
      '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
      'md:leading-none max-md:leading-[1.5rem]',
      'before:inline-flex',
      'before:h-[10rem] max-2xl:before:h-[7.5rem] max-md:before:h-[3rem]',
      'before:w-[10rem] max-2xl:before:w-[7.5rem] max-md:before:w-[3rem]',
      'before:items-center before:justify-center',
      'before:bg-[length:5rem] max-2xl:before:bg-[length:3.6rem] max-md:before:bg-[length:1.2rem]',
      'before:bg-center before:bg-no-repeat before:bg-common',
      'before:rounded-full',
      'before:rounded-full',
      'max-md:text-center max-md:flex-col max-md:justify-center max-md:w-full',
      'text-center',
    ]"
  >
    <slot>
      <span class="max-md:hidden">
        {{ label }}
      </span>
      <span class="md:hidden">
        {{ mdLabel || label }}
      </span>
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
