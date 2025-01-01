<script lang="ts" setup>
import type { UiButtonProps } from "./types";

const props = withDefaults(defineProps<UiButtonProps>(), { size: "medium" });

const emit = defineEmits<{
  (e: "click"): void;
}>();

const slots = useSlots();
</script>

<template>
  <button
    @click="emit('click')"
    :class="[
      'inline-flex justify-center items-center md:gap-[10px] max-md:gap-[0.4rem]',
      {
        'bg-brand-100 text-default': color !== 'white',
        'bg-default text-brand-100': color === 'white',
      },
      'text-[20px] max-md:text-[0.7rem]',
      {
        'md:leading-control max-md:leading-[0.25rem]': !img,
      },
      {
        'p-[30px] md:px-[80px] max-md:px-12 md:rounded-[calc(30px+(20px/2))] max-md:rounded-[calc(30px+(0.25rem/2))]':
          !img && size === 'medium',
        'md:p-[18px] max-md:p-[0.4rem] md:rounded-[calc(18px+(24px/2))] max-md:rounded-[calc(0.4rem+(24px/2))]':
          img && size === 'medium',
        'md:p-[30px] max-md:p-[1.8rem] md:rounded-[calc(30px+(24px/2))] max-md:rounded-[calc(1.8rem+(24px/2))]':
          img && size === 'large',
        'md:px-[40px] max-md:px-[1.25rem]':
          img && size === 'large' && slots.default,
        'md:px-[20px] md:py-[10px] max-md:p-3 md:rounded-[calc(20px+(20px/2))] max-md:rounded-[calc(20px+(0.25rem/2))]':
          !img && size === 'small',
      },
      { 'cursor-default': readonly },
      'disabled:bg-second-50 disabled:text-common',
      { 'hover:bg-brand-50 hover:text-common': !readonly },
      'transition-all',
    ]"
    :disabled="disabled"
    :readonly="readonly"
  >
    <figure v-if="img" class="h-[24px] w-[24px]">
      <img class="object-contain w-full h-full" :src="img" alt="" />
    </figure>
    <slot />
  </button>
</template>
