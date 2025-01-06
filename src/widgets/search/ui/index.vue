<script setup>
import { ref } from "vue";

/** Состояние открытия поиска */
const stateOpenSearch = ref(false);

/** Открытие поиска */
const openSearch = () => {
  stateOpenSearch.value = true;
};

/** Закрытие поиска */
const closeSearch = () => {
  stateOpenSearch.value = false;
};
</script>

<template>
  <UiButton
    @focusin="openSearch"
    @focusout="closeSearch"
    :class="[
      '!p-[1rem]',
      { '!pr-[2rem] !pl-[2rem]': stateOpenSearch },
      'flex items-center',
    ]"
  >
    <img class="w-[1.5rem] h-[1.5rem]" src="/icons/Search.svg" alt="" />

    <input
      v-if="stateOpenSearch"
      @click.stop
      @blur="closeSearch"
      class="text-[2rem] leading-[2.4rem] outline-none text-[#fff] ml-[1rem] w-[17rem]"
      style="background: none"
      type="text"
    />
  </UiButton>
</template>
