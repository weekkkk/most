<script lang="ts" setup>
import type { UiPageLinkProps } from "./types";

const props = defineProps<UiPageLinkProps>();

const $btn = ref<HTMLButtonElement>();
</script>

<template>
  <li
    class="max-md:text-[0.7rem] page_link group list-none inline-flex flex-col items-start"
  >
    <button
      ref="$btn"
      class="page_link-header group-hover:w-full text-left bg-brand-100 text-default md:p-[20px] max-md:p-3 md:leading-control max-md:leading-[0.25rem] md:rounded-t-[calc(10px+1.2rem)] md:rounded-b-[calc(10px+1.2rem)] max-md:rounded-t-[0.875rem] max-md:rounded-b-[0.875rem] group-hover:rounded-b-none transition-all duration-150 group-hover:delay-0"
    >
      <slot name="header" v-bind="{ label }">
        {{ label }}
      </slot>
    </button>

    <div v-if="children" class="w-full" :class="{ 'max-h-0': absolute }">
      <div
        class="page_link-item_list md:-mt-3 max-md:-mt-1 bg-brand-100 md:rounded-b-[calc(10px+1.2rem)] max-md:rounded-b-[0.875rem] max-h-0 overflow-hidden transition-all group-hover:delay-75"
      >
        <ul class="text-common list-none">
          <li
            class="relative transition-colors last:mb-3"
            v-for="(child, index) in children"
            :key="index"
          >
            <button
              class="text-left hover:text-default transition-colors w-full md:px-[20px] max-md:px-3 py-[5px]"
            >
              <slot v-bind="{ ...child, to: `${to}/${child.to}` }">
                <NuxtLink :to="`${to}/${child.to}`">
                  {{ child.label }}
                </NuxtLink>
              </slot>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<style>
.page_link:hover .page_link-item_list {
  max-height: calc(v-bind("children?.length") * 2.5rem + 0.75rem);
}

.page_link .page_link-item_list {
  transition-duration: calc(v-bind("children?.length") * 100ms + 25ms);
}
.page_link .page_link-header {
  width: calc(v-bind("$btn?.offsetWidth") * 1px);
  transition-delay: calc(v-bind("children?.length") * 100ms + 25ms - 75ms);
}
</style>
