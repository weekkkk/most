<script setup lang="ts">
import type { LayoutHeaderMenuProps } from "../menu-list/item";
const props = defineProps<{ list: LayoutHeaderMenuProps[] }>();

const visible = ref(false);

const $menu = ref();

const maxHeight = computed(() => $menu.value?.$el.clientHeight);
</script>

<template>
  <div class="inline-flex flex-col">
    <div class="flex flex-col items-end overflow-hidden rounded-[4.2rem]">
      <UiButton
        class="transition-all"
        @click="visible = true"
        :class="{ 'translate-x-full': visible }"
        size="small"
      >
        меню
      </UiButton>
      <div class="max-h-0">
        <UiButton
          class="transition-all"
          @click="visible = false"
          :class="['-translate-y-full', { 'translate-x-full': !visible }]"
          size="small"
          color="white"
        >
          закрыть
        </UiButton>
      </div>
    </div>

    <div class="max-h-0">
      <div
        class="max-h-[calc(100vh-3rem-1.75rem)] overflow-hidden transition-all"
        :style="{ maxHeight: (!visible && '0px') || undefined }"
      >
        <!-- class="max-h-0 overflow-hidden transition-all" -->
        <!-- :style="{ maxHeight: `${(visible && maxHeight) || 0}px` }" -->
        <LayoutHeaderMenuList ref="$menu" col right :list="list" no-absolute />
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
}
</style>
