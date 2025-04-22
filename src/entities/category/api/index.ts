const CATEGORY_API_URL = "https://api.mostclean.ru/api/Category";

export const $category = $fetch.create({
  baseURL: CATEGORY_API_URL,
});

export * from "./types";
