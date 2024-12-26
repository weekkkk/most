// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      {
        path: "~/components", // Путь к папке компонентов
        extensions: ["vue"], // Только .vue файлы будут зарегистрированы как компоненты
      },
    ],
  },
  modules: ["nuxt-keen-slider"],
  nitro: {
    preset: "static", // Указывает, что приложение статическое
  },
  app: {
    baseURL: "/most", // Базовый путь
  },
});
