<script setup lang="ts">
import type { FaqListProps } from ".//types";

const props = defineProps<FaqListProps>();
</script>

<template>
  <ul>
    <FaqListItem v-for="(item, index) in items" :key="item.id" v-bind="item" />
  </ul>
</template>
