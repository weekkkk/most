const SERVICE_API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/service/"
    : "https://weekkkk.github.io/most/service";

export const $service = $fetch.create({
  baseURL: SERVICE_API_URL,
});

export * from "./types";
