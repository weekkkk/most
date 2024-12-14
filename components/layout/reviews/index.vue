<template>
  <section class="px-[12.5rem]">
    <header class="text-center mb-20">
      <h2 class="text-[5rem] leading-small">отзывы наших клиентов</h2>
    </header>

    <main class="grid grid-cols-4 grid-rows-[22.5rem_22.5rem] gap-8">
      <LayoutReviewsItem class="col-start-1 col-end-2 row-start-1 row-end-2" />
      <LayoutReviewsItem class="col-start-1 col-end-2 row-start-2 row-end-3" />
      <LayoutReviewsItem class="col-start-2 col-end-3 row-start-2 row-end-3" />

      <LayoutReviewsItem class="col-start-3 col-end-4 row-start-1 row-end-2" />
      <LayoutReviewsItem class="col-start-4 col-end-5 row-start-1 row-end-2" />
      <LayoutReviewsItem class="col-start-4 col-end-5 row-start-2 row-end-3" />
    </main>
  </section>
</template>
