<script lang="ts" setup generic="HT, IT">
import type { UiMenuProps } from "./interfaces";

const props = defineProps<UiMenuProps<HT, IT>>();
</script>

<template>
  <li class="menu group list-none inline-block">
    <button
      class="menu-header bg-brand-100 text-default w-full p-4 relative z-10 leading-control rounded-t-[1.6rem] rounded-b-[1.6rem] group-hover:rounded-b-none transition-all duration-300 group-hover:delay-0"
    >
      <slot name="header" v-bind="{ header }">
        {{ header }}
      </slot>
    </button>

    <div :class="{ 'max-h-0': absolute }">
      <div
        class="menu-item_list bg-brand-100 rounded-b-[1.6rem] max-h-0 overflow-hidden transition-all group-hover:delay-300"
      >
        <ul class="text-common list-none -translate-y-3">
          <li
            class="relative transition-colors"
            v-for="(item, index) in items"
            :key="index"
          >
            <button
              class="text-left hover:text-default transition-colors w-full px-4 py-1"
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
  transition-duration: calc(v-bind("items.length") * 200ms + 25ms);
}
.menu .menu-header {
  transition-delay: calc(v-bind("items.length") * 200ms + 25ms);
}
</style>
