const SERVICE_API_URL = "https://most-9080.onrender.com/api/Service";

export const $service = $fetch.create({
  baseURL: SERVICE_API_URL,
});

export * from "./types";
