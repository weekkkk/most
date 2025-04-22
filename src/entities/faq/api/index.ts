const FAQ_API_URL = "https://api.mostclean.ru/api/Faq";

export const $faq = $fetch.create({
  baseURL: FAQ_API_URL,
});

export * from "./types";
