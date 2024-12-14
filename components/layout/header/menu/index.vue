<script lang="ts" setup generic="IT">
import type { UiMenuProps } from "~/components/ui";

const props = defineProps<UiMenuProps<string, string>>();
</script>

<template>
  <UiMenu v-bind="{ header, items }"></UiMenu>
</template>
