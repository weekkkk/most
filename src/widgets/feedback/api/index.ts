const FEEDBACK_API_URL = "https://api.mostclean.ru/api/form";

export const $feedback = $fetch.create({
  baseURL: FEEDBACK_API_URL,
});

export * from "./types";
