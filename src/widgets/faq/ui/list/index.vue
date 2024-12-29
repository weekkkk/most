<script setup lang="ts">
import type { LayoutFaqListItemProps } from "./ui/item/types";

const questions: LayoutFaqListItemProps[] = [
  {
    question: "кто такие \nMost Clean?",
    answer: "ответ",
  },
  {
    question: "что еще можно \nпочистить?",
    answer: "ответ",
  },
  {
    question: "убила свои говнодавы, \nчто делать?",
    answer:
      "ну, говнодавы явно побывали в приключении! Несите их к нам, устроим им люкс-отдых — отмоем, освежим, и вернём к жизни лучше, чем были!",
  },
  {
    question: "как вас \nнайти?",
    answer: "ответ",
  },
];
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
      <ul>
        <FaqListItemWidget
          v-for="(question, index) in questions"
          :key="index"
          v-bind="{ ...question }"
        >
        </FaqListItemWidget>
      </ul>
    </main>
  </section>
</template>
