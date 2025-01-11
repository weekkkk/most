<script lang="ts" setup>
import type { UiPageLinkProps } from "./types";

const props = defineProps<UiPageLinkProps>();

const $btn = ref<HTMLButtonElement>();

const width = computed(() => {
  const width = $btn.value?.getBoundingClientRect().width;
  if (!width) return;
  return width;
});
</script>

<template>
  <li
    :class="[
      'page_link',
      'list-none inline-flex flex-col items-start',
      'max-2xl:text-[0.7rem] max-md:text-[0.7rem]',
      'leading-control max-2xl:leading-[0.85rem] max-md:leading-[0.45rem]',
      { group: children },
    ]"
  >
    <button
      v-if="children"
      ref="$btn"
      :class="[
        'z-10',
        'page_link-header text-left bg-brand-100 text-default',
        'min-w-fit',
        'rounded-[1.6rem] max-2xl:rounded-[1.425rem] max-md:rounded-[0.975rem]',
        'p-4 max-md:p-3',
        'group-hover:w-full transition-all duration-200 group-hover:delay-0',
        'cursor-default',
      ]"
    >
      <slot name="header" v-bind="{ label }">
        {{ label }}
      </slot>
    </button>
    <NuxtLink
      v-else
      :to="to"
      :prefetch="false"
      :class="[
        'page_link-header text-left bg-brand-100 text-default',
        'min-w-fit',
        'rounded-[1.6rem] max-2xl:rounded-[1.425rem] max-md:rounded-[0.975rem]',
        'p-4 max-md:p-3',
      ]"
    >
      <slot name="header" v-bind="{ label }">
        {{ label }}
      </slot>
    </NuxtLink>

    <div v-if="children" class="w-full max-h-0">
      <div
        :class="[
          'page_link-item_list page_link-item_list-bg',
          'bg-brand-100',
          'max-h-0 overflow-hidden',
          '-mt-[1.6rem] max-2xl:-mt-[1.425rem] max-md:-mt-[0.975rem]',
          'md:rounded-b-[calc(10px+1.2rem)] max-md:rounded-b-[0.875rem]',
          'transition-all group-hover:delay-200',
        ]"
      ></div>
    </div>

    <div v-if="children" class="w-full z-10" :class="{ 'max-h-0': absolute }">
      <div
        :class="[
          'page_link-item_list',
          'max-h-0 overflow-hidden',
          '-mt-[1.6rem] max-2xl:-mt-[1.425rem] max-md:-mt-[0.975rem]',
          'md:rounded-b-[calc(10px+1.2rem)] max-md:rounded-b-[0.875rem]',
          'transition-all group-hover:delay-200',
        ]"
      >
        <ul :class="['text-common list-none']">
          <li
            :class="[
              'relative transition-colors',
              'first:mt-[0.85rem] max-2xl:first:mt-[0.675rem] max-md:first:mt-[0.475rem]',
              'last:mb-3 max-md:last:mb-2',
            ]"
            v-for="(child, index) in children"
            :key="index"
          >
            <button
              class="text-left hover:text-default transition-colors w-full md:px-[1rem] max-md:px-3 py-[0.25rem]"
            >
              <slot v-bind="{ ...child, to: `${to}/${child.to}` }">
                <NuxtLink :prefetch="false" :to="`${to}/${child.to}`">
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
.page_link .page_link-item_list {
  transition-duration: calc(v-bind("children?.length") * 150ms);
}

.page_link .page_link-header {
  width: calc(v-bind(width) * 1px);
  transition-delay: calc(v-bind("children?.length") * 150ms);
}

.page_link:hover .page_link-item_list {
  max-height: calc(v-bind("children?.length") * 1.7rem + 1.6rem);
}
.page_link .page_link-item_list-bg {
  height: calc(v-bind("children?.length") * 1.7rem + 1.6rem);
}
@media (max-width: 1535px) {
  .page_link:hover .page_link-item_list {
    max-height: calc(v-bind("children?.length") * 1.35rem + 1.425rem);
  }
  .page_link .page_link-item_list-bg {
    height: calc(v-bind("children?.length") * 1.35rem + 1.425rem);
  }
}
@media (max-width: 767px) {
  .page_link:hover .page_link-item_list {
    max-height: calc(v-bind("children?.length") * 0.95rem + 1rem);
  }
  .page_link .page_link-item_list-bg {
    height: calc(v-bind("children?.length") * 0.95rem + 1rem);
  }
}
</style>
