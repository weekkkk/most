<script setup lang="ts">
/**Сссылка на инпут */
const inputRef = ref<HTMLInputElement>();

const route = useRoute();

/**текст поиска */
const searchText = computed(() => route.query.name?.toString());

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

const search = async ({ target }: Event) => {
  const name = (target as HTMLInputElement).value || "";

  console.log(name);

  await navigateTo({
    query: {
      name,
    },
  });
};
</script>

<template>
  <UiButton
    @focus="openSearch"
    @blur="closeSearch"
    :class="[
      '!p-[1.45rem] max-2xl:!p-[1.15rem] max-md:!p-[.65rem]',
      '!rounded-[2.2rem]',
      {
        '!px-[2rem] max-md:!px-[1rem] max-md:w-full': stateOpenSearch,
      },
      'flex items-center',
    ]"
  >
    <img class="w-[1.5rem] max-md:w-[1.2rem]" src="/icons/Search.svg" alt="" />

    <input
      v-if="stateOpenSearch"
      ref="inputRef"
      :value="searchText"
      @input="search"
      :class="[
        '-my-2',
        'h-[2rem] max-2xl:h-[1.5rem] max-md:h-[1rem]',
        'w-[8.3rem] max-md:w-full',
        'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
        'leading-small',
        'ml-[1rem]',
        'font-medium',
        'text-default',
        'outline-none',
      ]"
      style="background: none"
      type="text"
    />
  </UiButton>
</template>
