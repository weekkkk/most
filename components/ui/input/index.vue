<script lang="ts" setup>
import { computed, defineProps, onMounted, ref } from "vue";
import IMask from "imask";

const props = defineProps<{
  /**Тип инпута */
  typeInput: string;
  /**Заполнитель инпута */
  placeholderInput: string;
  /**Контент инпута */
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

/**Ссылка на инпут */
const $input = ref();

/**Маска для номера телефона */
const maskNumber = "+7 (000) 000-00-00";

/**событие для обновления инпута */
const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};

onMounted(() => {
  if (props.typeInput === "tel") IMask($input.value, maskNumber);
});
</script>

<template>
  <input
    ref="$input"
    :value="modelValue"
    @input="updateInput"
    :type="typeInput"
    :placeholder="placeholderInput"
    class="w-[27.5rem] h-[5rem] max-md:w-[17.25rem] max-md:h-[5rem] rounded-[20rem] leading-[1.2rem] outline-none text-[1rem] font-medium bg-[#F5F5F5] text-center"
  />
</template>
