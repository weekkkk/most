<script setup lang="ts">
import type { RouteImages } from './types';
const route = useRoute();

const config = useRuntimeConfig();

const imgs: RouteImages[] = [
  {
    routes: [
      "/",
      "/complex/shoes",
      "/complex/boots",
      "/repair/shoes",
      "/restoration/shoes"
    ],
    beforeImages: [
      `imgs/comparisons/travis-a.webp`,
      `imgs/comparisons/travis-b.webp`,
      `imgs/comparisons/mcqueen-a.webp`,
      `imgs/comparisons/mcqueen-b.webp`
    ],
    afterImages: [
      `imgs/comparisons/dior-a.webp`,
      `imgs/comparisons/dior-b.webp`,
      `imgs/comparisons/gucci-a.webp`,
      `imgs/comparisons/gucci-b.webp`
    ]
  }, 
  {
    routes: ["/complex/sneakers"],
    beforeImages: [
      `imgs/comparisons/nb-a.webp`,
      `imgs/comparisons/nb-b.webp`,
      `imgs/comparisons/offwhite-a.webp`,
      `imgs/comparisons/offwhite-b.webp`
    ],
    afterImages: [
      `imgs/comparisons/nb530-a.webp`,
      `imgs/comparisons/nb530-b.webp`,
      `imgs/comparisons/force-a.webp`,
      `imgs/comparisons/force-b.webp`
    ]
  },  
  {
    routes: [
      "/restoration/bags",
      "/repair/bags"
    ],
    beforeImages: [
      `imgs/comparisons/mm-a.webp`,
      `imgs/comparisons/mm-b.webp`,
      `imgs/comparisons/ow-a.webp`,
      `imgs/comparisons/ow-b.webp`
    ],
    afterImages: [
      `imgs/comparisons/cd-a.webp`,
      `imgs/comparisons/cd-b.webp`,
      `imgs/comparisons/lv-a.webp`,
      `imgs/comparisons/lv-b.webp`
    ]
  },  
]

const data: RouteImages | undefined = imgs.find(({ routes }) => routes.includes(route.path))

const beforeImages = data?.beforeImages
const afterImages = data?.afterImages

const titleConst = {
  "/": "сравни",

  "/complex/boots": "сравни",
  "/complex/shoes": "сравни",
  "/complex/sneakers": "сравни",

  "/repair/bags": "сравни сумки",
  "/repair/shoes": "сравни обувь",

  "/restoration/bags": "сравни",
  "/restoration/shoes": "сравни",
};

const title = computed(() => {
  if (!(route.path in titleConst)) return;
  return titleConst[route.path as keyof typeof titleConst];
});
</script>

<template>
  <section class="max-md:px-3">
    <header :class="['text-center', 'mb-[5rem] max-2xl:mb-14 max-md:mb-4']">
      <h2
        :class="[
          'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
          '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
          'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
        ]"
      >
        {{ title }}
      </h2>
    </header>

    <main v-if="afterImages && beforeImages">
      <ComparisonSlider :images="beforeImages" />

      <ComparisonSlider :images="afterImages" />
    </main>
  </section>
</template>
