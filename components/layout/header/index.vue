<script lang="ts" setup>
import type { LayoutHeaderMenuListItemProps } from "./menu-list/item";

const leftMenuList: LayoutHeaderMenuListItemProps[] = [
  // {
  //   header: "Химчистка",
  //   items,
  // },
  // {
  //   header: "ремонт",
  //   items,
  // },
  {
    header: "ремонт",
    items: [
      {
        title: "сумки",
        to: "/repair/bags",
      },
      {
        title: "обувь",
        to: "/repair/shoes",
      },
    ],
  },
  {
    header: "реставрация",
    items: [
      {
        title: "сумки",
        to: "/restoration/bags",
      },
      {
        title: "обувь",
        to: "/restoration/shoes",
      },
    ],
  },
  // {
  //   header: "обувь",
  //   items,
  // },
];

const rightMenuList: LayoutHeaderMenuListItemProps[] = [
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
  <header
    :class="[
      'inset-x-0 top-0 flex items-center justify-between',
      'md:pt-14 max-md:pt-12',
      'md:px-14 max-md:px-3',
      'absolute z-50',
    ]"
  >
    <LayoutHeaderMenuList class="max-md:hidden w-full" :list="leftMenuList" />
    <img src="/icons/logo.svg" alt="Logo" />
    <LayoutHeaderMenuList
      class="max-md:hidden w-full"
      :list="rightMenuList"
      right
    />
    <LayoutHeaderBurder
      class="hidden max-md:inline-block"
      :list="[...leftMenuList, ...rightMenuList]"
    />
  </header>
</template>
