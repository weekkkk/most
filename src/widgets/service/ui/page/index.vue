<script setup lang="ts">
const route = useRoute();

const service = useState<GetServisePageDataDto | undefined>(route.path);
</script>

<template>
  <main
    v-if="service"
    :class="[
      'flex flex-col',
      'gap-[10rem] max-2xl:gap-[5rem] max-md:gap-[5rem]',
    ]"
  >
    <UiBanner v-bind="service.banner" />

    <div
      :class="[
        'flex flex-col',
        'gap-[15rem] max-2xl:gap-[7.5rem] max-md:gap-[10rem]',
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
