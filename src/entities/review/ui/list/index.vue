<script setup lang="ts">
import type { ReviewListProps } from "./types";

const props = defineProps<ReviewListProps>();

</script>

<template>
  <div
    :class="[
      'max-md:hidden grid grid-cols-4 gap-[1rem]',
      'grid-rows-[22.5rem_22.5rem] max-2xl:grid-rows-[15.6rem_15.6rem]',
    ]"
  >
    <ReviewListItem
      v-for="({ id, ...rest }, index) in items"
      :key="id"
      v-bind="rest"
    />
  </div>

  <div class="hidden max-md:block">
    <ClientOnly>
      <UiSlider>
        <div
          class="flex justify-center keen-slider__slide"
          v-for="({ id, ...rest }, index) in items"
          :key="id"
        >
          <ReviewListItem v-bind="rest" class="h-[16.1rem] w-[10.8rem]" />
        </div>
      </UiSlider>
    </ClientOnly>
  </div>
</template>
