<script setup lang="ts">
import type { LayoutProcessStepProps } from "./interfaces";

const props = withDefaults(defineProps<LayoutProcessStepProps>(), {
  left: 0,
  right: 0,
});

const bgImg = computed(() => `url(/most/icons/${props.icon}.svg)`);
</script>

<template>
  <li
    :class="[
      'inline-flex',
      'items-center',
      'md:gap-8 max-md:gap-[0.4rem]',
      'whitespace-pre-wrap',
      'md:text-[2rem]',
      'md:leading-[1.5rem] max-md:leading-control',
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
      {{ label }}
    </slot>
  </li>
</template>

<style scoped>
li {
  margin: 0 calc(v-bind(right) * 1rem) 0 calc(v-bind(left) * 1rem);
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
