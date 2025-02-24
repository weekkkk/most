import fs from "fs";
import path from "path";

const getFilesFromDirectory = (dir: string) => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesFromDirectory(file)); // Рекурсивно обрабатываем папки
    } else {
      results.push(file); // Добавляем файл в список
    }
  });

  return results;
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["./src/app/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      {
        path: "~/src/shared", // shared дирректория
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", ""); // Убираем Ui дирректории из имени компонента
          component.pascalName = "Ui" + component.pascalName; // Добавляем Ui префикс
          return component;
        },
        pattern: "**/*index.vue", // Файл для автоимпорта
        extensions: ["vue"],
      },
      {
        path: "~/src/entities", // entities дирректория
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", ""); // Убираем Ui дирректории из имени компонента
          return component;
        },
        pattern: "**/*index.vue", // Файл для автоимпорта
        extensions: ["vue"],
      },
      {
        path: "~/src/features", // features дирректория
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", ""); // Убираем Ui дирректории из имени компонента
          component.pascalName = component.pascalName + "Feature"; // Добавляем Feature постфикс
          return component;
        },
        pattern: "**/*index.vue", // Файл для автоимпорта
        extensions: ["vue"],
      },
      {
        path: "~/src/widgets", // widgets дирректория
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", ""); // Убираем Ui дирректории из имени компонента
          component.pascalName = component.pascalName + "Widget"; // Добавляем Widget постфикс
          return component;
        },
        pattern: "**/*index.vue", // Файл для автоимпорта
        extensions: ["vue"],
      },
      {
        path: "~/src/pages", // pages дирректория
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", ""); // Убираем Ui дирректории из имени компонента
          return component;
        },
        pattern: "**/*index.vue", // Файл для автоимпорта
        extensions: ["vue"],
      },
    ],
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
    assets: "./src/app/assets",
    middleware: "./src/app/middlewares",
    app: "./src/app",
  },
  imports: {
    dirs: [
      "./src/widgets/*/*/index.ts", // Автоимпорты для widgets слоя
      "./src/features/*/*/index.ts", // Автоимпорты для features слоя
      "./src/entities/*/*/index.ts", // Автоимпорты для entities слоя
      "./src/shared/*/index.ts", // Автоимпорты для shared слоя
    ],
  },
  modules: [
    "nuxt-keen-slider",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  site: {
    url: "https://mostclean.ru/",
    name: "Химчистка обуви и сумок в Москве",
  },
  runtimeConfig: {
    public: {
      myData: {},
    },
  },
  hooks: {
    "build:before": () => {
      const publicDir = path.resolve(__dirname, "public/service");
      const files = getFilesFromDirectory(publicDir);

      files.forEach((filePath) => {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const relativePath = path.relative(publicDir, filePath);
        process.env[relativePath.replace(/[\/\\]/g, "_")] = fileContent;
      });
    },
  },
  generate: {
    routes: [
      "/price-list/1",
      "/price-list/2",
      "/price-list/3",
      "/price-list/4",
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: "preload",
          href: "/fonts/PPNeueMontreal-Medium.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/PPNeueMontreal-Medium.woff", // путь к вашему шрифту woff
          as: "font",
          type: "font/woff",
          crossorigin: "anonymous",
        },
      ],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
});
