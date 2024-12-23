<script setup lang="ts">
definePageMeta({
  banner: {
    title: "премиальный\nремонт обуви",
    description:
      "в нашем мире, где внешний вид играет важную роль, мы стремимся предоставить вам лучшие услуги по уходу за вашими любимыми вещами",
    actionText: "отремонтировать",
    image: "repair/shoes.png",
  },
  process: {
    title: "как же мы\nремонтируем обувь",
    image: "repair/shoes.png",
    startSteps: [
      {
        icon: "fire",
        label: "Первичная\nоценка",
      },
      {
        icon: "magicpen",
        label: "Очистка",
      },
      {
        icon: "bucket",
        label: "Ремонт швов",
      },
      {
        icon: "drop",
        label: "Замена деталей",
      },
      {
        icon: "brush",
        label: "Реставрация\nматериала",
      },
    ],
    endSteps: [
      {
        icon: "restoration",
        label: "Обновление\nподошвы",
      },
      {
        icon: "work",
        label: "Ремонт\nкаблуков",
      },
      {
        icon: "scissor",
        label: "Полировка",
      },
      {
        icon: "polishing",
        label: "Пропитка\nи защита",
      },
      {
        icon: "heart",
        label: "Финальная\nпроверка",
      },
    ],
  },
});
</script>

<template></template>
