<script setup lang="ts">
import type { LayoutFAQQuestionProps } from "./question/interfaces";

const questions: LayoutFAQQuestionProps[] = [
  {
    question: "кто такие Most Clean?",
    answer: "ответ",
  },
  {
    question: "что еще можно почистить?",
    answer: "ответ",
  },
  {
    question: "сколько будет выполняться заказ?",
    answer: "ответ",
  },
  {
    question: "даете ли вы гарантию на свои работы?",
    answer:
      "Перед забором вашего изделия мы всегда обсуждаем возможные риски и подробно объясняем, на какие виды работ предоставляется гарантия",
  },
];
</script>

<template>
  <section class="px-14">
    <header class="text-center mb-[3.5rem]">
      <h2 class="text-[5rem] leading-small">
        ответим на все<br />
        волнующие вопросы
      </h2>
    </header>
    <main>
      <ul>
        <LayoutFaqQuestion
          v-for="(question, index) in questions"
          :key="index"
          v-bind="{ ...question }"
        >
        </LayoutFaqQuestion>
      </ul>
    </main>
  </section>
</template>
