<script setup lang="ts">
import type { ServiceListItemProps } from "./types";

const props = defineProps<ServiceListItemProps>();

const emit = defineEmits<{
  (e: "select", id: string): void;
}>();
</script>

<template>
  <li
    :class="[
      'flex justify-between',
      'border-t border-second-50',
      'pb-[2.5rem] pt-[calc(2.5rem-1px)]',
      'max-2xl:pb-[2rem] max-2xl:pt-[calc(2rem-1px)]',
      'max-md:pb-[1rem] max-md:pt-[calc(1rem-1px)]',
      'last:pb-0',
      'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
      'leading-[2.4rem] max-2xl:leading-control max-md:leading-[1rem]',
    ]"
  >
    <div class="flex items-center flex-wrap">
      <h1 :class="['max-md:w-[8.25rem]', 'max-2xl:mr-[0.5rem]', 'lowercase']">
        {{ name }}
      </h1>
      <p v-if="description" class="text-[#B2B0B0] max-md:w-full max-md:pr-8">
        ({{ description.replace("(", "").replace(")", "") }})
      </p>
    </div>
    <h2 class="whitespace-nowrap">
      {{ price.replace("Р", " ₽").replace("-", " - ") }}
    </h2>
  </li>
</template>
