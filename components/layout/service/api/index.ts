const SERVICE_API_URL = "http://localhost:3000/service";

export const $service = $fetch.create({ baseURL: SERVICE_API_URL });
