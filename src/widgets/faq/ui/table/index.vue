<script setup lang="ts">
const { data } = await useAsyncData("faq-all", () => FaqService.getAll());
</script>

<template>
  <FaqTable v-if="data" :items="data" />
</template>
