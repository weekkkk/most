const SERVICE_PAGE_API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/service/"
    : "https://mostclean.ru/most/service";

export const $service_page = $fetch.create({
  baseURL: SERVICE_PAGE_API_URL,
});

export * from "./types";
