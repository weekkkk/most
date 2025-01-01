<script setup lang="ts">
import type { UiGuaranteesStepListItemProps } from "./ui/step-list";
import type { UiGuaranteesProps } from "./types";

const props = defineProps<UiGuaranteesProps>();

</script>

<template>
  <section class="md:px-[7.6rem] max-md:px-3">
    <main
      :class="['flex', 'justify-center']"
    >
      <UiGuaranteesStepList :list="steps" />
    </main>

    <footer :class="['md:mt-28 max-md:mt-4', ' flex justify-center']">
      <UiButton class="max-md:w-full">обратиться сейчас</UiButton>
    </footer>
  </section>
</template>
