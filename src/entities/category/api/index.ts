const CATEGORY_API_URL = "https://most-9080.onrender.com/api/Category";

export const $category = $fetch.create({
  baseURL: CATEGORY_API_URL,
});

export * from "./types";
