<script setup lang="ts">
import type { ReviewListProps } from "./types";

const props = defineProps<ReviewListProps>();

const itemClasses = [
  "col-start-1 col-end-2 row-start-1 row-end-2",
  "col-start-1 col-end-2 row-start-2 row-end-3",
  "col-start-2 col-end-3 row-start-2 row-end-3",
  "col-start-3 col-end-4 row-start-1 row-end-2",
  "col-start-4 col-end-5 row-start-1 row-end-2",
  "col-start-4 col-end-5 row-start-2 row-end-3",
];
</script>

<template>
  <div class="max-md:hidden grid grid-cols-4 grid-rows-[22.5rem_22.5rem] gap-8">
    <ReviewListItem
      v-for="({ id, ...rest }, index) in items"
      :key="id"
      v-bind="rest"
      :class="itemClasses[index]"
    />
  </div>

  <div class="hidden max-md:block">
    <ClientOnly>
      <UiSlider>
        <div
          class="flex justify-center keen-slider__slide"
          v-for="({ id, ...rest }, index) in items"
          :key="id"
          :class="itemClasses[index]"
        >
          <ReviewListItem v-bind="rest" class="h-52 w-[8.4rem]" />
        </div>
      </UiSlider>
    </ClientOnly>
  </div>
</template>
