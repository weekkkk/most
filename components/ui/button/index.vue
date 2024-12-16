<script lang="ts" setup>
const props = defineProps<{
  disabled?: boolean;
  img?: string;
  readonly?: boolean;
  size?: "small" | "medium";
}>();
</script>

<template>
  <button
    :class="[
      'bg-brand-100 text-default leading-control',
      'rounded-[4.2rem]',

      {
        'p-[30px]': !img,
        'p-[18px]': img,
        'px-[80px]': !img,
      },
      { 'cursor-default': readonly },
      { 'hover:bg-brand-50 hover:text-common': !readonly },
      'disabled:bg-second-50 disabled:text-common',
      'transition-all',
      'group',
      {
        'px-[20px] py-[10px]': size === 'small',
      },
    ]"
    :disabled="disabled"
    :readonly="readonly"
  >
    <slot>
      <img
        class="group-hover:invert transition-all"
        v-if="img"
        height="24"
        width="24"
        :src="img"
        alt=""
      />
    </slot>
  </button>
</template>
