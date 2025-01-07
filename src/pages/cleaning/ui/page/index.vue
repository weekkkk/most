<script setup lang="ts">
const bannerTitle = "премиум химчистка\nобуви и сумок";
const bannerDescription =
  "в нашем мире, где внешний вид играет важную роль, мы стремимся предоставить вам лучшие услуги по уходу за вашими любимыми вещами";
const bannerImage = "cleaning";
const bannerActionText = "вызвать курьера";

const processTitle = "искусство ухода за вашими любимыми вещами";
const processImage = "main/2x";
const processStartSteps: UiProcessProps["startSteps"] = [
  {
    icon: "fire",
    label: "Первичная\nручная чистка",
  },
  {
    icon: "magicpen",
    label: "Детальная\nчистка подошвы",
  },
  {
    icon: "bucket",
    label: "Глубокая чистка\nспец.средствами",
  },
  {
    icon: "drop",
    label: "Чистка шнурков\nи стелек",
  },
  {
    icon: "brush",
    label: "Восстановление\nцвета",
  },
];

const processEndSteps: UiProcessProps["endSteps"] = [
  {
    icon: "restoration",
    label: "Восстановление\nформы",
  },
  {
    icon: "work",
    label: "Устранение\nзаломов",
  },
  {
    icon: "scissor",
    label: "Удаление\nкатышек, волос",
  },
  {
    icon: "polishing",
    label: "Сушка",
  },
  {
    icon: "heart",
    label: "Финальная\nобработка",
  },
];
</script>

<template>
  <UiBanner
    :title="bannerTitle"
    :description="bannerDescription"
    :image="bannerImage"
    :actionText="bannerActionText"
  />
  <div
    class="flex flex-col md:mt-[15rem] max-md:mt-[5rem] md:gap-[22.5rem] max-md:gap-[10rem]"
  >
    <FeedbackFormWidget />

    <UiProcess
      :title="processTitle"
      :image="processImage"
      :startSteps="processStartSteps"
      :endSteps="processEndSteps"
    />
    <ReviewListWidget />
    <ComparisonSubjectWidget />
    <FaqListWidget />
  </div>
</template>
