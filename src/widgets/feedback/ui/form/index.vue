<script lang="ts" setup>
const user = reactive<FeedbackDataDto>({
  Name: "",
  Phone: "",
});

const disabled = computed(() => !(user.Name && user.Phone));
const showDisabled = ref(false);
const isLoading = ref(false);

const sentFeedback = async () => {
  if (disabled.value) {
    showDisabled.value = true;
    return;
  }

  try {
    isLoading.value = true;
    const response = await FeedbackService.sendFeedbackForm(user);
    console.log("Успешно отправлено:", response);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
  } finally {
    isLoading.value = false;
  }

  user.Name = "";
  user.Phone = "";
};
</script>

<template>
  <div id="feedback" :class="['flex justify-center relative', 'max-md:px-3']">
    <div class="flex flex-col items-center">
      <div
        :class="[
          'flex justify-center items-center rounded-full bg-common',
          'w-[10rem] max-2xl:w-[7.5rem] max-md:w-[3rem]',
          'h-[10rem] max-2xl:h-[7.5rem] max-md:h-[3rem]',
          'mb-[2.5rem] max-md:mb-[1rem]',
        ]"
      >
        <img
          src="/icons/truck.svg"
          class="w-[4.75rem] max-2xl:w-[3.6rem] max-md:w-[1.2rem]"
          alt=""
        />
      </div>
      <h1
        :class="[
          'text-center',
          'text-[5rem] max-2xl:text-[4rem] max-md:text-[1.75rem]',
          '-tracking-[calc(5rem/100)] max-2xl:-tracking-[calc(4rem/100)] max-md:-tracking-[calc(1.75rem/100)]',
          'leading-[5rem] max-2xl:leading-[4rem] max-md:leading-[1.5rem]',
          'md:mb-[1.5rem] max-md:mb-[1rem]',
        ]"
      >
        заберём ваши вещи <br />
        в течении 30 минут
      </h1>
      <p
        :class="[
          'text-[2rem] max-2xl:text-[1.5rem] max-md:text-[1rem]',
          'leading-[2.4rem] max-2xl:leading-[1.8rem] max-md:leading-[1.2rem]',
          'text-center w-[49.125rem]',
          'w-[38.4rem] max-2xl:w-[30.4rem] max-md:w-full',
          'mb-[2.5rem] max-2xl:mb-[4.3rem] max-md:mb-[2rem]',
        ]"
      >
        восстанавливаем ваши любимые бренды в кратчайшие сроки, чтобы они снова
        радовали вас безупречным видом
      </p>

      <img
        src="/icons/long-arrow-right.svg"
        :class="[
          'w-[18.05rem]',
          'max-2xl:w-[13.1rem]',
          'max-2xl:-rotate-[12.7deg]',
          'absolute ',
          'top-[40.25rem] right-[60.8rem]',
          'max-2xl:top-[39.5rem] max-2xl:right-[46rem]',
          'max-md:hidden',
        ]"
        alt=""
      />
      <img
        src="/icons/long-arrow-left.svg"
        :class="[
          'w-[18.7rem]',
          'max-2xl:w-[14rem]',
          'absolute top-[43.6rem] left-[58.6rem] ',
          'max-2xl:top-[43.2rem] max-2xl:left-[43.9rem]',
          'max-md:hidden',
        ]"
        alt=""
      />

      <form @submit.prevent="sentFeedback" class="flex flex-col items-center">
        <UiInput
          type="text"
          v-model="user.Name"
          class="mb-[1rem] max-md:mb-[0.5rem] text-[1rem] max-md:text-[.75rem]"
          placeholder="Иван Иванов"
        />
        <UiInput
          v-model="user.Phone"
          class="mb-[2.5rem] max-md:mb-[1rem] text-[1rem] max-md:text-[.75rem]"
          type="tel"
          placeholder="+7 (000) 000-00-00"
        />
        <UiButton
          class="max-md:w-full"
          :disabled="(showDisabled && disabled) || isLoading"
        >
          {{ !isLoading ? "вызвать курьера" : "отправляем..." }}
        </UiButton>
      </form>
      <img
        src="/icons/man.svg"
        class="w-[15rem] h-[14.3rem] mt-[.75rem] md:hidden"
        alt=""
      />
    </div>
  </div>
</template>
