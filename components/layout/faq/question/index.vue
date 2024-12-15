<script setup lang="ts">
import type { LayoutFAQQuestionProps } from "./interfaces";

const props = defineProps<LayoutFAQQuestionProps>();

const visible = ref(false);

const $answer = ref<HTMLElement>();

const maxH = computed(() => $answer.value && `${$answer.value.clientHeight}px`);
</script>

<template>
  <li
    class="text-[1.5rem] leading-small py-8 last:pb-0 border-second-50 border-t"
  >
    <header class="flex items-center">
      <p class="grow">
        <slot>
          {{ question }}
        </slot>
      </p>

      <button
        @click="visible = !visible"
        class="rounded-full bg-brand-100 h-12 w-12 p-[0.9rem] transition-all"
        :class="{ 'rotate-45 bg-common': visible }"
      >
        <img class="h-[1.2rem] w-[1.2rem]" src="/icons/open.svg" />
      </button>
    </header>

    <main
      class="w-[36.9rem] max-h-0 transition-all overflow-hidden"
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
