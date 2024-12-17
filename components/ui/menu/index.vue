<script lang="ts" setup generic="HT, IT">
import type { UiMenuProps } from "./interfaces";

const props = defineProps<UiMenuProps<HT, IT>>();
</script>

<template>
  <li class="max-md:text-[0.7rem] menu group list-none inline-flex flex-col">
    <button
      class="menu-header bg-brand-100 text-default w-full md:p-[20px] max-md:p-3 md:leading-control max-md:leading-[0.25rem] md:rounded-t-[calc(10px+1.2rem)] md:rounded-b-[calc(10px+1.2rem)] max-md:rounded-t-[0.875rem] max-md:rounded-b-[0.875rem] group-hover:rounded-b-none transition-all duration-150 group-hover:delay-0"
    >
      <slot name="header" v-bind="{ header }">
        {{ header }}
      </slot>
    </button>

    <div :class="{ 'max-h-0': absolute }">
      <div
        class="menu-item_list md:-mt-3 max-md:-mt-1 bg-brand-100 md:rounded-b-[calc(10px+1.2rem)] max-md:rounded-b-[0.875rem] max-h-0 overflow-hidden transition-all group-hover:delay-75"
      >
        <ul class="text-common list-none">
          <li
            class="relative transition-colors last:mb-3"
            v-for="(item, index) in items"
            :key="index"
          >
            <button
              class="text-left hover:text-default transition-colors w-full md:px-[20px] max-md:px-3 py-[5px]"
            >
              <slot v-bind="{ item }">
                {{ item }}
              </slot>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<style>
.menu:hover .menu-item_list {
  max-height: calc(v-bind("items.length") * 2.5rem + 0.75rem);
}

.menu .menu-item_list {
  transition-duration: calc(v-bind("items.length") * 100ms + 25ms);
}
.menu .menu-header {
  transition-delay: calc(v-bind("items.length") * 100ms + 25ms - 75ms);
}
</style>
