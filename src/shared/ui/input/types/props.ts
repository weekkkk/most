export type UiInputProps = {
  /**Тип инпута */
  type?: "tel" | "text";
  /**Заполнитель инпута */
  placeholder?: string;
  /**Контент инпута */
  modelValue: string;
};
