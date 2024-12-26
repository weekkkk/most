<template>
  <footer
    class="md:px-14 max-md:px-3 md:text-[1.5rem] leading-small md:pb-20 max-md:pb-[7.75rem] md:mt-[22.5rem] max-md:mt-40"
  >
    <ul
      :class="['grid md:gap-y-4', 'md:grid-cols-3 max-md:grid-cols-1fr_4rem']"
    >
      <li class="w-full max-md:col-start-1 max-md:col-end-2 max-md:mb-[2.4rem]">
        мы в интернете

        <ul :class="['flex flex-col gap-1', 'md:mt-8 max-md:mt-3']">
          <li>
            <a href="#">instagram*</a>
          </li>
          <li>
            <a href="#">youtube</a>
          </li>
          <li>
            <a href="#">telegram</a>
          </li>
        </ul>
      </li>

      <li class="w-full md:text-center max-md:col-start-1 max-md:mb-[0.8rem]">
        политика конф
      </li>

      <li
        class="w-full md:text-right max-md:col-start-1 max-md:col-end-3 max-md:row-start-2 max-md:mb-[2.4rem]"
      >
        поговорим?

        <ul class="md:mt-8 max-md:mt-3">
          <li>
            <a href="#">mostcleanru@gmail.com</a>
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
          :class="[
            'inline-flex justify-center items-center bg-brand-100 text-default md:text-[2rem] rounded-full leading-control',
            'md:h-20 max-md:h-16',
            'md:w-20 max-md:w-16',
          ]"
        >
          ап
        </div>
      </li>

      <li
        class="w-full md:justify-end text-right flex items-center max-md:col-start-1 max-md:col-end-3 max-md:row-start-4 max-md:mb-[0.8rem]"
      >
        c в круге 2024
      </li>
    </ul>
  </footer>
  <footer class="fixed bottom-16 inset-x-16 flex justify-between">
    <nav>
      <UiButton img="/icons/whatsapp.svg" />
      <UiButton img="/icons/telegram.svg" />
    </nav>

    <UiButton img="/icons/phone.svg" />
  </footer>
</template>
