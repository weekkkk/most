<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData("category-list", () =>
  CategoryService.getList()
);

const categoryId = computed(() => route.params.category.toString());

const changeCategory = async (category: string) => {
  await navigateTo({ params: { category } });
};
</script>

<template>
  <CategoryList
    v-if="data"
    :items="data"
    :model-value="categoryId"
    @update:model-value="changeCategory"
  />
</template>
