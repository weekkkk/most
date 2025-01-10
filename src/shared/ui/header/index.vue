<script lang="ts" setup>
import type { UiHeaderProps } from "./types";

const props = defineProps<UiHeaderProps>();

const route = useRoute();

const logoColor = computed<"white" | "blue">(() =>
  route.meta.whitePage ? "blue" : "white"
);
</script>

<template>
  <header
    :class="[
      'inset-x-0 top-0 flex items-center justify-between',
      'md:pt-[3.5rem] max-md:pt-8',
      'md:px-[3.5rem] max-md:px-3',
      'absolute z-50',
    ]"
  >
    <UiNav class="max-md:hidden w-full" :items="startNavItems" />
    <img
      v-if="logoColor === 'white'"
      src="/icons/logo.svg"
      alt="Logo"
      :class="['h-[1.7rem] max-2xl:h-[1.187rem] max-md:h-[0.95rem]']"
    />
    <img
      v-else
      src="/icons/logo-blue.svg"
      alt="Logo"
      :class="['h-[1.7rem] max-2xl:h-[1.187rem] max-md:h-[0.95rem]']"
    />
    <UiNav class="max-md:hidden w-full" :items="endNavItems" right />
    <UiBurder
      class="hidden max-md:inline-block"
      :items="[...startNavItems, ...endNavItems]"
    />
  </header>
</template>
