<script setup lang="ts">
const steps: UiGuaranteesProps["steps"] = [
  { icon: "open", label: "сдаёте 2+ изделия", mdLabel: "сдаёте 2+\nизделия" },
  { icon: "wallet", label: "общая стоимость\nуслуг 15000₽+" },
];
</script>

<template>
  <main
    :class="[
      'flex flex-col items-center',
      'mt-[15rem] max-2xl:mt-[14.5rem] max-md:mt-[7.75rem]',
      'gap-[7.5rem] max-2xl:gap-[5rem] max-md:gap-[3rem]',
    ]"
  >
    <header class="flex flex-col items-center">
      <h1
        :class="[
          'text-center',
          'text-[9rem] max-2xl:text-[6rem] max-md:text-[2.5rem]',
          '-tracking-[calc(9rem/100)] max-2xl:-tracking-[calc(6rem/100)] max-md:-tracking-[calc(2.5rem/100)]',
          'leading-[6rem] max-2xl:leading-[4.5rem] max-md:leading-[2rem]',
        ]"
      >
        быстрее нашей <br />
        доставки, <br class="md:hidden" />
        только свет
      </h1>
      <p
        :class="[
          'text-center',
          'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
          'leading-[2.4rem] max-2xl:leading-[1.8rem] max-md:leading-[1.2rem]',
          'w-[53.6rem] max-2xl:w-[39.4rem] max-md:w-[17.25rem]',
          'md:mt-[2.5rem] max-md:mt-[1rem]',
        ]"
      >
        забор и обратная доставка у нас осуществляется только посредством
        курьерской доставки в пределах МКАД (если за пределами, то рассматриваем
        отдельно).
      </p>
    </header>

    <p
      :class="[
        'text-center',
        'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
        'leading-[2.4rem] max-2xl:leading-[1.8rem] max-md:leading-[1.2rem]',
      ]"
    >
      cтоимость доставки <br />
      в пределах МКАД: 1000 ₽
    </p>

    <section>
      <header class="mb-[10rem] max-2xl:mb-[7.5rem] max-md:mb-[3rem]">
        <h2
          :class="[
            'text-center',
            'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
            '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
            'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
          ]"
        >
          условия бесплатной <br />
          доставки:
        </h2>
      </header>

      <UiGuaranteesStepList :list="steps" />
    </section>
  </main>
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
