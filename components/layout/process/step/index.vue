<script setup lang="ts">
import type { LayoutProcessStepProps } from "./interfaces";

const props = defineProps<LayoutProcessStepProps>();

const bgImg = computed(() => `url(icons/${props.icon}.svg)`);
</script>

<template>
  <li
    :class="[
      'inline-flex',
      'items-center',
      'gap-8',
      'whitespace-pre-wrap',
      'text-[2rem] leading-[1.5rem]',
      'before:inline-flex',
      'before:h-16 before:w-16',
      'before:items-center before:justify-center',
      `before:bg-[)]`,
      'before:bg-[length:2.5rem] before:bg-center before:bg-no-repeat before:bg-brand-100',
      'before:rounded-full',
      'before:rounded-full',
    ]"
    :style="{
      marginLeft: left && `${left}rem`,
      marginRight: right && `${right}rem`,
    }"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<style scoped>
li::before {
  background-image: v-bind(bgImg);
}
</style>
