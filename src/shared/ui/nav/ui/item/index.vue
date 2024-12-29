<script lang="ts" setup>
import type { UiNavItemProps } from "./types";

const props = defineProps<UiNavItemProps>();
</script>

<template>
  <UiPageLink v-bind="{ to, absolute, label, children }">
    <template #default="{ label, to }">
      <NuxtLink :to="to" active-class="text-default">
        {{ label }}
      </NuxtLink>
    </template>
  </UiPageLink>
</template>
