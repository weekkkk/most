<script setup lang="ts">
import type { LayoutProcessStepProps } from "./step";

const leftList: LayoutProcessStepProps[] = [
  {
    icon: "fire",
    label: "Первичная\nоценка",
    left: 4.3,
  },
  {
    icon: "magicpen",
    label: "Очистка",
    left: 1.7,
  },
  {
    icon: "bucket",
    label: "Ремонт швов",
    left: 2,
  },
  {
    icon: "drop",
    label: "Замена\nфурнитуры",
  },
  {
    icon: "brush",
    label: "Обновление\nручек",
    left: 7.4,
  },
];

const rightList: LayoutProcessStepProps[] = [
  {
    icon: "restoration",
    label: "Реставрация\nматериалов",
    right: 4.3,
  },
  {
    icon: "work",
    label: "Работа\nс подкладкой",
    right: 1.7,
  },
  {
    icon: "scissor",
    label: "Пропитка\nи защита",
    right: 2,
  },
  {
    icon: "polishing",
    label: "Полировка",
  },
  {
    icon: "heart",
    label: "Финальная\nпроверка",
    right: 7.4,
  },
];
</script>

<template>
  <section class="px-[7.6rem]">
    <header class="px-[14rem] text-center mb-20">
      <h2 class="text-[5rem] leading-small">как же мы ремонтируем сумки</h2>
    </header>

    <main class="flex justify-between items-center">
      <ul class="inline-flex flex-col items-start gap-[6.5rem]">
        <LayoutProcessStep
          v-for="li in leftList"
          :key="li.icon"
          v-bind="{ ...li }"
        />
      </ul>

      <figure class="h-[29rem] w-[38.5rem]">
        <img
          class="object-cover w-full h-full"
          src="/imgs/process/main.png"
          alt="Сумка на ремонте"
        />
      </figure>

      <ul class="inline-flex flex-col items-end gap-[6.5rem]">
        <LayoutProcessStep
          v-for="li in rightList"
          :key="li.icon"
          v-bind="{ ...li }"
        />
      </ul>
    </main>

    <footer class="mt-28 flex justify-center">
      <UiButton>обратиться сейчас</UiButton>
    </footer>
  </section>
</template>
