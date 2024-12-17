<script lang="ts" setup></script>

<template>
  <section :class="['relative', 'md:h-[82.5rem] max-md:h-[47.5rem]']">
    <div
      :class="[
        'absolute object-cover w-full h-full',
        'text-center text-default',
        'md:py-60 max-md:py-[10.25rem]',
        'lg:px-[10.5rem]',
      ]"
    >
      <h1
        :class="[
          'md:text-[9rem] max-md:text-[2.5rem]',
          'md:leading-[6rem] max-md:leading-[2rem]',
          'md:mb-10 max-md:mb-4',
        ]"
      >
        премиальный ремонт сумок
      </h1>

      <p
        :class="[
          'md:text-[2rem]',
          'md:mb-14 max-md:mb-3',
          'md:px-[10.7rem] max-md:px-6',
          'leading-control',
        ]"
      >
        в нашем мире, где внешний вид играет важную роль, мы стремимся
        предоставить вам лучшие услуги по уходу за вашими любимыми вещами
      </p>

      <UiButton> отремонтировать </UiButton>
    </div>

    <img
      class="object-cover w-full h-full"
      src="/imgs/banner/main.png"
      alt=""
    />
  </section>
</template>
