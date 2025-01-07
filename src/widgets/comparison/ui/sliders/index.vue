<script setup lang="ts">
const route = useRoute();

const { data, error } = await useAsyncData("comparation-sliders", () => {
  console.log(route.path);

  return ComparisonService.getByPageId(route.path);
});

const beforeImages = computed(() =>
  data.value?.map(({ beforeImage }) => beforeImage)
);

const afterImages = computed(() =>
  data.value?.map(({ afterImage }) => afterImage)
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
    <main v-if="afterImages && beforeImages && !error">
      <ComparisonSlider :images="beforeImages" />

      <ComparisonSlider :images="afterImages" />
    </main>

    <main v-else>
      {{ error }}
    </main>
  </section>
</template>
