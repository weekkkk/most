<script setup lang="ts">
import type { UiProcessStepListProps } from "./ui/step-list/types";
import type { UiProcessProps } from "./types";

const props = defineProps<UiProcessProps>();

const ms = [4.3, 1.7, 2, 0, 7.4];

const _startSteps = computed<UiProcessStepListProps["steps"]>(() =>
  props.startSteps.map((step, i) => ({
    ...step,
    left: ms[i],
  }))
);
const _endSteps = computed<UiProcessStepListProps["steps"]>(() =>
  props.endSteps.map((step, i) => ({
    ...step,
    right: ms[i],
  }))
);

const config = useRuntimeConfig();

const imgSrc = computed(
  () => `${config.app.baseURL}imgs/process/${props.image}.png`
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
      <UiProcessStepList :steps="_startSteps" />

      <div :class="['flex justify-center items-center', 'max-md:row-start-1']">
        <figure
          :class="[
            'md:min-h-[29rem] md:min-w-[38rem]',
            'max-md:w-full max-md:md-[calc((250/(345/100)))*1%] overflow-hidden',
          ]"
        >
          <img
            :class="['object-cover w-full h-full', 'max-md:scale-[1.2]']"
            :src="imgSrc"
            alt=""
          />
        </figure>
      </div>

      <UiProcessStepList :steps="_endSteps" right />
    </main>

    <footer :class="['md:mt-28 max-md:mt-4', ' flex justify-center']">
      <UiButton class="max-md:w-full">обратиться сейчас</UiButton>
    </footer>
  </section>
</template>
