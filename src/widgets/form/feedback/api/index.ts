const FEEDBACK_API_URL = "https://most-9080.onrender.com/api/form";

export const $feedback = $fetch.create({
  baseURL: FEEDBACK_API_URL,
});
