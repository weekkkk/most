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

const formatComponentName = (
  pascalName: string,
  postfix: string = "",
  skip: number = 0
) =>
  `${pascalName.slice(0, skip)}${pascalName
    .slice(skip)
    .replaceAll("Ui", "")}${postfix}`;

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
        path: "~/src/pages",
        extendComponent(component) {
          component.pascalName = formatComponentName(component.pascalName, "");
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/widgets",
        extendComponent(component) {
          component.pascalName = formatComponentName(
            component.pascalName,
            "Widget"
          );
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/features",
        extendComponent(component) {
          component.pascalName = formatComponentName(
            component.pascalName,
            "Feature"
          );
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/entities",
        extendComponent(component) {
          component.pascalName = formatComponentName(component.pascalName);
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/shared",

        extendComponent(component) {
          component.pascalName = formatComponentName(
            component.pascalName,
            "",
            2
          );
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
    ],
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
    assets: "./src/app/assets",
    middleware: "./src/app/middlewares",
  },
  imports: {
    dirs: [
      "./src/widgets/*/*/index.ts",
      "./src/entities/*/*/index.ts",
      "./src/shared/*/index.ts",
    ],
  },
  modules: ["nuxt-keen-slider"],
  app: {
    baseURL: "/most/",
  },
  runtimeConfig: {
    public: {
      myData: {},
    },
  },
  hooks: {
    "build:before": () => {
      const publicDir = path.resolve(__dirname, "public/service"); // Путь к папке public
      const files = getFilesFromDirectory(publicDir);

      // Записываем каждый файл в process.env
      files.forEach((filePath) => {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const relativePath = path.relative(publicDir, filePath); // Относительный путь к файлу
        process.env[relativePath.replace(/[\/\\]/g, "_")] = fileContent;
        console.log(relativePath);
      });
    },
  },
});
