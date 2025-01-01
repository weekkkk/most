const FAQ_API_URL = "https://most-9080.onrender.com/api/Faq";

export const $faq = $fetch.create({
  baseURL: FAQ_API_URL,
});

export * from "./types";
