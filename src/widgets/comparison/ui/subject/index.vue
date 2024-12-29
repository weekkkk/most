<script setup lang="ts"></script>

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

    <main>
      <ClientOnly>
        <UiSlider dot>
          <ComparisonSubjectSlideWidget v-for="i in 4" :key="i" />
        </UiSlider>
      </ClientOnly>

      <ClientOnly>
        <UiSlider dot>
          <ComparisonSubjectSlideWidget v-for="i in 4" :key="i" />
        </UiSlider>
      </ClientOnly>
    </main>
  </section>
</template>
