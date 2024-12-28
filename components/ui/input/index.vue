<script lang="ts" setup>
import { computed, defineProps, onMounted, ref } from "vue";
import IMask from "imask";

const props = defineProps({
  /**Тип инпута */
  typeInput: { type: String, default: "text" },
  /**Заполнитель инпута */
  placeholderInput: { type: String, default: "" },
  /**Контент инпута */
  inputContent: { type: String },
});

/**Ссылка на инпут */
const $input = ref();

/**Маска для номера телефона */
const maskNumber = "+7 (000) 000-00-00";

onMounted(() => {
  if (props.typeInput === "tel") IMask($input.value, maskNumber);
});
</script>

<template>
  <input
    ref="$input"
    v-model="props.inputContent"
    :type="typeInput"
    :placeholder="placeholderInput"
    class="w-[27.5rem] h-[5rem] max-md:w-[17.25rem] max-md:h-[5rem] rounded-[20rem] leading-[1.2rem] outline-none text-[1rem] font-medium bg-[#F5F5F5] text-center"
  />
</template>
