<script setup lang="ts">
const route = useRoute();

const service = useState<GetServiseDataDto | undefined>(route.path);
</script>

<template>
  <main
    v-if="service"
    :class="[
      'flex flex-col',
      'gap-[15rem] max-2xl:gap-[10rem] max-md:gap-[5rem]',
    ]"
  >
    <UiBanner v-bind="service.banner" />

    <div
      :class="[
        'flex flex-col',
        'gap-[22.5rem] max-2xl:gap-[15rem] max-md:gap-40',
      ]"
    >
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
