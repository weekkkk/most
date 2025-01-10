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
  if (stateOpenSearch.value) return;
  stateOpenSearch.value = true;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

/** Закрытие поиска */
const closeSearch = ({ relatedTarget }: FocusEvent) => {
  if (!stateOpenSearch.value) return;
  const buttonEl = document.getElementById("searchButton");

  if (buttonEl === relatedTarget) {
    return;
  }
  stateOpenSearch.value = false;
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
    id="searchButton"
    @click="openSearch()"
    :class="[
      '!p-[1.45rem] max-2xl:!p-[1.15rem] max-md:!p-[.65rem]',
      '!rounded-[2.2rem]',
      'flex !justify-between',
      'w-[4.4rem] max-2xl:w-[3.8rem] max-md:w-[2.5rem]',
      {
        '!px-[2rem] max-md:!px-[1rem] !w-[17rem] max-2xl:!w-[18.2rem] max-md:!w-full delay-150':
          stateOpenSearch,
      },
      'transition-all duration-300',
    ]"
    readonly
  >
    <img class="w-[1.5rem] max-md:w-[1.2rem]" src="/icons/Search.svg" alt="" />

    <input
      @blur="closeSearch"
      v-if="stateOpenSearch"
      ref="inputRef"
      :value="searchText"
      @input="search"
      :class="[
        '-my-8',
        'h-[4.4rem] max-2xl:h-[3.8rem] max-md:h-[2.5rem]',
        'w-full',
        'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
        'leading-small',
        'ml-[1rem] max-md:ml-[0.5rem]',
        'font-medium',
        'text-default',
        'outline-none',
      ]"
      style="background: none"
      type="text"
    />

    <img
      class="w-[1.5rem] max-md:w-[1.2rem] cursor-pointer rotate-45 transition-opacity duration-150 delay-300"
      :class="{
        'opacity-0 !delay-0': !stateOpenSearch,
      }"
      src="/icons/open.svg"
      alt=""
      @click.stop="stateOpenSearch = false"
    />
  </UiButton>
</template>
