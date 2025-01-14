<script setup lang="ts">
import type { ReviewListItemProps } from "./types";

const props = defineProps<ReviewListItemProps>();
</script>

<template>
  <figure
    :class="[
      'relative overflow-hidden flex flex-col justify-end',
      'rounded-[3.5rem] max-2xl:rounded-[2rem] max-md:rounded-2xl',
    ]"
  >
    <img
      :src="`data:image/png;base64,${photo}`"
      class="absolute object-cover w-full h-full"
    />

    <main
      :class="[
        'text-default relative text-center',
        'pb-8 max-2xl:pb-[1.25rem]',
        'max-md:hidden',
      ]"
    ></main>
  </figure>
</template>
