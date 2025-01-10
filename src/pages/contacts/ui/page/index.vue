<template>
  <section
    :class="[
      'flex flex-col items-center',
      'mt-[15rem] max-2xl:mt-[14.5rem] max-md:mt-[7.75rem]',
      'gap-[7.5rem] max-2xl:gap-[5rem] max-md:gap-[3rem]',
    ]"
  >
    <h1
      :class="[
        'text-center',
        'text-[9rem] max-2xl:text-[6rem] max-md:text-[2.5rem]',
        '-tracking-[calc(9rem/100)] max-2xl:-tracking-[calc(6rem/100)] max-md:-tracking-[calc(2.5rem/100)]',
        'leading-[6rem] max-2xl:leading-[4.5rem] max-md:leading-[2rem]',
      ]"
    >
      остались <br class="md:hidden" />
      какие-то <br />
      вопросы? <br class="md:hidden" />
      обсудим
    </h1>

    <div
      :class="[
        'flex flex-col items-center',
        'gap-[1.5rem] max-2xl:gap-[1rem] max-md:gap-[1rem]',
      ]"
    >
      <p
        :class="[
          'text-center',
          'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
          'leading-[2.4rem] max-2xl:leading-[1.8rem] max-md:leading-[1.2rem]',
        ]"
      >
        позвони
      </p>
      <a
        href="tel:89261234858"
        :class="[
          'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
          '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
          'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
        ]"
      >
        +7 926 123 4858
      </a>
    </div>
    <div
      :class="[
        'flex flex-col',
        'gap-[1.5rem] max-2xl:gap-[1rem] max-md:gap-[1rem]',
      ]"
    >
      <p
        :class="[
          'text-center',
          'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
          'leading-[2.4rem] max-2xl:leading-[1.8rem] max-md:leading-[1.2rem]',
        ]"
      >
        напиши
      </p>
      <ul
        :class="[
          'flex flex-col text-center',
          'gap-[2.5rem] max-2xl:gap-[2rem] max-md:gap-[1.5rem]',
          'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
          '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
          'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
        ]"
      >
        <li>
          <a href="https://t.me/MostClean_manager" target="_blank">telegram</a>
        </li>
        <li>
          <a href="https://www.instagram.com/most.cleans/" target="_blank">
            instagram
          </a>
        </li>
        <li>
          <a href="https://wa.me/79261234858" target="_blank"> whatsapp </a>
        </li>
      </ul>
    </div>
  </section>
</template>
