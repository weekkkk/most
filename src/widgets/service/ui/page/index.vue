<script setup lang="ts">
const route = useRoute();

const service = useState<GetServiseDataDto | undefined>(route.path);
</script>

<template>
  <main
    v-if="service"
    :class="['flex flex-col', 'md:gap-[22.5rem] max-md:gap-40']"
  >
    <UiBanner v-bind="service.banner" />

    <div :class="['flex flex-col', 'md:gap-[22.5rem] max-md:gap-40']">
      <UiProcess v-bind="service.process" v-if="service.process" />

      <UiGuarantees
        v-bind="service.guarantees"
        v-else-if="service.guarantees"
      />

      <ReviewListWidget />

      <ComparisonSlidersWidget />

      <FaqListWidget />
    </div>
  </main>
</template>
