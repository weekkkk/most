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
    <div>
      <NuxtLink
        :class="[
          'inline-block',
          'relative',
          'min-w-[8.95rem] max-2xl:min-14w-[6.25rem] max-md:min-w-[4.95rem]',
          'pb-[calc((34/(179/100))*1%)]',
        ]"
        to="/"
      >
        <img
          class="absolute object-cover w-full h-full"
          v-if="logoColor === 'white'"
          src="/icons/logo.svg"
          alt="Logo"
        />
        <img
          class="absolute object-cover w-full h-full"
          v-else
          src="/icons/logo-blue.svg"
          alt="Logo"
        />
      </NuxtLink>
    </div>
    <UiNav class="max-md:hidden w-full" :items="endNavItems" right />
    <UiBurder
      class="hidden max-md:inline-block"
      :items="[...startNavItems, ...endNavItems]"
    />
  </header>
</template>
