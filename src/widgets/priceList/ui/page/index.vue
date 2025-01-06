<script setup lang="ts">
import { ref, watch } from "vue";
import { PriceListService } from "../../services";
import { useRoute } from "vue-router";
import type { GetPriceListDataDto } from "../../api/types";

const route = useRoute();

const priceLists = ref<GetPriceListDataDto[]>([]);

const getPriceList = async (categoryId: string) => {
  try {
    priceLists.value = await PriceListService.getPriceList(categoryId);
    console.log(priceLists.value);
  } catch (e) {
    console.log(e);
  }
};

watch(
  () => route.query,
  () => {
    getPriceList(String(route.query.category));
  }
);
</script>
<template>
  <div class="flex flex-col justify-center ml-[3.5rem] mr-[3.5rem]">
    <div>
      <h1
        class="text-[9rem] max-md:text-[2.5rem] text-center leading-[6rem] max-md:leading-[2rem] max-md:w-[17.25rem] max-md:h-[8rem]"
      >
        широкий выбор услуг по приятным ценам
      </h1>
      <div class="flex items-center justify-between">
        <FilterWidget class="mb-[7.5rem]" />
        <SearchWidget />
      </div>
      <UiList :priceLists="priceLists" />
    </div>
  </div>
</template>
