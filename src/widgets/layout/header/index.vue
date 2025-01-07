<script setup lang="ts">
const startNavItems: UiHeaderProps["startNavItems"] = [
  {
    label: "химчистка",
    to: "/",
  },
  {
    label: "ремонт",
    to: "/repair",
    children: [
      {
        label: "сумки",
        to: "bags",
      },
      {
        label: "обувь",
        to: "shoes",
      },
    ],
  },
  {
    label: "реставрация",
    to: "/restoration",
    children: [
      {
        label: "сумки",
        to: "bags",
      },
      {
        label: "обувь",
        to: "shoes",
      },
    ],
  },
  {
    label: "обувь",
    to: "/complex",
    children: [
      {
        label: "туфли",
        to: "shoes",
      },
      {
        label: "кроссовки",
        to: "sneakers",
      },
      {
        label: "ботинки",
        to: "boots",
      },
    ],
  },
];

const endNavItems: UiHeaderProps["endNavItems"] = [
  {
    label: "доставка",
    to: "/delivery",
  },
  // {
  //   header: "Доставка",
  //   items,
  // },
  // {
  //   header: "Контакты",
  //   items,
  // },
];
</script>

<template>
  <UiHeader :start-nav-items="startNavItems" :end-nav-items="endNavItems" />
</template>
