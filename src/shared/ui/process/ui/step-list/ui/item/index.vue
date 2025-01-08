<script setup lang="ts">
import type { UiProcessStepListItemProps } from "./types";

const props = withDefaults(defineProps<UiProcessStepListItemProps>(), {
  left: 0,
  right: 0,
});

const config = useRuntimeConfig();

const bgImg = computed(
  () => `url(${config.app.baseURL}icons/${props.icon}.svg)`
);
</script>

<template>
  <li
    :class="[
      'inline-flex',
      'items-center',
      'md:gap-4 max-md:gap-[0.4rem]',
      'whitespace-pre-wrap',
      'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
      'leading-[1.5rem] max-2xl:leading-small max-md:leading-small',
      'before:inline-flex',
      'md:before:h-[80px] max-md:before:h-8',
      'md:before:w-[80px] max-md:before:w-8',
      'before:items-center before:justify-center',
      'md:before:bg-[length:50px] max-md:before:bg-[length:1.2rem]',
      'before:bg-center before:bg-no-repeat before:bg-brand-100',
      'before:rounded-full',
      'before:rounded-full',
      'max-md:text-center max-md:flex-col max-md:justify-center max-md:w-full',
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
  margin-left: calc(v-bind(left) * 1rem);
  margin-right: calc(v-bind(right) * 1rem);
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
