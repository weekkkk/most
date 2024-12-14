<script lang="ts" setup>
const props = defineProps<{
  disabled?: boolean;
}>();
</script>

<template>
  <button
    class="bg-brand-100 text-default leading-control px-16 py-6 rounded-[4.2rem] transition-colors hover:bg-brand-50 hover:text-common disabled:bg-second-50 disabled:text-common"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
