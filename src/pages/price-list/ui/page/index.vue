<template>
  <main
    :class="[
      'flex flex-col',
      'mt-[15rem] max-2xl:mt-[14.5rem] max-md:mt-[7.75rem]',
      'gap-[7.5rem] max-2xl:gap-[5rem] max-md:gap-[3rem]',
    ]"
  >
    <h1
      :class="[
        'text-center',
        'text-[9rem] max-2xl:text-[6rem] max-md:text-[2.5rem]',
        '-tracking-[calc(9rem/100)] max-2xl:-tracking-[calc(6rem/100)] max-md:-tracking-[calc(2.5rem/100)]',
        'leading-[6rem] max-2xl:leading-[4.5rem] max-md:leading-[2rem]',
      ]"
    >
      широкий <br class="md:hidden" />
      выбор услуг <br />
      по приятным ценам
    </h1>

    <nav
      class="flex px-14 max-md:px-[0.75rem] justify-between flex-wrap max-md:gap-y-8"
    >
      <CategoryListWidget />
      <div class="max-md:w-full">
        <ServiceSearchWidget />
      </div>
    </nav>

    <section class="px-14 max-md:px-[0.75rem]">
      <NuxtPage />
    </section>
  </main>
</template>
