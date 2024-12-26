<script setup lang="ts">
import type { GetServiseDataDto } from "./api/types";

const route = useRoute();

const service = useState<GetServiseDataDto | undefined>(route.path);
</script>

<template>
  <main
    v-if="service"
    :class="['flex flex-col', 'md:gap-[22.5rem] max-md:gap-40']"
  >
    <UiBanner v-bind="service.banner" />

    <div :class="['flex flex-col', 'md:gap-[22.5rem] max-md:gap-40']">
      <UiProcess v-bind="service.process" />

      <LayoutReviews />

      <LayoutComparison />

      <LayoutFaq />
    </div>
  </main>
</template>
