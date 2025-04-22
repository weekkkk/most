const SERVICE_API_URL = "https://api.mostclean.ru/api/Service";

export const $service = $fetch.create({
  baseURL: SERVICE_API_URL,
});

export * from "./types";
