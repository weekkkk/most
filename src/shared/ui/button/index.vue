<script lang="ts" setup>
import type { UiButtonProps } from "./types";

const props = withDefaults(defineProps<UiButtonProps>(), { size: "medium" });

const emit = defineEmits<{
  (e: "click"): void;
}>();

const slots = useSlots();

const config = useRuntimeConfig();

const imgSrc = computed(() => `${config.app.baseURL}${props.img}`);
</script>

<template>
  <button
    @click="emit('click')"
    :class="[
      'inline-flex justify-center items-center md:gap-[0.5rem] max-md:gap-[0.4rem]',
      {
        'bg-brand-100 text-default': color !== 'white',
        'bg-default text-brand-100': color === 'white',
      },
      'text-[1rem] max-md:text-[0.7rem]',
      {
        'md:leading-control max-md:leading-[0.25rem]': !img,
      },
      {
        'p-[1.5rem] md:px-[4rem] max-md:px-12 md:rounded-[calc(1.5rem+(1rem/2))] max-md:rounded-[calc(1.5rem+(0.25rem/2))]':
          !img && size === 'medium',
        'md:p-[0.9rem] max-md:p-[0.4rem] md:rounded-[calc(18px+(24px/2))] max-md:rounded-[calc(0.4rem+(24px/2))]':
          img && size === 'medium',
        'md:p-[1.5rem] max-md:p-[1.8rem] max-md:py-[1.4rem] md:rounded-[calc(1.5rem+(24px/2))] max-md:rounded-[calc(1.8rem+(24px/2))]':
          img && size === 'large',
        'md:px-[2rem] max-md:px-[1.25rem]':
          img && size === 'large' && slots.default,
        'md:px-[1rem] md:py-[0.5rem] max-md:p-3 md:rounded-[calc(1rem+(1rem/2))] max-md:rounded-[calc(1rem+(0.25rem/2))]':
          !img && size === 'small',
      },
      { 'cursor-default': readonly },
      'disabled:bg-second-50 disabled:text-common',
      { 'hover:bg-brand-50 hover:text-common': !readonly },
      'transition-all',
    ]"
    :disabled="disabled"
    :readonly="readonly"
    :aria-label="img || !slots.default ? 'Icon' : ''"
  >
    <figure v-if="img" class="h-[1.2rem] w-[1.2rem]">
      <img class="object-contain w-full h-full" :src="imgSrc" alt="" />
    </figure>
    <slot />
  </button>
</template>
