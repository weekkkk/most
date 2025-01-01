<script setup lang="ts">
const { data } = await useAsyncData("faq-random", () =>
  FaqService.getRandomList()
);
</script>

<template>
  <section class="md:px-14 max-md:px-3">
    <header class="text-center mb-[3.5rem]">
      <h2
        :class="[
          'md:text-[5rem] max-md:text-[1.75rem]',
          'md:leading-small max-md:leading-[1.5rem]',
        ]"
      >
        ответим на все<br />
        волнующие вопросы
      </h2>
    </header>
    <main>
      <FaqList v-if="data" :items="data" />
    </main>
  </section>
</template>
