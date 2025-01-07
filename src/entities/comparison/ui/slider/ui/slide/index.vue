<script setup lang="ts">
import type { ComparisonSliderSlideProps } from "./types";
const props = defineProps<ComparisonSliderSlideProps>();
</script>

<template>
  <figure
    :class="[
      'keen-slider__slide',
      'md:h-[45rem] max-md:pb-[calc((175/345)*100%)] max-md:relative',
    ]"
  >
    <img
      :src="`data:image/png;base64,${image}`"
      class="w-full h-full object-cover max-md:absolute"
    />
  </figure>
</template>
