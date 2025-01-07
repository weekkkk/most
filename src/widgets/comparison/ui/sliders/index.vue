<script setup lang="ts">
const route = useRoute();

const { data, error } = await useAsyncData("comparation-sliders", () =>
  ComparisonService.getByPageId(route.path)
);

const beforeImages = computed(() =>
  data.value?.map(({ beforeImage }) => beforeImage)
);

const afterImages = computed(() =>
  data.value?.map(({ afterImage }) => afterImage)
);
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
        сравни
      </h2>
    </header>

    <main v-if="afterImages && beforeImages && !error">
      <ComparisonSlider :images="beforeImages" />

      <ComparisonSlider :images="afterImages" />
    </main>

    <main v-else>
      {{ error }}
    </main>
  </section>
</template>
