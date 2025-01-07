<script setup lang="ts">
import type { UiProcessStepListProps } from "./ui/step-list/types";
import type { UiProcessProps } from "./types";

const props = defineProps<UiProcessProps>();

const mls = [4.3, 1.7, 2, 0, 7.4];
const mrs = [2.4, 6, 0.1, 8.6, 11];

const _startSteps = computed<UiProcessStepListProps["steps"]>(() =>
  props.startSteps.map((step, i) => ({
    ...step,
    left: mls[i],
  }))
);
const _endSteps = computed<UiProcessStepListProps["steps"]>(() =>
  props.endSteps.map((step, i) => ({
    ...step,
    right: mrs[i],
  }))
);

const config = useRuntimeConfig();

const imgSrc = computed(
  () => `${config.app.baseURL}imgs/process/${props.image}.png`
);
</script>

<template>
  <section class="px-[7.6rem] max-2xl:px-[3.6rem] max-md:px-3">
    <header :class="['text-center', 'mb-20 max-2xl:mb-14 max-md:mb-8']">
      <h2
        :class="[
          'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
          '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
          'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
          'whitespace-pre-wrap',
        ]"
      >
        <span class="max-md:hidden">
          {{ title }}
        </span>
        <span class="md:hidden">
          {{ mdTitle }}
        </span>
      </h2>
    </header>

    <main
      :class="['grid', 'md:grid-cols-3 max-md:grid-cols-1', 'max-md:gap-8']"
    >
      <UiProcessStepList :steps="_startSteps" />

      <div :class="['flex justify-center items-center', 'max-md:row-start-1']">
        <figure
          :class="[
            'relative',
            'md:min-h-[29rem] md:min-w-[38rem]',
            'max-md:w-full max-md:pb-[calc((250/(345/100))*1%)]',
          ]"
        >
          <img
            :class="['absolute object-cover w-full h-full']"
            :src="imgSrc"
            alt=""
          />
        </figure>
      </div>

      <UiProcessStepList :steps="_endSteps" right />
    </main>

    <footer
      v-if="!noFooter"
      :class="['md:mt-28 max-md:mt-4', ' flex justify-center']"
    >
      <UiButton class="max-md:w-full">обратиться сейчас</UiButton>
    </footer>
  </section>
</template>
