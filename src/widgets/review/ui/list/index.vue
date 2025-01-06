<script setup lang="ts">
const { data } = await useAsyncData("reviews", () => ReviewService.getList());
</script>

<template>
  <section class="md:px-[12.5rem] max-md:px-3">
    <header :class="['text-center', 'md:mb-20 max-md:mb-8']">
      <h2
        :class="[
          'md:text-[5rem] max-md:text-[1.75rem]',
          'md:leading-small max-md:leading-[1.5rem]',
        ]"
      >
        отзывы наших клиентов
      </h2>
    </header>

    <main>
      <ReviewList v-if="data" :items="data" />
    </main>
  </section>
</template>
