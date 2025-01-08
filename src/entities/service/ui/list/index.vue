<script setup lang="ts">
import type { ServiceListProps } from "./types";

const props = defineProps<ServiceListProps>();
</script>
<template>
  <ul>
    <ServiceListItem v-for="item in items" :key="item.id" v-bind="item" />
  </ul>
</template>
