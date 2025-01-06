<script setup lang="ts">
import { nextTick, ref } from "vue";

const emit = defineEmits<{
  (e: "search", search: string): string;
}>();

/**Сссылка на инпут */
const inputRef = ref<HTMLInputElement>();

/**текст поиска */
const searchText = ref();

/** Состояние открытого поиска */
const stateOpenSearch = ref(false);

/** Открытие поиска */
const openSearch = () => {
  stateOpenSearch.value = true;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

/** Закрытие поиска */
const closeSearch = (event: FocusEvent) => {
  const relatedTarget = event.relatedTarget;
  const currentTarget = event.currentTarget as HTMLElement;

  if (!currentTarget.contains(relatedTarget as Node)) {
    stateOpenSearch.value = false;
  }
};
</script>

<template>
  <UiButton
    @focusin="openSearch"
    @focusout="closeSearch"
    :class="[
      '!p-[1rem] max-md:!p-[.75rem]',
      {
        'max-md:!pt-[.75rem] max-md:!pb-[.75rem] !pr-[2rem] max-md:!pr-[1rem] !pl-[2rem] max-md:!pl-[1rem]':
          stateOpenSearch,
      },
      'flex items-center max-md:mb-[3rem]',
    ]"
  >
    <img
      class="w-[1.5rem] max-md:w-[1.2rem] h-[1.5rem] max-md:h-[1.2rem]"
      src="/icons/Search.svg"
      alt=""
    />

    <input
      v-if="stateOpenSearch"
      ref="inputRef"
      v-model="searchText"
      @input="emit('search', searchText)"
      class="w-[8.3rem] max-md:w-[12.45rem] text-[2rem] max-md:text-[1rem] leading-[2.4rem] outline-none text-[#fff] ml-[1rem]"
      style="background: none"
      type="text"
    />
  </UiButton>
</template>
