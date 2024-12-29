<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { FeedbackDataDto } from "./api/types";
import { Feedback } from "./services/feedback.service";
import { FeedbackService } from "./services/index";

/**Имя пользователя */
const nameUser = ref<string>("");

/**Номер телефона юзера */
const phoneUser = ref<string>("");

const sentFeedback = async () => {
  nameUser.value = "";
  phoneUser.value = "";
  const data: FeedbackDataDto = {
    Name: nameUser.value,
    Phone: phoneUser.value,
  };
  try {
    const response = await Feedback.sendFeedbackForm(data);
    console.log("Успешно отправлено:", response);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
  }
};
</script>

<template>
  <div class="flex justify-center relative">
    <div class="flex flex-col items-center">
      <img
        src="/icons/truck.svg"
        class="w-[10rem] max-md:w-[3rem] h-[10rem] max-md:h-[3rem] mb-[2.5rem] max-md:mb-[1rem]"
      />
      <h1
        class="text-[6.25rem] max-md:text-[1.75rem] leading-[5rem] max-md:leading-[1.5rem] text-center mb-[1.875rem] max-md:mb-[1rem] w-[70rem] max-md:w-[17.25rem]"
      >
        заберём ваши вещи в течении 30 минут
      </h1>
      <p
        class="text-[2.5rem] max-md:text-[1rem] leading-[2.4rem] max-md:leading-[1.2rem] text-center w-[49.125rem] max-md:w-[17.25rem] mb-[2.5rem] max-md:mb-[2rem]"
      >
        восстанавливаем ваши любимые бренды в кратчайшие сроки, чтобы они снова
        радовали вас безупречным видом
      </p>
      <img
        src="/icons/long-arrow-right.svg"
        class="w-[18.05rem] h-[10.9rem] absolute top-[40.25rem] right-[60.8rem] max-md:hidden"
      />
      <img
        src="/icons/long-arrow-left.svg"
        class="w-[18.7rem] h-[7.75rem] absolute top-[43.6rem] left-[58.6rem] max-md:hidden"
      />
      <form @submit.prevent="sentFeedback" class="flex flex-col items-center">
        <UiInput
          v-model="nameUser"
          :inputContent="nameUser"
          class="mb-[1rem] max-md:mb-[0.5rem] text-[1rem] max-md:text-[.75rem]"
        />
        <UiInput
          v-model="phoneUser"
          class="mb-[2.5rem] max-md:mb-[.5rem] text-[1rem] max-md:text-[.75rem]"
          typeInput="tel"
          placeholderInput="+7- 961 - 777 - 777"
        />
        <UiButton>вызвать курьера</UiButton>
      </form>
      <img
        src="/icons/man.svg"
        class="w-[15rem] h-[14.3rem] mt-[.75rem] md:hidden"
      />
    </div>
  </div>
</template>
