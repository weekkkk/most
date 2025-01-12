<script setup lang="ts">
const route = useRoute();

const title = computed(() => route.meta.title);
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <NuxtLoadingIndicator />
  <LayoutHeaderWidget />
  <NuxtPage />
  <LayoutFooterWidget />
</template>
