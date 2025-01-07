<script setup lang="ts">
const steps: UiGuaranteesProps["steps"] = [
  { icon: "open", label: "сдаёте 2+ изделия" },
  { icon: "wallet", label: "общая стоимость\nуслуг 15000₽+" },
];
</script>

<template>
  <section
    class="md:mt-[15rem] max-md:mt-[7.75rem] flex flex-col items-center md:gap-[7.5rem] max-md:gap-[3rem]"
  >
    <h1
      class="md:text-[9rem] max-md:text-[2.5rem] md:leading-[6rem] max-md:leading-[2rem] text-center"
    >
      быстрее нашей доставки, только свет
    </h1>
    <p
      :class="[
        'text-center',
        'md:text-[2rem] max-md:text-[1rem]',
        'md:w-[53.6rem] max-md:w-[17.25rem]',
        'md:leading-[2.4rem] max-md:leading-[1.2rem]',
        'md:mt-[2.5rem] max-md:mt-[1rem]',
      ]"
    >
      забор и обратная доставка у нас осуществляется только посредством
      курьерской доставки в пределах МКАД (если за пределами, то рассматриваем
      отдельно).
    </p>

    <p
      class="mt-[3rem] text-[1rem] md:leading-[2.4rem] md:text-[2rem] text-center"
    >
      cтоимость доставки <br />
      в пределах МКАД: 1000 ₽
    </p>

    <h2 class="text-[1.75rem] md:text-[5rem] text-center">
      условия бесплатной <br />
      доставки:
    </h2>

    <UiGuaranteesStepList :list="steps" />
  </section>
</template>

<style scoped>
li {
  margin: 0;
}
@media (max-width: 768px) {
  li {
    margin: 0 !important;
  }
}
</style>
