<script setup lang="ts">
  const steps = [
    {icon: 'open', label: 'сдаёте 2+ изделия'},
    {icon: 'wallet', label: 'общая стоимость услуг 15000₽+'}
  ]
</script>

<template>
  <section class="mt-[7.75rem] md:mt-[15rem] flex flex-col justify-center items-center">
    <h1 class="text-[2.5rem] md:text-[9rem] text-center">быстрее нашей доставки, только свет</h1>
    <p class="text-[1rem] md:text-[2rem] text-center md:w-[53.6rem] w-[17.25rem] leading-[1.2rem] md:leading-[2.4rem] mt-[1rem]">Забор и обратная доставка у нас осуществляется только посредством курьерской доставки в пределах МКАД (если за пределами, то рассматриваем отдельно).</p>
    <p class="mt-[3rem] text-[1rem] md:w-[26.65rem] w-[14.35rem] md:leading-[2.4rem] md:text-[2rem] text-center">Стоимость доставки в пределах МКАД: 1000 ₽</p>
    <div class="w-[55.8rem] mt-[3rem] md:mt-[7.5rem] flex flex-col items-center">
      <h2 class="text-[1.75rem] md:text-[5rem] md:w-[30rem] md:w-[55.8rem] w-[17.25rem] text-center mb-[3rem] md:mb-[10rem]">условия бесплатной доставки: </h2>
      <UiDeliveryStepList :list="steps"/>
    </div>
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