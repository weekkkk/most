<script setup lang="ts">
import type { ComparisonSliderProps } from "./types";

const props = defineProps<ComparisonSliderProps>();
</script>

<template>
  <ClientOnly>
    <UiSlider dot>
      <ComparisonSliderSlide
        v-for="(image, index) in images"
        :key="index"
        :image="image"
      />
    </UiSlider>
  </ClientOnly>
</template>
