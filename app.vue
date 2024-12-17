<template>
  <LayoutHeader />
  <main :class="['flex flex-col', 'md:gap-60 max-md:gap-20']">
    <LayoutBanner id="test" />

    <div :class="['flex flex-col', 'md:gap-[22.5rem] max-md:gap-40']">
      <LayoutProcess />

      <LayoutReviews />

      <LayoutComparison />

      <LayoutFaq />

      <LayoutFooter />
    </div>
  </main>
</template>
