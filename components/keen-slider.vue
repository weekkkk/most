<template>
  <div class="relative flex flex-col items-center">
    <div ref="container" class="keen-slider">
      <figure v-for="i in 4" :key="i" class="keen-slider__slide h-[45rem]">
        <img src="/imgs/slide.jpg" class="w-full h-full object-cover" />
      </figure>
    </div>

    <UiButton
      v-if="slider"
      :disabled="!current"
      @click="slider.prev()"
      img="/icons/arrow-left.svg"
      class="absolute top-1/2 -translate-y-1/2 left-14"
    />

    <UiButton
      v-if="slider"
      :disabled="dotHelper.at(-1) === current"
      @click="slider.next()"
      img="/icons/arrow-right.svg"
      class="absolute top-1/2 -translate-y-1/2 right-14"
    />

    <ul
      v-if="slider"
      class="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2"
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
