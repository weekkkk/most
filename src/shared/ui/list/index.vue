<script setup lang="ts">
import type { UiListProps } from "./types";

const props = defineProps<UiListProps>();
</script>
<template>
  <div>
    <div
      v-for="priceList in priceLists"
      :key="priceList.id"
      class="border-t border-t-[#DCDCDC]"
    >
      <div class="flex justify-between mt-[2.5rem] mb-[2.5rem]">
        <div class="flex items-center">
          <h1 class="text-[2rem] leading-[2.4rem] mr-[1rem]">
            {{ priceList.name }}
          </h1>
          <p
            v-if="priceList.description"
            class="text-[2rem] text-[#B2B0B0] leading-[2.4rem]"
          >
            {{ priceList.description }}
          </p>
        </div>
        <h2 class="text-[2rem] leading-[2.4rem]">{{ priceList.price }}</h2>
      </div>
    </div>
  </div>
</template>
