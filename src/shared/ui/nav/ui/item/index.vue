<script lang="ts" setup>
import type { UiNavItemProps } from "./types";

const props = defineProps<UiNavItemProps>();
</script>

<template>
  <UiPageLink v-bind="{ to, absolute, label, children, delay }" />
</template>
