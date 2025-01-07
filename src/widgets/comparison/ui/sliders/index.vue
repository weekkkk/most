<script setup lang="ts">
const route = useRoute();

const { data, error } = await useAsyncData("comparation-sliders", () =>
  ComparisonService.getByPageId(route.path)
);
</script>

<template>
  <section class="max-md:px-3">
    <header class="text-center">
      <h2
        :class="[
          'md:text-[5rem] max-md:text-[1.75rem]',
          'md:leading-small max-md:leading-[1.5rem]',
        ]"
      >
        сравни
      </h2>
    </header>
    <main v-if="data">
      <ComparisonSlider :images="data.beforeImages" />

      <ComparisonSlider :images="data.afterImages" />
    </main>

    <main v-else>
      {{ error }}
    </main>
  </section>
</template>
