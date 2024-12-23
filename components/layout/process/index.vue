<script setup lang="ts">
import type { LayoutProcessStepProps } from "./step-list/item";
import type { LayoutProcessProps } from "./types";

const props = defineProps<LayoutProcessProps>();

const ms = [4.3, 1.7, 2, 0, 7.4];

const leftSteps = computed(() =>
  props.startSteps.map<LayoutProcessStepProps>((step, i) => ({
    ...step,
    left: ms[i],
  }))
);
const rightSteps = computed(() =>
  props.endSteps.map<LayoutProcessStepProps>((step, i) => ({
    ...step,
    right: ms[i],
  }))
);
</script>

<template>
  <section class="md:px-[7.6rem] max-md:px-3">
    <header class="text-center mb-20">
      <h2
        :class="[
          'md:text-[5rem] max-md:text-[1.75rem]',
          'md:leading-small max-md:leading-[1.5rem]',
          'whitespace-pre-wrap',
        ]"
      >
        {{ title }}
      </h2>
    </header>

    <main
      :class="['grid', 'md:grid-cols-3 max-md:grid-cols-1', 'max-md:gap-8']"
    >
      <LayoutProcessStepList :list="leftSteps" />

      <div :class="['flex justify-center items-center', 'max-md:row-start-1']">
        <figure
          :class="[
            'md:h-[29rem] md:w-[38.5rem]',
            'max-md:aspect-[1.38] overflow-hidden',
          ]"
        >
          <img
            :class="[
              'object-cover w-full h-full',
              'max-md:scale-[1.4] max-md:translate-y-4',
            ]"
            :src="`/imgs/process/${image}`"
            alt=""
          />
        </figure>
      </div>

      <LayoutProcessStepList :list="rightSteps" right />
    </main>

    <footer :class="['md:mt-28 max-md:mt-4', ' flex justify-center']">
      <UiButton class="max-md:w-full">обратиться сейчас</UiButton>
    </footer>
  </section>
</template>
