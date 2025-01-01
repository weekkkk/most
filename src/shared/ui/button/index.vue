<script lang="ts" setup>
import type { UiButtonProps } from "./types";

const props = withDefaults(defineProps<UiButtonProps>(), { size: "medium" });

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    @click="emit('click')"
    :class="[
      {
        'bg-brand-100 text-default': color !== 'white',
        'bg-default text-brand-100': color === 'white',
      },
      'max-md:text-[0.7rem]',
      {
        'md:leading-control max-md:leading-[0.25rem]': !img,
        'inline-flex': img,
      },
      'rounded-[4.2rem]',
      {
        'p-[30px] md:px-[80px] max-md:px-12': !img && size === 'medium',
        'md:p-[18px] max-md:p-[0.4rem]':
          img && (size === 'medium' || size === 'small'),
        'md:p-[30px] max-md:p-[0.4rem]': img && size === 'large',
      },
      { 'cursor-default': readonly },
      'disabled:bg-second-50 disabled:text-common',
      { 'hover:bg-brand-50 hover:text-common': !readonly },
      'transition-all',
      {
        'md:px-[20px] md:py-[10px] max-md:p-3': size === 'small',
      },
    ]"
    :disabled="disabled"
    :readonly="readonly"
  >
    <slot>
      <figure class="h-[24px] w-[24px]">
        <img
          class="object-contain w-full h-full"
          v-if="img"
          :src="img"
          alt=""
        />
      </figure>
    </slot>
  </button>
</template>
