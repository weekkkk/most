<script setup lang="ts">
const bannerTitle = "премиум химчистка\nобуви и сумок";
const bannerDescription =
  "в нашем мире, где внешний вид играет важную роль, мы стремимся предоставить вам лучшие услуги по уходу за вашими любимыми вещами";
const bannerImage = "cleaning";
const bannerActionText = "вызвать курьера";
const bannerLoaderGradient = [
  "-1355deg",
  "#53565B",
  "#6A6F75",
  "#70757B",
  "#B3B8BE",
  "#B8BDC3",
  "#D2D7DD",
  "#D3D8DE",
  "#C9D0D6",
  "#A7AEB4",
  "#8E959D",
];

const processTitle = "искусство ухода за вашими\nлюбимыми вещами";
const processMdTitle = "искусство ухода\nза вашими\nлюбимыми вещами";
const processImage = "cleaning";
const processStartSteps: UiProcessProps["startSteps"] = [
  {
    icon: "fire",
    label: "Первичная\nручная чистка",
  },
  {
    icon: "magicpen",
    label: "Детальная\nчистка подошвы",
    mdLabel: "Детальная чистка\nподошвы",
  },
  {
    icon: "bucket",
    label: "Глубокая чистка\nспец.средствами",
    mdLabel: "Глубокая чистка\nспециальными средствами",
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
    :loader-gradient="bannerLoaderGradient"
    no-line-merge
    blackout
  />
  <div
    :class="[
      'flex flex-col',
      'mt-[10rem] max-2xl:mt-[5rem] max-md:mt-[5rem]',
      'gap-[15rem] max-2xl:gap-[7.5rem] max-md:gap-[10rem]',
    ]"
  >
    <FeedbackFormWidget />

    <UiProcess
      :title="processTitle"
      :md-title="processMdTitle"
      :image="processImage"
      :startSteps="processStartSteps"
      :endSteps="processEndSteps"
      noFooter
    />

    <ReviewListWidget />

    <ComparisonSlidersWidget />

    <FaqListWidget />
  </div>
</template>
