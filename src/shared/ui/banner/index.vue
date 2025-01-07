<script lang="ts" setup>
import type { UiBannerProps } from "./types";

const props = defineProps<UiBannerProps>();

const config = useRuntimeConfig();

const imgSrc = computed(
  () => `${config.app.baseURL}imgs/banners/${props.image}.png`
);
</script>

<template>
  <section
    :class="[
      'relative',
      'overflow-hidden',
      'md:h-[82.5rem] max-md:h-[47.5rem]',
    ]"
  >
    <div
      :class="[
        'absolute object-cover w-full h-full z-10',
        'text-center text-default',
        'md:py-60 max-md:py-[10.25rem]',
      ]"
    >
      <h1
        :class="[
          'md:text-[9rem] max-md:text-[2.5rem]',
          'md:leading-[6rem] max-md:leading-[2rem]',
          'md:mb-10 max-md:mb-4',
          'md:whitespace-pre-wrap',
        ]"
      >
        {{ title }}
      </h1>

      <p
        :class="[
          'md:text-[2rem]',
          'md:mb-14 max-md:mb-3 mx-auto',
          'md:w-[53.6rem] max-md:px-6',
          'leading-control',
        ]"
      >
        <slot>
          {{ description }}
        </slot>
      </p>

      <UiButton> {{ actionText }} </UiButton>
    </div>

    <img class="object-cover w-full h-full" :src="imgSrc" alt="" />
  </section>
</template>
