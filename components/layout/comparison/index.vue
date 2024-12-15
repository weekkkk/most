<script setup lang="ts"></script>

<template>
  <section>
    <header class="text-center">
      <h2 class="text-[5rem] leading-small">сравни</h2>
    </header>

    <main>
      <ClientOnly>
        <KeenSlider />
      </ClientOnly>

      <ClientOnly>
        <KeenSlider />
      </ClientOnly>
    </main>
  </section>
</template>
