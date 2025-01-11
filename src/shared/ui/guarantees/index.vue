<script setup lang="ts">
import type { UiGuaranteesProps } from "./types";

const props = defineProps<UiGuaranteesProps>();
</script>

<template>
  <section class="md:px-[7.6rem] max-md:px-3">
    <main :class="['flex', 'justify-center']">
      <UiGuaranteesStepList :list="steps" />
    </main>

    <footer
      :class="[
        'mt-[6.75rem] max-2xl:mt-[5rem] max-md:mt-8',
        'flex justify-center',
      ]"
    >
      <NuxtLink :to="{ path: '/', hash: '#feedback' }">
        <UiButton class="max-md:w-full">обратиться сейчас</UiButton>
      </NuxtLink>
    </footer>
  </section>
</template>
