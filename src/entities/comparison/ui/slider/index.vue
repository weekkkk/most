<script setup lang="ts">
import type { ComparisonSliderProps } from "./types";

const props = defineProps<ComparisonSliderProps>();
</script>

<template>
  <UiSlider dot>
    <ComparisonSliderSlide
      v-for="(image, index) in images"
      :key="index"
      :image="image"
    />
  </UiSlider>
</template>
