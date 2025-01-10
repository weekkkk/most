<script setup lang="ts">
const props = defineProps<{ items: UiNavProps["items"] }>();

const visible = ref(false);

const $menu = ref();

const route = useRoute();

watch(
  () => route.path,
  () => (visible.value = false)
);
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
        class="max-h-[calc(100vh-3rem-1.75rem)] overflow-hidden transition-all duration-200"
        :style="{ maxHeight: (!visible && '0px') || undefined }"
      >
        <UiNav @click.stop ref="$menu" col right :items="items" no-absolute />
      </div>
    </div>
  </div>
</template>
