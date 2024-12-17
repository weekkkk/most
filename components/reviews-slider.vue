<template>
  <div class="relative flex flex-col items-center">
    <div ref="container" class="keen-slider">
      <div
        class="flex justify-center keen-slider__slide"
        v-for="i in 4"
        :key="i"
      >
        <LayoutReviewsItem class="h-52 w-[8.4rem]" />
      </div>
    </div>

    <UiButton
      v-if="slider"
      :disabled="!current"
      @click="slider.prev()"
      img="/icons/arrow-left.svg"
      class="absolute top-1/2 -translate-y-1/2 md:left-14 max-md:left-0 disabled:bg-common"
    />

    <UiButton
      v-if="slider"
      :disabled="dotHelper.at(-1) === current"
      @click="slider.next()"
      img="/icons/arrow-right.svg"
      class="absolute top-1/2 -translate-y-1/2 md:right-14 max-md:right-0 disabled:bg-common"
    />

    <ul
      v-if="slider"
      :class="[
        'absolute left-1/2 -translate-x-1/2 flex gap-2 bottom-14',
        'max-md:hidden',
      ]"
    >
      <li v-for="(_slide, idx) in dotHelper" :key="idx">
        <UiButton
          class="h-[15px] w-[15px]"
          style="padding: 0"
          @click="slider.moveToIdx(idx)"
          :readonly="current === idx"
          :class="{
            'bg-second-0': current !== idx,
          }"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const current = ref(0);

const [container, slider] = useKeenSlider({
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel;
  },
});

const dotHelper = computed(() =>
  slider.value
    ? [...Array(slider.value.track.details.slides.length).keys()]
    : []
);
</script>

<style></style>
