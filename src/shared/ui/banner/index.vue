<script lang="ts" setup>
import type { UiBannerProps } from "./types";

const props = defineProps<UiBannerProps>();

const imgFolder = computed(() => `/imgs/banners/${props.image}`);
const imgSrc = computed(() => ({
  d: `${imgFolder.value}/d.jpg`,
  t: `${imgFolder.value}/t.jpg`,
  m: `${imgFolder.value}/m.jpg`,
}));

const size = ref<"d" | "t" | "m">();
onMounted(() => {
  if (window.innerWidth < 768) size.value = "m";
  else if (window.innerWidth < 1536) size.value = "t";
  else size.value = "d";
});
</script>

<template>
  <section
    :class="[
      'relative',
      'overflow-hidden',
      'h-[82.5rem] max-2xl:h-[64.5rem] max-md:h-[47.5rem]',
      'bg-gradient-to-tr from-second-50 to-second-100',
    ]"
  >
    <div
      :class="[
        'absolute object-cover w-full h-full',
        'text-center text-default',
        'py-60 max-2xl:py-[14.5rem] max-md:py-[7.75rem]',
      ]"
    >
      <h1
        :class="[
          'text-[9rem] max-2xl:text-[6rem] max-md:text-[2.5rem]',
          '-tracking-[calc(9rem/100)] max-2xl:-tracking-[calc(6rem/100)] max-md:-tracking-[calc(2.5rem/100)]',
          'leading-[6rem] max-2xl:leading-[4.5rem] max-md:leading-[2rem]',
          'md:mb-10 max-md:mb-4',
          'whitespace-pre-wrap',
        ]"
      >
        {{ title }}
      </h1>

      <p
        :class="[
          'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
          'md:mb-10 max-md:mb-6 mx-auto',
          'w-[53.6rem] max-2xl:w-[36rem] max-md:w-full',
          'max-md:px-6',
          'leading-control',
        ]"
      >
        <slot>
          {{ description }}
        </slot>
      </p>

      <NuxtLink :to="{ path: '/', hash: '#feedback' }">
        <UiButton> {{ actionText }} </UiButton>
      </NuxtLink>
    </div>

    <NuxtImg
      class="max-2xl:hidden object-cover w-full h-full"
      :src="imgSrc.d"
      alt=""
      placeholder
    />
    <NuxtImg
      class="2xl:hidden max-md:hidden object-cover w-full h-full"
      :src="imgSrc.t"
      alt=""
      placeholder
    />
    <NuxtImg
      class="md:hidden object-cover w-full h-full"
      :src="imgSrc.m"
      alt=""
      placeholder
    />
  </section>
</template>

<style></style>
