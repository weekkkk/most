const COMPARISON_API_URL =
  "https://most-9080.onrender.com/api/ImageComparisons";

export const $comparison = $fetch.create({
  baseURL: COMPARISON_API_URL,
});

export * from "./types";
export * from "./consts";
