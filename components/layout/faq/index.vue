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
    question: "убила свои говнодавы, что делать?",
    answer:
      "ну, говнодавы явно побывали в приключении! Несите их к нам, устроим им люкс-отдых — отмоем, освежим, и вернём к жизни лучше, чем были!",
  },
  {
    question: "как вас найти?",
    answer: "ответ",
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
