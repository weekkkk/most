<script lang="ts" setup>
import type { UiBannerProps } from "./types";

const props = defineProps<UiBannerProps>();

const route = useRoute();

const config = useRuntimeConfig();

const imgFolder = computed(
  () => `${config.app.baseURL}imgs/banners/${props.image}`
);
const imgSrc = computed(() => ({
  d: `${imgFolder.value}/d.webp`,
  t: `${imgFolder.value}/t.webp`,
  m: `${imgFolder.value}/m.webp`,
}));

const $img = ref<HTMLImageElement>();
const isLoad = ref(false);

onMounted(() => {
  if (!$img.value) return;
  if ($img.value.complete) isLoad.value = true;
});
</script>

<template>
  <section
    class="relative overflow-hidden h-[82.5rem] max-2xl:h-[64.5rem] max-md:h-[47.5rem] bg-gradient-to-tr from-second-50 to-second-100"
  >
    <Transition>
      <div v-if="!isLoad" class="bg-common object-cover w-full h-full absolute">
        <div class="animate-pulse object-cover w-full h-full">
          <div
            class="bg-second-100 object-cover w-full h-full"
            :style="{
              background: `linear-gradient(${loaderGradient.toString()})`,
            }"
          />
        </div>
      </div>
    </Transition>

    <div
      class="absolute object-cover w-full h-full z-[10] text-center text-default py-60 max-2xl:py-[14.5rem] max-md:py-[7.75rem]"
    >
      <h1
        class="text-[9rem] max-2xl:text-[6rem] max-md:text-[2.5rem] -tracking-[calc(9rem/100)] max-2xl:-tracking-[calc(6rem/100)] max-md:-tracking-[calc(2.5rem/100)] max-2xl:leading-[4.5rem] max-md:leading-[2rem] md:mb-10 max-md:mb-4 whitespace-pre-wrap"
        :class="{
          'leading-[7rem]': noLineMerge,
          'leading-[6rem]': !noLineMerge,
        }"
      >
        <span class="max-md:hidden">
          {{ title }}
        </span>
        <span class="md:hidden">
          {{ mdTitle || title }}
        </span>
      </h1>

      <p
        class="text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem] md:mb-10 max-md:mb-6 mx-auto w-[53.6rem] max-2xl:w-[36rem] max-md:w-full max-md:px-6 leading-control"
      >
        {{ description }}
      </p>

      <NuxtLink :to="{ path: '/', hash: '#feedback' }">
        <UiButton> {{ actionText }} </UiButton>
      </NuxtLink>
    </div>

    <picture>
      <source
        :srcset="imgSrc.d"
        media="(min-width: 1536px)"
        type="image/jpeg"
      />
      <source :srcset="imgSrc.t" media="(min-width: 768px)" type="image/jpeg" />
      <div
        v-if="blackout"
        class="bg-common w-full h-full opacity-60 absolute"
      />
      <img
        ref="$img"
        :src="imgSrc.m"
        class="object-cover w-full h-full"
        alt=""
        @load="isLoad = true"
        @loadstart="isLoad = false"
      />
    </picture>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
