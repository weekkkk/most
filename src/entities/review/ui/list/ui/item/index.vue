<script setup lang="ts">
import type { ReviewListItemProps } from "./types";

const props = defineProps<ReviewListItemProps>();
</script>

<template>
  <figure
    :class="[
      'relative overflow-hidden flex flex-col justify-end',
      'md:rounded-[3.5rem] max-md:rounded-2xl',
    ]"
  >
    <img
      :src="`data:image/png;base64,${photo}`"
      class="absolute object-cover w-full h-full"
    />

    <main :class="['text-default relative text-center pb-8', 'max-md:hidden']">
      <header class="mb-4">
        <p>{{ firstName }} {{ lastName }}</p>
      </header>
      <footer class="flex justify-center">
        <a href="#">
          <UiButton size="small"> {{ username }} </UiButton>
        </a>
      </footer>
    </main>
  </figure>
</template>
