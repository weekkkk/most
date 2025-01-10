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
  <ServiceList v-if="items" :items="items" />
</template>
