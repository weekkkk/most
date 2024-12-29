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
    dirs: ["./src/**/index.ts"],
  },
  modules: ["nuxt-keen-slider"],
  nitro: {
    preset: "static",
  },
});
