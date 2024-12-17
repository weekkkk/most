<script lang="ts" setup generic="IT">
import { LayoutHeaderMenuProps } from "./item";

const props = defineProps<{
  list: LayoutHeaderMenuProps<string, string>[];
  right?: boolean;
  noAbsolute?: boolean;
  col?: boolean;
}>();
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
      <LayoutHeaderMenuListItem
        v-for="li in list"
        :key="li.header"
        v-bind="{ ...li }"
        :absolute="!noAbsolute"
      />
    </ul>
  </nav>
</template>
