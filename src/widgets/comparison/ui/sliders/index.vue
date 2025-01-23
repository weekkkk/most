<script setup lang="ts">
const route = useRoute();

const config = useRuntimeConfig();

type RouteImages = {
  routes: string[];
  beforeImages: string[];
  afterImages: string[];
};

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
      `${config.app.baseURL}imgs/comparisons/travis-a.webp`,
      `${config.app.baseURL}imgs/comparisons/travis-b.webp`,
      `${config.app.baseURL}imgs/comparisons/mcqueen-a.webp`,
      `${config.app.baseURL}imgs/comparisons/mcqueen-b.webp`
    ],
    afterImages: [
      `${config.app.baseURL}imgs/comparisons/dior-a.webp`,
      `${config.app.baseURL}imgs/comparisons/dior-b.webp`,
      `${config.app.baseURL}imgs/comparisons/gucci-a.webp`,
      `${config.app.baseURL}imgs/comparisons/gucci-b.webp`
    ]
  }, 
  {
    routes: ["/complex/sneakers"],
    beforeImages: [
      `${config.app.baseURL}imgs/comparisons/nb-a.webp`,
      `${config.app.baseURL}imgs/comparisons/nb-b.webp`,
      `${config.app.baseURL}imgs/comparisons/offwhite-a.webp`,
      `${config.app.baseURL}imgs/comparisons/offwhite-b.webp`
    ],
    afterImages: [
      `${config.app.baseURL}imgs/comparisons/nb530-a.webp`,
      `${config.app.baseURL}imgs/comparisons/nb530-b.webp`,
      `${config.app.baseURL}imgs/comparisons/force-a.webp`,
      `${config.app.baseURL}imgs/comparisons/force-b.webp`
    ]
  },  
  {
    routes: [
      "/restoration/bags",
      "/repair/bags"
    ],
    beforeImages: [
      `${config.app.baseURL}imgs/comparisons/mm-a.webp`,
      `${config.app.baseURL}imgs/comparisons/mm-b.webp`,
      `${config.app.baseURL}imgs/comparisons/ow-a.webp`,
      `${config.app.baseURL}imgs/comparisons/ow-b.webp`
    ],
    afterImages: [
      `${config.app.baseURL}imgs/comparisons/cd-a.webp`,
      `${config.app.baseURL}imgs/comparisons/cd-b.webp`,
      `${config.app.baseURL}imgs/comparisons/lv-a.webp`,
      `${config.app.baseURL}imgs/comparisons/lv-b.webp`
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
