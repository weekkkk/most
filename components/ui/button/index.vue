<script lang="ts" setup>
const props = defineProps<{
  disabled?: boolean;
  img?: string;
  readonly?: boolean;
  size?: "small" | "medium";
  color?: "white";
}>();

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
      'md:leading-control max-md:leading-[0.25rem]',
      'rounded-[4.2rem]',
      {
        'p-[30px] md:px-[80px] max-md:px-12': !img && size !== 'small',
        'md:p-[18px] max-md:p-[0.4rem]': img,
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
      <img v-if="img" height="24" width="24" :src="img" alt="" />
    </slot>
  </button>
</template>
