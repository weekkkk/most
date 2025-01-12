<script setup lang="ts">
const route = useRoute();

const title = computed(() => route.meta.title);
const keys = computed(() => route.meta.keys as string[] | undefined);
</script>

<template>
  <NuxtLoadingIndicator />
  <LayoutHeaderWidget />
  <NuxtPage />
  <LayoutFooterWidget />
</template>
