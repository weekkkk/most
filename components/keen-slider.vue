<template>
  <div class="relative flex flex-col items-center">
    <div ref="container" class="keen-slider">
      <figure v-for="i in 4" :key="i" class="keen-slider__slide h-[45rem]">
        <img src="/imgs/slide.jpg" class="w-full h-full object-cover" />
      </figure>
    </div>

    <button
      v-if="slider"
      @click="slider.prev()"
      class="absolute top-1/2 -translate-y-1/2 rounded-full bg-brand-100 h-12 w-12 p-[0.9rem] transition-all left-14"
    >
      <img class="h-[1.2rem] w-[1.2rem]" src="/icons/arrow-left.svg" />
    </button>

    <button
      v-if="slider"
      @click="slider.next()"
      class="absolute top-1/2 -translate-y-1/2 rounded-full bg-brand-100 h-12 w-12 p-[0.9rem] transition-all right-14"
    >
      <img class="h-[1.2rem] w-[1.2rem]" src="/icons/arrow-right.svg" />
    </button>

    <ul
      v-if="slider"
      class="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2"
    >
      <li v-for="(_slide, idx) in dotHelper" :key="idx">
        <button
          class="rounded-full h-3 w-3"
          @click="slider.moveToIdx(idx)"
          :class="{
            'bg-brand-100': current === idx,
            'bg-second-0': current !== idx,
          }"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const current = ref(1);

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
