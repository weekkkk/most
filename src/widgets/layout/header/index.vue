<script setup lang="ts">
const startNavItems: UiHeaderProps["startNavItems"] = [
  // {
  //   header: "Химчистка",
  //   items,
  // },
  // {
  //   header: "ремонт",
  //   items,
  // },
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
  // {
  //   header: "обувь",
  //   items,
  // },
];

const endNavItems: UiHeaderProps["endNavItems"] = [
  // {
  //   header: "Цены",
  //   items,
  // },
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
