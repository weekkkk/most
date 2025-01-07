<script setup lang="ts">
import type { ComparisonSliderSlideProps } from "./types";
const props = defineProps<ComparisonSliderSlideProps>();
</script>

<template>
  <figure
    :class="[
      'keen-slider__slide',
      'h-[45rem] max-2xl:h-[35.35rem] max-md:h-auto max-md:pb-[calc((175/(345/100))*1%)] max-md:relative',
    ]"
  >
    <img
      :src="`data:image/png;base64,${image}`"
      class="w-full h-full object-cover max-md:absolute"
    />
  </figure>
</template>
