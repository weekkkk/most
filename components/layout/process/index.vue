<script setup lang="ts">
import type { LayoutProcessStepProps } from "./step-list/item";

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
  <section class="md:px-[7.6rem] max-md:px-3">
    <header class="text-center mb-20">
      <h2
        :class="[
          'md:text-[5rem] max-md:text-[1.75rem]',
          'md:leading-small max-md:leading-[1.5rem]',
        ]"
      >
        как же мы<br />
        ремонтируем<br class="md:hidden" />
        сумки
      </h2>
    </header>

    <main
      :class="['grid', 'md:grid-cols-3 max-md:grid-cols-1', 'max-md:gap-8']"
    >
      <LayoutProcessStepList :list="leftList" />

      <div :class="['flex justify-center items-center', 'max-md:row-start-1']">
        <figure
          :class="[
            'md:h-[29rem] md:w-[38.5rem]',
            'max-md:aspect-[1.38] overflow-hidden',
          ]"
        >
          <img
            :class="[
              'object-cover w-full h-full',
              'max-md:scale-[1.4] max-md:translate-y-4',
            ]"
            src="/imgs/process/main.png"
            alt="Сумка на ремонте"
          />
        </figure>
      </div>

      <LayoutProcessStepList :list="rightList" right />
    </main>

    <footer :class="['md:mt-28 max-md:mt-4', ' flex justify-center']">
      <UiButton class="max-md:w-full">обратиться сейчас</UiButton>
    </footer>
  </section>
</template>
