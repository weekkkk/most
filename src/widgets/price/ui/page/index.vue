<script setup lang="ts">
import { ref, watch } from "vue";
import { PriceListService } from "../../services";
import { useRoute } from "vue-router";
import type { GetPriceListDataDto } from "../../api/types";

const route = useRoute();

const priceLists = ref<GetPriceListDataDto[]>([]);

/**Текст поиска */
const searchText = ref();

const getPriceList = async (categoryId: string, search: string) => {
  try {
    priceLists.value = await PriceListService.getPriceList(categoryId, search);
  } catch (e) {
    console.log(e);
  }
};

watch(
  () => [route.query, searchText.value],
  () => {
    getPriceList(String(route.query.category), searchText.value);
  },
  { immediate: true }
);
</script>
<template>
  <div
    class="flex flex-col justify-center ml-[3.5rem] max-md:ml-[.75rem] mr-[3.5rem] max-md:mr-[.75rem]"
  >
    <div>
      <div class="flex items-center justify-between max-md:block">
        <FilterWidget class="mb-[7.5rem] max-md:mb-[2rem]" />
        <SearchWidget @search="searchText = $event" />
      </div>
      <UiList :priceLists="priceLists" />
    </div>
  </div>
</template>
