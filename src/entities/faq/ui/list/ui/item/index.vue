<script setup lang="ts">
import type { FaqListItemProps } from "./types";

const props = defineProps<FaqListItemProps>();

const visible = ref(false);

const $answer = ref<HTMLElement>();

const maxH = computed(() => $answer.value && `${$answer.value.clientHeight}px`);
</script>

<template>
  <li
    class="md:text-[1.5rem] leading-small py-8 last:pb-0 border-second-50 border-t lowercase"
  >
    <header :class="['flex items-center', 'max-md:mb-3']">
      <p class="grow max-md:whitespace-pre-wrap">
        <slot>
          {{ question }}
        </slot>
      </p>

      <UiButton
        @click="visible = !visible"
        :class="{ 'rotate-45 bg-common hover:bg-second-100': visible }"
        img="/icons/open.svg"
      />
    </header>

    <main
      class="w-[36.9rem] max-w-full max-h-0 transition-all overflow-hidden"
      :style="visible && { maxHeight: maxH }"
    >
      <p ref="$answer" class="text-brand-100">
        <slot name="answer">
          {{ answer }}
        </slot>
      </p>
    </main>
  </li>
</template>
