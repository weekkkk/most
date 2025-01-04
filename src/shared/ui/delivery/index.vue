<script setup lang="ts">
import type { UiDeliveryStepListItemProps } from "./ui/step-list";
import type { UiDeliveryProps } from "./types";

const props = defineProps<UiDeliveryProps>();

</script>

<template>
  <section class="md:px-[7.6rem] max-md:px-3">
    <main
      :class="['flex', 'justify-center']"
    >
      <UiDeliveryStepList :list="steps" />
    </main>

    <footer :class="['md:mt-28 max-md:mt-4', ' flex justify-center']">
      <UiButton class="max-md:w-full text-[1rem]">обратиться сейчас</UiButton>
    </footer>
  </section>
</template>
