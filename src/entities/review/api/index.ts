const REVIEW_API_URL = "https://most-9080.onrender.com/api/Reviews";

export const $review = $fetch.create({
  baseURL: REVIEW_API_URL,
});

export * from "./types";
