<script setup lang="ts">
import type { FaqListItemProps } from "./types";

const props = defineProps<FaqListItemProps>();

const visible = ref(false);

const $answer = ref<HTMLElement>();

const maxH = computed(() => $answer.value?.clientHeight);
</script>

<template>
  <li
    :class="[
      'md:text-[1.5rem] leading-small last:pb-0 border-second-50 border-t lowercase',
      'pb-[2.5rem] pt-[calc(2.5rem-1px)]',
      'max-2xl:pb-[2rem] max-2xl:pt-[calc(2rem-1px)]',
      'max-md:pb-[1rem] max-md:pt-[calc(1rem-1px)]',
    ]"
  >
    <header :class="['flex items-center', 'md:gap-12 max-md:gap-14']">
      <p
        :class="[
          'grow max-md:whitespace-pre-wrap',
          'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
          'leading-[2.4rem] max-2xl:leading-small max-md:leading-small',
        ]"
      >
        <slot>
          {{ question }}
        </slot>
      </p>

      <UiButton
        @click="visible = !visible"
        :class="{ 'rotate-45 bg-common hover:bg-second-100': visible }"
        img="icons/open.svg"
      />
    </header>

    <main
      :class="[
        'w-[59.6rem] max-w-full transition-all overflow-hidden',
        'pr-40 max-md:pr-10',
        { 'mt-[0.45rem] max-2xl:mt-[0.05rem] max-md:mt-3': visible },
        { 'opacity-0': !visible },
      ]"
      :style="{
        maxHeight: visible ? `${maxH}px` : 0,
        transitionDuration: `calc(${maxH}/20*75ms)`,
      }"
    >
      <p
        ref="$answer"
        :class="[
          'text-brand-100',
          'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
          'leading-[2.4rem] max-2xl:leading-small max-md:leading-small',
        ]"
      >
        <slot name="answer">
          {{ answer }}
        </slot>
      </p>
    </main>
  </li>
</template>
