<template>
  <figure
    :class="[
      'relative overflow-hidden flex flex-col justify-end',
      'md:rounded-[3.5rem] max-md:rounded-2xl',
    ]"
  >
    <img src="/imgs/user.png" class="absolute object-cover w-full h-full" />

    <main :class="['text-default relative text-center pb-8', 'max-md:hidden']">
      <header class="mb-4">
        <p>Дональд Трамп</p>
      </header>
      <footer class="flex justify-center">
        <a href="#">
          <UiButton size="small"> @donaldtut </UiButton>
        </a>
      </footer>
    </main>
  </figure>
</template>
