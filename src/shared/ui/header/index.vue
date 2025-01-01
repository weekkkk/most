<script lang="ts" setup>
import type { UiHeaderProps } from "./types";

const props = defineProps<UiHeaderProps>();
</script>

<template>
  <header
    :class="[
      'inset-x-0 top-0 flex items-center justify-between',
      'md:pt-14 max-md:pt-8',
      'md:px-14 max-md:px-3',
      'absolute z-50',
    ]"
  >
    <UiNav class="max-md:hidden w-full" :items="startNavItems" />
    <img src="/icons/logo.svg" alt="Logo" />
    <UiNav class="max-md:hidden w-full" :items="endNavItems" right />
    <UiBurder
      class="hidden max-md:inline-block"
      :items="[...startNavItems, ...endNavItems]"
    />
  </header>
</template>
