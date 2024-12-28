import type { FeedbackModal } from "./types";

const SERVICE_API_URL = "https://most-9080.onrender.com/api/form";

export const $service = (response: FeedbackModal) =>
  $fetch.create({
    baseURL: SERVICE_API_URL,
    method: "POST",
    body: response,
  });
