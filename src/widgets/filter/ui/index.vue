<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CategoryServices } from "../services";
import type { GetCategoryDataDto } from "../api/types";

/**Категории фильтра */
const categories = ref<GetCategoryDataDto[]>([]);

const getCategory = async () => {
  try {
    categories.value = await CategoryServices.getCategory();
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
  await getCategory();
});
</script>
<template>
  <div>
    <UiFilter :categories="categories" class="mt-[7.5rem]" />
  </div>
</template>
