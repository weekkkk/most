<script setup lang="ts">
const { data } = await useAsyncData("reviews", () => ReviewService.getList());
</script>

<template>
  <section class="px-[12.5rem] max-2xl:px-[9.9rem] max-md:px-3">
    <header :class="['text-center', 'mb-20 max-2xl:mb-14 max-md:mb-8']">
      <h2
        :class="[
          'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
          '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
          'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
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
