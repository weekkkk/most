<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { UiFilterProps } from "./types";
import type { GetCategoryDataDto } from "../../../widgets/filter/api/types";
import { useRouter } from "vue-router";

const props = defineProps<UiFilterProps>();

const router = useRouter();

/**Текущая категория */
const currentCategory = ref(1);

/**Фильтрация прайс листа */
const selectCategory = (category: GetCategoryDataDto) => {
  currentCategory.value = +category.id;

  router.push({
    query: {
      category: currentCategory.value,
    },
  });
};

onMounted(() => {
  if (router.currentRoute.value.query.category) {
    currentCategory.value = +router.currentRoute.value.query.category;
  }
});
</script>
<template>
  <div>
    <button
      v-for="category in categories"
      :key="category.id"
      :class="[
        'pt-[1.2rem] max-md:pt-[.75rem] pr-[2rem] max-md:pr-[1rem]  pb-[1.2rem] max-md:pb-[.75rem] pl-[2rem] max-md:pl-[1rem] rounded-[5rem] bg-[#F5F5F5] text-[2rem] max-md:text-[1rem]',
        {
          'hover:bg-brand-50 hover:text-[#FFF]':
            +category.id !== currentCategory,
        },
        { '!bg-[#0094FF] text-[#FFF]': +category.id === currentCategory },
      ]"
      @click="selectCategory(category)"
    >
      {{ category.name }}
    </button>
  </div>
</template>
