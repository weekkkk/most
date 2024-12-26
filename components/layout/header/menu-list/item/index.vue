<script lang="ts" setup generic="IT">
import type { LayoutHeaderMenuListItemProps } from "./interfaces";

const props = defineProps<LayoutHeaderMenuListItemProps>();
</script>

<template>
  <UiMenu v-bind="{ absolute, header, items }">
    <template #default="{ item: { title, to } }">
      <NuxtLink :to="to" active-class="text-default">
        {{ title }}
      </NuxtLink>
    </template>
  </UiMenu>
</template>
