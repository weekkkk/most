<script lang="ts" setup generic="T">
const props = defineProps<{ dot?: boolean }>();

const current = ref(0);

const [container, slider] = useKeenSlider({
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel;
  },
});

const dotHelper = computed(() =>
  slider.value?.track.details
    ? [...Array(slider.value.track.details.slides.length).keys()]
    : []
);
</script>

<style></style>

<template>
  <div class="relative flex flex-col items-center">
    <div ref="container" class="keen-slider">
      <slot />
    </div>

    <UiButton
      v-if="slider"
      :disabled="!current"
      @click="slider.prev()"
      img="icons/arrow-left.svg"
      :class="[
        'absolute top-1/2 -translate-y-1/2 disabled:bg-common',
        'md:left-14 max-md:left-0',
      ]"
    />

    <UiButton
      v-if="slider"
      :disabled="dotHelper.at(-1) === current"
      @click="slider.next()"
      img="icons/arrow-right.svg"
      :class="[
        'absolute top-1/2 -translate-y-1/2 right-14 disabled:bg-common',
        'md:right-14 max-md:right-0',
      ]"
    />

    <ul
      v-if="dot && slider"
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
