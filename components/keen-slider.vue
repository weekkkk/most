<template>
  <div class="relative flex flex-col items-center">
    <div ref="container" class="keen-slider">
      <figure
        v-for="i in 4"
        :key="i"
        :class="['keen-slider__slide', 'md:h-[45rem] max-md:aspect-[345/175]']"
      >
        <img src="/imgs/slide.jpg" class="w-full h-full object-cover" />
      </figure>
    </div>

    <UiButton
      v-if="slider"
      :disabled="!current"
      @click="slider.prev()"
      img="/most/icons/arrow-left.svg"
      :class="[
        'absolute top-1/2 -translate-y-1/2 disabled:bg-common',
        'md:left-14 max-md:left-0',
      ]"
    />

    <UiButton
      v-if="slider"
      :disabled="dotHelper.at(-1) === current"
      @click="slider.next()"
      img="/most/icons/arrow-right.svg"
      :class="[
        'absolute top-1/2 -translate-y-1/2 right-14 disabled:bg-common',
        'md:right-14 max-md:right-0',
      ]"
    />

    <ul
      v-if="slider"
      :class="[
        'absolute left-1/2 -translate-x-1/2 flex gap-2',
        'md:bottom-14 max-md:bottom-2',
      ]"
    >
      <li v-for="(_slide, idx) in dotHelper" :key="idx">
        <UiButton
          style="padding: 0"
          @click="slider.moveToIdx(idx)"
          :readonly="current === idx"
          :class="[
            'md:h-[15px] max-md:h-[0.4rem]',
            'md:w-[15px] max-md:w-[0.4rem]',
            { 'bg-second-0': current !== idx },
          ]"
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
