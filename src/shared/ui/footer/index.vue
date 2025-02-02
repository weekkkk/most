<script setup lang="ts">
const goToStart = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const config = useRuntimeConfig();
const imgUrl = computed(() => `${config.app.baseURL}icons/arrow-up.svg`)
</script>
<template>
  <footer
    :class="[
      'md:px-14 max-md:px-3',
      'pb-[14.2rem] max-2xl:pb-[12rem] max-md:pb-[7.75rem]',
      'mt-[20rem] max-2xl:mt-[10rem] max-md:mt-40',
      'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
      'leading-control max-2xl:leading-small max-md:leading-small',
    ]"
  >
    <ul
      :class="['grid md:gap-y-20', 'md:grid-cols-3 max-md:grid-cols-1fr_4rem']"
    >
      <li
        :class="[
          'w-full',
          'max-md:col-start-1 max-md:col-end-2',
          'max-md:mb-[1.5rem]',
        ]"
      >
        мы в интернете

        <ul
          :class="[
            'flex flex-col',
            'md:gap-1 max-md:gap-[0.4rem]',
            'md:mt-8 max-md:mt-[0.7rem]',
          ]"
        >
          <li>
            <a href="https://www.instagram.com/most.cleans" target="_blank">
              instagram*
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@MostCleanMsc" target="_blank">
              youtube
            </a>
          </li>
          <li>
            <a href="https://t.me/+AsB8wbhjJSg2ZGVi">telegram</a>
          </li>
        </ul>
      </li>

      <li class="w-full md:text-center max-md:col-start-1 max-md:mb-[0.9rem]">
        <a
          href="https://mostclean.ru/privacy.html"
          target="_blank"
          class="text-common"
        >
          политика конф
        </a>
      </li>

      <li
        class="w-full md:text-right max-md:col-start-1 max-md:col-end-3 max-md:row-start-2 max-md:mb-[2.4rem]"
      >
        поговорим?

        <ul class="md:mt-8 max-md:mt-3">
          <li>
            <a href="mailto:mostcleanru@gmail.com">mostcleanru@gmail.com</a>
          </li>
        </ul>
      </li>

      <li class="w-full flex items-center max-md:col-start-1 max-md:col-end-3">
        *meta запрещена в России
      </li>

      <li
        :class="[
          'shrink-0 flex',
          'max-md:col-start-2 max-md:row-start-1 max-md:col-end-3',
          'md:justify-center max-md:justify-end',
          'md:items-center max-md:items-start',
        ]"
      >
        <div
          @click.prevent="goToStart()"
          :class="[
            'inline-flex justify-center items-center bg-brand-100 text-default md:text-[2rem] rounded-full leading-control',
            'md:h-20 max-md:h-16',
            'md:w-20 max-md:w-16',
            'cursor-pointer',
            'relative md:z-10',
          ]"
        >
          <img 
            :src="imgUrl" 
            class="md:w-[0.95rem] md:h-[1.81rem] w-[0.66rem] h-[1.25rem]"
            alt=""
          >
        </div>
      </li>

      <li
        class="w-full md:justify-end text-right flex items-center max-md:col-start-1 max-md:col-end-3 max-md:row-start-4 max-md:mb-[0.9rem]"
      >
        c в круге 2024
      </li>
    </ul>
  </footer>

  <footer
    :class="[
      'fixed',
      'z-10',
      'max-h-0 flex items-end',
      'md:bottom-16 max-md:bottom-3',
      'md:inset-x-16 max-md:inset-x-3',
    ]"
  >
    <ul class="max-h-0 flex justify-between items-end w-full">
      <li class="flex">
        <ul class="flex">
          <li>
            <a href="https://wa.me/79261234858" target="_blank">
              <UiButton img="icons/whatsapp.svg" size="large" />
            </a>
          </li>
          <li>
            <a href="tg://resolve?domain=MostClean_manager">
              <UiButton img="icons/telegram.svg" size="large" />
            </a>
          </li>
        </ul>
      </li>

      <li class="max-md:w-full">
        <a href="tel:89261234858" class="max-md:w-full">
          <UiButton img="icons/phone.svg" size="large" class="max-md:w-full">
            <span class="max-md:hidden text-default"> 8-926-123-48-58 </span>
            <span class="md:hidden text-default"> позвонить </span>
          </UiButton>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
a {
  transition: 150ms color ease-in-out;
}
a:not(:hover, .text-common) {
  color: #0094ff;
}
</style>
