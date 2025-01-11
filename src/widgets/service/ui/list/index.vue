<script setup lang="ts">
const route = useRoute();

const { data, error, status } = await useAsyncData(
  `service-list-${route.params.category.toString()}`,
  () => ServiceService.getList(route.params.category.toString())
);

const items = computed(() =>
  data.value?.filter(({ name }) =>
    name.toLowerCase().includes(route.query.name?.toString() || "")
  )
);
</script>

<template>
  <ServiceList v-if="items?.length" :items="items" />
  <section v-else-if="items && !items.length">
    <h2
      :class="[
        'text-center',
        'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
        '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
        'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
      ]"
    >
      ничего не найдено
    </h2>
  </section>
</template>
