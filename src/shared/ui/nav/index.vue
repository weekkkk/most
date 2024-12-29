<script lang="ts" setup generic="IT">
import type { UiNavProps } from "./types";

const props = defineProps<UiNavProps>();
</script>

<template>
  <nav class="">
    <ul
      :class="[
        'flex',
        {
          'flex-col': col,
          'justify-end': right && !col,
          'items-end': right && col,
        },
      ]"
    >
      <UiNavItem
        v-for="item in items"
        :key="item.label"
        v-bind="{ ...item }"
        :absolute="!noAbsolute"
      />
    </ul>
  </nav>
</template>
