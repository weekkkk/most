<template>
  <section class="md:px-[12.5rem] max-md:px-3">
    <header :class="['text-center', 'md:mb-20 max-md:mb-8']">
      <h2
        :class="[
          'md:text-[5rem] max-md:text-[1.75rem]',
          'md:leading-small max-md:leading-[1.5rem]',
        ]"
      >
        отзывы наших клиентов
      </h2>
    </header>

    <main
      class="max-md:hidden grid grid-cols-4 grid-rows-[22.5rem_22.5rem] gap-8"
    >
      <LayoutReviewsItem class="col-start-1 col-end-2 row-start-1 row-end-2" />
      <LayoutReviewsItem class="col-start-1 col-end-2 row-start-2 row-end-3" />
      <LayoutReviewsItem class="col-start-2 col-end-3 row-start-2 row-end-3" />

      <LayoutReviewsItem class="col-start-3 col-end-4 row-start-1 row-end-2" />
      <LayoutReviewsItem class="col-start-4 col-end-5 row-start-1 row-end-2" />
      <LayoutReviewsItem class="col-start-4 col-end-5 row-start-2 row-end-3" />
    </main>

    <main class="hidden max-md:block">
      <ClientOnly>
        <ReviewsSlider />
      </ClientOnly>
    </main>
  </section>
</template>
