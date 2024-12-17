<script lang="ts" setup generic="IT">
import type { UiMenuProps } from "~/components/ui";

const props = defineProps<UiMenuProps<string, string>>();
</script>

<template>
  <UiMenu v-bind="{ absolute, header, items }"></UiMenu>
</template>
