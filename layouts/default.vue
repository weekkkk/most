<script setup lang="ts">
import type { LayoutBannerProps } from "~/components/layout/banner/types";
import type { LayoutProcessProps } from "~/components/layout/process/types";

const route = useRoute();

const bannerProps = computed(() => route.meta.banner as LayoutBannerProps);

const processProps = computed(() => route.meta.process as LayoutProcessProps);
</script>

<template>
  <LayoutHeader />
  <main :class="['flex flex-col', 'md:gap-60 max-md:gap-20']">
    <LayoutBanner v-bind="bannerProps" />

    <div :class="['flex flex-col', 'md:gap-[22.5rem] max-md:gap-40']">
      <LayoutProcess v-bind="processProps" />

      <LayoutReviews />

      <LayoutComparison />

      <LayoutFaq />

      <LayoutFooter />
    </div>
  </main>

  <NuxtPage />
</template>
