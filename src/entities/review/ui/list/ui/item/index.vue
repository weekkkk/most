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
    >
      <header class="mb-2 max-2xl:text-[0.7rem]">
        <p>{{ firstName }} {{ lastName }}</p>
      </header>
      <footer class="flex justify-center">
        <a href="#">
          <UiButton size="small">
            <span class="max-2xl:text-[0.7rem]">
              {{ username }}
            </span>
          </UiButton>
        </a>
      </footer>
    </main>
  </figure>
</template>
